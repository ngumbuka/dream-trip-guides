import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as searchAll } from "./search-index-TU3s1OD_.mjs";
import { D as DestinationsSection } from "./DestinationsSection-CgWPVeJq.mjs";
import { h as hero2, a as hero3, b as hero4 } from "./router-DJhV2vx3.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { R as Reveal } from "./Reveal-No4zfIuz.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { f as Sparkles, i as Search, A as ArrowRight, R as Rocket, U as Users, E as Earth, S as ShieldCheck, G as GraduationCap, j as Plane, e as MapPin, k as Languages, l as ChevronLeft, m as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const hero1 = "/assets/hero-traveler-Bpeux8fn.jpg";
const slides = [
  { src: hero1, alt: "Voyageuse à l'aéroport" },
  { src: hero2, alt: "Ville de France" },
  { src: hero3, alt: "Paysage africain" },
  { src: hero4, alt: "Paysage canadien" }
];
function HeroCarousel() {
  const [active, setActive] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
    slides.map((slide, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: slide.src,
        alt: slide.alt,
        className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
        style: {
          opacity: i === active ? 1 : 0,
          transform: i === active ? "scale(1)" : "scale(1.05)",
          transition: "opacity 1.5s ease-in-out, transform 8s ease-out"
        },
        width: 1920,
        height: 1080
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "var(--gradient-hero)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2", children: slides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActive(i),
        className: `h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-white" : "w-1.5 bg-white/50"}`,
        "aria-label": `Slide ${i + 1}`
      },
      i
    )) })
  ] });
}
const testimonials = [
  {
    quote: "Grâce à VoyageonsEnsemble, j'ai trouvé un logement et j'ai été accueilli dès mon arrivée. Ils ont rendu mon intégration au Canada beaucoup plus facile.",
    name: "Sarah",
    role: "Étudiante en Master, Canada"
  },
  {
    quote: "Les démarches d'admission en France semblaient complexes, mais l'équipe m'a aidé à chaque étape. Merci pour votre soutien !",
    name: "Karim",
    role: "Étudiant, France"
  },
  {
    quote: "Un accompagnement humain et professionnel. Je recommande à tout étudiant qui veut éviter le stress des démarches.",
    name: "Aïcha",
    role: "Étudiante, Allemagne"
  }
];
function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    duration: 25
  });
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const onSelect = reactExports.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 5e3);
    return () => clearInterval(timer);
  }, [emblaApi]);
  const scrollPrev = reactExports.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = reactExports.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  if (!testimonials || testimonials.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: emblaRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4 first:pl-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "blockquote",
            {
              className: "text-lg leading-relaxed text-white/90",
              style: { fontFamily: "var(--font-display)" },
              children: [
                "“",
                t.quote,
                "”"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60", children: t.role })
          ] })
        ] })
      },
      i
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: scrollPrev,
          disabled: !canScrollPrev,
          className: "inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition",
          "aria-label": "Précédent",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: testimonials.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => emblaApi?.scrollTo(i),
          className: `h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/40"}`,
          "aria-label": `Aller au témoignage ${i + 1}`
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: scrollNext,
          disabled: !canScrollNext,
          className: "inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition",
          "aria-label": "Suivant",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
        }
      )
    ] })
  ] });
}
const services = [{
  icon: GraduationCap,
  title: "Courts séjours",
  to: "/services/court-sejours",
  desc: "Visa touristique, billets, hébergement et itinéraire clé en main."
}, {
  icon: Plane,
  title: "Longs séjours",
  to: "/services/long-sejours",
  desc: "Études, visa long séjour, logement, AVI, intégration."
}, {
  icon: MapPin,
  title: "Visit Africa",
  to: "/services/visite-afrique",
  desc: "Découvrez l'Afrique : Sénégal, Côte d'Ivoire, Maroc, Kenya, Rwanda, Cameroun…"
}, {
  icon: Languages,
  title: "Formations linguistiques",
  to: "/services/formations",
  desc: "TOEIC, TCF, Allemand — la certification qui débloque votre projet."
}];
function Index() {
  const [dest, setDest] = reactExports.useState("");
  const [type, setType] = reactExports.useState("Long séjour");
  const [focused, setFocused] = reactExports.useState(false);
  const navigate = useNavigate();
  const suggestions = reactExports.useMemo(() => searchAll(dest, 6), [dest]);
  const submit = () => navigate({
    to: "/search",
    search: {
      q: dest,
      type
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden min-h-[600px] md:min-h-[700px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-in fade-in slide-in-from-top-2 duration-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Votre partenaire de mobilité internationale"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both", children: [
          "Voyageons ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#ffb3bd"
          }, children: "ensemble" }),
          ", plus loin."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-white/85 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[400ms] fill-mode-both", children: "Études supérieures, visas, longs et courts séjours, visit Africa — nous prenons en charge l'admin et la logistique de A à Z." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-10 md:max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[600ms] fill-mode-both", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
            e.preventDefault();
            submit();
          }, className: "flex flex-col gap-2 md:flex-row md:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: dest, onChange: (e) => setDest(e.target.value), onFocus: () => setFocused(true), onBlur: () => setTimeout(() => setFocused(false), 150), placeholder: "Destination (France, Canada, Allemagne…)", className: "w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: type, onChange: (e) => setType(e.target.value), className: "rounded-lg border border-border bg-white px-3 py-3 text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Long séjour" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Court séjour" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-5 py-3 text-sm font-semibold text-white", children: [
              "Recevoir une proposition ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          ] }) }),
          focused && suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-border bg-white shadow-2xl", children: suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, params: s.params, className: "flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 text-left last:border-b-0 hover:bg-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: s.kind === "destination" ? "Destination" : "Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.subtitle })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground" })
          ] }, s.to + (s.params?.country ?? ""))) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[800ms] fill-mode-both", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/new-request", search: {
            service: void 0
          }, className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
            " Démarrer mon projet"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10", children: "Nous contacter" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80 animate-in fade-in duration-700 delay-[1000ms] fill-mode-both", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
            " 30+ experts dédiés"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4" }),
            " Plusieurs destinations"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
            " Démarches sécurisées"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Nos services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-semibold md:text-5xl", children: "Un soutien complet, à chaque étape." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all", children: [
          "Voir tous les services ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]", style: {
        animationDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-2xl font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-red", children: [
          "Découvrir",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-2xl bg-brand-cream px-6 py-5 md:px-8 md:py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold md:text-xl", children: "Un projet de voyage ou d'installation ?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Décrivez-nous votre situation — réponse sous 24h avec une proposition personnalisée." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/new-request", search: {
          service: void 0
        }, className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " Démarrer mon projet",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DestinationsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12 md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Pourquoi nous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-semibold md:text-5xl", children: "L'exigence d'un vrai partenaire." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Nous comprenons les défis uniques de chaque type de voyageur. Notre engagement : simplicité, transparence et résultats." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 md:col-span-7", children: [{
          t: "Professionnalisme",
          d: "Une expertise éprouvée dans la mobilité internationale."
        }, {
          t: "Transparence",
          d: "Des services clairs, sans surprise."
        }, {
          t: "Personnalisé",
          d: "Un accompagnement adapté à chaque profil."
        }, {
          t: "Réseau solide",
          d: "Partenaires académiques, bancaires, immobiliers."
        }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", style: {
          animationDelay: `${i * 100}ms`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold", children: b.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.d })
        ] }, b.t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-2xl border border-border bg-card px-6 py-5 md:px-8 md:py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold md:text-xl", children: "Déjà des centaines de voyageurs accompagnés." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Bénéficiez d'un accompagnement clé en main, de la première idée à l'arrivée sur place." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/new-request", search: {
          service: void 0
        }, className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white", children: [
          "Rejoindre les voyageurs ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-navy py-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em]", style: {
        color: "#ffb3bd"
      }, children: "Témoignages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 max-w-2xl text-4xl font-semibold md:text-5xl", children: "Ils nous ont fait confiance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsCarousel, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pt-16 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-brand-navy p-10 text-center md:p-14 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Prêt·e à vivre votre prochaine aventure ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-base text-white/80", children: "Que vous partiez étudier, travailler ou découvrir, nous transformons votre projet en réalité. Démarrez maintenant et recevez une proposition sous 24h." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/new-request", search: {
          service: void 0
        }, className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " Démarrer mon projet",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10", children: "Nous contacter" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pt-8 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl bg-brand-cream p-8 md:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Restez inspiré·e." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Études, tourisme, découvertes, vacances — directement dans votre boîte." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.namedItem("newsletter-email").value;
        toast.success(`Merci ! Vous êtes inscrit·e avec ${email}.`);
        form.reset();
      }, className: "flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "newsletter-email", name: "newsletter-email", type: "email", required: true, placeholder: "Votre adresse e-mail", "aria-label": "Adresse e-mail pour la newsletter", className: "flex-1 rounded-full border border-border bg-white px-5 py-4 text-sm outline-none focus:border-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "rounded-full bg-brand-red px-6 py-4 text-sm font-semibold text-white", children: "Je m'inscris" })
      ] })
    ] }) }) }) })
  ] });
}
export {
  Index as component
};
