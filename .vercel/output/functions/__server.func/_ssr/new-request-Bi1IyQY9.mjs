import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { p as Route$a, u as useServerFn, q as createRequest, s as signDocumentUpload, r as confirmDocument } from "./router-DJhV2vx3.mjs";
import { b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-DqghxSme.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { aX as Upload, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./server-BODjEJm3.mjs";
import "node:async_hooks";
import "./auth-middleware-DoepXbKI.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
const SERVICES = [{
  slug: "long-sejours",
  label: "Longs séjours"
}, {
  slug: "court-sejours",
  label: "Courts séjours"
}, {
  slug: "visite-afrique",
  label: "Visit Africa"
}, {
  slug: "logement",
  label: "Logement"
}, {
  slug: "caution-avi",
  label: "Caution bancaire & AVI"
}, {
  slug: "billets-avion",
  label: "Billets d'avion"
}, {
  slug: "accueil-integration",
  label: "Accueil & intégration"
}, {
  slug: "community-management",
  label: "Community management"
}, {
  slug: "visa",
  label: "Visa"
}];
function NewRequestPage() {
  const {
    service
  } = Route$a.useSearch();
  const navigate = useNavigate();
  const initial = SERVICES.find((s) => s.slug === service) ?? SERVICES[0];
  const [slug, setSlug] = reactExports.useState(initial.slug);
  const [destination, setDestination] = reactExports.useState("");
  const [targetDate, setTargetDate] = reactExports.useState("");
  const [travelers, setTravelers] = reactExports.useState(1);
  const [budget, setBudget] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [files, setFiles] = reactExports.useState([]);
  const createFn = useServerFn(createRequest);
  const signFn = useServerFn(signDocumentUpload);
  const confirmFn = useServerFn(confirmDocument);
  const mutation = useMutation({
    mutationFn: async () => {
      const label = SERVICES.find((s) => s.slug === slug).label;
      const {
        id
      } = await createFn({
        data: {
          service_slug: slug,
          service_label: label,
          destination_country: destination || null,
          target_date: targetDate || null,
          travelers_count: travelers,
          budget_range: budget || null,
          message
        }
      });
      for (const f of files) {
        const signed = await signFn({
          data: {
            request_id: id,
            file_name: f.name,
            mime_type: f.type,
            size_bytes: f.size
          }
        });
        const {
          error
        } = await supabase.storage.from("request-documents").uploadToSignedUrl(signed.path, signed.token, f);
        if (error) throw error;
        await confirmFn({
          data: {
            request_id: id,
            storage_path: signed.path,
            file_name: f.name,
            mime_type: f.type,
            size_bytes: f.size
          }
        });
      }
      return id;
    },
    onSuccess: (id) => {
      toast.success("Demande envoyée !");
      navigate({
        to: "/my-requests/$id",
        params: {
          id
        }
      });
    },
    onError: (e) => toast.error(e.message ?? "Erreur lors de l'envoi")
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold", children: "Démarrer ma demande" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Décrivez votre projet — notre équipe vous répond sous 24h via la messagerie de votre espace." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      mutation.mutate();
    }, className: "mt-10 space-y-6 rounded-3xl border border-border bg-card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service souhaité" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: slug, onChange: (e) => setSlug(e.target.value), className: inp, children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.slug, children: s.label }, s.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Destination" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: destination, onChange: (e) => setDestination(e.target.value), placeholder: "France, Canada, Cameroun…", className: inp })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date de départ envisagée" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: targetDate, onChange: (e) => setTargetDate(e.target.value), className: inp })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Nombre de voyageurs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 1, max: 50, value: travelers, onChange: (e) => setTravelers(Number(e.target.value)), className: inp })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Budget approximatif" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: budget, onChange: (e) => setBudget(e.target.value), placeholder: "ex. 2 000 — 4 000 €", className: inp })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Votre projet en détail" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, value: message, onChange: (e) => setMessage(e.target.value), className: inp, placeholder: "Parlez-nous de votre situation, vos objectifs, votre calendrier…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Documents (passeport, diplômes, etc.)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background px-4 py-6 text-sm text-muted-foreground hover:bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
          " Ajouter des fichiers",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, className: "hidden", onChange: (e) => setFiles((prev) => [...prev, ...Array.from(e.target.files ?? [])]) })
        ] }),
        files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: files.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
            f.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "· ",
              (f.size / 1024).toFixed(0),
              " KB"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFiles((p) => p.filter((_, j) => j !== i)), className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: mutation.isPending, className: "w-full rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white disabled:opacity-60", children: mutation.isPending ? "Envoi…" : "Envoyer ma demande" })
    ] })
  ] });
}
const inp = "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground";
function Label({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children });
}
export {
  NewRequestPage as component
};
