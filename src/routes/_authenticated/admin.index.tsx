import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { adminListRequests, isCurrentUserAdmin } from "@/lib/requests.functions";
import { StatusBadge } from "@/components/site/StatusBadge";
import { QueryError } from "@/components/site/QueryError";
import { Inbox, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminPage,
});

function AdminPage() {
  const adminFn = useServerFn(isCurrentUserAdmin);
  const listFn = useServerFn(adminListRequests);
  const [filter, setFilter] = useState<"all" | "open" | "done">("all");
  const {
    data: adm,
    isLoading: l1,
    isError: admErr,
    error: admErrObj,
    refetch: refetchAdm,
  } = useQuery({ queryKey: ["is-admin"], queryFn: () => adminFn({}), retry: 1 });
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["admin-list"],
    queryFn: () => listFn({ data: {} }),
    enabled: !!adm?.isAdmin,
    retry: 1,
  });

  const rows = data ?? [];
  const stats = useMemo(() => {
    const total = rows.length;
    const open = rows.filter((r) => !["termine", "refuse"].includes(r.status)).length;
    const waiting = rows.filter((r) => r.status === "en_attente_client").length;
    const done = rows.filter((r) => r.status === "termine").length;
    return { total, open, waiting, done };
  }, [rows]);

  const visible = rows.filter((r) =>
    filter === "all"
      ? true
      : filter === "open"
        ? !["termine", "refuse"].includes(r.status)
        : r.status === "termine",
  );

  if (l1) return <p className="mx-auto max-w-5xl px-6 py-16">Chargement…</p>;
  if (admErr)
    return (
      <div className="mx-auto max-w-5xl px-6 py-16">
        <QueryError error={admErrObj} onRetry={() => refetchAdm()} />
      </div>
    );
  if (!adm?.isAdmin)
    return <p className="mx-auto max-w-5xl px-6 py-16 text-center">Accès refusé.</p>;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold">Espace admin</h1>
          <p className="mt-2 text-muted-foreground">
            Toutes les demandes clients en un coup d'œil.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/admin/users"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted/40"
          >
            Gestion des comptes
          </Link>
          <Link
            to="/account"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted/40"
          >
            Mon compte
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={Inbox} label="Total" value={stats.total} />
        <Stat icon={Clock} label="En cours" value={stats.open} />
        <Stat icon={AlertCircle} label="Attente client" value={stats.waiting} />
        <Stat icon={CheckCircle2} label="Terminées" value={stats.done} />
      </div>

      <div className="mt-8 flex gap-2 text-sm">
        {(["all", "open", "done"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 font-medium ${filter === f ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"}`}
          >
            {f === "all" ? "Toutes" : f === "open" ? "Actives" : "Terminées"}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card">
        {isError ? (
          <div className="p-4">
            <QueryError error={error} onRetry={() => refetch()} />
          </div>
        ) : isLoading ? (
          <p className="p-8 text-center text-muted-foreground">Chargement…</p>
        ) : visible.length === 0 ? (
          <p className="p-8 text-center text-muted-foreground">Aucune demande.</p>
        ) : (
          <ul className="divide-y divide-border">
            {visible.map((r) => (
              <li key={r.id}>
                <Link
                  to="/admin/$id"
                  params={{ id: r.id }}
                  className="flex items-center justify-between gap-4 p-5 hover:bg-muted/40"
                >
                  <div>
                    <p className="font-semibold">{r.service_label}</p>
                    <p className="text-sm text-muted-foreground">
                      {r.client?.full_name ?? r.client?.email ?? "Client"} ·{" "}
                      {r.destination_country ?? "—"} · {new Date(r.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <StatusBadge status={r.status} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
}
