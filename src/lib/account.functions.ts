import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import type { AuthUser } from "@supabase/supabase-js";

export const getMyProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("profiles")
      .select("id, full_name, email, phone")
      .eq("id", context.userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return data;
  });

export const updateMyProfile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        full_name: z.string().min(1).max(120).optional(),
        phone: z.string().max(40).optional().nullable(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("profiles")
      .update({
        full_name: data.full_name ?? null,
        phone: data.phone ?? null,
      })
      .eq("id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const requestEmailChange = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ new_email: z.string().trim().email().max(255) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    // Triggers Supabase to send confirmation links to both old & new addresses.
    const { error } = await context.supabase.auth.updateUser({ email: data.new_email });
    if (error) throw new Error(error.message);
    return { ok: true, sent_to: data.new_email };
  });

export const resendEmailVerification = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: u, error: uErr } = await context.supabase.auth.getUser();
    if (uErr) throw new Error(uErr.message);
    const email = u.user?.email;
    if (!email) throw new Error("Aucune adresse e-mail trouvée.");
    const { error } = await context.supabase.auth.resend({ type: "signup", email });
    if (error) throw new Error(error.message);
    return { ok: true, sent_to: email };
  });

export const getEmailVerificationStatus = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.auth.getUser();
    if (error) throw new Error(error.message);
    const u = data.user;
    const userRec = u as AuthUser & { new_email?: string | null };
    return {
      email: u?.email ?? null,
      new_email: userRec.new_email ?? null,
      email_confirmed_at: u?.email_confirmed_at ?? null,
      verified: !!u?.email_confirmed_at,
    };
  });
