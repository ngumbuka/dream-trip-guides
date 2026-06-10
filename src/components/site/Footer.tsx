import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-mark.png";

export function Footer() {
  return (
    <footer className="mt-24" style={{ backgroundColor: "var(--brand-navy)", color: "#e8ecf3" }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-auto" />
            <span className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Voyageons<span style={{ color: "var(--brand-red)" }}>Ensemble</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Votre partenaire de mobilité internationale. Ensemble, nous rendons votre mobilité plus facile,
            plus sûre et plus enrichissante.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> contact@voyageonsensemble.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> +33 7 00 00 00 00</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Paris, France · Douala, Cameroun</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} VoyageonsEnsemble. Tous droits réservés.</p>
          <p>Ensemble, plus loin.</p>
        </div>
      </div>
    </footer>
  );
}