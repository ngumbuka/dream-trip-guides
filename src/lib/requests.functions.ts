import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const StatusEnum = z.enum([
  "nouveau", "en_revue", "en_cours", "en_attente_client", "accepte", "refuse", "termine",
]);

const CreateRequestSchema = z.object({
  service_slug: z.string().min(1).max(64),
  service_label: z.string().min(1).max(120),
  destination_country: z.string().max(120).optional().nullable(),
  target_date: z.string().optional().nullable(), // ISO yyyy-mm-dd
  travelers_count: z.number().int().min(1).max(50).default(1),
  budget_range: z.string().max(80).optional().nullable(),
  message: z.string().min(1).max(4000),
});

async function assertAdmin(supabase: any, userId: string) {
  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", userId)
    .eq("role", "admin")
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden");
}

export const createRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => CreateRequestSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: row, error } = await supabase
      .from("service_requests")
      .insert({
        user_id: userId,
        service_slug: data.service_slug,
        service_label: data.service_label,
        destination_country: data.destination_country ?? null,
        target_date: data.target_date || null,
        travelers_count: data.travelers_count,
        budget_range: data.budget_range ?? null,
        message: data.message,
      })
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { id: row.id as string };
  });

export const listMyRequests = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("service_requests")
      .select("id, service_slug, service_label, destination_country, status, created_at, updated_at")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const getMyRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { supabase } = context;
    const [{ data: req, error: e1 }, { data: msgs, error: e2 }, { data: updates, error: e3 }, { data: docs, error: e4 }] = await Promise.all([
      supabase.from("service_requests").select("*").eq("id", data.id).maybeSingle(),
      supabase.from("request_messages").select("*").eq("request_id", data.id).order("created_at"),
      supabase.from("request_updates").select("*").eq("request_id", data.id).order("created_at"),
      supabase.from("request_documents").select("*").eq("request_id", data.id).order("created_at"),
    ]);
    if (e1 || e2 || e3 || e4) throw new Error((e1 || e2 || e3 || e4)!.message);
    if (!req) throw new Error("Not found");
    // Stamp read_by_user_at for admin messages
    await supabase
      .from("request_messages")
      .update({ read_by_user_at: new Date().toISOString() })
      .eq("request_id", data.id)
      .eq("author_role", "admin")
      .is("read_by_user_at", null);
    return { request: req, messages: msgs ?? [], updates: updates ?? [], documents: docs ?? [] };
  });

export const sendMessage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ request_id: z.string().uuid(), body: z.string().min(1).max(4000) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase.from("request_messages").insert({
      request_id: data.request_id,
      author_id: userId,
      author_role: "user",
      body: data.body,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ---- Documents ----

export const signDocumentUpload = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({
      request_id: z.string().uuid(),
      file_name: z.string().min(1).max(255),
      mime_type: z.string().max(120).optional(),
      size_bytes: z.number().int().min(0).max(20 * 1024 * 1024),
    }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    // Confirm ownership
    const { data: req } = await supabase
      .from("service_requests")
      .select("id")
      .eq("id", data.request_id)
      .eq("user_id", userId)
      .maybeSingle();
    if (!req) throw new Error("Not allowed");
    const safeName = data.file_name.replace(/[^\w.\-]+/g, "_");
    const path = `${userId}/${data.request_id}/${crypto.randomUUID()}-${safeName}`;
    const { data: signed, error } = await supabase.storage
      .from("request-documents")
      .createSignedUploadUrl(path);
    if (error) throw new Error(error.message);
    return { path, token: signed.token, signedUrl: signed.signedUrl };
  });

export const confirmDocument = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({
      request_id: z.string().uuid(),
      storage_path: z.string().min(1),
      file_name: z.string().min(1).max(255),
      mime_type: z.string().max(120).optional(),
      size_bytes: z.number().int().min(0),
    }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase.from("request_documents").insert({
      request_id: data.request_id,
      uploaded_by: userId,
      storage_path: data.storage_path,
      file_name: data.file_name,
      mime_type: data.mime_type ?? null,
      size_bytes: data.size_bytes,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const signDocumentDownload = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ doc_id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { supabase } = context;
    const { data: doc, error } = await supabase
      .from("request_documents")
      .select("storage_path, file_name")
      .eq("id", data.doc_id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!doc) throw new Error("Not found");
    const { data: signed, error: e2 } = await supabase.storage
      .from("request-documents")
      .createSignedUrl(doc.storage_path, 300, { download: doc.file_name });
    if (e2) throw new Error(e2.message);
    return { url: signed.signedUrl };
  });

// ---- Admin ----

export const isCurrentUserAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId)
      .eq("role", "admin")
      .maybeSingle();
    return { isAdmin: !!data };
  });

