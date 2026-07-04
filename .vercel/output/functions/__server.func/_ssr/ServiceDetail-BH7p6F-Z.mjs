import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-No4zfIuz.mjs";
import { D as ArrowLeft, R as Rocket, A as ArrowRight, n as Check } from "../_libs/lucide-react.mjs";
function ServiceHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  ctaLabel = "Démarrer mon projet",
  serviceSlug
}) {
  const router = useRouter();
  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/services" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden min-h-[500px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: image,
        alt: imageAlt,
        className: "absolute inset-0 h-full w-full object-cover",
        width: 1600,
        height: 900
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "var(--gradient-hero)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: goBack,
          className: "mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white animate-in fade-in slide-in-from-top-2 duration-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
            " Retour"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm font-medium uppercase tracking-[0.2em] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both",
          style: { color: "#ffb3bd" },
          children: eyebrow
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[400ms] fill-mode-both", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-white/85 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[600ms] fill-mode-both", children: intro }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[800ms] fill-mode-both", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/request",
            search: { service: serviceSlug },
            className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
              " ",
              ctaLabel,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10",
            children: "Nous contacter"
          }
        )
      ] })
    ] })
  ] });
}
function ServiceHighlights({ highlights }) {
  if (!highlights || highlights.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Ce que comprend cet accompagnement" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 grid gap-4 sm:grid-cols-2", children: highlights.map((h) => {
      const text = typeof h === "string" ? h : h.text;
      const featured = typeof h === "object" && h.featured;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: `flex items-start gap-3 rounded-2xl border p-5 ${featured ? "bg-brand-navy border-transparent text-white shadow-lg" : "border-border bg-card"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Check,
              {
                className: `mt-0.5 h-5 w-5 shrink-0 ${featured ? "text-[#ffb3bd]" : "text-brand-red"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: featured ? "font-semibold" : "text-foreground/85", children: text })
          ]
        },
        text
      );
    }) })
  ] }) });
}
function ServiceProcess({ steps }) {
  if (!steps || steps.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Notre méthode" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold md:text-4xl", children: "Comment ça se passe ?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-3xl border border-border bg-white p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-brand-red", children: [
        "Étape ",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-semibold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
    ] }, s.title)) })
  ] }) }) });
}
function ServiceIncluded({ included }) {
  if (!included || included.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-navy py-20 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Inclus dans cette offre" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", children: included.map(
      (e) => e.to ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: e.to,
          className: "group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 flex flex-col items-center justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(e.icon, { className: "mx-auto h-8 w-8", style: { color: "#ffb3bd" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base font-semibold", children: e.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 inline-flex items-center justify-center gap-1 text-xs font-medium text-white/60 group-hover:text-white", children: [
              "Voir les détails ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ] })
          ]
        },
        e.t
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 p-6 text-center flex flex-col items-center justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(e.icon, { className: "mx-auto mb-3 h-8 w-8 opacity-80 text-brand-red" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold", children: e.t }),
            e.desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-white/70 leading-relaxed", children: e.desc })
          ]
        },
        e.t
      )
    ) })
  ] }) }) });
}
function ServiceFaq({ faqs }) {
  if (!faqs || faqs.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Questions fréquentes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 divide-y divide-border rounded-3xl border border-border bg-card", children: faqs.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold", children: [
        f.q,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-muted-foreground transition-transform group-open:rotate-45", children: "+" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: f.a })
    ] }, f.q)) })
  ] }) });
}
function ServiceCta({
  ctaLabel = "Démarrer mon projet",
  serviceSlug
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-brand-cream p-10 text-center md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Prêt·e à passer à l'action ?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Parlons de votre projet — notre équipe vous répond sous 24h." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/request",
          search: { service: serviceSlug },
          className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
            " ",
            ctaLabel,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/services",
          className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted",
          children: "Voir les autres services"
        }
      )
    ] })
  ] }) }) });
}
function ServiceDetail(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceHero, { ...props }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceHighlights, { highlights: props.highlights }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceProcess, { steps: props.steps }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceIncluded, { included: props.included }),
    props.children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceFaq, { faqs: props.faqs }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCta, { ctaLabel: props.ctaLabel, serviceSlug: props.serviceSlug })
  ] });
}
export {
  ServiceHero as S,
  ServiceHighlights as a,
  ServiceProcess as b,
  ServiceIncluded as c,
  ServiceFaq as d,
  ServiceCta as e,
  ServiceDetail as f
};
