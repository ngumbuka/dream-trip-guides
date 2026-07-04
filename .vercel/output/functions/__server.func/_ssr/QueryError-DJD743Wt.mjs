import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { aQ as TriangleAlert, a_ as RefreshCw } from "../_libs/lucide-react.mjs";
function friendlyMessage(error) {
  const raw = error instanceof Error ? error.message : String(error ?? "");
  const m = raw.toLowerCase();
  if (m.includes("unauthorized") || m.includes("no authorization"))
    return "Votre session a expiré. Reconnectez-vous pour continuer.";
  if (m.includes("permission denied") || m.includes("forbidden") || m.includes("not allowed") || m.includes("rls"))
    return "Vous n'avez pas les droits d'accès à ces données.";
  if (m.includes("not found")) return "Cet élément est introuvable ou a été supprimé.";
  if (m.includes("network") || m.includes("failed to fetch"))
    return "Connexion impossible. Vérifiez votre réseau.";
  return "Une erreur est survenue lors du chargement. Réessayez dans un instant.";
}
function QueryError({
  error,
  onRetry,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center " + (className ?? ""),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-6 w-6 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: friendlyMessage(error) }),
        onRetry && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onRetry,
            className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5" }),
              " Réessayer"
            ]
          }
        )
      ]
    }
  );
}
export {
  QueryError as Q
};
