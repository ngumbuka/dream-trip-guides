import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listMyRequests, isCurrentUserAdmin } from "@/lib/requests.functions";
import { StatusBadge } from "@/components/site/StatusBadge";
import { QueryError } from "@/components/site/QueryError";
import { Plus, UserCog } from "lucide-react";

export const Route = createFileRoute("/_authenticated/my-requests/")({
  component: MyRequestsPage,
});

function MyRequestsPage() {
  const listFn = useServerFn(listMyRequests);
  const adminFn = useServerFn(isCurrentUserAdmin);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["my-requests"],
    queryFn: () => listFn({}),
    retry: 1,
  });
  const { data: adm } = useQuery({ queryKey: ["is-admin"], queryFn: () => adminFn({}), retry: 1 });

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold">Mon espace</h1>
          <p className="mt-2 text-muted-foreground">
            Suivez vos demandes et échangez avec notre équipe.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {adm?.isAdmin && (
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold"
            >
              Espace admin
            </Link>
          )}
          <Link
            to="/account"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold"
          >
            <UserCog className="h-4 w-4" /> Mon compte
          </Link>
          <Link
            to="/new-request"
            search={{ service: undefined }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--brand-red)" }}
          >
            <Plus className="h-4 w-4" /> Nouvelle demande
          </Link>
        </div>
      </div>

      {isError ? (
        <div className="mt-10">
          <QueryError error={error} onRetry={() => refetch()} />
        </div>
      ) : (
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
          {isLoading ? (
            <p className="p-8 text-center text-muted-foreground">Chargement…</p>
          ) : !data || data.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-muted-foreground">Vous n'avez encore aucune demande.</p>
              <Link
                to="/new-request"
                search={{ service: undefined }}
                className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--brand-red)" }}
              >
                Démarrer une demande
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {data.map((r: any) => (
                <li key={r.id}>
                  <Link
                    to="/my-requests/$id"
                    params={{ id: r.id }}
                    className="flex items-center justify-between gap-4 p-5 hover:bg-muted/40"
                  >
                    <div>
                      <p className="font-semibold">{r.service_label}</p>
                      <p className="text-sm text-muted-foreground">
                        {r.destination_country ?? "—"} · créée le{" "}
                        {new Date(r.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <StatusBadge status={r.status} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
