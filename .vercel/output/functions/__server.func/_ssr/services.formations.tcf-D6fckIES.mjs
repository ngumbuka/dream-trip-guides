import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as Sparkles, R as Rocket, n as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const versions = [{
  n: "TCF Tout Public",
  for: "Toute personne souhaitant certifier son niveau de français.",
  epreuves: "Compréhension orale, structures de la langue, compréhension écrite.",
  ideal: "Immigration Canada, dossiers professionnels, valorisation du profil.",
  duree: "Environ 1h30"
}, {
  n: "TCF DAP",
  for: "Candidats à une université française (Campus France ou admission directe).",
  epreuves: "Mêmes épreuves + expression écrite et expression orale.",
  ideal: "Toute candidature universitaire en France.",
  duree: "Environ 2h30"
}];
const skills = [{
  icon: "🎧",
  t: "Compréhension de l'oral",
  d: "Comprendre dialogues, émissions, annonces, discours formels — écoute active et repérage d'informations clés."
}, {
  icon: "📖",
  t: "Maîtrise des structures de la langue",
  d: "Grammaire, lexique académique et pièges classiques de l'examen."
}, {
  icon: "📄",
  t: "Compréhension de l'écrit",
  d: "Lecture analytique d'articles, extraits académiques et documents informatifs."
}, {
  icon: "✍️",
  t: "Expression écrite (TCF DAP)",
  d: "Textes argumentés, synthèse, structure du discours et registre formel."
}, {
  icon: "🗣️",
  t: "Expression orale (TCF DAP)",
  d: "Défendre un point de vue, fluidité, correction phonétique, pensée structurée en temps limité."
}];
const method = ["Bilan de départ complet sur toutes les compétences", "Plan personnalisé de 4 à 10 semaines selon votre niveau et vos délais", "Entraînements intensifs sur sujets officiels et annales", "Corrections individualisées avec conseils précis", "Examens blancs complets en conditions réelles", "Suivi post-formation jusqu'à la date de votre examen"];
function TcfPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-brand-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Formations · TCF" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl font-semibold leading-tight md:text-6xl", children: "🇫🇷🇨🇦 Le TCF ouvre les portes de la francophonie mondiale." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-lg text-muted-foreground", children: "Vous parlez français depuis l'enfance — mais le TCF n'évalue pas si vous savez parler français : il évalue si vous maîtrisez le français à un niveau académique. C'est précisément ce qui se prépare, et ce que nous travaillons avec vous." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " Réserver mon bilan gratuit"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " S'inscrire à la préparation TCF"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Quelle version du TCF pour vous ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-muted-foreground", children: "Le choix dépend directement de votre projet — études en France ou immigration / valorisation professionnelle." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 md:grid-cols-2", children: versions.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: v.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-5 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Pour qui" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-foreground/80", children: v.for })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Épreuves obligatoires" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-foreground/80", children: v.epreuves })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Idéal pour" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-foreground/80", children: v.ideal })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Durée" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-foreground/80", children: v.duree })
          ] })
        ] })
      ] }, v.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Les compétences évaluées — et comment nous les travaillons" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-lg font-semibold", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.d })
      ] }, s.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Notre méthode" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: method.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand-red" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: m })
        ] }, m)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-brand-navy p-8 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Niveaux visés" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-white/70", children: "Minimum" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-semibold", children: "B2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/75", children: "Seuil d'admission pour la majorité des universités françaises." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-white/70", children: "Recommandé" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-semibold", children: "C1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/75", children: "Pour les dossiers compétitifs, grandes écoles et procédures d'immigration canadienne." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-brand-cream p-10 text-center md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Un projet en France ou au Canada ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "30 minutes offertes pour évaluer votre niveau réel et bâtir ensemble un plan adapté à vos délais." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " Réserver mon bilan gratuit",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/formations", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: "Voir les autres formations" })
      ] })
    ] }) })
  ] });
}
export {
  TcfPage as component
};
