
-- 1) Tighten request_messages user UPDATE policy
DROP POLICY IF EXISTS "Update own message read status" ON public.request_messages;

CREATE POLICY "Users mark admin messages as read"
ON public.request_messages
FOR UPDATE
TO authenticated
USING (
  author_role = 'admin'::author_role
  AND EXISTS (
    SELECT 1 FROM public.service_requests r
    WHERE r.id = request_messages.request_id AND r.user_id = auth.uid()
  )
)
WITH CHECK (
  author_role = 'admin'::author_role
  AND EXISTS (
    SELECT 1 FROM public.service_requests r
    WHERE r.id = request_messages.request_id AND r.user_id = auth.uid()
  )
);

-- 2) Lock down SECURITY DEFINER functions from PostgREST exposure
-- Trigger-only functions: no API role should execute these
REVOKE ALL ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.enforce_request_message_user_update() FROM PUBLIC, anon, authenticated;

-- has_role must remain callable by authenticated for RLS policy evaluation,
-- but should not be callable by anonymous users.
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
