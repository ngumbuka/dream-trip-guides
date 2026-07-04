import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-DqghxSme.mjs";
import { c as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
import { t as toast } from "../_libs/sonner.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const lovableAuth = createLovableAuth();
const lovable = {
  auth: {
    signInWithOAuth: async (provider, opts) => {
      const result = await lovableAuth.signInWithOAuth(provider, {
        redirect_uri: opts?.redirect_uri,
        extraParams: {
          ...opts?.extraParams
        }
      });
      if (result.redirected) {
        return result;
      }
      if (result.error) {
        return result;
      }
      try {
        await supabase.auth.setSession(result.tokens);
      } catch (e) {
        return { error: e instanceof Error ? e : new Error(String(e)) };
      }
      return result;
    }
  }
};
function AuthPage() {
  const navigate = useNavigate();
  const [tab, setTab] = reactExports.useState("signin");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [fullName, setFullName] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({
      data
    }) => {
      if (data.session) navigate({
        to: "/my-requests"
      });
    });
  }, [navigate]);
  async function handleEmail(e) {
    e.preventDefault();
    setBusy(true);
    try {
      if (tab === "signup") {
        const {
          error
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: {
              full_name: fullName
            }
          }
        });
        if (error) throw error;
        toast.success("Compte créé. Vérifiez vos e-mails si nécessaire.");
      } else {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
      }
      navigate({
        to: "/my-requests"
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur");
    } finally {
      setBusy(false);
    }
  }
  async function handleGoogle() {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin
    });
    if (result.error) {
      toast.error(result.error.message);
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    navigate({
      to: "/my-requests"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold", children: "Bienvenue" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Connectez-vous pour suivre vos demandes et échanger avec notre équipe." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex gap-2 rounded-full border border-border bg-card p-1 text-sm", children: ["signin", "signup"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `flex-1 rounded-full px-4 py-2 font-medium ${tab === t ? "bg-brand-red text-white" : "text-muted-foreground"}`, children: t === "signin" ? "Connexion" : "Créer un compte" }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleEmail, className: "mt-6 space-y-4 rounded-3xl border border-border bg-card p-6", children: [
      tab === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom complet", value: fullName, onChange: setFullName, required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "E-mail", type: "email", value: email, onChange: setEmail, required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mot de passe", type: "password", value: password, onChange: setPassword, required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: busy, className: "w-full rounded-full bg-brand-red px-4 py-3 text-sm font-semibold text-white disabled:opacity-60", children: tab === "signin" ? "Se connecter" : "Créer mon compte" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative my-6 text-center text-xs uppercase tracking-wider text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-3", children: "ou" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-1/2 -z-10 border-t border-border" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleGoogle, disabled: busy, className: "flex w-full items-center justify-center gap-3 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4285F4", d: "M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.22-4.74 3.22-8.07z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FBBC05", d: "M5.85 14.12a6.6 6.6 0 0 1 0-4.24V7.04H2.18a11 11 0 0 0 0 9.92z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.04l3.67 2.84C6.71 7.31 9.14 5.38 12 5.38z" })
      ] }),
      "Continuer avec Google"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
      "En continuant, vous acceptez nos",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "underline", children: "conditions" }),
      "."
    ] })
  ] });
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value, onChange: (e) => onChange(e.target.value), required, className: "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground" })
  ] });
}
export {
  AuthPage as component
};
