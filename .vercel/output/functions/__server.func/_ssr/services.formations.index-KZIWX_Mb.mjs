import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as Sparkles, A as ArrowRight, n as Check, a$ as GlobeLock, b0 as Briefcase, k as Languages, R as Rocket } from "../_libs/lucide-react.mjs";
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
const programs = [{
  id: "allemand",
  flag: "🇩🇪",
  title: "Allemand / Goethe",
  tagline: "Études en Allemagne",
  desc: "Du A1 au B2 avec préparation Goethe-Zertifikat et TestDaF, le sésame pour les universités allemandes.",
  to: "/services/formations/allemand",
  icon: GlobeLock
}, {
  id: "toeic",
  flag: "💼",
  title: "TOEIC",
  tagline: "Insertion professionnelle internationale",
  desc: "Un score compétitif (750+) en anglais professionnel pour démarquer votre CV à l'international.",
  to: "/services/formations/toeic",
  icon: Briefcase
}, {
  id: "tcf",
  flag: "🇫🇷🇨🇦",
  title: "TCF",
  tagline: "Études en France & immigration au Canada",
  desc: "TCF Tout Public ou TCF DAP : la préparation académique qui fait la différence sur un dossier.",
  to: "/services/formations/tcf",
  icon: Languages
}];
const reasons = ["Formations orientées résultats, pas du remplissage de programme", "Formateurs expérimentés, pédagogues et disponibles", "Groupes réduits pour un suivi réellement personnalisé", "Examens blancs réguliers en conditions réelles", "Accompagnement du premier cours jusqu'à la certification", "Horaires flexibles adaptés aux étudiants et lycéens"];
function FormationsHub() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-brand-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Formations linguistiques" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl font-semibold leading-tight md:text-6xl", children: "La langue, votre premier visa." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground", children: "Un dossier solide ne suffit plus : sans certification linguistique au bon niveau, un projet d'études ou d'immigration s'arrête net. Notre pôle de formation vous amène au score qu'il faut, dans le délai qu'il faut." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " Réserver un bilan gratuit"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#programmes", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: [
          "Voir les 3 filières ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Pourquoi nos apprenants nous choisissent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Trois filières. Trois destinations. Une seule mission : transformer votre niveau en certification reconnue par les universités, les consulats et les recruteurs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 md:col-span-3 md:grid-cols-2", children: reasons.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand-red" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r })
      ] }, r)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "programmes", className: "bg-brand-navy py-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Nos 3 filières de formation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-white/70", children: "Choisissez la certification qui correspond à votre projet — ou laissez-nous vous orienter lors d'un bilan gratuit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: programs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.to, className: "group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: p.flag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-2xl font-semibold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium", style: {
          color: "#ffb3bd"
        }, children: p.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 flex-1 text-sm text-white/80", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white", children: [
          "Découvrir la formation",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
        ] })
      ] }, p.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-brand-cream p-10 text-center md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Pas sûr de la formation à choisir ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "30 minutes pour évaluer votre niveau, clarifier votre objectif et bâtir un plan de préparation réaliste — c'est offert." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " Réserver mon bilan gratuit"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: "Voir tous nos services" })
      ] })
    ] }) })
  ] });
}
export {
  FormationsHub as component
};
