import { c as createServerRpc } from "./createServerRpc-DcEPNUha.mjs";
import { c as createServerFn } from "./server-BODjEJm3.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DoepXbKI.mjs";
import "../_libs/react.mjs";
import { o as object, b as boolean, s as string, _ as _enum } from "../_libs/zod.mjs";
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
async function assertAdmin(ctx) {
  const {
    data,
    error
  } = await ctx.supabase.rpc("has_role", {
    _user_id: ctx.userId,
    _role: "admin"
  });
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden");
}
const adminListUsers_createServerFn_handler = createServerRpc({
  id: "75a41eaad6e8e420ff959bd09f5f09676e4cb6e6827615b69002573eecffdcbe",
  name: "adminListUsers",
  filename: "src/lib/admin-users.functions.ts"
}, (opts) => adminListUsers.__executeServer(opts));
const adminListUsers = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(adminListUsers_createServerFn_handler, async ({
  context
}) => {
  await assertAdmin(context);
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const {
    data: list,
    error
  } = await supabaseAdmin.auth.admin.listUsers({
    page: 1,
    perPage: 200
  });
  if (error) throw new Error(error.message);
  const ids = list.users.map((u) => u.id);
  const [{
    data: profiles
  }, {
    data: roles
  }] = await Promise.all([supabaseAdmin.from("profiles").select("id, full_name, phone").in("id", ids), supabaseAdmin.from("user_roles").select("user_id, role").in("user_id", ids)]);
  const pMap = new Map((profiles ?? []).map((p) => [p.id, p]));
  const rMap = /* @__PURE__ */ new Map();
  (roles ?? []).forEach((r) => {
    const arr = rMap.get(r.user_id) ?? [];
    arr.push(r.role);
    rMap.set(r.user_id, arr);
  });
  return list.users.map((u) => {
    const p = pMap.get(u.id);
    const bannedUntil = u.banned_until;
    const banned = !!bannedUntil && new Date(bannedUntil).getTime() > Date.now();
    return {
      id: u.id,
      email: u.email,
      full_name: p?.full_name ?? null,
      phone: p?.phone ?? null,
      created_at: u.created_at,
      last_sign_in_at: u.last_sign_in_at,
      email_confirmed_at: u.email_confirmed_at,
      roles: rMap.get(u.id) ?? ["user"],
      banned
    };
  });
});
const adminSetUserBanned_createServerFn_handler = createServerRpc({
  id: "a5eae49c77c0fe820c6b13fbdadd7aa9ae505cffde034d5721d0db149a9fedf7",
  name: "adminSetUserBanned",
  filename: "src/lib/admin-users.functions.ts"
}, (opts) => adminSetUserBanned.__executeServer(opts));
const adminSetUserBanned = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  user_id: string().uuid(),
  banned: boolean()
}).parse(input)).handler(adminSetUserBanned_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context);
  if (data.user_id === context.userId) throw new Error("Vous ne pouvez pas désactiver votre propre compte.");
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const {
    error
  } = await supabaseAdmin.auth.admin.updateUserById(data.user_id, {
    ban_duration: data.banned ? "876000h" : "none"
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const adminSetUserRole_createServerFn_handler = createServerRpc({
  id: "c8e868d7024252d1047168b09e02c752eb6fb25ddeaf8821a1f6ec3367331bcf",
  name: "adminSetUserRole",
  filename: "src/lib/admin-users.functions.ts"
}, (opts) => adminSetUserRole.__executeServer(opts));
const adminSetUserRole = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  user_id: string().uuid(),
  role: _enum(["admin", "user"]),
  grant: boolean()
}).parse(input)).handler(adminSetUserRole_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context);
  if (data.user_id === context.userId && data.role === "admin" && !data.grant) throw new Error("Vous ne pouvez pas retirer votre propre rôle administrateur.");
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  if (data.grant) {
    const {
      error
    } = await supabaseAdmin.from("user_roles").insert({
      user_id: data.user_id,
      role: data.role
    });
    if (error && !String(error.message).toLowerCase().includes("duplicate")) throw new Error(error.message);
  } else {
    const {
      error
    } = await supabaseAdmin.from("user_roles").delete().eq("user_id", data.user_id).eq("role", data.role);
    if (error) throw new Error(error.message);
  }
  return {
    ok: true
  };
});
export {
  adminListUsers_createServerFn_handler,
  adminSetUserBanned_createServerFn_handler,
  adminSetUserRole_createServerFn_handler
};
