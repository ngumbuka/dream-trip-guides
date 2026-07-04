import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as Plane, G as GraduationCap, e as MapPin, k as Languages, n as Check, A as ArrowRight, F as FileText, o as House, p as CreditCard, q as Ticket, r as Handshake, R as Rocket } from "../_libs/lucide-react.mjs";
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
const offers = [{
  id: "long",
  icon: Plane,
  title: "Longs séjours",
  tagline: "Études, travail, installation durable.",
  bullets: ["Admission en études supérieures", "Visa long séjour & dossiers consulaires", "Caution bancaire et AVI", "Recherche de logement sécurisé", "Accueil aéroport & intégration"]
}, {
  id: "court",
  icon: GraduationCap,
  title: "Courts séjours",
  tagline: "Visa touristique, vacances, voyages d'affaires.",
  bullets: ["Visa court séjour (Schengen)", "Réservation de billets d'avion", "Hébergement & itinéraire sur mesure", "Assurance voyage", "Assistance 7j/7 pendant le séjour"]
}, {
  id: "cameroun",
  icon: MapPin,
  title: "Visit Africa",
  tagline: "Découvrez l'Afrique : Sénégal, Côte d'Ivoire, Kenya, Maroc, Rwanda, Cameroun…",
  bullets: ["Circuits multi-pays (Afrique de l'Ouest, de l'Est, Maghreb)", "Transferts aéroport & véhicule avec chauffeur", "Hébergement sélectionné (hôtels, lodges, villas)", "Safaris, excursions culturelles & gastronomiques", "Accompagnement local francophone et anglophone"]
}, {
  id: "formations",
  icon: Languages,
  title: "Formations linguistiques",
  tagline: "TOEIC, TCF, Allemand : la certification qui débloque votre projet.",
  bullets: ["Allemand / Goethe-Zertifikat & TestDaF (A1 → B2)", "TOEIC : score professionnel 750+", "TCF Tout Public & TCF DAP (France, Canada)", "Petits groupes, examens blancs réguliers", "Bilan gratuit de 30 min pour démarrer"]
}];
const extras = [{
  icon: GraduationCap,
  t: "Admission études",
  to: "/services/admission-etudes"
}, {
  icon: FileText,
  t: "Dossier visa",
  to: "/services/dossier-visa"
}, {
  icon: FileText,
  t: "Visa Schengen",
  to: "/services/visa-schengen"
}, {
  icon: House,
  t: "Logement",
  to: "/services/logement"
}, {
  icon: CreditCard,
  t: "Caution bancaire & AVI",
  to: "/services/caution-avi"
}, {
  icon: Ticket,
  t: "Billets d'avion",
  to: "/services/billets-avion"
}, {
  icon: Handshake,
  t: "Accueil & intégration",
  to: "/services/accueil-integration"
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-brand-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl font-semibold leading-tight md:text-6xl", children: "Tout ce qu'il faut, en un seul endroit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground", children: "De l'admission universitaire au visa, du logement à l'accueil — nous orchestrons chaque détail pour que vous n'ayez qu'à voyager." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: offers.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: o.id, className: "flex flex-col rounded-3xl border border-border bg-card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(o.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-3xl font-semibold", children: o.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-brand-red", children: o.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: o.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-foreground/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-brand-red" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
      ] }, b)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: o.id === "long" ? "/services/long-sejours" : o.id === "court" ? "/services/court-sejours" : o.id === "formations" ? "/services/formations" : "/services/visite-afrique", className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white", children: [
          "En savoir plus ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-sm font-semibold text-foreground hover:underline", children: "Demander un devis" })
      ] })
    ] }, o.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-navy py-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Inclus dans nos accompagnements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5", children: extras.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: e.to, className: "group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(e.icon, { className: "mx-auto h-7 w-7", style: {
          color: "#ffb3bd"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm", children: e.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 inline-flex items-center justify-center gap-1 text-xs text-white/60 group-hover:text-white", children: [
          "En savoir plus ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] }, e.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-brand-cream p-10 text-center md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Vous ne savez pas quel service choisir ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Décrivez-nous simplement votre projet. Nous vous orienterons vers le bon accompagnement et vous enverrons une proposition sous 24h." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/new-request", search: {
          service: void 0
        }, className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " Démarrer mon projet ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted", children: "Nous contacter" })
      ] })
    ] }) })
  ] });
}
export {
  Services as component
};
