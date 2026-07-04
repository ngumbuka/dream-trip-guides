import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const SplitErrorComponent = ({
  reset
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 py-32 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold", children: "Une erreur est survenue" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "mt-6 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white", children: "Réessayer" })
] });
export {
  SplitErrorComponent as errorComponent
};
