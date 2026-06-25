import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Plane,
  MapPin,
  Check,
  ArrowRight,
  Home,
  CreditCard,
  Ticket,
  Handshake,
  Megaphone,
  Rocket,
  Languages,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — VoyageonsEnsemble" },
      {
        name: "description",
        content: "Longs séjours, courts séjours, visite du Cameroun : un accompagnement complet.",
      },
      { property: "og:title", content: "Nos services — VoyageonsEnsemble" },
      {
        property: "og:description",
        content: "Un soutien complet à chaque étape de votre mobilité.",
      },
    ],
  }),
  component: Services,
});

const offers = [
  {
    id: "long",
    icon: Plane,
    title: "Longs séjours",
    tagline: "Études, travail, installation durable.",
    bullets: [
      "Admission en études supérieures",
      "Visa long séjour & dossiers consulaires",
      "Caution bancaire et AVI",
      "Recherche de logement sécurisé",
      "Accueil aéroport & intégration",
    ],
  },
  {
    id: "court",
    icon: GraduationCap,
    title: "Courts séjours",
    tagline: "Visa touristique, vacances, voyages d'affaires.",
    bullets: [
      "Visa court séjour (Schengen)",
      "Réservation de billets d'avion",
      "Hébergement & itinéraire sur mesure",
      "Assurance voyage",
      "Assistance 7j/7 pendant le séjour",
    ],
  },
  {
    id: "cameroun",
    icon: MapPin,
    title: "Visit Africa",
    tagline: "Découvrez l'Afrique : Sénégal, Côte d'Ivoire, Kenya, Maroc, Rwanda, Cameroun…",
    bullets: [
      "Circuits multi-pays (Afrique de l'Ouest, de l'Est, Maghreb)",
      "Transferts aéroport & véhicule avec chauffeur",
      "Hébergement sélectionné (hôtels, lodges, villas)",
      "Safaris, excursions culturelles & gastronomiques",
      "Accompagnement local francophone et anglophone",
    ],
  },
  {
    id: "formations",
    icon: Languages,
    title: "Formations linguistiques",
    tagline: "TOEIC, TCF, Allemand : la certification qui débloque votre projet.",
    bullets: [
      "Allemand / Goethe-Zertifikat & TestDaF (A1 → B2)",
      "TOEIC : score professionnel 750+",
      "TCF Tout Public & TCF DAP (France, Canada)",
      "Petits groupes, examens blancs réguliers",
      "Bilan gratuit de 30 min pour démarrer",
    ],
  },
];

const extras = [
  { icon: GraduationCap, t: "Admission études", to: "/services/admission-etudes" as const },
  { icon: FileText, t: "Dossier visa", to: "/services/dossier-visa" as const },
  { icon: FileText, t: "Visa Schengen", to: "/services/visa-schengen" as const },
  { icon: Home, t: "Logement", to: "/services/logement" as const },
  { icon: CreditCard, t: "Caution bancaire & AVI", to: "/services/caution-avi" as const },
  { icon: Ticket, t: "Billets d'avion", to: "/services/billets-avion" as const },
  { icon: Handshake, t: "Accueil & intégration", to: "/services/accueil-integration" as const },
];

function Services() {
  return (
    <div>
      <section className="border-b border-border" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--brand-red)" }}
          >
            Services
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Tout ce qu'il faut, en un seul endroit.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            De l'admission universitaire au visa, du logement à l'accueil — nous orchestrons chaque
            détail pour que vous n'ayez qu'à voyager.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <article
              id={o.id}
              key={o.id}
              className="flex flex-col rounded-3xl border border-border bg-card p-8"
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
              >
                <o.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold">{o.title}</h2>
              <p className="mt-2 text-sm font-medium" style={{ color: "var(--brand-red)" }}>
                {o.tagline}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-foreground/80">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: "var(--brand-red)" }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={
                    o.id === "long"
                      ? "/services/long-sejours"
                      : o.id === "court"
                        ? "/services/court-sejours"
                        : o.id === "formations"
                          ? "/services/formations"
                          : "/services/visite-cameroun"
                  }
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                  style={{ backgroundColor: "var(--brand-red)" }}
                >
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-foreground hover:underline"
                >
                  Demander un devis
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--brand-navy)", color: "white" }}>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Inclus dans nos accompagnements</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {extras.map((e) => (
              <Link
                key={e.t}
                to={e.to}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                <e.icon className="mx-auto h-7 w-7" style={{ color: "#ffb3bd" }} />
                <p className="mt-3 text-sm">{e.t}</p>
                <p className="mt-2 inline-flex items-center justify-center gap-1 text-xs text-white/60 group-hover:text-white">
                  En savoir plus <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center md:p-16"
          style={{ backgroundColor: "var(--brand-cream)" }}
        >
          <h2 className="text-3xl font-semibold md:text-4xl">
            Vous ne savez pas quel service choisir ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Décrivez-nous simplement votre projet. Nous vous orienterons vers le bon accompagnement
            et vous enverrons une proposition sous 24h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/new-request"
              search={{ service: undefined }}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              <Rocket className="h-4 w-4" /> Démarrer mon projet <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
