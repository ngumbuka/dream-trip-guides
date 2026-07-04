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
const levels = [{
  n: "A1",
  d: "2 mois",
  w: "Se présenter, comprendre et utiliser des expressions familières, interagir simplement."
}, {
  n: "A2",
  d: "2 mois",
  w: "Communiquer sur des sujets du quotidien, comprendre des phrases courantes."
}, {
  n: "B1",
  d: "2 mois + prépa examen",
  w: "S'exprimer avec autonomie sur des sujets variés, rédiger des textes simples."
}, {
  n: "B2",
  d: "3 mois",
  w: "Comprendre des textes complexes, s'exprimer avec aisance — niveau requis pour l'université."
}];
const skills = [{
  t: "Compréhension orale",
  d: "Comprendre dialogues, annonces et émissions en allemand courant."
}, {
  t: "Expression orale",
  d: "Prendre la parole avec confiance, défendre un point de vue, interagir naturellement."
}, {
  t: "Compréhension écrite",
  d: "Lire et analyser des textes de niveaux croissants, y compris académiques."
}, {
  t: "Expression écrite",
  d: "Rédiger courriers, textes argumentés et résumés structurés."
}];
const format = ["Petits groupes : 8 à 12 apprenants maximum", "Horaires flexibles : sessions matin ou soir", "Supports de cours fournis, exercices et corrections individualisées", "Simulations d'examen à chaque fin de niveau", "Présentiel et en ligne disponibles"];
function AllemandPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-brand-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Formations · Allemand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl font-semibold leading-tight md:text-6xl", children: "🇩🇪 L'Allemagne vous attend. La langue, c'est la clé." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-lg text-muted-foreground", children: "Universités publiques gratuites, bourses DAAD, formations reconnues mondialement : l'Allemagne est l'une des destinations les plus attractives pour les étudiants camerounais. Mais sans Goethe-Zertifikat ou TestDaF, aucune université n'ouvrira ses portes. Nous vous y amenons, étape par étape, jusqu'au B2." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " M'inscrire au cours d'allemand"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " Réserver un bilan gratuit (30 min)"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Un apprentissage structuré niveau par niveau" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-muted-foreground", children: "Nos cours suivent le Cadre Européen Commun de Référence (CECRL). Vous progressez à votre rythme, en groupe réduit, avec des formateurs qui connaissent ce que les examinateurs attendent." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 overflow-hidden rounded-3xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-brand-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-semibold", children: "Niveau" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-semibold", children: "Durée" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-semibold", children: "Ce que vous apprendrez" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: levels.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-muted/30" : "bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-semibold text-brand-red", children: l.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/80", children: l.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-foreground/80", children: l.w })
        ] }, l.n)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Les 4 compétences travaillées" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-muted-foreground", children: "Bien plus que la grammaire : nous travaillons toutes les compétences évaluées en certification officielle." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.d })
      ] }, s.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Format & organisation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: format.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand-red" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: f })
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-brand-navy p-8 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Certifications préparées" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Goethe-Zertifikat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-white/75", children: "La certification de référence de l'Institut Goethe, reconnue mondialement." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "TestDaF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-white/75", children: "L'examen spécifiquement conçu pour les admissions universitaires en Allemagne." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-white/70", children: "Révisions d'annales, mises en situation et examens blancs complets chronométrés." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-brand-cream p-10 text-center md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Inscriptions ouvertes — places limitées" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Rejoignez la prochaine session. Le premier pas est aussi le plus important." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " M'inscrire ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/formations", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: "Voir les autres formations" })
      ] })
    ] }) })
  ] });
}
export {
  AllemandPage as component
};
