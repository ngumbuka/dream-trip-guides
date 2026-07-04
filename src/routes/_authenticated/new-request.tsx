import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { createRequest, signDocumentUpload, confirmDocument } from "@/lib/requests.functions";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";

const SERVICES = [
  { slug: "long-sejours", label: "Longs séjours" },
  { slug: "court-sejours", label: "Courts séjours" },
  { slug: "visite-afrique", label: "Visit Africa" },
  { slug: "logement", label: "Logement" },
  { slug: "caution-avi", label: "Caution bancaire & AVI" },
  { slug: "billets-avion", label: "Billets d'avion" },
  { slug: "accueil-integration", label: "Accueil & intégration" },
  { slug: "community-management", label: "Community management" },
  { slug: "visa", label: "Visa" },
];

export const Route = createFileRoute("/_authenticated/new-request")({
  validateSearch: (s: Record<string, unknown>) => ({
    service: typeof s.service === "string" ? s.service : undefined,
  }),
  component: NewRequestPage,
});

function NewRequestPage() {
  const { service } = Route.useSearch();
  const navigate = useNavigate();
  const initial = SERVICES.find((s) => s.slug === service) ?? SERVICES[0];
  const [slug, setSlug] = useState(initial.slug);
  const [destination, setDestination] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const createFn = useServerFn(createRequest);
  const signFn = useServerFn(signDocumentUpload);
  const confirmFn = useServerFn(confirmDocument);

  const mutation = useMutation({
    mutationFn: async () => {
      const label = SERVICES.find((s) => s.slug === slug)!.label;
      const { id } = await createFn({
        data: {
          service_slug: slug,
          service_label: label,
          destination_country: destination || null,
          target_date: targetDate || null,
          travelers_count: travelers,
          budget_range: budget || null,
          message,
        },
      });
      for (const f of files) {
        const signed = await signFn({
          data: { request_id: id, file_name: f.name, mime_type: f.type, size_bytes: f.size },
        });
        const { error } = await supabase.storage
          .from("request-documents")
          .uploadToSignedUrl(signed.path, signed.token, f);
        if (error) throw error;
        await confirmFn({
          data: {
            request_id: id,
            storage_path: signed.path,
            file_name: f.name,
            mime_type: f.type,
            size_bytes: f.size,
          },
        });
      }
      return id;
    },
    onSuccess: (id) => {
      toast.success("Demande envoyée !");
      navigate({ to: "/my-requests/$id", params: { id } });
    },
    onError: (e: Error) => toast.error(e.message ?? "Erreur lors de l'envoi"),
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Démarrer ma demande</h1>
      <p className="mt-3 text-muted-foreground">
        Décrivez votre projet — notre équipe vous répond sous 24h via la messagerie de votre espace.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate();
        }}
        className="mt-10 space-y-6 rounded-3xl border border-border bg-card p-8"
      >
        <div>
          <Label>Service souhaité</Label>
          <select value={slug} onChange={(e) => setSlug(e.target.value)} className={inp}>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Destination</Label>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="France, Canada, Cameroun…"
              className={inp}
            />
          </div>
          <div>
            <Label>Date de départ envisagée</Label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className={inp}
            />
          </div>
          <div>
            <Label>Nombre de voyageurs</Label>
            <input
              type="number"
              min={1}
              max={50}
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              className={inp}
            />
          </div>
          <div>
            <Label>Budget approximatif</Label>
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="ex. 2 000 — 4 000 €"
              className={inp}
            />
          </div>
        </div>
        <div>
          <Label>Votre projet en détail</Label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inp}
            placeholder="Parlez-nous de votre situation, vos objectifs, votre calendrier…"
          />
        </div>
        <div>
          <Label>Documents (passeport, diplômes, etc.)</Label>
          <label className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background px-4 py-6 text-sm text-muted-foreground hover:bg-muted">
            <Upload className="h-4 w-4" /> Ajouter des fichiers
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(e) => setFiles((prev) => [...prev, ...Array.from(e.target.files ?? [])])}
            />
          </label>
          {files.length > 0 && (
            <ul className="mt-3 space-y-2 text-sm">
              {files.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2"
                >
                  <span className="truncate">
                    {f.name}{" "}
                    <span className="text-muted-foreground">· {(f.size / 1024).toFixed(0)} KB</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setFiles((p) => p.filter((_, j) => j !== i))}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {mutation.isPending ? "Envoi…" : "Envoyer ma demande"}
        </button>
      </form>
    </div>
  );
}

const inp =
  "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground";
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </label>
  );
}
