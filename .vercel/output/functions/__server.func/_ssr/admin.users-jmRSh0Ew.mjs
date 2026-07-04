import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useServerFn, v as isCurrentUserAdmin, t as createSsrRpc } from "./router-DJhV2vx3.mjs";
import { u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as createServerFn } from "./server-BODjEJm3.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DoepXbKI.mjs";
import { Q as QueryError } from "./QueryError-DJD743Wt.mjs";
import { D as ArrowLeft, i as Search, aY as BadgeCheck, aB as Clock, b5 as ShieldOff, S as ShieldCheck, b6 as UserCheck, b7 as UserX } from "../_libs/lucide-react.mjs";
import { o as object, b as boolean, s as string, _ as _enum } from "../_libs/zod.mjs";
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
import "./client-DqghxSme.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "node:async_hooks";
const adminListUsers = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("75a41eaad6e8e420ff959bd09f5f09676e4cb6e6827615b69002573eecffdcbe"));
const adminSetUserBanned = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  user_id: string().uuid(),
  banned: boolean()
}).parse(input)).handler(createSsrRpc("a5eae49c77c0fe820c6b13fbdadd7aa9ae505cffde034d5721d0db149a9fedf7"));
const adminSetUserRole = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  user_id: string().uuid(),
  role: _enum(["admin", "user"]),
  grant: boolean()
}).parse(input)).handler(createSsrRpc("c8e868d7024252d1047168b09e02c752eb6fb25ddeaf8821a1f6ec3367331bcf"));
function AdminUsersPage() {
  const qc = useQueryClient();
  const adminFn = useServerFn(isCurrentUserAdmin);
  const listFn = useServerFn(adminListUsers);
  const setBanned = useServerFn(adminSetUserBanned);
  const setRole = useServerFn(adminSetUserRole);
  const adminQ = useQuery({
    queryKey: ["is-admin"],
    queryFn: () => adminFn({}),
    retry: 1
  });
  const usersQ = useQuery({
    queryKey: ["admin-users"],
    queryFn: () => listFn({}),
    enabled: !!adminQ.data?.isAdmin,
    retry: 1
  });
  const [q, setQ] = reactExports.useState("");
  const visible = reactExports.useMemo(() => {
    const rows = usersQ.data ?? [];
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter((u) => u.email?.toLowerCase().includes(s) || u.full_name?.toLowerCase().includes(s) || u.phone?.toLowerCase().includes(s));
  }, [usersQ.data, q]);
  const banMut = useMutation({
    mutationFn: (vars) => setBanned({
      data: vars
    }),
    onSuccess: (_d, v) => {
      toast.success(v.banned ? "Compte désactivé." : "Compte réactivé.");
      qc.invalidateQueries({
        queryKey: ["admin-users"]
      });
    },
    onError: (e) => toast.error(e?.message ?? "Action impossible.")
  });
  const roleMut = useMutation({
    mutationFn: (vars) => setRole({
      data: vars
    }),
    onSuccess: (_d, v) => {
      toast.success(v.grant ? "Rôle ajouté." : "Rôle retiré.");
      qc.invalidateQueries({
        queryKey: ["admin-users"]
      });
    },
    onError: (e) => toast.error(e?.message ?? "Action impossible.")
  });
  if (adminQ.isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-5xl px-6 py-16", children: "Chargement…" });
  if (adminQ.isError) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryError, { error: adminQ.error, onRetry: () => adminQ.refetch() }) });
  if (!adminQ.data?.isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-5xl px-6 py-16 text-center", children: "Accès refusé." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Retour au tableau de bord"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold", children: "Gestion des comptes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Consultez les utilisateurs, leurs rôles et activez ou désactivez l'accès." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher un compte…", className: "w-72 rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm outline-none focus:border-foreground" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden rounded-3xl border border-border bg-card", children: usersQ.isError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryError, { error: usersQ.error, onRetry: () => usersQ.refetch() }) }) : usersQ.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-8 text-center text-muted-foreground", children: "Chargement…" }) : visible.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-8 text-center text-muted-foreground", children: "Aucun utilisateur." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: visible.map((u) => {
      const isAdmin = u.roles.includes("admin");
      const pending = banMut.isPending || roleMut.isPending;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-wrap items-center justify-between gap-4 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-semibold", children: u.full_name ?? u.email }),
            isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-foreground px-2 py-0.5 text-[10px] font-semibold uppercase text-background", children: "Admin" }),
            u.banned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-destructive px-2 py-0.5 text-[10px] font-semibold uppercase text-destructive-foreground", children: "Désactivé" }),
            u.email_confirmed_at ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-emerald-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3 w-3" }),
              " vérifié"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-amber-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              " non vérifié"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-sm text-muted-foreground", children: [
            u.email,
            u.phone ? ` · ${u.phone}` : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs text-muted-foreground", children: [
            "Inscrit le ",
            new Date(u.created_at).toLocaleDateString(),
            " ·",
            " ",
            u.last_sign_in_at ? `dernière connexion ${new Date(u.last_sign_in_at).toLocaleDateString()}` : "jamais connecté"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: pending, onClick: () => roleMut.mutate({
            user_id: u.id,
            role: "admin",
            grant: !isAdmin
          }), className: "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted/40 disabled:opacity-50", children: isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldOff, { className: "h-3.5 w-3.5" }),
            " Retirer admin"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
            " Promouvoir admin"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: pending, onClick: () => banMut.mutate({
            user_id: u.id,
            banned: !u.banned
          }), className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold disabled:opacity-50 ${u.banned ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-destructive text-destructive-foreground hover:opacity-90"}`, children: u.banned ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-3.5 w-3.5" }),
            " Réactiver"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "h-3.5 w-3.5" }),
            " Désactiver"
          ] }) })
        ] })
      ] }, u.id);
    }) }) })
  ] });
}
export {
  AdminUsersPage as component
};
