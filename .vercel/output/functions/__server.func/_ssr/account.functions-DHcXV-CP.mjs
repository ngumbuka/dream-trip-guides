import { c as createServerRpc } from "./createServerRpc-DcEPNUha.mjs";
import { c as createServerFn } from "./server-BODjEJm3.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DoepXbKI.mjs";
import "../_libs/react.mjs";
import { o as object, s as string } from "../_libs/zod.mjs";
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
const getMyProfile_createServerFn_handler = createServerRpc({
  id: "7137c45c66e2762097026ceecb6dd952f95d83288f96d03621061209a6008b8a",
  name: "getMyProfile",
  filename: "src/lib/account.functions.ts"
}, (opts) => getMyProfile.__executeServer(opts));
const getMyProfile = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(getMyProfile_createServerFn_handler, async ({
  context
}) => {
  const {
    data,
    error
  } = await context.supabase.from("profiles").select("id, full_name, email, phone").eq("id", context.userId).maybeSingle();
  if (error) throw new Error(error.message);
  return data;
});
const updateMyProfile_createServerFn_handler = createServerRpc({
  id: "a9a93b35b4fca3d47286ae52b9b8e588b5785c8c5eb7ec53518c1d73941bb2b9",
  name: "updateMyProfile",
  filename: "src/lib/account.functions.ts"
}, (opts) => updateMyProfile.__executeServer(opts));
const updateMyProfile = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  full_name: string().min(1).max(120).optional(),
  phone: string().max(40).optional().nullable()
}).parse(input)).handler(updateMyProfile_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    error
  } = await context.supabase.from("profiles").update({
    full_name: data.full_name ?? null,
    phone: data.phone ?? null
  }).eq("id", context.userId);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const requestEmailChange_createServerFn_handler = createServerRpc({
  id: "80d5be5920a50153b5cb702c03dd923b53973a2bec496fa96e49da0c7882fccb",
  name: "requestEmailChange",
  filename: "src/lib/account.functions.ts"
}, (opts) => requestEmailChange.__executeServer(opts));
const requestEmailChange = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  new_email: string().trim().email().max(255)
}).parse(input)).handler(requestEmailChange_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    error
  } = await context.supabase.auth.updateUser({
    email: data.new_email
  });
  if (error) throw new Error(error.message);
  return {
    ok: true,
    sent_to: data.new_email
  };
});
const resendEmailVerification_createServerFn_handler = createServerRpc({
  id: "a31e2cd140b0a236c1b59a6a4a8297f1f67667cdb0ae20464f7d973e6de28c85",
  name: "resendEmailVerification",
  filename: "src/lib/account.functions.ts"
}, (opts) => resendEmailVerification.__executeServer(opts));
const resendEmailVerification = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).handler(resendEmailVerification_createServerFn_handler, async ({
  context
}) => {
  const {
    data: u,
    error: uErr
  } = await context.supabase.auth.getUser();
  if (uErr) throw new Error(uErr.message);
  const email = u.user?.email;
  if (!email) throw new Error("Aucune adresse e-mail trouvée.");
  const {
    error
  } = await context.supabase.auth.resend({
    type: "signup",
    email
  });
  if (error) throw new Error(error.message);
  return {
    ok: true,
    sent_to: email
  };
});
const getEmailVerificationStatus_createServerFn_handler = createServerRpc({
  id: "eabbdcc58c61fd38cec5a6287435b01c22c1aaefc2f4efa9977714822dd0591b",
  name: "getEmailVerificationStatus",
  filename: "src/lib/account.functions.ts"
}, (opts) => getEmailVerificationStatus.__executeServer(opts));
const getEmailVerificationStatus = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(getEmailVerificationStatus_createServerFn_handler, async ({
  context
}) => {
  const {
    data,
    error
  } = await context.supabase.auth.getUser();
  if (error) throw new Error(error.message);
  const u = data.user;
  const userRec = u;
  return {
    email: u?.email ?? null,
    new_email: userRec.new_email ?? null,
    email_confirmed_at: u?.email_confirmed_at ?? null,
    verified: !!u?.email_confirmed_at
  };
});
export {
  getEmailVerificationStatus_createServerFn_handler,
  getMyProfile_createServerFn_handler,
  requestEmailChange_createServerFn_handler,
  resendEmailVerification_createServerFn_handler,
  updateMyProfile_createServerFn_handler
};
