import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Route, u as useServerFn, D as adminGetRequest, E as adminSendMessage, F as adminUpdateStatus, G as adminPostNote, B as signDocumentDownload } from "./router-DJhV2vx3.mjs";
import { u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { S as StatusBadge, a as STATUS_OPTIONS } from "./StatusBadge-AMFHrHmX.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { D as ArrowLeft, b4 as Download, g as Send } from "../_libs/lucide-react.mjs";
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
import "./client-DqghxSme.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./server-BODjEJm3.mjs";
import "node:async_hooks";
import "./auth-middleware-DoepXbKI.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
function AdminDetail() {
  const {
    id
  } = Route.useParams();
  const qc = useQueryClient();
  const getFn = useServerFn(adminGetRequest);
  const sendFn = useServerFn(adminSendMessage);
  const statusFn = useServerFn(adminUpdateStatus);
  const noteFn = useServerFn(adminPostNote);
  const dlFn = useServerFn(signDocumentDownload);
  const [body, setBody] = reactExports.useState("");
  const [note, setNote] = reactExports.useState("");
  const [visible, setVisible] = reactExports.useState(false);
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["admin-request", id],
    queryFn: () => getFn({
      data: {
        id
      }
    }),
    refetchInterval: 5e3
  });
  const sendMut = useMutation({
    mutationFn: () => sendFn({
      data: {
        request_id: id,
        body
      }
    }),
    onSuccess: () => {
      setBody("");
      qc.invalidateQueries({
        queryKey: ["admin-request", id]
      });
    },
    onError: (e) => toast.error(e.message)
  });
  const statusMut = useMutation({
    mutationFn: (status) => statusFn({
      data: {
        request_id: id,
        status,
        visible_to_user: true
      }
    }),
    onSuccess: () => {
      toast.success("Statut mis à jour");
      qc.invalidateQueries({
        queryKey: ["admin-request", id]
      });
      qc.invalidateQueries({
        queryKey: ["admin-list"]
      });
    },
    onError: (e) => toast.error(e.message)
  });
  const noteMut = useMutation({
    mutationFn: () => noteFn({
      data: {
        request_id: id,
        body: note,
        visible_to_user: visible
      }
    }),
    onSuccess: () => {
      setNote("");
      qc.invalidateQueries({
        queryKey: ["admin-request", id]
      });
    },
    onError: (e) => toast.error(e.message)
  });
  async function download(docId) {
    const {
      url
    } = await dlFn({
      data: {
        doc_id: docId
      }
    });
    window.open(url, "_blank");
  }
  if (isLoading || !data) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-3xl px-6 py-16", children: "Chargement…" });
  const {
    request: r,
    client,
    messages,
    updates,
    documents
  } = data;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Toutes les demandes"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold", children: r.service_label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
          client?.full_name ?? client?.email ?? "Client",
          " · ",
          client?.email,
          " ·",
          " ",
          client?.phone ?? "—"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { onChange: (e) => statusMut.mutate(e.target.value), value: r.status, className: "rounded-xl border border-border bg-white px-3 py-2 text-sm", children: STATUS_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Destination", value: r.destination_country }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Date envisagée", value: r.target_date }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Voyageurs", value: String(r.travelers_count) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Budget", value: r.budget_range }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Message", value: r.message }) })
    ] }),
    documents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Documents" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: documents.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: d.file_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => download(d.id), className: "inline-flex items-center gap-1 text-xs hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Télécharger"
        ] })
      ] }, d.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Notes & historique" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: updates.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-xl border border-border bg-card p-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            u.kind === "note" ? u.visible_to_user ? "Note client" : "Note interne" : "Changement de statut",
            " ",
            "· ",
            new Date(u.created_at).toLocaleString()
          ] }),
          u.new_status && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: u.new_status })
        ] }),
        u.body && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: u.body })
      ] }, u.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        if (note.trim()) noteMut.mutate();
      }, className: "mt-4 space-y-2 rounded-2xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: note, onChange: (e) => setNote(e.target.value), rows: 2, placeholder: "Ajouter une note…", className: "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: visible, onChange: (e) => setVisible(e.target.checked) }),
          " ",
          "Visible par le client"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white", children: "Ajouter la note" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Messagerie" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 rounded-3xl border border-border bg-card p-6", children: [
        messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Aucun message." }),
        messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[80%] rounded-2xl px-4 py-3 text-sm ${m.author_role === "user" ? "bg-muted" : "ml-auto bg-brand-red text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: m.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[10px] opacity-70", children: [
            m.author_role === "user" ? "Client" : "Vous (admin)",
            " ·",
            " ",
            new Date(m.created_at).toLocaleString()
          ] })
        ] }, m.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          if (body.trim()) sendMut.mutate();
        }, className: "mt-4 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: body, onChange: (e) => setBody(e.target.value), placeholder: "Répondre au client…", className: "flex-1 rounded-full border border-border bg-white px-4 py-2 text-sm outline-none focus:border-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: sendMut.isPending || !body.trim(), className: "inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white disabled:opacity-60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
            " Envoyer"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Info({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 whitespace-pre-wrap", children: value || "—" })
  ] });
}
export {
  AdminDetail as component
};
