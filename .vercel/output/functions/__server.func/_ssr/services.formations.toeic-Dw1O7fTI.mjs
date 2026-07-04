import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Rocket, f as Sparkles, n as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const sections = [{
  s: "🎧 Listening",
  f: "100 questions (4 parties)",
  d: "45 min",
  e: "Compréhension de dialogues, annonces et monologues professionnels."
}, {
  s: "📖 Reading",
  f: "100 questions (3 parties)",
  d: "75 min",
  e: "Vocabulaire, grammaire, compréhension de textes professionnels et d'e-mails."
}];
const pillars = [{
  t: "Connaître l'examen",
  d: "Format, types de questions, pièges récurrents : on commence par poser les bases."
}, {
  t: "Travailler ses lacunes",
  d: "Diagnostic complet dès le premier cours, plan personnalisé selon votre score cible."
}, {
  t: "S'entraîner en conditions réelles",
  d: "Examens blancs complets, chronométrés, avec débriefing détaillé."
}, {
  t: "Optimiser sa stratégie le jour J",
  d: "Gestion du temps, du stress, des sections : maximiser chaque point."
}];
const workAreas = ["Grammaire et vocabulaire professionnels (finance, RH, logistique, communication…)", "Techniques de compréhension orale et repérage d'informations clés", "Stratégies de lecture rapide sur e-mails, articles, tableaux et rapports", "Gestion du temps et du stress sur chaque section", "Examens blancs complets avec correction détaillée et débriefing personnalisé"];
const audience = ["Valoriser son profil pour une insertion professionnelle internationale", "Répondre à une exigence de certification dans un concours ou une candidature", "Obtenir une preuve officielle et reconnue de son niveau d'anglais", "Préparer une mobilité professionnelle ou académique vers un pays anglophone"];
function ToeicPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-brand-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Formations · TOEIC" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl font-semibold leading-tight md:text-6xl", children: "💼 Un score TOEIC élevé, c'est un CV qui se démarque." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-lg text-muted-foreground", children: "Présent dans plus de 160 pays, le TOEIC est la certification d'anglais professionnel la plus demandée au monde. Nous vous préparons à atteindre un score compétitif en un minimum de temps — méthode rigoureuse, suivi individualisé, résultats concrets." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " S'inscrire à la préparation TOEIC"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " Réserver un bilan gratuit (30 min)"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Comprendre l'examen pour mieux s'y préparer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-muted-foreground", children: "Le TOEIC Listening & Reading : 200 questions, 2 heures, un score entre 10 et 990 points." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 overflow-hidden rounded-3xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-brand-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-semibold", children: "Section" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-semibold", children: "Format" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-semibold", children: "Durée" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-semibold", children: "Ce qui est évalué" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sections.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-muted/30" : "bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-semibold", children: s.s }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/80", children: s.f }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/80", children: s.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/80", children: s.e })
        ] }, s.s)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Notre méthode en 4 piliers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2", children: pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold uppercase tracking-wider text-brand-red", children: [
          "Pilier ",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-lg font-semibold", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.d })
      ] }, p.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Ce que vous travaillerez" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: workAreas.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand-red" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: w })
        ] }, w)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-brand-navy p-8 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "À qui s'adresse cette formation ?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: audience.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0", style: {
            color: "#ffb3bd"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/85", children: a })
        ] }, a)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl bg-white/10 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-white/70", children: "Score visé" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-semibold", children: "750 points et +" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/75", children: "Le seuil reconnu à l'international comme niveau professionnel compétent." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-brand-cream p-10 text-center md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Prêt à faire certifier votre anglais ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Groupes réduits, suivi personnalisé, résultats concrets. Rejoignez la prochaine session." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " S'inscrire ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/formations", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: "Voir les autres formations" })
      ] })
    ] }) })
  ] });
}
export {
  ToeicPage as component
};