export const adminListRequests = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ status: StatusEnum.optional() }).parse(input ?? {}),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    let q = context.supabase
      .from("service_requests")
      .select("id, user_id, service_slug, service_label, destination_country, status, created_at")
      .order("created_at", { ascending: false });
    if (data.status) q = q.eq("status", data.status);
    const { data: rows, error } = await q;
    if (error) throw new Error(error.message);
    // Hydrate profile info
    const ids = Array.from(new Set((rows ?? []).map((r: any) => r.user_id)));
    let profiles: Record<string, { full_name: string | null; email: string | null }> = {};
    if (ids.length) {
      const { data: ps } = await context.supabase
        .from("profiles")
        .select("id, full_name, email")
        .in("id", ids);
      for (const p of ps ?? []) profiles[p.id] = { full_name: p.full_name, email: p.email };
    }
    return (rows ?? []).map((r: any) => ({ ...r, client: profiles[r.user_id] ?? null }));
  });

export const adminGetRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { supabase } = context;
    const [{ data: req }, { data: msgs }, { data: updates }, { data: docs }] = await Promise.all([
      supabase.from("service_requests").select("*").eq("id", data.id).maybeSingle(),
      supabase.from("request_messages").select("*").eq("request_id", data.id).order("created_at"),
      supabase.from("request_updates").select("*").eq("request_id", data.id).order("created_at"),
      supabase.from("request_documents").select("*").eq("request_id", data.id).order("created_at"),
    ]);
    if (!req) throw new Error("Not found");
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, email, phone")
      .eq("id", req.user_id)
      .maybeSingle();
    await supabase
      .from("request_messages")
      .update({ read_by_admin_at: new Date().toISOString() })
      .eq("request_id", data.id)
      .eq("author_role", "user")
      .is("read_by_admin_at", null);
    return { request: req, client: profile, messages: msgs ?? [], updates: updates ?? [], documents: docs ?? [] };
  });

export const adminSendMessage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ request_id: z.string().uuid(), body: z.string().min(1).max(4000) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("request_messages").insert({
      request_id: data.request_id,
      author_id: context.userId,
      author_role: "admin",
      body: data.body,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminUpdateStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({
      request_id: z.string().uuid(),
      status: StatusEnum,
      note: z.string().max(2000).optional(),
      visible_to_user: z.boolean().default(true),
    }).parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error: e1 } = await context.supabase
      .from("service_requests")
      .update({ status: data.status })
      .eq("id", data.request_id);
    if (e1) throw new Error(e1.message);
    const { error: e2 } = await context.supabase.from("request_updates").insert({
      request_id: data.request_id,
      author_id: context.userId,
      kind: "status_change",
      body: data.note ?? null,
      new_status: data.status,
      visible_to_user: data.visible_to_user,
    });
    if (e2) throw new Error(e2.message);
    return { ok: true };
  });

export const adminPostNote = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({
      request_id: z.string().uuid(),
      body: z.string().min(1).max(2000),
      visible_to_user: z.boolean().default(false),
    }).parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("request_updates").insert({
      request_id: data.request_id,
      author_id: context.userId,
      kind: "note",
      body: data.body,
      visible_to_user: data.visible_to_user,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });