import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  FileText,
  Globe2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { destinations, type Destination } from "@/lib/destinations";
import { Flag } from "@/components/ui/Flag";

export const Route = createFileRoute("/destinations/$country")({
  head: ({ params }) => {
    const d = destinations[params.country];
    if (!d) return { meta: [{ title: "Destination — VoyageonsEnsemble" }] };
    const title = `${d.name} — ${d.tagline} | VoyageonsEnsemble`;
    return {
      meta: [
        { title },
        { name: "description", content: d.intro.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: d.intro.slice(0, 155) },
        { property: "og:image", content: d.image },
      ],
    };
  },
  loader: ({ params }) => {
    const d = destinations[params.country];
    if (!d) throw notFound();
    return d;
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold">Destination introuvable</h1>
      <p className="mt-4 text-muted-foreground">Cette destination n'est pas encore disponible.</p>
      <Link to="/" className="mt-8 inline-block text-sm font-semibold text-brand-red">
        ← Retour à l'accueil
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold">Une erreur est survenue</h1>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
      >
        Réessayer
      </button>
    </div>
  ),
  component: DestinationPage,
});

function DestinationPage() {
  const d = Route.useLoaderData() as Destination;

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={d.image} alt={d.name} className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${d.accent}cc 0%, rgba(0,0,0,0.55) 100%)` }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="inline-flex items-center"><Flag flag={d.flag} /></span> Destination · {d.name}
          </p>
          <h1
            className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {d.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl md:text-2xl text-white/90">{d.tagline}</p>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80">{d.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/request"
              search={{ service: d.slug }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
            >
              Démarrer ma demande <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Parler à un expert
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: d.accent }}>
          Pourquoi {d.name}
        </p>
        <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Les atouts à connaître.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {d.highlights.map((h) => (
            <div key={h.title} className="rounded-3xl border border-border bg-card p-8">
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: d.accent, color: "white" }}
              >
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{h.title}</h3>
              <p className="mt-3 text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CITIES */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: d.accent }}>
            Villes phares
          </p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Où s'installer ?</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {d.cities.map((c) => (
              <div key={c.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2" style={{ color: d.accent }}>
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: d.accent }}
            >
              Visa & démarches
            </p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
              Le bon visa pour votre projet.
            </h2>
            <div className="mt-8 space-y-4">
              {d.visa.types.map((v) => (
                <div key={v.name} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2" style={{ color: d.accent }}>
                    <FileText className="h-5 w-5" />
                    <h3 className="text-lg font-semibold text-foreground">{v.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
            <div
              className="mt-6 flex items-start gap-3 rounded-2xl p-5"
              style={{ backgroundColor: `${d.accent}14` }}
            >
              <Calendar className="mt-0.5 h-5 w-5 shrink-0" style={{ color: d.accent }} />
              <div>
                <div className="text-sm font-semibold">Délais indicatifs</div>
                <div className="text-sm text-muted-foreground">{d.visa.timeline}</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-xl font-semibold">Pièces principales du dossier</h3>
            <ul className="mt-6 space-y-3">
              {d.visa.documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: d.accent }} />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Liste indicative — variable selon votre profil et le consulat.
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICAL + TIPS */}
      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: "#ffb3bd" }}
            >
              Infos pratiques
            </p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">{d.name} en chiffres.</h2>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {d.practical.map((p) => (
                <div
                  key={p.label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/60">
                    <Globe2 className="h-3.5 w-3.5" /> {p.label}
                  </div>
                  <div className="mt-2 text-lg font-semibold">{p.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: "#ffb3bd" }}
            >
              Nos conseils
            </p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">À ne pas manquer.</h2>
            <ul className="mt-10 space-y-4">
              {d.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#ffb3bd" }} />
                  <span className="text-sm text-white/90">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl bg-brand-cream p-10 md:p-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-semibold md:text-5xl">Prêt·e pour {d.name} ?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Nos services dédiés à votre projet : choisissez celui qui correspond et lancez votre
                demande en quelques minutes.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {d.serviceFocus.map((s) => (
                <Link
                  key={s.to + s.label}
                  to={s.to}
                  className="inline-flex items-center justify-between gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5"
                >
                  {s.label} <ArrowRight className="h-4 w-4" style={{ color: d.accent }} />
                </Link>
              ))}
              <Link
                to="/request"
                search={{ service: d.slug }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-4 text-sm font-semibold text-white"
              >
                Démarrer ma demande <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
