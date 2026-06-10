import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-mark.png";

const serviceItems = [
  { to: "/services/long-sejours", label: "Longs séjours" },
  { to: "/services/court-sejours", label: "Courts séjours" },
  { to: "/services/visite-cameroun", label: "Visite Cameroun" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="VoyageonsEnsemble" className="h-10 w-auto" width={120} height={40} />
          <span className="hidden text-lg font-semibold tracking-tight text-foreground sm:inline" style={{ fontFamily: "var(--font-display)" }}>
            Voyageons<span style={{ color: "var(--brand-red)" }}>Ensemble</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} inactiveProps={{ className: "text-muted-foreground" }} className="text-sm font-medium transition-colors hover:text-foreground">
            Accueil
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground"
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-elegant)]">
                  {serviceItems.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block border-t border-border px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    Tous les services →
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" activeProps={{ className: "text-foreground" }} inactiveProps={{ className: "text-muted-foreground" }} className="text-sm font-medium transition-colors hover:text-foreground">
            À propos
          </Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} inactiveProps={{ className: "text-muted-foreground" }} className="text-sm font-medium transition-colors hover:text-foreground">
            Contact
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--brand-red)" }}
          >
            Démarrer mon projet
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted">Accueil</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted">Services</Link>
            <div className="ml-3 flex flex-col border-l border-border pl-3">
              {serviceItems.map((s) => (
                <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                  {s.label}
                </Link>
              ))}
            </div>
            <Link to="/about" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted">À propos</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted">Contact</Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              Démarrer mon projet
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}