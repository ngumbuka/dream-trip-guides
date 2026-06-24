import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Menu, X, ChevronDown, LogIn, LogOut, UserCircle2, LayoutDashboard, ShieldCheck, Rocket } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { useAuthUser } from "@/hooks/use-auth-user";
import { supabase } from "@/integrations/supabase/client";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { isCurrentUserAdmin } from "@/lib/requests.functions";

const serviceItems = [
  { to: "/services/long-sejours", label: "Longs séjours" },
  { to: "/services/court-sejours", label: "Courts séjours" },
  { to: "/services/visite-cameroun", label: "Visit Africa" },
  { to: "/services/formations", label: "Formations linguistiques" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const { user, loading } = useAuthUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const adminFn = useServerFn(isCurrentUserAdmin);
  const { data: adm } = useQuery({
    queryKey: ["is-admin"],
    queryFn: () => adminFn({}),
    enabled: !!user,
    retry: 0,
  });

  async function handleSignOut() {
    setUserOpen(false);
    setOpen(false);
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="VoyageonsEnsemble" className="h-10 w-auto" width={120} height={40} />
          <span
            className="hidden text-lg font-semibold tracking-tight text-foreground sm:inline"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Voyageons<span style={{ color: "var(--brand-red)" }}>Ensemble</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:gap-6 md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground"
          >
            Accueil
          </Link>
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Services
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 w-56 pt-2">
                <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-elegant)]">
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block whitespace-nowrap border-b border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    Tous nos services
                  </Link>
                  {serviceItems.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setServicesOpen(false)}
                      className="block whitespace-nowrap px-5 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground"
          >
            À propos
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            to="/_authenticated/new-request"
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 lg:px-5"
            style={{ backgroundColor: "var(--brand-red)" }}
          >
            <Rocket className="h-4 w-4" /> Démarrer
          </Link>
          {loading ? null : user ? (
            <div className="relative" onMouseEnter={() => setUserOpen(true)} onMouseLeave={() => setUserOpen(false)}>
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted">
                <UserCircle2 className="h-5 w-5" />
                <span className="max-w-[140px] truncate">{user.email}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {userOpen && (
                <div className="absolute right-0 top-full z-50 w-60 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-elegant)]">
                    <Link
                      to="/my-requests"
                      onClick={() => setUserOpen(false)}
                      className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
                    >
                      <LayoutDashboard className="h-4 w-4" /> Mon espace
                    </Link>
                    <Link
                      to="/account"
                      onClick={() => setUserOpen(false)}
                      className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
                    >
                      <UserCircle2 className="h-4 w-4" /> Mon compte
                    </Link>
                    {adm?.isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setUserOpen(false)}
                        className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
                      >
                        <ShieldCheck className="h-4 w-4" /> Espace admin
                      </Link>
                    )}
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 border-t border-border px-5 py-3 text-left text-sm font-medium text-foreground hover:bg-muted"
                    >
                      <LogOut className="h-4 w-4" /> Se déconnecter
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <LogIn className="h-4 w-4" /> Connexion
            </Link>
          )}
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            <Link
              to="/_authenticated/new-request"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              <Rocket className="h-4 w-4" /> Démarrer mon projet
            </Link>
            <div className="my-2 border-t border-border" />
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
            >
              Accueil
            </Link>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
            >
              Services
            </Link>
            <div className="ml-3 flex flex-col border-l border-border pl-3">
              {serviceItems.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
            >
              Contact
            </Link>
            {user ? (
              <>
                <div className="mt-2 border-t border-border pt-2" />
                <Link
                  to="/my-requests"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                >
                  <LayoutDashboard className="h-4 w-4" /> Mon espace
                </Link>
                <Link
                  to="/account"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                >
                  <UserCircle2 className="h-4 w-4" /> Mon compte
                </Link>
                {adm?.isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                  >
                    <ShieldCheck className="h-4 w-4" /> Espace admin
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-left text-base font-medium text-foreground hover:bg-muted"
                >
                  <LogOut className="h-4 w-4" /> Se déconnecter
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-foreground"
              >
                <LogIn className="h-4 w-4" /> Connexion
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
