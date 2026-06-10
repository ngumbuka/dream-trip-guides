import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { adminListRequests, isCurrentUserAdmin } from "@/lib/requests.functions";
import { StatusBadge } from "@/components/site/StatusBadge";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminPage,
});

function AdminPage() {
  const adminFn = useServerFn(isCurrentUserAdmin);
  const listFn = useServerFn(adminListRequests);
  const { data: adm, isLoading: l1 } = useQuery({ queryKey: ["is-admin"], queryFn: () => adminFn({}) });
  const { data, isLoading } = useQuery({
    queryKey: ["admin-list"], queryFn: () => listFn({ data: {} }),
    enabled: !!adm?.isAdmin,
  });

  if (l1) return <p className="mx-auto max-w-5xl px-6 py-16">Chargement…</p>;
  if (!adm?.isAdmin) return <p className="mx-auto max-w-5xl px-6 py-16 text-center">Accès refusé.</p>;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-semibold">Espace admin</h1>
      <p className="mt-2 text-muted-foreground">Toutes les demandes clients en un coup d'œil.</p>
      <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
        {isLoading ? <p className="p-8 text-center text-muted-foreground">Chargement…</p> :
          !data || data.length === 0 ? <p className="p-8 text-center text-muted-foreground">Aucune demande.</p> :
          <ul className="divide-y divide-border">
            {data.map((r: any) => (
              <li key={r.id}>
                <Link to="/admin/$id" params={{ id: r.id }} className="flex items-center justify-between gap-4 p-5 hover:bg-muted/40">
                  <div>
                    <p className="font-semibold">{r.service_label}</p>
                    <p className="text-sm text-muted-foreground">
                      {r.client?.full_name ?? r.client?.email ?? "Client"} · {r.destination_country ?? "—"} · {new Date(r.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <StatusBadge status={r.status} />
                </Link>
              </li>
            ))}
          </ul>}
      </div>
    </div>
  );
}