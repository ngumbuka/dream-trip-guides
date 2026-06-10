import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { ShieldCheck, ShieldOff, UserCheck, UserX, Search, ArrowLeft, BadgeCheck, Clock } from "lucide-react";
import { isCurrentUserAdmin } from "@/lib/requests.functions";
import {
  adminListUsers,
  adminSetUserBanned,
  adminSetUserRole,
} from "@/lib/admin-users.functions";
import { QueryError } from "@/components/site/QueryError";

export const Route = createFileRoute("/_authenticated/admin/users")({
  component: AdminUsersPage,
});

function AdminUsersPage() {
  const qc = useQueryClient();
  const adminFn = useServerFn(isCurrentUserAdmin);
  const listFn = useServerFn(adminListUsers);
  const setBanned = useServerFn(adminSetUserBanned);
  const setRole = useServerFn(adminSetUserRole);

  const adminQ = useQuery({ queryKey: ["is-admin"], queryFn: () => adminFn({}), retry: 1 });
  const usersQ = useQuery({
    queryKey: ["admin-users"],
    queryFn: () => listFn({}),
    enabled: !!adminQ.data?.isAdmin,
    retry: 1,
  });

  const [q, setQ] = useState("");
  const visible = useMemo(() => {
    const rows = (usersQ.data ?? []) as any[];
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter(
      (u) =>
        u.email?.toLowerCase().includes(s) ||
        u.full_name?.toLowerCase().includes(s) ||
        u.phone?.toLowerCase().includes(s),
    );
  }, [usersQ.data, q]);

  const banMut = useMutation({
    mutationFn: (vars: { user_id: string; banned: boolean }) => setBanned({ data: vars }),
    onSuccess: (_d, v) => {
      toast.success(v.banned ? "Compte désactivé." : "Compte réactivé.");
      qc.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (e: any) => toast.error(e?.message ?? "Action impossible."),
  });

  const roleMut = useMutation({
    mutationFn: (vars: { user_id: string; role: "admin" | "user"; grant: boolean }) =>
      setRole({ data: vars }),
    onSuccess: (_d, v) => {
      toast.success(v.grant ? "Rôle ajouté." : "Rôle retiré.");
      qc.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (e: any) => toast.error(e?.message ?? "Action impossible."),
  });

  if (adminQ.isLoading) return <p className="mx-auto max-w-5xl px-6 py-16">Chargement…</p>;
  if (adminQ.isError)
    return (
      <div className="mx-auto max-w-5xl px-6 py-16">
        <QueryError error={adminQ.error} onRetry={() => adminQ.refetch()} />
      </div>
    );
  if (!adminQ.data?.isAdmin)
    return <p className="mx-auto max-w-5xl px-6 py-16 text-center">Accès refusé.</p>;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link
        to="/admin"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Retour au tableau de bord
      </Link>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold">Gestion des comptes</h1>
          <p className="mt-2 text-muted-foreground">
            Consultez les utilisateurs, leurs rôles et activez ou désactivez l'accès.
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un compte…"
            className="w-72 rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm outline-none focus:border-foreground"
          />
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card">
        {usersQ.isError ? (
          <div className="p-4">
            <QueryError error={usersQ.error} onRetry={() => usersQ.refetch()} />
          </div>
        ) : usersQ.isLoading ? (
          <p className="p-8 text-center text-muted-foreground">Chargement…</p>
        ) : visible.length === 0 ? (
          <p className="p-8 text-center text-muted-foreground">Aucun utilisateur.</p>
        ) : (
          <ul className="divide-y divide-border">
            {visible.map((u: any) => {
              const isAdmin = u.roles.includes("admin");
              const pending = banMut.isPending || roleMut.isPending;
              return (
                <li key={u.id} className="flex flex-wrap items-center justify-between gap-4 p-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate font-semibold">{u.full_name ?? u.email}</p>
                      {isAdmin && (
                        <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] font-semibold uppercase text-background">
                          Admin
                        </span>
                      )}
                      {u.banned && (
                        <span className="rounded-full bg-destructive px-2 py-0.5 text-[10px] font-semibold uppercase text-destructive-foreground">
                          Désactivé
                        </span>
                      )}
                      {u.email_confirmed_at ? (
                        <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                          <BadgeCheck className="h-3 w-3" /> vérifié
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs text-amber-600">
                          <Clock className="h-3 w-3" /> non vérifié
                        </span>
                      )}
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      {u.email}
                      {u.phone ? ` · ${u.phone}` : ""}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Inscrit le {new Date(u.created_at).toLocaleDateString()} ·{" "}
                      {u.last_sign_in_at
                        ? `dernière connexion ${new Date(u.last_sign_in_at).toLocaleDateString()}`
                        : "jamais connecté"}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      disabled={pending}
                      onClick={() =>
                        roleMut.mutate({ user_id: u.id, role: "admin", grant: !isAdmin })
                      }
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted/40 disabled:opacity-50"
                    >
                      {isAdmin ? (
                        <>
                          <ShieldOff className="h-3.5 w-3.5" /> Retirer admin
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="h-3.5 w-3.5" /> Promouvoir admin
                        </>
                      )}
                    </button>
                    <button
                      disabled={pending}
                      onClick={() => banMut.mutate({ user_id: u.id, banned: !u.banned })}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold disabled:opacity-50 ${
                        u.banned
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-destructive text-destructive-foreground hover:opacity-90"
                      }`}
                    >
                      {u.banned ? (
                        <>
                          <UserCheck className="h-3.5 w-3.5" /> Réactiver
                        </>
                      ) : (
                        <>
                          <UserX className="h-3.5 w-3.5" /> Désactiver
                        </>
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}