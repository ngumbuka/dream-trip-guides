
-- ===== ROLES =====
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can see own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Admins see all roles" ON public.user_roles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- ===== PROFILES =====
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Own profile select" ON public.profiles
  FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Own profile update" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id);
CREATE POLICY "Own profile insert" ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Admins read all profiles" ON public.profiles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, phone)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
    NEW.email,
    NEW.raw_user_meta_data->>'phone'
  );
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user')
    ON CONFLICT DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ===== SERVICE REQUESTS =====
CREATE TYPE public.request_status AS ENUM (
  'nouveau','en_revue','en_cours','en_attente_client','accepte','refuse','termine'
);

CREATE TABLE public.service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  service_slug TEXT NOT NULL,
  service_label TEXT NOT NULL,
  destination_country TEXT,
  target_date DATE,
  travelers_count INT DEFAULT 1,
  budget_range TEXT,
  message TEXT,
  status public.request_status NOT NULL DEFAULT 'nouveau',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.service_requests TO authenticated;
GRANT ALL ON public.service_requests TO service_role;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Own requests select" ON public.service_requests
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Own requests insert" ON public.service_requests
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins read all requests" ON public.service_requests
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update all requests" ON public.service_requests
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER service_requests_updated_at BEFORE UPDATE ON public.service_requests
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ===== MESSAGES =====
CREATE TYPE public.author_role AS ENUM ('user','admin');

CREATE TABLE public.request_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES public.service_requests(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_role public.author_role NOT NULL,
  body TEXT NOT NULL CHECK (length(body) BETWEEN 1 AND 4000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  read_by_user_at TIMESTAMPTZ,
  read_by_admin_at TIMESTAMPTZ
);
GRANT SELECT, INSERT, UPDATE ON public.request_messages TO authenticated;
GRANT ALL ON public.request_messages TO service_role;
ALTER TABLE public.request_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read own request messages" ON public.request_messages
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.service_requests r WHERE r.id = request_id AND r.user_id = auth.uid())
  );
CREATE POLICY "Insert own request messages" ON public.request_messages
  FOR INSERT TO authenticated WITH CHECK (
    author_id = auth.uid() AND author_role = 'user' AND
    EXISTS (SELECT 1 FROM public.service_requests r WHERE r.id = request_id AND r.user_id = auth.uid())
  );
CREATE POLICY "Update own message read status" ON public.request_messages
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM public.service_requests r WHERE r.id = request_id AND r.user_id = auth.uid())
  );
CREATE POLICY "Admins read all messages" ON public.request_messages
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins insert messages" ON public.request_messages
  FOR INSERT TO authenticated WITH CHECK (
    public.has_role(auth.uid(), 'admin') AND author_id = auth.uid() AND author_role = 'admin'
  );
CREATE POLICY "Admins update messages" ON public.request_messages
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- ===== UPDATES (status changes / notes) =====
CREATE TYPE public.update_kind AS ENUM ('status_change','note');

CREATE TABLE public.request_updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES public.service_requests(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind public.update_kind NOT NULL,
  body TEXT,
  new_status public.request_status,
  visible_to_user BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.request_updates TO authenticated;
GRANT ALL ON public.request_updates TO service_role;
ALTER TABLE public.request_updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "User reads visible updates on own" ON public.request_updates
  FOR SELECT TO authenticated USING (
    visible_to_user = TRUE AND
    EXISTS (SELECT 1 FROM public.service_requests r WHERE r.id = request_id AND r.user_id = auth.uid())
  );
CREATE POLICY "Admins read all updates" ON public.request_updates
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins insert updates" ON public.request_updates
  FOR INSERT TO authenticated WITH CHECK (
    public.has_role(auth.uid(), 'admin') AND author_id = auth.uid()
  );

-- ===== DOCUMENTS =====
CREATE TABLE public.request_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES public.service_requests(id) ON DELETE CASCADE,
  uploaded_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  storage_path TEXT NOT NULL,
  file_name TEXT NOT NULL,
  mime_type TEXT,
  size_bytes BIGINT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, DELETE ON public.request_documents TO authenticated;
GRANT ALL ON public.request_documents TO service_role;
ALTER TABLE public.request_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read own docs" ON public.request_documents
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.service_requests r WHERE r.id = request_id AND r.user_id = auth.uid())
  );
CREATE POLICY "Insert own docs" ON public.request_documents
  FOR INSERT TO authenticated WITH CHECK (
    uploaded_by = auth.uid() AND
    EXISTS (SELECT 1 FROM public.service_requests r WHERE r.id = request_id AND r.user_id = auth.uid())
  );
CREATE POLICY "Delete own docs" ON public.request_documents
  FOR DELETE TO authenticated USING (uploaded_by = auth.uid());
CREATE POLICY "Admins read all docs" ON public.request_documents
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- ===== STORAGE POLICIES =====
CREATE POLICY "Users read own docs in bucket"
  ON storage.objects FOR SELECT TO authenticated USING (
    bucket_id = 'request-documents' AND (storage.foldername(name))[1] = auth.uid()::text
  );
CREATE POLICY "Users insert own docs in bucket"
  ON storage.objects FOR INSERT TO authenticated WITH CHECK (
    bucket_id = 'request-documents' AND (storage.foldername(name))[1] = auth.uid()::text
  );
CREATE POLICY "Users delete own docs in bucket"
  ON storage.objects FOR DELETE TO authenticated USING (
    bucket_id = 'request-documents' AND (storage.foldername(name))[1] = auth.uid()::text
  );
CREATE POLICY "Admins read all docs in bucket"
  ON storage.objects FOR SELECT TO authenticated USING (
    bucket_id = 'request-documents' AND public.has_role(auth.uid(), 'admin')
  );
