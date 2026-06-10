import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, GraduationCap, Plane, MapPin, Search, ShieldCheck, Sparkles, Users, Globe2, Rocket } from "lucide-react";
import { searchAll } from "@/lib/search-index";
import hero from "@/assets/hero-traveler.jpg";
import imgFrance from "@/assets/dest-france.jpg";
import imgCanada from "@/assets/dest-canada.jpg";
import imgGermany from "@/assets/dest-germany.jpg";
import imgBelgium from "@/assets/dest-belgium.jpg";
import imgCameroun from "@/assets/dest-cameroun.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoyageonsEnsemble — Mobilité internationale, sans stress" },
      { name: "description", content: "Études, visas, courts et longs séjours, visite du Cameroun : nous gérons toute la logistique de votre voyage." },
      { property: "og:title", content: "VoyageonsEnsemble" },
      { property: "og:description", content: "Votre partenaire de mobilité internationale." },
    ],
  }),
  component: Index,
});

const destinations = [
  { name: "France", slug: "france", img: imgFrance, type: "Études · Long séjour" },
  { name: "Canada", slug: "canada", img: imgCanada, type: "Études · Résidence" },
  { name: "Allemagne", slug: "allemagne", img: imgGermany, type: "Études · Travail" },
  { name: "Belgique", slug: "belgique", img: imgBelgium, type: "Études · Court séjour" },
  { name: "Cameroun", slug: "cameroun", img: imgCameroun, type: "Visite · Tourisme" },
];

const services = [
  { icon: GraduationCap, title: "Courts séjours", to: "/services/court-sejours", desc: "Visa touristique, billets, hébergement et itinéraire clé en main." },
  { icon: Plane, title: "Longs séjours", to: "/services/long-sejours", desc: "Études, visa long séjour, logement, AVI, intégration." },
  { icon: MapPin, title: "Visite Cameroun", to: "/services/visite-cameroun", desc: "Découvrez le Cameroun : circuits, hébergement, transferts." },
];

const testimonials = [
  { quote: "Grâce à VoyageonsEnsemble, j'ai trouvé un logement et j'ai été accueilli dès mon arrivée. Ils ont rendu mon intégration au Canada beaucoup plus facile.", name: "Sarah", role: "Étudiante en Master, Canada" },
  { quote: "Les démarches d'admission en France semblaient complexes, mais l'équipe m'a aidé à chaque étape. Merci pour votre soutien !", name: "Karim", role: "Étudiant, France" },
  { quote: "Un accompagnement humain et professionnel. Je recommande à tout étudiant qui veut éviter le stress des démarches.", name: "Aïcha", role: "Étudiante, Allemagne" },
];

