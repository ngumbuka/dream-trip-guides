import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const MAP = {
  nouveau: { label: "Nouveau", bg: "#e7eefc", fg: "#1d4ed8" },
  en_revue: { label: "En revue", bg: "#fef3c7", fg: "#92400e" },
  en_cours: { label: "En cours", bg: "#dbeafe", fg: "#1e3a8a" },
  en_attente_client: { label: "En attente client", bg: "#fee2e2", fg: "#991b1b" },
  accepte: { label: "Accepté", bg: "#d1fae5", fg: "#065f46" },
  refuse: { label: "Refusé", bg: "#fee2e2", fg: "#7f1d1d" },
  termine: { label: "Terminé", bg: "#ede9fe", fg: "#4c1d95" }
};
function StatusBadge({ status }) {
  const m = MAP[status] ?? { label: status, bg: "#e5e7eb", fg: "#111827" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
      style: { backgroundColor: m.bg, color: m.fg },
      children: m.label
    }
  );
}
const STATUS_OPTIONS = Object.entries(MAP).map(([value, m]) => ({ value, label: m.label }));
export {
  StatusBadge as S,
  STATUS_OPTIONS as a
};
