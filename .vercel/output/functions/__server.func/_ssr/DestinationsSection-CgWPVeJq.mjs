import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-No4zfIuz.mjs";
import { h as hero2, b as hero4, l as imgGermany, m as imgBelgium, a as hero3 } from "./router-DJhV2vx3.mjs";
import { R as Rocket, l as ChevronLeft, m as ChevronRight, A as ArrowRight } from "../_libs/lucide-react.mjs";
function LazyImage({ src, alt, className = "", width, height }) {
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  const imgRef = reactExports.useRef(null);
  reactExports.useRef(null);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.src !== src) {
              img.src = src;
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, [src]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      ref: imgRef,
      src: isLoaded ? src : "",
      alt,
      className: `${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`,
      width,
      height,
      onLoad: () => setIsLoaded(true)
    }
  );
}
const destinations = [
  { name: "France", slug: "france", img: hero2, type: "Études · Long séjour" },
  { name: "Canada", slug: "canada", img: hero4, type: "Études · Résidence" },
  { name: "Allemagne", slug: "allemagne", img: imgGermany, type: "Études · Travail" },
  { name: "Belgique", slug: "belgique", img: imgBelgium, type: "Études · Court séjour" },
  {
    name: "Africa",
    slug: "cameroun",
    img: hero3,
    type: "Visite · Tourisme",
    to: "/services/visite-afrique",
    params: {}
  }
];
function DestinationsSection() {
  const [slide, setSlide] = reactExports.useState(0);
  const prev = () => setSlide((s) => s === 0 ? destinations.length - 1 : s - 1);
  const next = () => setSlide((s) => s === destinations.length - 1 ? 0 : s + 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Destinations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 max-w-2xl text-4xl font-semibold md:text-5xl", children: "Plusieurs destinations, mille opportunités." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/new-request",
          search: { service: void 0 },
          className: "hidden md:inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
            " Choisir ma destination"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 hidden md:grid md:grid-cols-5 gap-4", children: destinations.map((d, i) => {
      const img = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LazyImage,
          {
            src: d.img,
            alt: d.name,
            className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",
            width: 1024,
            height: 1280
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "text-xl font-semibold",
              style: { fontFamily: "var(--font-display)" },
              children: d.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/80", children: d.type })
        ] })
      ] });
      return d.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: d.to,
          className: "group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow",
          style: { animationDelay: `${i * 100}ms` },
          children: img
        },
        d.name
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/destinations/$country",
          params: { country: d.slug },
          className: "group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow",
          style: { animationDelay: `${i * 100}ms` },
          children: img
        },
        d.name
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 md:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        (() => {
          const d = destinations[slide];
          const card = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LazyImage,
              {
                src: d.img,
                alt: d.name,
                className: "h-full w-full object-cover transition-transform duration-700",
                width: 1024,
                height: 1280
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "text-xl font-semibold",
                  style: { fontFamily: "var(--font-display)" },
                  children: d.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/80", children: d.type })
            ] })
          ] });
          return d.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: d.to,
              className: "group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm",
              children: card
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/destinations/$country",
              params: { country: d.slug },
              className: "group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm",
              children: card
            }
          );
        })(),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prev,
            className: "absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm",
            "aria-label": "Destination précédente",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: next,
            className: "absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm",
            "aria-label": "Destination suivante",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center gap-2", children: destinations.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSlide(i),
          className: `h-2 rounded-full transition-all duration-300 ${i === slide ? "w-6 bg-brand-red" : "w-2 bg-gray-300"}`,
          "aria-label": `Aller à la destination ${i + 1}`
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/new-request",
        search: { service: void 0 },
        className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
          " Choisir ma destination et démarrer",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ]
      }
    ) })
  ] }) }) });
}
export {
  DestinationsSection as D
};
