import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useQueryClient, a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { z as notFound, A as redirect, m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-DqghxSme.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BODjEJm3.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DoepXbKI.mjs";
import { z as zodValidator, f as fallback } from "../_libs/tanstack__zod-adapter.mjs";
import { R as Rocket, C as CircleUserRound, a as ChevronDown, L as LayoutDashboard, S as ShieldCheck, b as LogOut, c as LogIn, X, M as Menu, d as Mail, P as Phone, e as MapPin } from "../_libs/lucide-react.mjs";
import { _ as _enum, o as object, s as string, n as number, b as boolean } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "node:async_hooks";
function useServerFn(serverFn) {
  const router2 = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router2.stores.location.get();
        return router2.navigate(router2.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router2, serverFn]);
}
const appCss = "/assets/styles-COLl-_XD.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logo$1 = "/assets/logo-mark-CJuU0Uay.png";
function useAuthUser() {
  const [session, setSession] = reactExports.useState(null);
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setUser(s?.user ?? null);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  return { session, user, loading };
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const StatusEnum = _enum(["nouveau", "en_revue", "en_cours", "en_attente_client", "accepte", "refuse", "termine"]);
const CreateRequestSchema = object({
  service_slug: string().min(1).max(64),
  service_label: string().min(1).max(120),
  destination_country: string().max(120).optional().nullable(),
  target_date: string().optional().nullable(),
  // ISO yyyy-mm-dd
  travelers_count: number().int().min(1).max(50).default(1),
  budget_range: string().max(80).optional().nullable(),
  message: string().min(1).max(4e3)
});
const createRequest = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => CreateRequestSchema.parse(input)).handler(createSsrRpc("57571f98c5b68b1f6eee0b076a7c89da8e1b94e17d7cbd14783b34d49d9135bc"));
const listMyRequests = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("4b88c82fc0046a589bdb5580d2d2540f1499d5e2e36a6a47a5cdff6c0891f1f7"));
const getMyRequest = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  id: string().uuid()
}).parse(input)).handler(createSsrRpc("089c72412f93f1416d2bf726f4fa80f3b89c4d0586e26fbb0cef9a48791858f2"));
const sendMessage = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  body: string().min(1).max(4e3)
}).parse(input)).handler(createSsrRpc("958d12fa80880f49141ff90b04138c8f13f09d1a6342d73dd63a333c5a745307"));
const signDocumentUpload = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  file_name: string().min(1).max(255),
  mime_type: string().max(120).optional(),
  size_bytes: number().int().min(0).max(20 * 1024 * 1024)
}).parse(input)).handler(createSsrRpc("19e0e2d85082fac3e85c0c4f2a6905bd3da95a95bf47cc16bbd3034dc25b2216"));
const confirmDocument = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  storage_path: string().min(1),
  file_name: string().min(1).max(255),
  mime_type: string().max(120).optional(),
  size_bytes: number().int().min(0)
}).parse(input)).handler(createSsrRpc("570720446cb81e022cc77f4efb085c99cb118d840e7e2b7f24260276a67215ef"));
const signDocumentDownload = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  doc_id: string().uuid()
}).parse(input)).handler(createSsrRpc("7a9e8d86b4cf90b5d247940d885d5ee0eef9f5e181a7143d237d6c04617adbd6"));
const isCurrentUserAdmin = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("6886b7c3bb200c347a7eb971e3789747afcfae32f95c41cbdd265178d87b2c78"));
const adminListRequests = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  status: StatusEnum.optional()
}).parse(input ?? {})).handler(createSsrRpc("654365c233888f5c7fe5db80b5200ee5056b6fdfdd40aed1903df648291ebedd"));
const adminGetRequest = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  id: string().uuid()
}).parse(input)).handler(createSsrRpc("6391437212f702517efd5c4eb7d368af5180dc701221848a638083d187b00579"));
const adminSendMessage = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  body: string().min(1).max(4e3)
}).parse(input)).handler(createSsrRpc("fc89d89582f808e0a91b0f59e34216b275ee06d9580f97b3f39a6e0b2d080be8"));
const adminUpdateStatus = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  status: StatusEnum,
  note: string().max(2e3).optional(),
  visible_to_user: boolean().default(true)
}).parse(input)).handler(createSsrRpc("1e65b66c2291de4522b81567e62efc4fc07402f8e0de82ef2589b5cbccdce7ce"));
const adminPostNote = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => object({
  request_id: string().uuid(),
  body: string().min(1).max(2e3),
  visible_to_user: boolean().default(false)
}).parse(input)).handler(createSsrRpc("d1436d77c92e223c084759a4bebacf3f0d1a0d1d5eab7388fd2a4864018d49e5"));
const serviceItems = [
  { to: "/services/long-sejours", label: "Longs séjours" },
  { to: "/services/court-sejours", label: "Courts séjours" },
  { to: "/services/formations", label: "Formations linguistiques" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  const [userOpen, setUserOpen] = reactExports.useState(false);
  const { user, loading } = useAuthUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const adminFn = useServerFn(isCurrentUserAdmin);
  const { data: adm } = useQuery({
    queryKey: ["is-admin"],
    queryFn: () => adminFn({}),
    enabled: !!user,
    retry: 0
  });
  async function handleSignOut() {
    setUserOpen(false);
    setOpen(false);
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex shrink-0 items-center gap-3", onClick: () => setOpen(false), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo$1, alt: "VoyageonsEnsemble", className: "h-10 w-auto", width: 120, height: 40 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "hidden text-lg font-semibold tracking-tight text-foreground 2xl:inline",
            style: { fontFamily: "var(--font-display)" },
            children: [
              "Voyageons",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-red", children: "Ensemble" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-5 xl:gap-6 2xl:gap-8 xl:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            activeOptions: { exact: true },
            activeProps: { className: "text-foreground" },
            inactiveProps: { className: "text-muted-foreground" },
            className: "whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground",
            children: "Accueil"
          }
        ),
        serviceItems.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: s.to,
            activeProps: { className: "text-foreground" },
            inactiveProps: { className: "text-muted-foreground" },
            className: "whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground",
            children: s.label
          },
          s.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/about",
            activeProps: { className: "text-foreground" },
            inactiveProps: { className: "text-muted-foreground" },
            className: "whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground",
            children: "À propos"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            activeProps: { className: "text-foreground" },
            inactiveProps: { className: "text-muted-foreground" },
            className: "whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground",
            children: "Contact"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/new-request",
            search: { service: void 0 },
            className: "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
              " Démarrer"
            ]
          }
        ),
        loading ? null : user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => setUserOpen(true),
            onMouseLeave: () => setUserOpen(false),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[100px] truncate xl:max-w-[140px]", children: user.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" })
              ] }),
              userOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-full z-50 w-60 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-elegant)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/my-requests",
                    onClick: () => setUserOpen(false),
                    className: "flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground hover:bg-muted",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4" }),
                      " Mon espace"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/account",
                    onClick: () => setUserOpen(false),
                    className: "flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground hover:bg-muted",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { className: "h-4 w-4" }),
                      " Mon compte"
                    ]
                  }
                ),
                adm?.isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/admin",
                    onClick: () => setUserOpen(false),
                    className: "flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground hover:bg-muted",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
                      " Espace admin"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: handleSignOut,
                    className: "flex w-full items-center gap-2 border-t border-border px-5 py-3 text-left text-sm font-medium text-foreground hover:bg-muted",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                      " Se déconnecter"
                    ]
                  }
                )
              ] }) })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/auth",
            className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
              " Connexion"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "xl:hidden", onClick: () => setOpen((v) => !v), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background xl:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/new-request",
          search: { service: void 0 },
          onClick: () => setOpen(false),
          className: "inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-center text-sm font-semibold text-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
            " Démarrer mon projet"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 border-t border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted",
          children: "Accueil"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/services",
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted",
          children: "Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3 flex flex-col border-l border-border pl-3", children: serviceItems.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: s.to,
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
          children: s.label
        },
        s.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/about",
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted",
          children: "À propos"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted",
          children: "Contact"
        }
      ),
      user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 border-t border-border pt-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/my-requests",
            onClick: () => setOpen(false),
            className: "flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4" }),
              " Mon espace"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/account",
            onClick: () => setOpen(false),
            className: "flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { className: "h-4 w-4" }),
              " Mon compte"
            ]
          }
        ),
        adm?.isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/admin",
            onClick: () => setOpen(false),
            className: "flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
              " Espace admin"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleSignOut,
            className: "flex items-center gap-2 rounded-md px-3 py-2 text-left text-base font-medium text-foreground hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
              " Se déconnecter"
            ]
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/auth",
          onClick: () => setOpen(false),
          className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
            " Connexion"
          ]
        }
      )
    ] }) })
  ] });
}
const logo = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAwIDIwMDAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7Zm9udC1zaXplOjE3OS44cHg7Zm9udC1mYW1pbHk6QmVsZ2FuQWVzdGhldGljLVJlZ3VsYXIsIEJlbGdhbiBBZXN0aGV0aWM7fS5jbHMtMSwuY2xzLTZ7ZmlsbDojMTAxYzM5O30uY2xzLTJ7bGV0dGVyLXNwYWNpbmc6LTAuMDdlbTt9LmNscy0ze2xldHRlci1zcGFjaW5nOi0wLjAyZW07fS5jbHMtNHtsZXR0ZXItc3BhY2luZzowZW07fS5jbHMtNXtmaWxsOiNjYzQyNTg7fS5jbHMtN3tmb250LXNpemU6NDMuMjVweDtmaWxsOiMyMzFmMjA7Zm9udC1mYW1pbHk6TW9udHNlcnJhdC1MaWdodCwgTW9udHNlcnJhdDtmb250LXdlaWdodDozMDA7fS5jbHMtOHtsZXR0ZXItc3BhY2luZzotMC4wMWVtO30uY2xzLTl7bGV0dGVyLXNwYWNpbmc6MGVtO30uY2xzLTEwe2xldHRlci1zcGFjaW5nOi0wLjA0ZW07fTwvc3R5bGU+PC9kZWZzPjx0ZXh0IGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIzLjg5IDExNTEuNjMpIj48dHNwYW4gY2xhc3M9ImNscy0yIj5WPC90c3Bhbj48dHNwYW4gY2xhc3M9ImNscy0zIiB4PSIxMDkuODYiIHk9IjAiPm88L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTQiIHg9IjE5OS43NiIgeT0iMCI+eWFnZW9uczwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNSIgeD0iODM3Ljg2IiB5PSIwIj5FbnNlbWJsZTwvdHNwYW4+PC90ZXh0PjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTEzNzQsODI3LjMyYy0xMy43NC0yLjI3LTI3LjQyLTQuOS00MS4yMS02LjcyLTI0LjE4LTMuMi00OC4zNS03LjA4LTcyLjY1LTguNS0yOS44NC0xLjc1LTU4LjEsNy4zMy04NS45MywxNy0yOC44MiwxMC4wNi01Ny42MiwyMC4xOC04Ni4yMiwzMC44NS05LjgzLDMuNjctMTguMzUuMDktMjctMi43NC0zOC43LTEyLjcxLTcxLjA4LTM1LjE3LTk4LjU3LTY1LTMuNzMtNC01LTcuNTEtLjUyLTEyLjA4LDM1LjU5LTM2LjMyLDczLjYzLTY4LjU4LDEyNi4zNS03Ni40OGExODQsMTg0LDAsMCwxLDI2LjMxLTIuMTNjNDguMTctLjIxLDk2LjM0LS4xMywxNDQuNTEtLjEyYTEzLDEzLDAsMCwxLDcuMzMsMkwxMTU4LDc5OC44NGwuNDEuOTJjMy41LTEuNTEsNy0zLDEwLjQ4LTQuNTMsNDkuNTItMjIuMzQsMTAwLjUyLTIyLjIxLDE1Mi05LDM2Ljc3LDkuNDYsNzMuMjIsMjAuMiwxMDkuODEsMzAuNDEsMS40Mi4zOSwyLjcsMS4yNyw1LjUyLDIuNjQtOC4xMSw2LjYtMTUuMTksMTIuNzgtMjIuNjgsMTguNDItNDguNjMsMzYuNjItMTAzLDYxLjY2LTE2MC44NSw3OS43NWE2NDMuNzIsNjQzLjcyLDAsMCwxLTEyMy4zNiwyNS40NCw2MzYuMjUsNjM2LjI1LDAsMCwxLTExOSwyLjA1Yy02MS00Ljg1LTEyMC4xNy0xOC0xNzgtMzcuNTItNTUuNjktMTguNzUtMTA2LjA4LTQ3LjMzLTE1MS4yNy04NC42OS0zMS41MS0yNi02MS45My01My4zOS05Mi43NS04MC4yNS0xNC43OC0xMi44OC0yOS4zNy0yNi00NS42Mi00MC4zMyw0LjM3LS4yNiw2Ljg5LS41NSw5LjQtLjU1cTg2LjE3LDAsMTcyLjM0LS4wNmM0My44Mi0uMDYsODIuNjMsMTQsMTE2LjA4LDQyLjA3LDM0LjY0LDI5LjA3LDY5LjEsNTguMjksMTA3LjI2LDgyLjgxLDQ0LjE1LDI4LjM2LDkwLjg0LDUwLjQ0LDE0Mi44Nyw2MCwzNy41Nyw2Ljk0LDc1LjExLDYuMzYsMTEyLjYyLjA4LDUyLjU2LTguODEsMTAyLjIxLTI2Ljg2LDE1MC43LTQ4LjQxLDYuNzctMywxMy41My02LDIwLjI5LTkuMDdaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTUiIGN4PSI5MDYuMzkiIGN5PSI3MjUuNDciIHI9IjI0LjAzIi8+PHRleHQgY2xhc3M9ImNscy03IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MzcuNDcgMTI1Ny45MikiPjx0c3BhbiBjbGFzcz0iY2xzLTgiPlA8L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTkiIHg9IjMwLjQ5IiB5PSIwIj5ST0ZFU1NJT05OQUxJU01FIC0gRklBQklMSVTDiSAtIFRSQU5TPC90c3Bhbj48dHNwYW4gY2xhc3M9ImNscy0xMCIgeD0iOTI1LjE4IiB5PSIwIj5QPC90c3Bhbj48dHNwYW4geD0iOTU0LjE1IiB5PSIwIj5BUkVOQ0UgPC90c3Bhbj48L3RleHQ+PC9zdmc+";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 bg-brand-navy text-[#e8ecf3]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Voyageons Ensemble", className: "h-12 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-white/70", children: "Votre partenaire de mobilité internationale. Ensemble, nous rendons votre mobilité plus facile, plus sûre et plus enrichissante." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-white", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-white", children: "Accueil" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-white", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-white", children: "À propos" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-white", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-white", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4" }),
            " contact@voyageonsensemble.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4" }),
            " +33 7 00 00 00 00"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4" }),
            " Paris, France · Douala, Cameroun"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " VoyageonsEnsemble. Tous droits réservés."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Ensemble, plus loin." })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$X = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VoyageonsEnsemble — Votre partenaire de mobilité internationale" },
      {
        name: "description",
        content: "Accompagnement administratif et logistique pour vos études, courts séjours, longs séjours et voyages au Cameroun."
      },
      { name: "author", content: "VoyageonsEnsemble" },
      {
        property: "og:title",
        content: "VoyageonsEnsemble — Votre partenaire de mobilité internationale"
      },
      {
        property: "og:description",
        content: "Accompagnement administratif et logistique pour vos études, courts séjours, longs séjours et voyages au Cameroun."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "VoyageonsEnsemble — Votre partenaire de mobilité internationale"
      },
      {
        name: "twitter:description",
        content: "Accompagnement administratif et logistique pour vos études, courts séjours, longs séjours et voyages au Cameroun."
      },
      {
        property: "og:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/OLnkiIGM9GgQA2kKLPBrIEXzR8D3/social-images/social-1781125176361-Voyageons_Ensemble-02.webp"
      },
      {
        name: "twitter:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/OLnkiIGM9GgQA2kKLPBrIEXzR8D3/social-images/social-1781125176361-Voyageons_Ensemble-02.webp"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$X.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$W = () => import("./search-Cu5rE-mM.mjs");
const schema = object({
  q: fallback(string(), "").default(""),
  type: fallback(_enum(["Long séjour", "Court séjour", "Visit Africa"]), "Long séjour").default("Long séjour")
});
const Route$W = createFileRoute("/search")({
  validateSearch: zodValidator(schema),
  head: () => ({
    meta: [{
      title: "Recherche — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Trouvez votre destination et nos services dédiés."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$W, "component")
});
const $$splitComponentImporter$V = () => import("./request-BTU5dmpx.mjs");
const Route$V = createFileRoute("/request")({
  validateSearch: (s) => ({
    service: typeof s.service === "string" ? s.service : void 0
  }),
  beforeLoad: ({
    search
  }) => {
    throw redirect({
      to: "/new-request",
      search
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$V, "component")
});
const $$splitComponentImporter$U = () => import("./contact-9kAGzM0P.mjs");
const Route$U = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Contactez-nous pour démarrer votre projet de mobilité internationale."
    }, {
      property: "og:title",
      content: "Contact — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Discutons de votre projet. Réponse sous 24h."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$U, "component")
});
const $$splitComponentImporter$T = () => import("./auth-C1yVrGC4.mjs");
const Route$T = createFileRoute("/auth")({
  head: () => ({
    meta: [{
      title: "Connexion — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Connectez-vous ou créez votre compte pour suivre vos demandes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$T, "component")
});
const $$splitComponentImporter$S = () => import("./about-CD3MAqNl.mjs");
const Route$S = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "À propos — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Notre histoire, notre vision, notre mission et nos fondateurs."
    }, {
      property: "og:title",
      content: "À propos — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Quand l'expérience personnelle inspire l'accompagnement."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$S, "component")
});
const $$splitComponentImporter$R = () => import("./route-BFsOu0JM.mjs");
const Route$R = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const {
      data,
      error
    } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({
      to: "/auth"
    });
    return {
      user: data.user
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$R, "component")
});
const $$splitComponentImporter$Q = () => import("./index-8msT-BQf.mjs");
const Route$Q = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "VoyageonsEnsemble — Mobilité internationale, sans stress"
    }, {
      name: "description",
      content: "Études, visas, courts et longs séjours, voyages en Afrique : nous gérons toute la logistique de votre voyage."
    }, {
      property: "og:title",
      content: "VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Votre partenaire de mobilité internationale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$Q, "component")
});
const $$splitComponentImporter$P = () => import("./services.index-DtBRj10W.mjs");
const Route$P = createFileRoute("/services/")({
  head: () => ({
    meta: [{
      title: "Services — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Longs séjours, courts séjours, voyages en Afrique : un accompagnement complet."
    }, {
      property: "og:title",
      content: "Nos services — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Un soutien complet à chaque étape de votre mobilité."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$P, "component")
});
const image$7 = "/assets/service-cameroun-D6-pNx7j.jpg";
const $$splitComponentImporter$O = () => import("./services.visite-afrique-Bbh6h9wb.mjs");
const Route$O = createFileRoute("/services/visite-afrique")({
  head: () => ({
    meta: [{
      title: "Visit Africa — Safaris, plages, circuits & séjours | VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Découvrez l'Afrique autrement : Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Cameroun. Safaris, plages, déserts, métropoles — circuits sur mesure."
    }, {
      property: "og:title",
      content: "Visit Africa — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Safaris, plages, déserts, métropoles : l'Afrique sur mesure, organisée de A à Z."
    }, {
      property: "og:image",
      content: image$7
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$O, "component")
});
const image$6 = "/assets/service-court-B-o-blee.jpg";
const $$splitComponentImporter$N = () => import("./services.visa-schengen-B4qt3R1j.mjs");
const Route$N = createFileRoute("/services/visa-schengen")({
  head: () => ({
    meta: [{
      title: "Visa Schengen — Tourisme, vacances, affaires | VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Visa Schengen pour la France, la Belgique, l'Allemagne et l'espace européen : constitution du dossier, prise de rendez-vous, suivi jusqu'à l'obtention."
    }, {
      property: "og:title",
      content: "Visa Schengen — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Un dossier béton, des chances maximisées."
    }, {
      property: "og:image",
      content: image$6
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$N, "component")
});
const $$splitComponentImporter$M = () => import("./services.tarifs-negocies-CEn3djIE.mjs");
const Route$M = createFileRoute("/services/tarifs-negocies")({
  head: () => ({
    meta: [{
      title: "Tarifs négociés sur les vols — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Profitez de nos accords avec les compagnies aériennes pour voyager au meilleur prix."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$M, "component")
});
const $$splitComponentImporter$L = () => import("./services.suivi-recours-wLgThUCq.mjs");
const Route$L = createFileRoute("/services/suivi-recours")({
  head: () => ({
    meta: [{
      title: "Suivi & Recours Visa — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Suivi de votre demande de visa et assistance juridique en cas de refus."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$L, "component")
});
const $$splitComponentImporter$K = () => import("./services.signature-bail-CzpJr6Mg.mjs");
const Route$K = createFileRoute("/services/signature-bail")({
  head: () => ({
    meta: [{
      title: "Signature du bail & État des lieux — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Soyez accompagné lors de la signature de votre contrat de location et de l'état des lieux."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$K, "component")
});
const $$splitComponentImporter$J = () => import("./services.seo-ads-zn8uCpEI.mjs");
const Route$J = createFileRoute("/services/seo-ads")({
  head: () => ({
    meta: [{
      title: "SEO & Publicité en ligne (Ads) — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Référencement naturel et campagnes publicitaires pour booster votre visibilité en ligne."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$J, "component")
});
const $$splitComponentImporter$I = () => import("./services.selection-logements-CPSPwnL0.mjs");
const Route$I = createFileRoute("/services/selection-logements")({
  head: () => ({
    meta: [{
      title: "Sélection de logements — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Trouvez le logement idéal : résidences étudiantes, colocations, studios ou appartements privés."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$I, "component")
});
const $$splitComponentImporter$H = () => import("./services.safaris-excursions-vIMFTp5M.mjs");
const Route$H = createFileRoute("/services/safaris-excursions")({
  head: () => ({
    meta: [{
      title: "Safaris & Excursions — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Vivez des aventures extraordinaires, des safaris animaliers aux randonnées immersives."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$H, "component")
});
const $$splitComponentImporter$G = () => import("./services.reservations-vfs-BS5C9TeT.mjs");
const Route$G = createFileRoute("/services/reservations-vfs")({
  head: () => ({
    meta: [{
      title: "Réservations de vols et hôtels pour Visa — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Réservations de billets d'avion et d'hôtels conformes aux exigences des centres de visas (VFS, TLS)."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$G, "component")
});
const $$splitComponentImporter$F = () => import("./services.reseaux-sociaux-BxI7GyOM.mjs");
const Route$F = createFileRoute("/services/reseaux-sociaux")({
  head: () => ({
    meta: [{
      title: "Gestion des Réseaux Sociaux — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Animation de vos comptes Facebook, Instagram, LinkedIn, TikTok pour développer votre communauté."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$F, "component")
});
const $$splitComponentImporter$E = () => import("./services.reporting-performance-_7dyIMZS.mjs");
const Route$E = createFileRoute("/services/reporting-performance")({
  head: () => ({
    meta: [{
      title: "Reporting & Performance — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Suivez vos résultats en temps réel avec nos rapports d'analyse de performance digitale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$E, "component")
});
const $$splitComponentImporter$D = () => import("./services.rendez-vous-consulat-DjCYiRwk.mjs");
const Route$D = createFileRoute("/services/rendez-vous-consulat")({
  head: () => ({
    meta: [{
      title: "Prise de rendez-vous consulaire — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Obtenez un rendez-vous rapidement pour déposer votre demande de visa au consulat ou chez VFS/TLS."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$D, "component")
});
const $$splitComponentImporter$C = () => import("./services.projet-etudes-D2FcxQ_4.mjs");
const Route$C = createFileRoute("/services/projet-etudes")({
  head: () => ({
    meta: [{
      title: "Projet d'études & Motivation — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Rédaction de votre projet d'études, CV et lettre de motivation pour vos candidatures."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$C, "component")
});
const $$splitComponentImporter$B = () => import("./services.programme-integration-D7PebicV.mjs");
const Route$B = createFileRoute("/services/programme-integration")({
  head: () => ({
    meta: [{
      title: "Programme d'intégration — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Rencontrez d'autres étudiants et découvrez votre nouvelle ville grâce à notre programme d'intégration."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./services.plateformes-admission-DdyWELph.mjs");
const Route$A = createFileRoute("/services/plateformes-admission")({
  head: () => ({
    meta: [{
      title: "Plateformes d'Admission (Campus France, etc.) — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Gestion complète de vos candidatures sur les plateformes officielles : Campus France, Uni-Assist, Parcoursup."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const image$5 = "/assets/service-long-BlQGC09H.jpg";
const $$splitComponentImporter$z = () => import("./services.long-sejours-TzIapN4h.mjs");
const Route$z = createFileRoute("/services/long-sejours")({
  head: () => ({
    meta: [{
      title: "Longs séjours — Études & installation | VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Admission universitaire, visa long séjour, AVI, logement et accueil : un accompagnement complet pour étudier ou s'installer en Europe et au Canada."
    }, {
      property: "og:title",
      content: "Longs séjours — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Études, travail, installation durable : tout l'admin géré pour vous."
    }, {
      property: "og:image",
      content: image$5
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const image$4 = "/assets/service-logement-CIY9q8Ip.jpg";
const $$splitComponentImporter$y = () => import("./services.logement-C5O2GAJG.mjs");
const Route$y = createFileRoute("/services/logement")({
  head: () => ({
    meta: [{
      title: "Recherche de logement — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Résidences étudiantes, colocations ou studios : nous trouvons un logement sécurisé, adapté à votre budget et géré de A à Z."
    }, {
      property: "og:title",
      content: "Recherche de logement — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Un logement confortable et sécurisé dans votre nouvelle destination."
    }, {
      property: "og:image",
      content: image$4
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./services.lettre-acceptation-DB3CF28S.mjs");
const Route$x = createFileRoute("/services/lettre-acceptation")({
  head: () => ({
    meta: [{
      title: "Lettre d'Acceptation & Inscription — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Réception de vos admissions, choix final et confirmation d'inscription."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./services.identite-visuelle-DekByZ_U.mjs");
const Route$w = createFileRoute("/services/identite-visuelle")({
  head: () => ({
    meta: [{
      title: "Identité visuelle & Branding — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Création de logo, charte graphique et supports visuels pour démarquer votre marque."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./services.hotline-continue-DBjk0uMA.mjs");
const Route$v = createFileRoute("/services/hotline-continue")({
  head: () => ({
    meta: [{
      title: "Hotline continue & Assistance — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Une assistance 7j/7 pour répondre à toutes vos questions et urgences lors de votre installation."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./services.gestion-bagages-C8SqLXle.mjs");
const Route$u = createFileRoute("/services/gestion-bagages")({
  head: () => ({
    meta: [{
      title: "Gestion des Bagages — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Conseils et optimisation de vos franchises bagages pour un départ sans supplément."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./services.gastronomie-locale-kPesJnQC.mjs");
const Route$t = createFileRoute("/services/gastronomie-locale")({
  head: () => ({
    meta: [{
      title: "Expériences gastronomiques — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Découvrez les saveurs locales et les meilleures tables de votre destination."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./services.formulaires-pieces-BfbqQdj6.mjs");
const Route$s = createFileRoute("/services/formulaires-pieces")({
  head: () => ({
    meta: [{
      title: "Formulaires & Pièces justificatives — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Assistance complète pour le remplissage des formulaires et la compilation de vos pièces justificatives."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./services.emission-billets-DWkKwJPo.mjs");
const Route$r = createFileRoute("/services/emission-billets")({
  head: () => ({
    meta: [{
      title: "Émission de billets d'avion — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Réservation et émission de vos billets d'avion de manière sécurisée et rapide."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./services.dossier-visa-CQThE3c3.mjs");
const Route$q = createFileRoute("/services/dossier-visa")({
  head: () => ({
    meta: [{
      title: "Dossier visa long séjour — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Visa étudiant, travail, regroupement familial : constitution complète, prise de rendez-vous consulat, suivi jusqu'à la décision."
    }, {
      property: "og:title",
      content: "Dossier visa — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Un dossier visa solide pour une décision favorable."
    }, {
      property: "og:image",
      content: image$5
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./services.dossier-locataire-C28vc5Kg.mjs");
const Route$p = createFileRoute("/services/dossier-locataire")({
  head: () => ({
    meta: [{
      title: "Montage du dossier locataire — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Un dossier locataire en béton pour convaincre les propriétaires et agences immobilières."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./services.creation-sites-web-De3Pw5zp.mjs");
const Route$o = createFileRoute("/services/creation-sites-web")({
  head: () => ({
    meta: [{
      title: "Création de sites web — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Conception de sites vitrines et e-commerce modernes, performants et orientés conversion."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./services.court-sejours-DXX7EjCm.mjs");
const Route$n = createFileRoute("/services/court-sejours")({
  head: () => ({
    meta: [{
      title: "Courts séjours — Visa & voyages | VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Visa Schengen, billets, hébergement et itinéraires sur mesure pour vos vacances et voyages d'affaires."
    }, {
      property: "og:title",
      content: "Courts séjours — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Vivez l'expérience d'un voyage clé en main."
    }, {
      property: "og:image",
      content: image$6
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./services.compte-bloque-CTlAJ5A3.mjs");
const Route$m = createFileRoute("/services/compte-bloque")({
  head: () => ({
    meta: [{
      title: "Compte bloqué & Caution Bancaire — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Ouverture de compte bloqué (Sperrkonto, AVI) pour répondre aux exigences financières des visas étudiants."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const image$3 = "/assets/service-community-aSU38ZGO.jpg";
const $$splitComponentImporter$l = () => import("./services.community-management-BREYoh9q.mjs");
const Route$l = createFileRoute("/services/community-management")({
  head: () => ({
    meta: [{
      title: "Community Management & Marketing Digital — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Gestion de réseaux sociaux, SEO, sites web et identité visuelle : votre communauté, votre image, votre impact."
    }, {
      property: "og:title",
      content: "Community Management & Marketing Digital — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Votre communauté, votre image, votre impact."
    }, {
      property: "og:image",
      content: image$3
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./services.circuits-multi-pays-COW8csYs.mjs");
const Route$k = createFileRoute("/services/circuits-multi-pays")({
  head: () => ({
    meta: [{
      title: "Circuits multi-pays en Afrique — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Découvrez plusieurs pays africains lors d'un seul voyage sur mesure."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./services.choix-etablissements-TfA-dbnU.mjs");
const Route$j = createFileRoute("/services/choix-etablissements")({
  head: () => ({
    meta: [{
      title: "Choix des Établissements & Orientation — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Trouvez l'université ou l'école idéale pour vos études supérieures à l'étranger."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./services.chauffeur-transferts-C7AqkJTi.mjs");
const Route$i = createFileRoute("/services/chauffeur-transferts")({
  head: () => ({
    meta: [{
      title: "Chauffeur privé & Transferts — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Déplacez-vous en toute sécurité et confort avec nos chauffeurs privés."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const image$2 = "/assets/service-caution-JYcytDal.jpg";
const $$splitComponentImporter$h = () => import("./services.caution-avi-B3mD8EoG.mjs");
const Route$h = createFileRoute("/services/caution-avi")({
  head: () => ({
    meta: [{
      title: "Caution bancaire & AVI — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Compte de garantie bloqué et Assurance Visa International : nous sécurisons votre dossier financier pour respecter les exigences consulaires."
    }, {
      property: "og:title",
      content: "Caution bancaire & AVI — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Respectez les exigences financières de vos études et de votre visa."
    }, {
      property: "og:image",
      content: image$2
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const image$1 = "/assets/service-billets-CxTi_mgU.jpg";
const $$splitComponentImporter$g = () => import("./services.billets-avion-CFIOwPZL.mjs");
const Route$g = createFileRoute("/services/billets-avion")({
  head: () => ({
    meta: [{
      title: "Réservation de billets d'avion — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Tarifs négociés, billets flexibles et conseils voyage : nous organisons votre départ dans les meilleures conditions."
    }, {
      property: "og:title",
      content: "Billets d'avion — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Tarifs avantageux et accompagnement pour vos vols internationaux."
    }, {
      property: "og:image",
      content: image$1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./services.audit-dossier-visa-cghDgy3W.mjs");
const Route$f = createFileRoute("/services/audit-dossier-visa")({
  head: () => ({
    meta: [{
      title: "Audit de dossier de visa — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Faites évaluer votre dossier de visa par nos experts avant de le soumettre pour maximiser vos chances."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./services.assurance-visa-BpFeH_Ew.mjs");
const Route$e = createFileRoute("/services/assurance-visa")({
  head: () => ({
    meta: [{
      title: "Assurance voyage & Visa — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Assurance médicale et rapatriement conforme aux exigences Schengen et internationales."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./services.admission-etudes-eiZDeEoL.mjs");
const Route$d = createFileRoute("/services/admission-etudes")({
  head: () => ({
    meta: [{
      title: "Admission études supérieures — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Campus France, Uni-Assist, universités et écoles privées : nous bâtissons votre dossier d'admission et le suivons jusqu'à l'acceptation."
    }, {
      property: "og:title",
      content: "Admission études — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "De la sélection des établissements à l'admission définitive."
    }, {
      property: "og:image",
      content: image$5
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const image = "/assets/service-accueil-idE3D2oL.jpg";
const $$splitComponentImporter$c = () => import("./services.accueil-integration-CHQ5McCv.mjs");
const Route$c = createFileRoute("/services/accueil-integration")({
  head: () => ({
    meta: [{
      title: "Accueil & intégration — VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Accueil aéroport, démarches administratives et programme d'intégration : votre arrivée se passe dans les meilleures conditions."
    }, {
      property: "og:title",
      content: "Accueil & intégration — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Une arrivée en douceur et une intégration réussie."
    }, {
      property: "og:image",
      content: image
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const hero2 = "/assets/dest-france-RWN_-Vfz.jpg";
const hero4 = "/assets/dest-canada-Dlrfx7LY.jpg";
const imgGermany = "/assets/dest-germany-gB25Nl1s.jpg";
const imgBelgium = "/assets/dest-belgium-DTm7DCj2.jpg";
const hero3 = "/assets/dest-cameroun-ixJ9cLkk.jpg";
const destinations = {
  france: {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    tagline: "Excellence académique, art de vivre.",
    image: hero2,
    accent: "#0055A4",
    intro: "Première destination des étudiants camerounais, la France offre un système universitaire reconnu, une vie culturelle riche et un statut étudiant protégé (CAF, sécurité sociale, transport).",
    highlights: [
      {
        title: "Campus France obligatoire",
        desc: "Procédure « Études en France » pour tous les dossiers d'admission depuis le Cameroun."
      },
      {
        title: "Frais réduits",
        desc: "Universités publiques accessibles, bourses (Eiffel, Erasmus+) disponibles."
      },
      {
        title: "Travail étudiant",
        desc: "Jusqu'à 964 h/an autorisées avec le titre de séjour étudiant."
      }
    ],
    cities: [
      {
        name: "Paris",
        desc: "Sorbonne, Sciences Po, Dauphine — capitale académique et culturelle."
      },
      { name: "Lyon", desc: "Pôle business, ingénierie et santé, qualité de vie reconnue." },
      { name: "Toulouse", desc: "Aéronautique, ingénierie, recherche spatiale." },
      { name: "Montpellier", desc: "Ville étudiante du Sud, médecine et droit." }
    ],
    visa: {
      types: [
        {
          name: "VLS-TS Étudiant",
          desc: "Visa long séjour valant titre de séjour, dès 6 mois d'études."
        },
        {
          name: "Visa court séjour Schengen",
          desc: "Tourisme, visite famille, séjour < 90 jours."
        }
      ],
      timeline: "Campus France : 2-3 mois. Visa : 2-4 semaines après acceptation.",
      documents: [
        "Passeport valide 3 mois après retour",
        "Acceptation Campus France / établissement",
        "Justificatif de ressources (877,80 €/mois minimum, au 01/08/2026)",
        "Attestation de logement",
        "Assurance voyage / OFII"
      ]
    },
    practical: [
      { label: "Monnaie", value: "Euro (€)" },
      { label: "Langue", value: "Français" },
      { label: "Coût de vie étudiant", value: "877,80 €/mois (au 01/08/2026)" },
      { label: "Logement (CROUS)", value: "> 200 €/mois" }
    ],
    tips: [
      "Ouvrez votre dossier Campus France dès octobre pour la rentrée suivante.",
      "Demandez l'APL auprès de la CAF dès votre arrivée.",
      "La sécurité sociale étudiante est gratuite et automatique."
    ],
    serviceFocus: [
      { label: "Long séjour & études", to: "/services/long-sejours" },
      { label: "Court séjour & visa", to: "/services/court-sejours" },
      { label: "Logement étudiant", to: "/services/logement" },
      { label: "Caution & AVI", to: "/services/caution-avi" },
      { label: "Accueil & intégration", to: "/services/accueil-integration" }
    ]
  },
  canada: {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Études d'excellence, voie vers la résidence.",
    image: hero4,
    accent: "#D52B1E",
    intro: "Le Canada combine universités de classe mondiale, marché du travail accueillant et parcours clair vers la résidence permanente via le PEQ, le PGWP et Entrée Express.",
    highlights: [
      { title: "Permis post-diplôme (PGWP)", desc: "Jusqu'à 3 ans de travail après vos études." },
      { title: "Bilingue", desc: "Étudiez en français au Québec ou en anglais ailleurs." },
      {
        title: "Voie vers la PR",
        desc: "Programmes provinciaux et fédéraux facilitant la résidence."
      }
    ],
    cities: [
      { name: "Montréal", desc: "McGill, UdeM, Concordia — francophone et abordable." },
      { name: "Toronto", desc: "U of T, York — cœur économique du Canada." },
      { name: "Québec", desc: "Université Laval, cadre 100% francophone." },
      { name: "Vancouver", desc: "UBC, SFU — côte Pacifique, nature et tech." }
    ],
    visa: {
      types: [
        {
          name: "Permis d'études",
          desc: "Pour tout programme > 6 mois, exige une lettre d'acceptation."
        },
        { name: "AVE / visa visiteur", desc: "Court séjour pour tourisme ou visite familiale." },
        {
          name: "CAQ (Québec)",
          desc: "Certificat d'acceptation obligatoire avant le permis fédéral."
        }
      ],
      timeline: "CAQ : 4-6 semaines. Permis d'études : 6-12 semaines (volet direct possible).",
      documents: [
        "Lettre d'acceptation d'un EED (établissement désigné)",
        "Preuve de fonds (CAD 20 635/an + frais de scolarité)",
        "CAQ pour le Québec",
        "Examen médical agréé",
        "Biométrie"
      ]
    },
    practical: [
      { label: "Monnaie", value: "Dollar canadien (CAD)" },
      { label: "Langues", value: "Français · Anglais" },
      { label: "Coût de vie étudiant", value: "1 200 – 1 800 CAD/mois" },
      { label: "Logement", value: "600 – 1 200 CAD/mois" }
    ],
    tips: [
      "Pour le Québec, déposez le CAQ avant le permis fédéral.",
      "Le Volet direct pour les études (VDE) accélère le traitement à 20 jours.",
      "Travaillez jusqu'à 24 h/semaine pendant les sessions."
    ],
    serviceFocus: [
      { label: "Long séjour & études", to: "/services/long-sejours" },
      { label: "Billets d'avion", to: "/services/billets-avion" },
      { label: "Logement", to: "/services/logement" },
      { label: "Accueil & intégration", to: "/services/accueil-integration" }
    ]
  },
  allemagne: {
    slug: "allemagne",
    name: "Allemagne",
    flag: "🇩🇪",
    tagline: "Ingénierie, gratuité, opportunités.",
    image: imgGermany,
    accent: "#000000",
    intro: "L'Allemagne est la première économie d'Europe : universités publiques quasi gratuites, formations duales prisées et marché de l'emploi favorable aux ingénieurs et techniciens.",
    highlights: [
      {
        title: "Études gratuites",
        desc: "Universités publiques sans frais (sauf Bade-Wurtemberg)."
      },
      { title: "Compte bloqué", desc: "Sperrkonto de 11 904 € (2025) requis pour le visa." },
      { title: "Emploi facilité", desc: "18 mois pour chercher un emploi après le diplôme." }
    ],
    cities: [
      { name: "Berlin", desc: "Capitale créative, startups et universités internationales." },
      { name: "Munich", desc: "TUM, LMU — ingénierie et industrie de pointe." },
      { name: "Aix-la-Chapelle", desc: "RWTH Aachen, référence mondiale en ingénierie." },
      { name: "Hambourg", desc: "Port, commerce, médias et droit." }
    ],
    visa: {
      types: [
        {
          name: "Visa national D — études",
          desc: "Long séjour pour études universitaires ou cours de langue."
        },
        { name: "Visa de candidat aux études", desc: "Pour finaliser votre admission sur place." },
        { name: "Visa Schengen", desc: "Court séjour, tourisme, visite." }
      ],
      timeline: "Visa étudiant : 6-12 semaines. Compte bloqué : 2-3 semaines.",
      documents: [
        "Lettre d'admission (Zulassung) ou Uni-Assist",
        "Sperrkonto de 11 904 € minimum",
        "Assurance santé allemande (TK, AOK…)",
        "Diplômes traduits assermentés",
        "Niveau de langue B1/B2 si formation en allemand"
      ]
    },
    practical: [
      { label: "Monnaie", value: "Euro (€)" },
      { label: "Langues", value: "Allemand · Anglais (Master)" },
      { label: "Coût de vie étudiant", value: "850 – 1 100 €/mois" },
      { label: "Logement (Wohnheim)", value: "250 – 500 €/mois" }
    ],
    tips: [
      "Ouvrez votre Sperrkonto chez Expatrio, Fintiba ou Coracle.",
      "Beaucoup de Masters sont 100 % en anglais — pas besoin d'allemand.",
      "Travail étudiant : 140 jours complets ou 280 demi-journées par an."
    ],
    serviceFocus: [
      { label: "Long séjour & études", to: "/services/long-sejours" },
      { label: "Caution & AVI (Sperrkonto)", to: "/services/caution-avi" },
      { label: "Logement", to: "/services/logement" },
      { label: "Accueil & intégration", to: "/services/accueil-integration" }
    ]
  },
  belgique: {
    slug: "belgique",
    name: "Belgique",
    flag: "🇧🇪",
    tagline: "Carrefour de l'Europe, accès simplifié.",
    image: imgBelgium,
    accent: "#FAE042",
    intro: "Aux portes des institutions européennes, la Belgique propose des universités francophones de qualité (ULB, UCLouvain, ULiège), à des coûts contenus et avec une vie étudiante dynamique.",
    highlights: [
      {
        title: "Frais accessibles",
        desc: "Environ 4 175 €/an pour les non-européens en universités publiques."
      },
      { title: "Francophone", desc: "Pas de barrière linguistique en Wallonie-Bruxelles." },
      {
        title: "Court séjour facile",
        desc: "Idéal pour stages, conférences, visites familiales en Europe."
      }
    ],
    cities: [
      { name: "Bruxelles", desc: "ULB, VUB — capitale européenne, multiculturelle." },
      { name: "Louvain-la-Neuve", desc: "UCLouvain, campus 100% étudiant." },
      { name: "Liège", desc: "ULiège, ville chaleureuse et abordable." },
      { name: "Gand", desc: "Université flamande, vie étudiante animée." }
    ],
    visa: {
      types: [
        {
          name: "Visa D long séjour",
          desc: "Études supérieures, requiert inscription définitive."
        },
        { name: "Visa C court séjour", desc: "Tourisme, visite famille, jusqu'à 90 jours." }
      ],
      timeline: "Visa long séjour : 30 à 60 jours après dépôt VFS.",
      documents: [
        "Attestation d'inscription d'un établissement reconnu",
        "Prise en charge (annexe 32) ou preuve de ressources (≈ 803 €/mois)",
        "Certificat médical et extrait de casier judiciaire",
        "Légalisation des diplômes (équivalence)"
      ]
    },
    practical: [
      { label: "Monnaie", value: "Euro (€)" },
      { label: "Langues", value: "Français · Néerlandais" },
      { label: "Coût de vie étudiant", value: "850 – 1 100 €/mois" },
      { label: "Kot (logement)", value: "350 – 600 €/mois" }
    ],
    tips: [
      "Demandez l'équivalence de diplôme à la Fédération Wallonie-Bruxelles tôt (avant le 15 juillet).",
      "La prise en charge (garant) est souvent acceptée à la place du blocage de compte.",
      "Inscrivez-vous à la commune dans les 8 jours après votre arrivée."
    ],
    serviceFocus: [
      { label: "Court séjour & visa", to: "/services/court-sejours" },
      { label: "Long séjour & études", to: "/services/long-sejours" },
      { label: "Logement (kot)", to: "/services/logement" },
      { label: "Accueil & intégration", to: "/services/accueil-integration" }
    ]
  },
  cameroun: {
    slug: "cameroun",
    name: "Cameroun",
    flag: "🇨🇲",
    tagline: "L'Afrique en miniature, à découvrir.",
    image: hero3,
    accent: "#007A5E",
    intro: "De la plage de Kribi aux montagnes du Nord, du Mont Cameroun aux forêts de l'Est : nous organisons des circuits authentiques, sécurisés et clés en main pour la diaspora et les touristes.",
    highlights: [
      {
        title: "Circuits sur mesure",
        desc: "Nord safari, Sud balnéaire, Ouest culturel — à votre rythme."
      },
      {
        title: "Logistique complète",
        desc: "Transferts, hébergement, guides francophones, sécurité."
      },
      {
        title: "Pour la diaspora",
        desc: "Retours au pays, événements familiaux, démarches administratives."
      }
    ],
    cities: [
      { name: "Douala", desc: "Capitale économique, point d'arrivée international." },
      { name: "Yaoundé", desc: "Capitale politique, sept collines et musées." },
      { name: "Kribi", desc: "Plages, chutes de la Lobé, fruits de mer." },
      { name: "Maroua / Nord", desc: "Parcs de Waza, paysages de savane, culture peule." }
    ],
    visa: {
      types: [
        { name: "e-Visa touristique", desc: "Demande en ligne, valable 30 jours, prolongeable." },
        { name: "Visa d'affaires", desc: "Pour missions courtes, séminaires, prospection." }
      ],
      timeline: "e-Visa : 48 à 72 h après dépôt complet.",
      documents: [
        "Passeport valide 6 mois",
        "Réservation d'hôtel ou invitation",
        "Billet aller-retour",
        "Carnet de vaccination international (fièvre jaune)"
      ]
    },
    practical: [
      { label: "Monnaie", value: "Franc CFA (XAF)" },
      { label: "Langues", value: "Français · Anglais" },
      { label: "Saison idéale", value: "Novembre – Février (sèche)" },
      { label: "Décalage horaire", value: "GMT+1" }
    ],
    tips: [
      "Prévoyez la vaccination contre la fièvre jaune (obligatoire).",
      "Privilégiez la saison sèche pour les circuits Nord.",
      "Nos guides locaux parlent français, anglais et langues nationales."
    ],
    serviceFocus: [
      { label: "Visit Africa", to: "/services/visite-afrique" },
      { label: "Billets d'avion", to: "/services/billets-avion" },
      { label: "Accueil à l'arrivée", to: "/services/accueil-integration" }
    ]
  }
};
const destinationList = Object.values(destinations);
const $$splitComponentImporter$b = () => import("./destinations._country-DanAEQMd.mjs");
const $$splitErrorComponentImporter = () => import("./destinations._country-50KOdegG.mjs");
const $$splitNotFoundComponentImporter = () => import("./destinations._country-BKvcBmDy.mjs");
const Route$b = createFileRoute("/destinations/$country")({
  head: ({
    params
  }) => {
    const d = destinations[params.country];
    if (!d) return {
      meta: [{
        title: "Destination — VoyageonsEnsemble"
      }]
    };
    const title = `${d.name} — ${d.tagline} | VoyageonsEnsemble`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: d.intro.slice(0, 155)
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: d.intro.slice(0, 155)
      }, {
        property: "og:image",
        content: d.image
      }]
    };
  },
  loader: ({
    params
  }) => {
    const d = destinations[params.country];
    if (!d) throw notFound();
    return d;
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./new-request-Bi1IyQY9.mjs");
const Route$a = createFileRoute("/_authenticated/new-request")({
  validateSearch: (s) => ({
    service: typeof s.service === "string" ? s.service : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./account-Du5NvXP4.mjs");
const Route$9 = createFileRoute("/_authenticated/account")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./services.formations.index-KZIWX_Mb.mjs");
const Route$8 = createFileRoute("/services/formations/")({
  head: () => ({
    meta: [{
      title: "Formations linguistiques — TOEIC, TCF, Allemand | VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Préparez les certifications qui débloquent vos études et votre immigration : TOEIC, TCF (France & Canada), Allemand Goethe / TestDaF. Petits groupes, examens blancs, suivi personnalisé."
    }, {
      property: "og:title",
      content: "Formations linguistiques — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "TOEIC, TCF, Allemand : trois filières, une seule mission — vous amener au niveau qu'il faut, dans le délai qu'il faut."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./my-requests.index-DRS9h3-d.mjs");
const Route$7 = createFileRoute("/_authenticated/my-requests/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./admin.index-CobWICcu.mjs");
const Route$6 = createFileRoute("/_authenticated/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services.formations.toeic-Dw1O7fTI.mjs");
const Route$5 = createFileRoute("/services/formations/toeic")({
  head: () => ({
    meta: [{
      title: "Préparation TOEIC — Anglais professionnel | VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Certifiez votre anglais professionnel avec un score TOEIC compétitif (750+). Diagnostic personnalisé, examens blancs en conditions réelles, méthode rigoureuse."
    }, {
      property: "og:title",
      content: "Préparation TOEIC — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "Un score TOEIC élevé, c'est un CV qui se démarque dès le premier regard."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./services.formations.tcf-D6fckIES.mjs");
const Route$4 = createFileRoute("/services/formations/tcf")({
  head: () => ({
    meta: [{
      title: "Préparation TCF — France & Canada | VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Préparez le TCF Tout Public ou TCF DAP pour vos études en France ou votre immigration au Canada. Bilan gratuit, plan personnalisé, examens blancs en conditions réelles."
    }, {
      property: "og:title",
      content: "Préparation TCF — VoyageonsEnsemble"
    }, {
      property: "og:description",
      content: "France, Canada, Belgique… Le TCF ouvre les portes de la francophonie mondiale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./services.formations.allemand-BzWwt0Pm.mjs");
const Route$3 = createFileRoute("/services/formations/allemand")({
  head: () => ({
    meta: [{
      title: "Cours d'Allemand & Goethe-Zertifikat | VoyageonsEnsemble"
    }, {
      name: "description",
      content: "Apprenez l'allemand du A1 au B2 avec préparation Goethe-Zertifikat et TestDaF. Cours en petits groupes, formateurs expérimentés, examens blancs et suivi personnalisé."
    }, {
      property: "og:title",
      content: "Cours d'Allemand — Goethe / TestDaF"
    }, {
      property: "og:description",
      content: "L'Allemagne vous attend. La langue, c'est la clé. Préparation structurée jusqu'au B2, niveau requis par les universités allemandes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./my-requests._id-H09ehx7r.mjs");
const Route$2 = createFileRoute("/_authenticated/my-requests/$id")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.users-jmRSh0Ew.mjs");
const Route$1 = createFileRoute("/_authenticated/admin/users")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin._id-B7XC0jUH.mjs");
const Route = createFileRoute("/_authenticated/admin/$id")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SearchRoute = Route$W.update({
  id: "/search",
  path: "/search",
  getParentRoute: () => Route$X
});
const RequestRoute = Route$V.update({
  id: "/request",
  path: "/request",
  getParentRoute: () => Route$X
});
const ContactRoute = Route$U.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$X
});
const AuthRoute = Route$T.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$X
});
const AboutRoute = Route$S.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$X
});
const AuthenticatedRouteRoute = Route$R.update({
  id: "/_authenticated",
  getParentRoute: () => Route$X
});
const IndexRoute = Route$Q.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$X
});
const ServicesIndexRoute = Route$P.update({
  id: "/services/",
  path: "/services/",
  getParentRoute: () => Route$X
});
const ServicesVisiteAfriqueRoute = Route$O.update({
  id: "/services/visite-afrique",
  path: "/services/visite-afrique",
  getParentRoute: () => Route$X
});
const ServicesVisaSchengenRoute = Route$N.update({
  id: "/services/visa-schengen",
  path: "/services/visa-schengen",
  getParentRoute: () => Route$X
});
const ServicesTarifsNegociesRoute = Route$M.update({
  id: "/services/tarifs-negocies",
  path: "/services/tarifs-negocies",
  getParentRoute: () => Route$X
});
const ServicesSuiviRecoursRoute = Route$L.update({
  id: "/services/suivi-recours",
  path: "/services/suivi-recours",
  getParentRoute: () => Route$X
});
const ServicesSignatureBailRoute = Route$K.update({
  id: "/services/signature-bail",
  path: "/services/signature-bail",
  getParentRoute: () => Route$X
});
const ServicesSeoAdsRoute = Route$J.update({
  id: "/services/seo-ads",
  path: "/services/seo-ads",
  getParentRoute: () => Route$X
});
const ServicesSelectionLogementsRoute = Route$I.update({
  id: "/services/selection-logements",
  path: "/services/selection-logements",
  getParentRoute: () => Route$X
});
const ServicesSafarisExcursionsRoute = Route$H.update({
  id: "/services/safaris-excursions",
  path: "/services/safaris-excursions",
  getParentRoute: () => Route$X
});
const ServicesReservationsVfsRoute = Route$G.update({
  id: "/services/reservations-vfs",
  path: "/services/reservations-vfs",
  getParentRoute: () => Route$X
});
const ServicesReseauxSociauxRoute = Route$F.update({
  id: "/services/reseaux-sociaux",
  path: "/services/reseaux-sociaux",
  getParentRoute: () => Route$X
});
const ServicesReportingPerformanceRoute = Route$E.update({
  id: "/services/reporting-performance",
  path: "/services/reporting-performance",
  getParentRoute: () => Route$X
});
const ServicesRendezVousConsulatRoute = Route$D.update({
  id: "/services/rendez-vous-consulat",
  path: "/services/rendez-vous-consulat",
  getParentRoute: () => Route$X
});
const ServicesProjetEtudesRoute = Route$C.update({
  id: "/services/projet-etudes",
  path: "/services/projet-etudes",
  getParentRoute: () => Route$X
});
const ServicesProgrammeIntegrationRoute = Route$B.update({
  id: "/services/programme-integration",
  path: "/services/programme-integration",
  getParentRoute: () => Route$X
});
const ServicesPlateformesAdmissionRoute = Route$A.update({
  id: "/services/plateformes-admission",
  path: "/services/plateformes-admission",
  getParentRoute: () => Route$X
});
const ServicesLongSejoursRoute = Route$z.update({
  id: "/services/long-sejours",
  path: "/services/long-sejours",
  getParentRoute: () => Route$X
});
const ServicesLogementRoute = Route$y.update({
  id: "/services/logement",
  path: "/services/logement",
  getParentRoute: () => Route$X
});
const ServicesLettreAcceptationRoute = Route$x.update({
  id: "/services/lettre-acceptation",
  path: "/services/lettre-acceptation",
  getParentRoute: () => Route$X
});
const ServicesIdentiteVisuelleRoute = Route$w.update({
  id: "/services/identite-visuelle",
  path: "/services/identite-visuelle",
  getParentRoute: () => Route$X
});
const ServicesHotlineContinueRoute = Route$v.update({
  id: "/services/hotline-continue",
  path: "/services/hotline-continue",
  getParentRoute: () => Route$X
});
const ServicesGestionBagagesRoute = Route$u.update({
  id: "/services/gestion-bagages",
  path: "/services/gestion-bagages",
  getParentRoute: () => Route$X
});
const ServicesGastronomieLocaleRoute = Route$t.update({
  id: "/services/gastronomie-locale",
  path: "/services/gastronomie-locale",
  getParentRoute: () => Route$X
});
const ServicesFormulairesPiecesRoute = Route$s.update({
  id: "/services/formulaires-pieces",
  path: "/services/formulaires-pieces",
  getParentRoute: () => Route$X
});
const ServicesEmissionBilletsRoute = Route$r.update({
  id: "/services/emission-billets",
  path: "/services/emission-billets",
  getParentRoute: () => Route$X
});
const ServicesDossierVisaRoute = Route$q.update({
  id: "/services/dossier-visa",
  path: "/services/dossier-visa",
  getParentRoute: () => Route$X
});
const ServicesDossierLocataireRoute = Route$p.update({
  id: "/services/dossier-locataire",
  path: "/services/dossier-locataire",
  getParentRoute: () => Route$X
});
const ServicesCreationSitesWebRoute = Route$o.update({
  id: "/services/creation-sites-web",
  path: "/services/creation-sites-web",
  getParentRoute: () => Route$X
});
const ServicesCourtSejoursRoute = Route$n.update({
  id: "/services/court-sejours",
  path: "/services/court-sejours",
  getParentRoute: () => Route$X
});
const ServicesCompteBloqueRoute = Route$m.update({
  id: "/services/compte-bloque",
  path: "/services/compte-bloque",
  getParentRoute: () => Route$X
});
const ServicesCommunityManagementRoute = Route$l.update({
  id: "/services/community-management",
  path: "/services/community-management",
  getParentRoute: () => Route$X
});
const ServicesCircuitsMultiPaysRoute = Route$k.update({
  id: "/services/circuits-multi-pays",
  path: "/services/circuits-multi-pays",
  getParentRoute: () => Route$X
});
const ServicesChoixEtablissementsRoute = Route$j.update({
  id: "/services/choix-etablissements",
  path: "/services/choix-etablissements",
  getParentRoute: () => Route$X
});
const ServicesChauffeurTransfertsRoute = Route$i.update({
  id: "/services/chauffeur-transferts",
  path: "/services/chauffeur-transferts",
  getParentRoute: () => Route$X
});
const ServicesCautionAviRoute = Route$h.update({
  id: "/services/caution-avi",
  path: "/services/caution-avi",
  getParentRoute: () => Route$X
});
const ServicesBilletsAvionRoute = Route$g.update({
  id: "/services/billets-avion",
  path: "/services/billets-avion",
  getParentRoute: () => Route$X
});
const ServicesAuditDossierVisaRoute = Route$f.update({
  id: "/services/audit-dossier-visa",
  path: "/services/audit-dossier-visa",
  getParentRoute: () => Route$X
});
const ServicesAssuranceVisaRoute = Route$e.update({
  id: "/services/assurance-visa",
  path: "/services/assurance-visa",
  getParentRoute: () => Route$X
});
const ServicesAdmissionEtudesRoute = Route$d.update({
  id: "/services/admission-etudes",
  path: "/services/admission-etudes",
  getParentRoute: () => Route$X
});
const ServicesAccueilIntegrationRoute = Route$c.update({
  id: "/services/accueil-integration",
  path: "/services/accueil-integration",
  getParentRoute: () => Route$X
});
const DestinationsCountryRoute = Route$b.update({
  id: "/destinations/$country",
  path: "/destinations/$country",
  getParentRoute: () => Route$X
});
const AuthenticatedNewRequestRoute = Route$a.update({
  id: "/new-request",
  path: "/new-request",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAccountRoute = Route$9.update({
  id: "/account",
  path: "/account",
  getParentRoute: () => AuthenticatedRouteRoute
});
const ServicesFormationsIndexRoute = Route$8.update({
  id: "/services/formations/",
  path: "/services/formations/",
  getParentRoute: () => Route$X
});
const AuthenticatedMyRequestsIndexRoute = Route$7.update({
  id: "/my-requests/",
  path: "/my-requests/",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAdminIndexRoute = Route$6.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => AuthenticatedRouteRoute
});
const ServicesFormationsToeicRoute = Route$5.update({
  id: "/services/formations/toeic",
  path: "/services/formations/toeic",
  getParentRoute: () => Route$X
});
const ServicesFormationsTcfRoute = Route$4.update({
  id: "/services/formations/tcf",
  path: "/services/formations/tcf",
  getParentRoute: () => Route$X
});
const ServicesFormationsAllemandRoute = Route$3.update({
  id: "/services/formations/allemand",
  path: "/services/formations/allemand",
  getParentRoute: () => Route$X
});
const AuthenticatedMyRequestsIdRoute = Route$2.update({
  id: "/my-requests/$id",
  path: "/my-requests/$id",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAdminUsersRoute = Route$1.update({
  id: "/admin/users",
  path: "/admin/users",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAdminIdRoute = Route.update({
  id: "/admin/$id",
  path: "/admin/$id",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedRouteRouteChildren = {
  AuthenticatedAccountRoute,
  AuthenticatedNewRequestRoute,
  AuthenticatedAdminIdRoute,
  AuthenticatedAdminUsersRoute,
  AuthenticatedMyRequestsIdRoute,
  AuthenticatedAdminIndexRoute,
  AuthenticatedMyRequestsIndexRoute
};
const AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  AboutRoute,
  AuthRoute,
  ContactRoute,
  RequestRoute,
  SearchRoute,
  DestinationsCountryRoute,
  ServicesAccueilIntegrationRoute,
  ServicesAdmissionEtudesRoute,
  ServicesAssuranceVisaRoute,
  ServicesAuditDossierVisaRoute,
  ServicesBilletsAvionRoute,
  ServicesCautionAviRoute,
  ServicesChauffeurTransfertsRoute,
  ServicesChoixEtablissementsRoute,
  ServicesCircuitsMultiPaysRoute,
  ServicesCommunityManagementRoute,
  ServicesCompteBloqueRoute,
  ServicesCourtSejoursRoute,
  ServicesCreationSitesWebRoute,
  ServicesDossierLocataireRoute,
  ServicesDossierVisaRoute,
  ServicesEmissionBilletsRoute,
  ServicesFormulairesPiecesRoute,
  ServicesGastronomieLocaleRoute,
  ServicesGestionBagagesRoute,
  ServicesHotlineContinueRoute,
  ServicesIdentiteVisuelleRoute,
  ServicesLettreAcceptationRoute,
  ServicesLogementRoute,
  ServicesLongSejoursRoute,
  ServicesPlateformesAdmissionRoute,
  ServicesProgrammeIntegrationRoute,
  ServicesProjetEtudesRoute,
  ServicesRendezVousConsulatRoute,
  ServicesReportingPerformanceRoute,
  ServicesReseauxSociauxRoute,
  ServicesReservationsVfsRoute,
  ServicesSafarisExcursionsRoute,
  ServicesSelectionLogementsRoute,
  ServicesSeoAdsRoute,
  ServicesSignatureBailRoute,
  ServicesSuiviRecoursRoute,
  ServicesTarifsNegociesRoute,
  ServicesVisaSchengenRoute,
  ServicesVisiteAfriqueRoute,
  ServicesIndexRoute,
  ServicesFormationsAllemandRoute,
  ServicesFormationsTcfRoute,
  ServicesFormationsToeicRoute,
  ServicesFormationsIndexRoute
};
const routeTree = Route$X._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  sendMessage as A,
  signDocumentDownload as B,
  Route as C,
  adminGetRequest as D,
  adminSendMessage as E,
  adminUpdateStatus as F,
  adminPostNote as G,
  router as H,
  Route$W as R,
  hero3 as a,
  hero4 as b,
  image$6 as c,
  destinationList as d,
  image$1 as e,
  image$5 as f,
  image$4 as g,
  hero2 as h,
  image$7 as i,
  image$3 as j,
  image as k,
  imgGermany as l,
  imgBelgium as m,
  image$2 as n,
  Route$b as o,
  Route$a as p,
  createRequest as q,
  confirmDocument as r,
  signDocumentUpload as s,
  createSsrRpc as t,
  useServerFn as u,
  isCurrentUserAdmin as v,
  listMyRequests as w,
  adminListRequests as x,
  Route$2 as y,
  getMyRequest as z
};
