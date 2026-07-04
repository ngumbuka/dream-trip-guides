import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useServerFn, v as isCurrentUserAdmin, t as createSsrRpc } from "./router-DJhV2vx3.mjs";
import { u as useQueryClient, a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { s as supabase } from "./client-DqghxSme.mjs";
import { c as createServerFn } from "./server-BODjEJm3.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DoepXbKI.mjs";
import { Q as QueryError } from "./QueryError-DJD743Wt.mjs";
import { aY as BadgeCheck, aQ as TriangleAlert, g as Send, aZ as User, d as Mail, P as Phone, S as ShieldCheck, b as LogOut } from "../_libs/lucide-react.mjs";
import { o as object, s as string } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "node:async_hooks";
const getMyProfile = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("7137c45c66e2762097026ceecb6dd952f95d83288f96d03621061209a6008b8a"));
const updateMyProfile = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  full_name: string().min(1).max(120).optional(),
  phone: string().max(40).optional().nullable()
}).parse(input)).handler(createSsrRpc("a9a93b35b4fca3d47286ae52b9b8e588b5785c8c5eb7ec53518c1d73941bb2b9"));
const requestEmailChange = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  new_email: string().trim().email().max(255)
}).parse(input)).handler(createSsrRpc("80d5be5920a50153b5cb702c03dd923b53973a2bec496fa96e49da0c7882fccb"));
const resendEmailVerification = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("a31e2cd140b0a236c1b59a6a4a8297f1f67667cdb0ae20464f7d973e6de28c85"));
const getEmailVerificationStatus = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("eabbdcc58c61fd38cec5a6287435b01c22c1aaefc2f4efa9977714822dd0591b"));
function AccountPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const getProfile = useServerFn(getMyProfile);
  const updateProfile = useServerFn(updateMyProfile);
  const adminFn = useServerFn(isCurrentUserAdmin);
  const changeEmail = useServerFn(requestEmailChange);
  const resendVerif = useServerFn(resendEmailVerification);
  const getEmailStatus = useServerFn(getEmailVerificationStatus);
  const profileQ = useQuery({
    queryKey: ["my-profile"],
    queryFn: () => getProfile({}),
    retry: 1
  });
  const adminQ = useQuery({
    queryKey: ["is-admin"],
    queryFn: () => adminFn({}),
    retry: 1
  });
  const emailQ = useQuery({
    queryKey: ["email-status"],
    queryFn: () => getEmailStatus({}),
    retry: 1
  });
  const [fullName, setFullName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [resetting, setResetting] = reactExports.useState(false);
  const [newEmail, setNewEmail] = reactExports.useState("");
  const [sendingEmail, setSendingEmail] = reactExports.useState(false);
  const [resending, setResending] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (profileQ.data) {
      setFullName(profileQ.data.full_name ?? "");
      setPhone(profileQ.data.phone ?? "");
    }
  }, [profileQ.data]);
  async function handleSave(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await updateProfile({
        data: {
          full_name: fullName,
          phone
        }
      });
      toast.success("Profil mis à jour.");
      queryClient.invalidateQueries({
        queryKey: ["my-profile"]
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Impossible de sauvegarder.");
    } finally {
      setBusy(false);
    }
  }
  async function handlePasswordReset() {
    if (!profileQ.data?.email) return;
    setResetting(true);
    const {
      error
    } = await supabase.auth.resetPasswordForEmail(profileQ.data.email, {
      redirectTo: `${window.location.origin}/auth`
    });
    setResetting(false);
    if (error) toast.error(error.message);
    else toast.success("E-mail de réinitialisation envoyé.");
  }
  async function handleEmailChange(e) {
    e.preventDefault();
    const next = newEmail.trim();
    if (!next) return;
    if (next === emailQ.data?.email) {
      toast.info("C'est déjà votre adresse actuelle.");
      return;
    }
    setSendingEmail(true);
    try {
      const res = await changeEmail({
        data: {
          new_email: next
        }
      });
      toast.success(`Lien de confirmation envoyé à ${res.sent_to}.`);
      setNewEmail("");
      queryClient.invalidateQueries({
        queryKey: ["email-status"]
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Impossible d'envoyer le lien.");
    } finally {
      setSendingEmail(false);
    }
  }
  async function handleResendVerification() {
    setResending(true);
    try {
      const res = await resendVerif({});
      toast.success(`Nouveau lien envoyé à ${res.sent_to}.`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Impossible d'envoyer le lien.");
    } finally {
      setResending(false);
    }
  }
  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({
      to: "/auth",
      replace: true
    });
  }
  const verified = !!emailQ.data?.verified;
  const pendingEmail = emailQ.data?.new_email;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold", children: "Mon compte" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Gérez vos informations personnelles et votre accès." }),
    !emailQ.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4 text-sm ${verified ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-amber-200 bg-amber-50 text-amber-900"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        verified ? /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: verified ? "E-mail vérifié" : "E-mail non vérifié" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-80", children: [
            verified ? `Adresse confirmée : ${emailQ.data?.email}` : "Confirmez votre adresse pour sécuriser votre compte.",
            pendingEmail && pendingEmail !== emailQ.data?.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              "· Changement en attente vers ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: pendingEmail })
            ] })
          ] })
        ] })
      ] }),
      !verified && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleResendVerification, disabled: resending, className: "inline-flex items-center gap-1.5 rounded-full bg-amber-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" }),
        resending ? "Envoi…" : "Renvoyer le lien"
      ] })
    ] }),
    profileQ.isError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryError, { error: profileQ.error, onRetry: () => profileQ.refetch() }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "mt-8 space-y-5 rounded-3xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }), label: "Nom complet", value: fullName, onChange: setFullName, placeholder: "Votre nom" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }), label: "E-mail", value: profileQ.data?.email ?? "", onChange: () => {
      }, readOnly: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }), label: "Téléphone", value: phone, onChange: setPhone, placeholder: "+237 6XX XX XX XX" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handlePasswordReset, disabled: resetting || !profileQ.data?.email, className: "text-sm font-semibold text-foreground underline-offset-4 hover:underline disabled:opacity-50", children: resetting ? "Envoi…" : "Réinitialiser le mot de passe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: busy || profileQ.isLoading, className: "rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60", children: busy ? "Enregistrement…" : "Enregistrer" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleEmailChange, className: "mt-6 rounded-3xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
        " Modifier l'adresse e-mail"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Un lien de confirmation sera envoyé à la nouvelle adresse. Le changement ne devient effectif qu'après validation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: newEmail, onChange: (e) => setNewEmail(e.target.value), placeholder: "nouvelle.adresse@email.com", className: "flex-1 min-w-[240px] rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sendingEmail || !newEmail.trim(), className: "rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60", children: sendingEmail ? "Envoi…" : "Envoyer le lien" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
          " Rôle"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: adminQ.isLoading ? "…" : adminQ.data?.isAdmin ? "Administrateur" : "Membre" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSignOut, className: "flex items-center justify-between rounded-3xl border border-border bg-card p-6 text-left hover:bg-muted/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Se déconnecter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Fin de votre session sur cet appareil." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-5 w-5 text-muted-foreground" })
      ] })
    ] })
  ] });
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  readOnly,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value, readOnly, onChange: (e) => onChange(e.target.value), placeholder, className: "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground disabled:bg-muted read-only:bg-muted/40" })
  ] });
}
export {
  AccountPage as component
};
