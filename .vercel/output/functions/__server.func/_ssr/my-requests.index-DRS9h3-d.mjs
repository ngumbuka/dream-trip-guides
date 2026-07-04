import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useServerFn, w as listMyRequests, v as isCurrentUserAdmin } from "./router-DJhV2vx3.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as StatusBadge } from "./StatusBadge-AMFHrHmX.mjs";
import { Q as QueryError } from "./QueryError-DJD743Wt.mjs";
import { b1 as UserCog, b2 as Plus } from "../_libs/lucide-react.mjs";
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
function MyRequestsPage() {
  const listFn = useServerFn(listMyRequests);
  const adminFn = useServerFn(isCurrentUserAdmin);
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["my-requests"],
    queryFn: () => listFn({}),
    retry: 1
  });
  const {
    data: adm
  } = useQuery({
    queryKey: ["is-admin"],
    queryFn: () => adminFn({}),
    retry: 1
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold", children: "Mon espace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Suivez vos demandes et échangez avec notre équipe." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        adm?.isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold", children: "Espace admin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/account", className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-4 w-4" }),
          " Mon compte"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/new-request", search: {
          service: void 0
        }, className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Nouvelle demande"
        ] })
      ] })
    ] }),
    isError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryError, { error, onRetry: () => refetch() }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-3xl border border-border bg-card", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-8 text-center text-muted-foreground", children: "Chargement…" }) : !data || data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Vous n'avez encore aucune demande." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/new-request", search: {
        service: void 0
      }, className: "mt-4 inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white", children: "Démarrer une demande" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: data.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/my-requests/$id", params: {
      id: r.id
    }, className: "flex items-center justify-between gap-4 p-5 hover:bg-muted/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: r.service_label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          r.destination_country ?? "—",
          " · créée le",
          " ",
          new Date(r.created_at).toLocaleDateString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status })
    ] }) }, r.id)) }) })
  ] });
}
export {
  MyRequestsPage as component
};
