import { c as createServerRpc } from "./createServerRpc-DcEPNUha.mjs";
import { c as createServerFn } from "./server-BODjEJm3.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DoepXbKI.mjs";
import "../_libs/react.mjs";
import { _ as _enum, o as object, s as string, n as number, b as boolean } from "../_libs/zod.mjs";
import "node:async_hooks";
import "node:stream";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const StatusEnum = _enum(["nouveau", "en_revue", "en_cours", "en_attente_client", "accepte", "refuse", "termine"]);
const CreateRequestSchema = object({
  service_slug: string().min(1).max(64),
  service_label: string().min(1).max(120),
  destination_country: string().max(120).optional().nullable(),
  target_date: string().optional().nullable(),
  // ISO yyyy-mm-dd
  travelers_count: number().int().min(1).max(50).default(1),
  budget_range: string().max(80).optional().nullable(),
  message: string().min(1).max(4e3)
});
async function assertAdmin(supabase, userId) {
  const {
    data,
    error
  } = await supabase.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden");
}
const createRequest_createServerFn_handler = createServerRpc({
  id: "57571f98c5b68b1f6eee0b076a7c89da8e1b94e17d7cbd14783b34d49d9135bc",
  name: "createRequest",
  filename: "src/lib/requests.functions.ts"
}, (opts) => createRequest.__executeServer(opts));
const createRequest = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => CreateRequestSchema.parse(input)).handler(createRequest_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    supabase,
    userId
  } = context;
  const {
    data: row,
    error
  } = await supabase.from("service_requests").insert({
    user_id: userId,
    service_slug: data.service_slug,
    service_label: data.service_label,
    destination_country: data.destination_country ?? null,
    target_date: data.target_date || null,
    travelers_count: data.travelers_count,
    budget_range: data.budget_range ?? null,
    message: data.message
  }).select("id").single();
  if (error) throw new Error(error.message);
  return {
    id: row.id
  };
});
const listMyRequests_createServerFn_handler = createServerRpc({
  id: "4b88c82fc0046a589bdb5580d2d2540f1499d5e2e36a6a47a5cdff6c0891f1f7",
  name: "listMyRequests",
  filename: "src/lib/requests.functions.ts"
}, (opts) => listMyRequests.__executeServer(opts));
const listMyRequests = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(listMyRequests_createServerFn_handler, async ({
  context
}) => {
  const {
    data,
    error
  } = await context.supabase.from("service_requests").select("id, service_slug, service_label, destination_country, status, created_at, updated_at").order("created_at", {
    ascending: false
  });
  if (error) throw new Error(error.message);
  return data ?? [];
});
const getMyRequest_createServerFn_handler = createServerRpc({
  id: "089c72412f93f1416d2bf726f4fa80f3b89c4d0586e26fbb0cef9a48791858f2",
  name: "getMyRequest",
  filename: "src/lib/requests.functions.ts"
}, (opts) => getMyRequest.__executeServer(opts));
const getMyRequest = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  id: string().uuid()
}).parse(input)).handler(getMyRequest_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    supabase
  } = context;
  const [{
    data: req,
    error: e1
  }, {
    data: msgs,
    error: e2
  }, {
    data: updates,
    error: e3
  }, {
    data: docs,
    error: e4
  }] = await Promise.all([supabase.from("service_requests").select("*").eq("id", data.id).maybeSingle(), supabase.from("request_messages").select("*").eq("request_id", data.id).order("created_at"), supabase.from("request_updates").select("*").eq("request_id", data.id).order("created_at"), supabase.from("request_documents").select("*").eq("request_id", data.id).order("created_at")]);
  if (e1 || e2 || e3 || e4) throw new Error((e1 || e2 || e3 || e4).message);
  if (!req) throw new Error("Not found");
  await supabase.from("request_messages").update({
    read_by_user_at: (/* @__PURE__ */ new Date()).toISOString()
  }).eq("request_id", data.id).eq("author_role", "admin").is("read_by_user_at", null);
  return {
    request: req,
    messages: msgs ?? [],
    updates: updates ?? [],
    documents: docs ?? []
  };
});
const sendMessage_createServerFn_handler = createServerRpc({
  id: "958d12fa80880f49141ff90b04138c8f13f09d1a6342d73dd63a333c5a745307",
  name: "sendMessage",
  filename: "src/lib/requests.functions.ts"
}, (opts) => sendMessage.__executeServer(opts));
const sendMessage = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  body: string().min(1).max(4e3)
}).parse(input)).handler(sendMessage_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    supabase,
    userId
  } = context;
  const {
    error
  } = await supabase.from("request_messages").insert({
    request_id: data.request_id,
    author_id: userId,
    author_role: "user",
    body: data.body
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const signDocumentUpload_createServerFn_handler = createServerRpc({
  id: "19e0e2d85082fac3e85c0c4f2a6905bd3da95a95bf47cc16bbd3034dc25b2216",
  name: "signDocumentUpload",
  filename: "src/lib/requests.functions.ts"
}, (opts) => signDocumentUpload.__executeServer(opts));
const signDocumentUpload = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  file_name: string().min(1).max(255),
  mime_type: string().max(120).optional(),
  size_bytes: number().int().min(0).max(20 * 1024 * 1024)
}).parse(input)).handler(signDocumentUpload_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    supabase,
    userId
  } = context;
  const {
    data: req
  } = await supabase.from("service_requests").select("id").eq("id", data.request_id).eq("user_id", userId).maybeSingle();
  if (!req) throw new Error("Not allowed");
  const safeName = data.file_name.replace(/[^\w.-]+/g, "_");
  const path = `${userId}/${data.request_id}/${crypto.randomUUID()}-${safeName}`;
  const {
    data: signed,
    error
  } = await supabase.storage.from("request-documents").createSignedUploadUrl(path);
  if (error) throw new Error(error.message);
  return {
    path,
    token: signed.token,
    signedUrl: signed.signedUrl
  };
});
const confirmDocument_createServerFn_handler = createServerRpc({
  id: "570720446cb81e022cc77f4efb085c99cb118d840e7e2b7f24260276a67215ef",
  name: "confirmDocument",
  filename: "src/lib/requests.functions.ts"
}, (opts) => confirmDocument.__executeServer(opts));
const confirmDocument = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  storage_path: string().min(1),
  file_name: string().min(1).max(255),
  mime_type: string().max(120).optional(),
  size_bytes: number().int().min(0)
}).parse(input)).handler(confirmDocument_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    supabase,
    userId
  } = context;
  const {
    error
  } = await supabase.from("request_documents").insert({
    request_id: data.request_id,
    uploaded_by: userId,
    storage_path: data.storage_path,
    file_name: data.file_name,
    mime_type: data.mime_type ?? null,
    size_bytes: data.size_bytes
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const signDocumentDownload_createServerFn_handler = createServerRpc({
  id: "7a9e8d86b4cf90b5d247940d885d5ee0eef9f5e181a7143d237d6c04617adbd6",
  name: "signDocumentDownload",
  filename: "src/lib/requests.functions.ts"
}, (opts) => signDocumentDownload.__executeServer(opts));
const signDocumentDownload = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  doc_id: string().uuid()
}).parse(input)).handler(signDocumentDownload_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    supabase
  } = context;
  const {
    data: doc,
    error
  } = await supabase.from("request_documents").select("storage_path, file_name").eq("id", data.doc_id).maybeSingle();
  if (error) throw new Error(error.message);
  if (!doc) throw new Error("Not found");
  const {
    data: signed,
    error: e2
  } = await supabase.storage.from("request-documents").createSignedUrl(doc.storage_path, 300, {
    download: doc.file_name
  });
  if (e2) throw new Error(e2.message);
  return {
    url: signed.signedUrl
  };
});
const isCurrentUserAdmin_createServerFn_handler = createServerRpc({
  id: "6886b7c3bb200c347a7eb971e3789747afcfae32f95c41cbdd265178d87b2c78",
  name: "isCurrentUserAdmin",
  filename: "src/lib/requests.functions.ts"
}, (opts) => isCurrentUserAdmin.__executeServer(opts));
const isCurrentUserAdmin = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(isCurrentUserAdmin_createServerFn_handler, async ({
  context
}) => {
  const {
    data
  } = await context.supabase.from("user_roles").select("role").eq("user_id", context.userId).eq("role", "admin").maybeSingle();
  return {
    isAdmin: !!data
  };
});
const adminListRequests_createServerFn_handler = createServerRpc({
  id: "654365c233888f5c7fe5db80b5200ee5056b6fdfdd40aed1903df648291ebedd",
  name: "adminListRequests",
  filename: "src/lib/requests.functions.ts"
}, (opts) => adminListRequests.__executeServer(opts));
const adminListRequests = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  status: StatusEnum.optional()
}).parse(input ?? {})).handler(adminListRequests_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  let q = context.supabase.from("service_requests").select("id, user_id, service_slug, service_label, destination_country, status, created_at").order("created_at", {
    ascending: false
  });
  if (data.status) q = q.eq("status", data.status);
  const {
    data: rows,
    error
  } = await q;
  if (error) throw new Error(error.message);
  const ids = Array.from(new Set((rows ?? []).map((r) => r.user_id)));
  const profiles = {};
  if (ids.length) {
    const {
      data: ps
    } = await context.supabase.from("profiles").select("id, full_name, email").in("id", ids);
    for (const p of ps ?? []) profiles[p.id] = {
      full_name: p.full_name,
      email: p.email
    };
  }
  return (rows ?? []).map((r) => ({
    ...r,
    client: profiles[r.user_id] ?? null
  }));
});
const adminGetRequest_createServerFn_handler = createServerRpc({
  id: "6391437212f702517efd5c4eb7d368af5180dc701221848a638083d187b00579",
  name: "adminGetRequest",
  filename: "src/lib/requests.functions.ts"
}, (opts) => adminGetRequest.__executeServer(opts));
const adminGetRequest = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  id: string().uuid()
}).parse(input)).handler(adminGetRequest_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const {
    supabase
  } = context;
  const [{
    data: req
  }, {
    data: msgs
  }, {
    data: updates
  }, {
    data: docs
  }] = await Promise.all([supabase.from("service_requests").select("*").eq("id", data.id).maybeSingle(), supabase.from("request_messages").select("*").eq("request_id", data.id).order("created_at"), supabase.from("request_updates").select("*").eq("request_id", data.id).order("created_at"), supabase.from("request_documents").select("*").eq("request_id", data.id).order("created_at")]);
  if (!req) throw new Error("Not found");
  const {
    data: profile
  } = await supabase.from("profiles").select("full_name, email, phone").eq("id", req.user_id).maybeSingle();
  await supabase.from("request_messages").update({
    read_by_admin_at: (/* @__PURE__ */ new Date()).toISOString()
  }).eq("request_id", data.id).eq("author_role", "user").is("read_by_admin_at", null);
  return {
    request: req,
    client: profile,
    messages: msgs ?? [],
    updates: updates ?? [],
    documents: docs ?? []
  };
});
const adminSendMessage_createServerFn_handler = createServerRpc({
  id: "fc89d89582f808e0a91b0f59e34216b275ee06d9580f97b3f39a6e0b2d080be8",
  name: "adminSendMessage",
  filename: "src/lib/requests.functions.ts"
}, (opts) => adminSendMessage.__executeServer(opts));
const adminSendMessage = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  body: string().min(1).max(4e3)
}).parse(input)).handler(adminSendMessage_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const {
    error
  } = await context.supabase.from("request_messages").insert({
    request_id: data.request_id,
    author_id: context.userId,
    author_role: "admin",
    body: data.body
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const adminUpdateStatus_createServerFn_handler = createServerRpc({
  id: "1e65b66c2291de4522b81567e62efc4fc07402f8e0de82ef2589b5cbccdce7ce",
  name: "adminUpdateStatus",
  filename: "src/lib/requests.functions.ts"
}, (opts) => adminUpdateStatus.__executeServer(opts));
const adminUpdateStatus = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  status: StatusEnum,
  note: string().max(2e3).optional(),
  visible_to_user: boolean().default(true)
}).parse(input)).handler(adminUpdateStatus_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const {
    error: e1
  } = await context.supabase.from("service_requests").update({
    status: data.status
  }).eq("id", data.request_id);
  if (e1) throw new Error(e1.message);
  const {
    error: e2
  } = await context.supabase.from("request_updates").insert({
    request_id: data.request_id,
    author_id: context.userId,
    kind: "status_change",
    body: data.note ?? null,
    new_status: data.status,
    visible_to_user: data.visible_to_user
  });
  if (e2) throw new Error(e2.message);
  return {
    ok: true
  };
});
const adminPostNote_createServerFn_handler = createServerRpc({
  id: "d1436d77c92e223c084759a4bebacf3f0d1a0d1d5eab7388fd2a4864018d49e5",
  name: "adminPostNote",
  filename: "src/lib/requests.functions.ts"
}, (opts) => adminPostNote.__executeServer(opts));
const adminPostNote = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  body: string().min(1).max(2e3),
  visible_to_user: boolean().default(false)
}).parse(input)).handler(adminPostNote_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const {
    error
  } = await context.supabase.from("request_updates").insert({
    request_id: data.request_id,
    author_id: context.userId,
    kind: "note",
    body: data.body,
    visible_to_user: data.visible_to_user
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  adminGetRequest_createServerFn_handler,
  adminListRequests_createServerFn_handler,
  adminPostNote_createServerFn_handler,
  adminSendMessage_createServerFn_handler,
  adminUpdateStatus_createServerFn_handler,
  confirmDocument_createServerFn_handler,
  createRequest_createServerFn_handler,
  getMyRequest_createServerFn_handler,
  isCurrentUserAdmin_createServerFn_handler,
  listMyRequests_createServerFn_handler,
  sendMessage_createServerFn_handler,
  signDocumentDownload_createServerFn_handler,
  signDocumentUpload_createServerFn_handler
};
