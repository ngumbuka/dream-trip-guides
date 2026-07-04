import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  getMyRequest,
  sendMessage,
  signDocumentDownload,
  signDocumentUpload,
  confirmDocument,
} from "@/lib/requests.functions";
import { StatusBadge } from "@/components/site/StatusBadge";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Send, Upload, Download } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/my-requests/$id")({
  component: RequestDetail,
});

function RequestDetail() {
  const { id } = Route.useParams();
  const qc = useQueryClient();
  const getFn = useServerFn(getMyRequest);
  const sendFn = useServerFn(sendMessage);
  const dlFn = useServerFn(signDocumentDownload);
  const signFn = useServerFn(signDocumentUpload);
  const confirmFn = useServerFn(confirmDocument);
  const [body, setBody] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["my-request", id],
    queryFn: () => getFn({ data: { id } }),
    refetchInterval: 5000,
  });

  const sendMut = useMutation({
    mutationFn: () => sendFn({ data: { request_id: id, body } }),
    onSuccess: () => {
      setBody("");
      qc.invalidateQueries({ queryKey: ["my-request", id] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      const s = await signFn({
        data: { request_id: id, file_name: f.name, mime_type: f.type, size_bytes: f.size },
      });
      const { error } = await supabase.storage
        .from("request-documents")
        .uploadToSignedUrl(s.path, s.token, f);
      if (error) throw error;
      await confirmFn({
        data: {
          request_id: id,
          storage_path: s.path,
          file_name: f.name,
          mime_type: f.type,
          size_bytes: f.size,
        },
      });
      toast.success("Fichier ajouté");
      qc.invalidateQueries({ queryKey: ["my-request", id] });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Erreur");
    }
  }

  async function download(docId: string) {
    const { url } = await dlFn({ data: { doc_id: docId } });
    window.open(url, "_blank");
  }

  if (isLoading || !data) return <p className="mx-auto max-w-3xl px-6 py-16">Chargement…</p>;
  const { request: r, messages, updates, documents } = data;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        to="/my-requests"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </Link>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">{r.service_label}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Créée le {new Date(r.created_at).toLocaleString()}
          </p>
        </div>
        <StatusBadge status={r.status} />
      </div>

      <div className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 text-sm">
        <Info label="Destination" value={r.destination_country} />
        <Info label="Date envisagée" value={r.target_date} />
        <Info label="Voyageurs" value={String(r.travelers_count)} />
        <Info label="Budget" value={r.budget_range} />
        <div className="sm:col-span-2">
          <Info label="Message" value={r.message} />
        </div>
      </div>

      {updates.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Historique</h2>
          <ul className="mt-4 space-y-2">
            {updates.map((u) => (
              <li key={u.id} className="rounded-xl border border-border bg-card p-4 text-sm">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{new Date(u.created_at).toLocaleString()}</span>
                  {u.new_status && <StatusBadge status={u.new_status} />}
                </div>
                {u.body && <p className="mt-2">{u.body}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Documents</h2>
        <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-muted">
          <Upload className="h-4 w-4" /> Ajouter un document
          <input type="file" className="hidden" onChange={handleUpload} />
        </label>
        {documents.length > 0 && (
          <ul className="mt-4 space-y-2">
            {documents.map((d) => (
              <li
                key={d.id}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-sm"
              >
                <span className="truncate">{d.file_name}</span>
                <button
                  onClick={() => download(d.id)}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  <Download className="h-4 w-4" /> Télécharger
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Messagerie</h2>
        <div className="mt-4 space-y-3 rounded-3xl border border-border bg-card p-6">
          {messages.length === 0 && (
            <p className="text-sm text-muted-foreground">Aucun message pour l'instant.</p>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${m.author_role === "admin" ? "bg-muted" : "ml-auto bg-brand-red text-white"}`}
            >
              <p>{m.body}</p>
              <p className="mt-1 text-[10px] opacity-70">
                {m.author_role === "admin" ? "Équipe" : "Vous"} ·{" "}
                {new Date(m.created_at).toLocaleString()}
              </p>
            </div>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (body.trim()) sendMut.mutate();
            }}
            className="mt-4 flex gap-2"
          >
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Votre message…"
              className="flex-1 rounded-full border border-border bg-white px-4 py-2 text-sm outline-none focus:border-foreground"
            />
            <button
              disabled={sendMut.isPending || !body.trim()}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            >
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
