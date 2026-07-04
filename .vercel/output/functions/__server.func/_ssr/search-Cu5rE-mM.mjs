import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$W, d as destinationList } from "./router-DJhV2vx3.mjs";
import { s as searchAll, a as suggestionsForType, b as searchIndex } from "./search-index-TU3s1OD_.mjs";
import { A as ArrowRight, e as MapPin, f as Sparkles } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__react-query.mjs";
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
function SearchPage() {
  const {
    q,
    type
  } = Route$W.useSearch();
  const results = q ? searchAll(q, 12) : [];
  const typeSuggestions = suggestionsForType(type);
  const matchedDestination = destinationList.find((d) => q && (d.name.toLowerCase().includes(q.toLowerCase()) || d.slug.includes(q.toLowerCase())));
  const fallbackResults = !q ? searchIndex : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Résultats" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl font-semibold md:text-5xl", children: q ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Pour « ",
      q,
      " »"
    ] }) : "Explorez nos destinations & services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground", children: [
      "Type de séjour : ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: type })
    ] }),
    matchedDestination && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-10 overflow-hidden rounded-3xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: matchedDestination.image, alt: matchedDestination.name, className: "h-64 w-full object-cover md:h-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-brand-red", children: "Destination" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 text-3xl font-semibold", children: [
          matchedDestination.flag,
          " ",
          matchedDestination.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: matchedDestination.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/destinations/$country", params: {
          country: matchedDestination.slug
        }, className: "mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white", children: [
          "Voir la fiche pays ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    (results.length > 0 || fallbackResults.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: q ? "Tous les résultats" : "Tout parcourir" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: (results.length ? results : fallbackResults).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: r.to, params: r.params, className: "group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white", children: r.kind === "destination" ? /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: r.kind === "destination" ? "Destination" : "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: r.subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "mt-2 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" })
      ] }, r.to + (r.params?.country ?? ""))) })
    ] }),
    q && results.length === 0 && !matchedDestination && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 rounded-2xl border border-border bg-muted/30 p-6 text-muted-foreground", children: [
      "Aucun résultat pour « ",
      q,
      " ». Essayez « France », « Cameroun », « logement » ou « visa »."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold", children: [
        "Recommandé pour « ",
        type,
        " »"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: typeSuggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, className: "group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red", children: [
          "Découvrir",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] })
      ] }, s.to)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-3xl bg-brand-cream p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold md:text-3xl", children: "Besoin d'une proposition personnalisée ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Notre équipe revient vers vous sous 24h avec un plan sur-mesure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white", children: [
        "Recevoir une proposition ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] });
}
export {
  SearchPage as component
};
