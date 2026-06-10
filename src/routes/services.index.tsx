import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Plane, MapPin, Check, ArrowRight, Home, CreditCard, Ticket, Handshake, Megaphone } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — VoyageonsEnsemble" },
      { name: "description", content: "Longs séjours, courts séjours, visite du Cameroun : un accompagnement complet." },
      { property: "og:title", content: "Nos services — VoyageonsEnsemble" },
      { property: "og:description", content: "Un soutien complet à chaque étape de votre mobilité." },
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
    title: "Visite Cameroun",
    tagline: "Une expérience authentique de la diaspora au pays.",
    bullets: [
      "Circuits découverte (Yaoundé, Douala, Kribi…)",
      "Transferts aéroport & véhicule avec chauffeur",
      "Hébergement sélectionné",
      "Excursions culturelles & gastronomiques",
      "Conseils pratiques & accompagnement local",
    ],
  },
];

const extras = [
  { icon: Home, t: "Logement" },
  { icon: CreditCard, t: "Caution bancaire & AVI" },
  { icon: Ticket, t: "Billets d'avion" },
  { icon: Handshake, t: "Accueil & intégration" },
  { icon: Megaphone, t: "Community management" },
];

function Services() {
  return (
    <div>
      <section className="border-b border-border" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--brand-red)" }}>Services</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">Tout ce qu'il faut, en un seul endroit.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            De l'admission universitaire au visa, du logement à l'accueil — nous orchestrons chaque détail
            pour que vous n'ayez qu'à voyager.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((o) => (
            <article id={o.id} key={o.id} className="flex flex-col rounded-3xl border border-border bg-card p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: "var(--brand-navy)", color: "white" }}>
                <o.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold">{o.title}</h2>
              <p className="mt-2 text-sm font-medium" style={{ color: "var(--brand-red)" }}>{o.tagline}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--brand-red)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-red)" }}>
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--brand-navy)", color: "white" }}>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Inclus dans nos accompagnements</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {extras.map((e) => (
              <div key={e.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <e.icon className="mx-auto h-7 w-7" style={{ color: "#ffb3bd" }} />
                <p className="mt-3 text-sm">{e.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}