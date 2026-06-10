-- 1) Restrict user UPDATEs on request_messages to only the read_by_user_at column
CREATE OR REPLACE FUNCTION public.enforce_request_message_user_update()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Admins can change anything
  IF public.has_role(auth.uid(), 'admin'::public.app_role) THEN
    RETURN NEW;
  END IF;

  -- Non-admin users may only touch read_by_user_at; all other columns must be unchanged
  IF NEW.body            IS DISTINCT FROM OLD.body
     OR NEW.author_id    IS DISTINCT FROM OLD.author_id
     OR NEW.author_role  IS DISTINCT FROM OLD.author_role
     OR NEW.request_id   IS DISTINCT FROM OLD.request_id
     OR NEW.id           IS DISTINCT FROM OLD.id
     OR NEW.created_at   IS DISTINCT FROM OLD.created_at
     OR NEW.read_by_admin_at IS DISTINCT FROM OLD.read_by_admin_at
  THEN
    RAISE EXCEPTION 'Only read_by_user_at can be updated by the recipient'
      USING ERRCODE = '42501';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS enforce_request_message_user_update_trg ON public.request_messages;
CREATE TRIGGER enforce_request_message_user_update_trg
BEFORE UPDATE ON public.request_messages
FOR EACH ROW
EXECUTE FUNCTION public.enforce_request_message_user_update();

-- 2) Add UPDATE policy on the request-documents storage bucket scoped to owning folder
CREATE POLICY "Users update own docs in bucket"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'request-documents'
  AND (storage.foldername(name))[1] = (auth.uid())::text
)
WITH CHECK (
  bucket_id = 'request-documents'
  AND (storage.foldername(name))[1] = (auth.uid())::text
);

CREATE POLICY "Admins update all docs in bucket"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'request-documents'
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
)
WITH CHECK (
  bucket_id = 'request-documents'
  AND public.has_role(auth.uid(), 'admin'::public.app_role)
);

-- 3) Explicit admin-only mutation policies on user_roles to make intent unambiguous
CREATE POLICY "Admins manage roles - insert"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins manage roles - update"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins manage roles - delete"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));
