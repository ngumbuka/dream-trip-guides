import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as Mail, P as Phone, e as MapPin, g as Send } from "../_libs/lucide-react.mjs";
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-brand-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-5xl font-semibold leading-tight md:text-6xl", children: "Parlons de votre projet." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground", children: "Que votre projet soit clair ou encore en réflexion, nous sommes là pour en discuter. Réponse sous 24h." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "space-y-6", children: [{
        icon: Mail,
        label: "E-mail",
        value: "contact@voyageonsensemble.com"
      }, {
        icon: Phone,
        label: "Téléphone",
        value: "+33 7 00 00 00 00"
      }, {
        icon: MapPin,
        label: "Bureaux",
        value: "Paris, France · Douala, Cameroun"
      }].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: i.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-medium", children: i.value })
        ] })
      ] }, i.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "rounded-3xl border border-border bg-card p-8 md:p-10", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-2xl font-semibold", children: "Message envoyé !" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Nous revenons vers vous sous 24h." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Envoyez-nous un message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom complet", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "E-mail", type: "email", name: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Téléphone", name: "phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Type de projet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Long séjour" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Court séjour" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Visit Africa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Autre" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Votre message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, required: true, className: "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground", placeholder: "Parlez-nous de votre projet…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white", children: [
          "Envoyer ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
        ] })
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...rest, className: "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground" })
  ] });
}
export {
  Contact as component
};