function Index() {
  const [dest, setDest] = useState("");
  const [type, setType] = useState("Long séjour");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const suggestions = useMemo(() => searchAll(dest, 6), [dest]);
  const submit = () => navigate({ to: "/search", search: { q: dest, type: type as any } });

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Voyageuse à l'aéroport" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Votre partenaire de mobilité internationale
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            Voyageons <span style={{ color: "#ffb3bd" }}>ensemble</span>, plus loin.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Études supérieures, visas, longs et courts séjours, visite du Cameroun — nous prenons en
            charge l'admin et la logistique de A à Z.
          </p>

          {/* Destination search */}
          <div className="relative mt-10 md:max-w-2xl">
            <div className="rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur">
              <form
                onSubmit={(e) => { e.preventDefault(); submit(); }}
                className="flex flex-col gap-2 md:flex-row md:items-center"
              >
                <div className="flex flex-1 items-center gap-2 px-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setTimeout(() => setFocused(false), 150)}
                    placeholder="Destination (France, Canada, Allemagne…)"
                    className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="rounded-lg border border-border bg-white px-3 py-3 text-sm text-foreground"
                >
                  <option>Long séjour</option>
                  <option>Court séjour</option>
                  <option>Visite Cameroun</option>
                </select>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: "var(--brand-red)" }}
                >
                  Recevoir une proposition <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
            {focused && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
                {suggestions.map((s) => (
                  <Link
                    key={s.to + (s.params?.country ?? "")}
                    to={s.to as any}
                    params={s.params as any}
                    className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 text-left last:border-b-0 hover:bg-muted"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.kind === "destination" ? "Destination" : "Service"}</p>
                      <p className="text-sm font-semibold text-foreground">{s.title}</p>
                      <p className="text-xs text-muted-foreground">{s.subtitle}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/80">
            <div className="flex items-center gap-2"><Users className="h-4 w-4" /> 30+ experts dédiés</div>
            <div className="flex items-center gap-2"><Globe2 className="h-4 w-4" /> 5 destinations</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Démarches sécurisées</div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/_authenticated/new-request" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              <Rocket className="h-4 w-4" /> Démarrer mon projet
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--brand-red)" }}>Nos services</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Un soutien complet, à chaque étape.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all">
            Voir tous les services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-red)" }}>
                Découvrir <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        {/* Services CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl p-8 md:p-12" style={{ backgroundColor: "var(--brand-cream)" }}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Un projet de voyage ou d'installation ?</h3>
              <p className="mt-2 text-muted-foreground">Décrivez-nous votre situation — notre équipe vous répond sous 24h avec une proposition personnalisée.</p>
            </div>
            <Link to="/_authenticated/new-request" className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              <Rocket className="h-4 w-4" /> Démarrer mon projet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--brand-red)" }}>Destinations</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">Cinq destinations, mille opportunités.</h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {destinations.map((d) => (
              <Link
                key={d.name}
                to="/destinations/$country"
                params={{ country: d.slug }}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={1024} height={1280} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>{d.name}</h3>
                  <p className="text-xs text-white/80">{d.type}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/_authenticated/new-request" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              <Rocket className="h-4 w-4" /> Choisir ma destination et démarrer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--brand-red)" }}>Pourquoi nous</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">L'exigence d'un vrai partenaire.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Nous comprenons les défis uniques de chaque type de voyageur. Notre engagement : simplicité,
              transparence et résultats.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Professionnalisme", d: "Une expertise éprouvée dans la mobilité internationale." },
              { t: "Transparence", d: "Des services clairs, sans surprise." },
              { t: "Personnalisé", d: "Un accompagnement adapté à chaque profil." },
              { t: "Réseau solide", d: "Partenaires académiques, bancaires, immobiliers." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-card p-6">
                <h4 className="text-lg font-semibold">{b.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Why Us CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Nous avons déjà accompagné des centaines de voyageurs.</h3>
              <p className="mt-2 text-muted-foreground">Rejoignez-les et bénéficiez d'un accompagnement clé en main, de la première idée à l'arrivée sur place.</p>
            </div>
            <Link to="/_authenticated/new-request" className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              Rejoindre les voyageurs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24" style={{ backgroundColor: "var(--brand-navy)", color: "white" }}>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "#ffb3bd" }}>Témoignages</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">Ils nous ont fait confiance.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <blockquote className="text-lg leading-relaxed text-white/90" style={{ fontFamily: "var(--font-display)" }}>
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-white/60">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="overflow-hidden rounded-3xl p-10 text-center md:p-16" style={{ backgroundColor: "var(--brand-navy)", color: "white" }}>
          <h2 className="text-4xl font-semibold md:text-5xl">Prêt·e à vivre votre prochaine aventure ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Que vous partiez étudier, travailler ou découvrir, nous transformons votre projet en réalité. Démarrez maintenant et recevez une proposition sous 24h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/_authenticated/new-request" className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              <Rocket className="h-4 w-4" /> Démarrer mon projet <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* CTA + NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl p-10 md:p-16" style={{ backgroundColor: "var(--brand-cream)" }}>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-semibold md:text-5xl">Restez inspiré·e.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Nos meilleures opportunités d'études, bons plans visas et destinations — directement dans votre boîte.
              </p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Merci ! Vous êtes inscrit·e."); }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Votre adresse e-mail"
                className="flex-1 rounded-full border border-border bg-white px-5 py-4 text-sm outline-none focus:border-foreground"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-4 text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--brand-red)" }}
              >
                Je m'inscris
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
