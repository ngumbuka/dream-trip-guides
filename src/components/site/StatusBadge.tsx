const MAP: Record<string, { label: string; bg: string; fg: string }> = {
  nouveau: { label: "Nouveau", bg: "#e7eefc", fg: "#1d4ed8" },
  en_revue: { label: "En revue", bg: "#fef3c7", fg: "#92400e" },
  en_cours: { label: "En cours", bg: "#dbeafe", fg: "#1e3a8a" },
  en_attente_client: { label: "En attente client", bg: "#fee2e2", fg: "#991b1b" },
  accepte: { label: "Accepté", bg: "#d1fae5", fg: "#065f46" },
  refuse: { label: "Refusé", bg: "#fee2e2", fg: "#7f1d1d" },
  termine: { label: "Terminé", bg: "#ede9fe", fg: "#4c1d95" },
};

export function StatusBadge({ status }: { status: string }) {
  const m = MAP[status] ?? { label: status, bg: "#e5e7eb", fg: "#111827" };
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
      style={{ backgroundColor: m.bg, color: m.fg }}
    >
      {m.label}
    </span>
  );
}

export const STATUS_OPTIONS = Object.entries(MAP).map(([value, m]) => ({ value, label: m.label }));
