import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useServerFn, v as isCurrentUserAdmin, x as adminListRequests } from "./router-DJhV2vx3.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as StatusBadge } from "./StatusBadge-AMFHrHmX.mjs";
import { Q as QueryError } from "./QueryError-DJD743Wt.mjs";
import { b3 as Inbox, aB as Clock, aE as CircleAlert, ap as CircleCheck } from "../_libs/lucide-react.mjs";
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
import "./server-BODjEJm3.mjs";
import "node:async_hooks";
import "./auth-middleware-DoepXbKI.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
function AdminPage() {
  const adminFn = useServerFn(isCurrentUserAdmin);
  const listFn = useServerFn(adminListRequests);
  const [filter, setFilter] = reactExports.useState("all");
  const {
    data: adm,
    isLoading: l1,
    isError: admErr,
    error: admErrObj,
    refetch: refetchAdm
  } = useQuery({
    queryKey: ["is-admin"],
    queryFn: () => adminFn({}),
    retry: 1
  });
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["admin-list"],
    queryFn: () => listFn({
      data: {}
    }),
    enabled: !!adm?.isAdmin,
    retry: 1
  });
  const rows = data ?? [];
  const stats = reactExports.useMemo(() => {
    const total = rows.length;
    const open = rows.filter((r) => !["termine", "refuse"].includes(r.status)).length;
    const waiting = rows.filter((r) => r.status === "en_attente_client").length;
    const done = rows.filter((r) => r.status === "termine").length;
    return {
      total,
      open,
      waiting,
      done
    };
  }, [rows]);
  const visible = rows.filter((r) => filter === "all" ? true : filter === "open" ? !["termine", "refuse"].includes(r.status) : r.status === "termine");
  if (l1) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-5xl px-6 py-16", children: "Chargement…" });
  if (admErr) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryError, { error: admErrObj, onRetry: () => refetchAdm() }) });
  if (!adm?.isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-5xl px-6 py-16 text-center", children: "Accès refusé." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold", children: "Espace admin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Toutes les demandes clients en un coup d'œil." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/users", className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted/40", children: "Gestion des comptes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/account", className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted/40", children: "Mon compte" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Inbox, label: "Total", value: stats.total }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Clock, label: "En cours", value: stats.open }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: CircleAlert, label: "Attente client", value: stats.waiting }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: CircleCheck, label: "Terminées", value: stats.done })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex gap-2 text-sm", children: ["all", "open", "done"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `rounded-full border px-4 py-1.5 font-medium ${filter === f ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"}`, children: f === "all" ? "Toutes" : f === "open" ? "Actives" : "Terminées" }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden rounded-3xl border border-border bg-card", children: isError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryError, { error, onRetry: () => refetch() }) }) : isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-8 text-center text-muted-foreground", children: "Chargement…" }) : visible.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-8 text-center text-muted-foreground", children: "Aucune demande." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: visible.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/$id", params: {
      id: r.id
    }, className: "flex items-center justify-between gap-4 p-5 hover:bg-muted/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: r.service_label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          r.client?.full_name ?? r.client?.email ?? "Client",
          " ·",
          " ",
          r.destination_country ?? "—",
          " · ",
          new Date(r.created_at).toLocaleDateString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status })
    ] }) }, r.id)) }) })
  ] });
}
function Stat({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-3xl font-semibold", children: value })
  ] });
}
export {
  AdminPage as component
};
