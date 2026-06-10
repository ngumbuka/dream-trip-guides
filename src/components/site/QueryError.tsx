import { AlertTriangle, RefreshCw } from "lucide-react";

function friendlyMessage(error: unknown): string {
  const raw = error instanceof Error ? error.message : String(error ?? "");
  const m = raw.toLowerCase();
  if (m.includes("unauthorized") || m.includes("no authorization")) return "Votre session a expiré. Reconnectez-vous pour continuer.";
  if (m.includes("permission denied") || m.includes("forbidden") || m.includes("not allowed") || m.includes("rls"))
    return "Vous n'avez pas les droits d'accès à ces données.";
  if (m.includes("not found")) return "Cet élément est introuvable ou a été supprimé.";
  if (m.includes("network") || m.includes("failed to fetch")) return "Connexion impossible. Vérifiez votre réseau.";
  return "Une erreur est survenue lors du chargement. Réessayez dans un instant.";
}

export function QueryError({
  error,
  onRetry,
  className,
}: {
  error: unknown;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <div
      className={
        "flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center " +
        (className ?? "")
      }
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <AlertTriangle className="h-6 w-6 text-muted-foreground" />
      </div>
      <p className="text-sm font-medium text-foreground">{friendlyMessage(error)}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
        >
          <RefreshCw className="h-3.5 w-3.5" /> Réessayer
        </button>
      )}
    </div>
  );
}