import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { adminGetRequest, adminSendMessage, adminUpdateStatus, adminPostNote, signDocumentDownload } from "@/lib/requests.functions";
import { StatusBadge, STATUS_OPTIONS } from "@/components/site/StatusBadge";
import { ArrowLeft, Send, Download } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/$id")({
  component: AdminDetail,
});

function AdminDetail() {
  const { id } = Route.useParams();
  const qc = useQueryClient();
  const getFn = useServerFn(adminGetRequest);
  const sendFn = useServerFn(adminSendMessage);
  const statusFn = useServerFn(adminUpdateStatus);
  const noteFn = useServerFn(adminPostNote);
  const dlFn = useServerFn(signDocumentDownload);

  const [body, setBody] = useState("");
  const [note, setNote] = useState("");
  const [visible, setVisible] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["admin-request", id], queryFn: () => getFn({ data: { id } }), refetchInterval: 5000,
  });

  const sendMut = useMutation({
    mutationFn: () => sendFn({ data: { request_id: id, body } }),
    onSuccess: () => { setBody(""); qc.invalidateQueries({ queryKey: ["admin-request", id] }); },
    onError: (e: any) => toast.error(e.message),
  });
  const statusMut = useMutation({
    mutationFn: (status: string) => statusFn({ data: { request_id: id, status: status as any, visible_to_user: true } }),
    onSuccess: () => { toast.success("Statut mis à jour"); qc.invalidateQueries({ queryKey: ["admin-request", id] }); qc.invalidateQueries({ queryKey: ["admin-list"] }); },
    onError: (e: any) => toast.error(e.message),
  });
  const noteMut = useMutation({
    mutationFn: () => noteFn({ data: { request_id: id, body: note, visible_to_user: visible } }),
    onSuccess: () => { setNote(""); qc.invalidateQueries({ queryKey: ["admin-request", id] }); },
    onError: (e: any) => toast.error(e.message),
  });

  async function download(docId: string) {
    const { url } = await dlFn({ data: { doc_id: docId } });
    window.open(url, "_blank");
  }

  if (isLoading || !data) return <p className="mx-auto max-w-3xl px-6 py-16">Chargement…</p>;
  const { request: r, client, messages, updates, documents } = data;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Toutes les demandes</Link>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">{r.service_label}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {client?.full_name ?? client?.email ?? "Client"} · {client?.email} · {client?.phone ?? "—"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge status={r.status} />
          <select onChange={(e) => statusMut.mutate(e.target.value)} value={r.status}
            className="rounded-xl border border-border bg-white px-3 py-2 text-sm">
            {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 text-sm">
        <Info label="Destination" value={r.destination_country} />
        <Info label="Date envisagée" value={r.target_date} />
        <Info label="Voyageurs" value={String(r.travelers_count)} />
        <Info label="Budget" value={r.budget_range} />
        <div className="sm:col-span-2"><Info label="Message" value={r.message} /></div>
      </div>

      {documents.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Documents</h2>
          <ul className="mt-3 space-y-2">
            {documents.map((d: any) => (
              <li key={d.id} className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-sm">
                <span className="truncate">{d.file_name}</span>
                <button onClick={() => download(d.id)} className="inline-flex items-center gap-1 text-xs hover:text-foreground"><Download className="h-4 w-4" /> Télécharger</button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Notes & historique</h2>
        <ul className="mt-4 space-y-2">
          {updates.map((u: any) => (
            <li key={u.id} className="rounded-xl border border-border bg-card p-4 text-sm">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{u.kind === "note" ? (u.visible_to_user ? "Note client" : "Note interne") : "Changement de statut"} · {new Date(u.created_at).toLocaleString()}</span>
                {u.new_status && <StatusBadge status={u.new_status} />}
              </div>
              {u.body && <p className="mt-2">{u.body}</p>}
            </li>
          ))}
        </ul>
        <form onSubmit={(e) => { e.preventDefault(); if (note.trim()) noteMut.mutate(); }} className="mt-4 space-y-2 rounded-2xl border border-border bg-card p-4">
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} placeholder="Ajouter une note…" className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-foreground" />
          <label className="flex items-center gap-2 text-xs text-muted-foreground">
            <input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} /> Visible par le client
          </label>
          <button className="rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-navy)" }}>Ajouter la note</button>
        </form>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Messagerie</h2>
        <div className="mt-4 space-y-3 rounded-3xl border border-border bg-card p-6">
          {messages.length === 0 && <p className="text-sm text-muted-foreground">Aucun message.</p>}
          {messages.map((m: any) => (
            <div key={m.id} className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${m.author_role === "user" ? "bg-muted" : "ml-auto text-white"}`}
              style={m.author_role !== "user" ? { backgroundColor: "var(--brand-red)" } : undefined}>
              <p>{m.body}</p>
              <p className="mt-1 text-[10px] opacity-70">{m.author_role === "user" ? "Client" : "Vous (admin)"} · {new Date(m.created_at).toLocaleString()}</p>
            </div>
          ))}
          <form onSubmit={(e) => { e.preventDefault(); if (body.trim()) sendMut.mutate(); }} className="mt-4 flex gap-2">
            <input value={body} onChange={(e) => setBody(e.target.value)} placeholder="Répondre au client…" className="flex-1 rounded-full border border-border bg-white px-4 py-2 text-sm outline-none focus:border-foreground" />
            <button disabled={sendMut.isPending || !body.trim()} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white disabled:opacity-60" style={{ backgroundColor: "var(--brand-red)" }}>
              <Send className="h-4 w-4" /> Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Info({ label, value }: { label: string; value?: string | null }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 whitespace-pre-wrap">{value || "—"}</p>
    </div>
  );
}