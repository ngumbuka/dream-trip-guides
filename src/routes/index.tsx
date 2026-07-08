import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  Plane,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Globe2,
  Rocket,
  Languages,
} from "lucide-react";
import { searchAll } from "@/lib/search-index";
import { DestinationsSection } from "@/components/site/DestinationsSection";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoyageonsEnsemble — Mobilité internationale, sans stress" },
      {
        name: "description",
        content:
          "Études, visas, courts et longs séjours, voyages en Afrique : nous gérons toute la logistique de votre voyage.",
      },
      { property: "og:title", content: "VoyageonsEnsemble" },
      { property: "og:description", content: "Votre partenaire de mobilité internationale." },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: GraduationCap,
    title: "Courts séjours",
    to: "/services/court-sejours",
    desc: "Visa touristique, billets, hébergement et itinéraire clé en main.",
  },
  {
    icon: Plane,
    title: "Longs séjours",
    to: "/services/long-sejours",
    desc: "Études, visa long séjour, logement, AVI, intégration.",
  },
  {
    icon: MapPin,
    title: "Visit Africa",
    to: "/services/visite-afrique",
    desc: "Découvrez l'Afrique : Sénégal, Côte d'Ivoire, Maroc, Kenya, Rwanda, Cameroun…",
  },
  {
    icon: Languages,
    title: "Formations linguistiques",
    to: "/services/formations",
    desc: "TOEIC, TCF, Allemand — la certification qui débloque votre projet.",
  },
];

function Index() {
  const [dest, setDest] = useState("");
  const [type, setType] = useState("Long séjour");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const suggestions = useMemo(() => searchAll(dest, 6), [dest]);
  const submit = () => navigate({ to: "/search", search: { q: dest, type } });

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[600px] md:min-h-[700px]">
        <HeroCarousel />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur animate-in fade-in slide-in-from-top-2 duration-700">
            <Sparkles className="h-3.5 w-3.5" /> Votre partenaire de mobilité internationale
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
            Voyageons <span style={{ color: "#ffb3bd" }}>ensemble</span>, plus loin.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[400ms] fill-mode-both">
            Études supérieures, visas, longs et courts séjours, visit Africa — nous prenons en
            charge l'admin et la logistique de A à Z.
          </p>

          {/* Destination search */}
          <div className="relative mt-10 md:max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[600ms] fill-mode-both">
            <div className="rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
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
                  className="rounded-lg border border-border bg-white px-3 py-3 text-sm text-foreground cursor-pointer"
                >
                  <option>Long séjour</option>
                  <option>Court séjour</option>
                  <option>Visit Africa</option>
                  <option>Formations linguistiques</option>
                </select>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-5 py-3 text-sm font-semibold text-white"
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
                    to={s.to}
                    params={s.params}
                    className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 text-left last:border-b-0 hover:bg-muted"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {s.kind === "destination" ? "Destination" : "Service"}
                      </p>
                      <p className="text-sm font-semibold text-foreground">{s.title}</p>
                      <p className="text-xs text-muted-foreground">{s.subtitle}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[800ms] fill-mode-both">
            <Link
              to="/new-request"
              search={{ service: undefined }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
            >
              <Rocket className="h-4 w-4" /> Démarrer mon projet
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Nous contacter
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80 animate-in fade-in duration-700 delay-[1000ms] fill-mode-both">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" /> 30+ experts dédiés
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4" /> Plusieurs destinations
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Démarches sécurisées
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
                Nos services
              </p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                Un soutien complet, à chaque étape.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all"
            >
              Voir tous les services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
                  Découvrir{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {/* Services CTA */}
          <div className="mt-10 overflow-hidden rounded-2xl bg-brand-cream px-6 py-5 md:px-8 md:py-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  Un projet de voyage ou d'installation ?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Décrivez-nous votre situation — réponse sous 24h avec une proposition
                  personnalisée.
                </p>
              </div>
              <Link
                to="/new-request"
                search={{ service: undefined }}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Rocket className="h-4 w-4" /> Démarrer mon projet{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* DESTINATIONS */}
      <DestinationsSection />

      {/* WHY US */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
                Pourquoi nous
              </p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                L'exigence d'un vrai partenaire.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Nous comprenons les défis uniques de chaque type de voyageur. Notre engagement :
                simplicité, transparence et résultats.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
              {[
                {
                  t: "Professionnalisme",
                  d: "Une expertise éprouvée dans la mobilité internationale.",
                },
                { t: "Transparence", d: "Des services clairs, sans surprise." },
                { t: "Personnalisé", d: "Un accompagnement adapté à chaque profil." },
                { t: "Réseau solide", d: "Partenaires académiques, bancaires, immobiliers." },
              ].map((b, i) => (
                <div
                  key={b.t}
                  className="rounded-2xl border border-border bg-card p-6"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <h4 className="text-lg font-semibold">{b.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Why Us CTA */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card px-6 py-5 md:px-8 md:py-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  Déjà des centaines de voyageurs accompagnés.
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Bénéficiez d'un accompagnement clé en main, de la première idée à l'arrivée sur
                  place.
                </p>
              </div>
              <Link
                to="/new-request"
                search={{ service: undefined }}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
              >
                Rejoindre les voyageurs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* TESTIMONIALS */}
      <Reveal>
        <section className="bg-brand-navy py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p
              className="text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: "#ffb3bd" }}
            >
              Témoignages
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">
              Ils nous ont fait confiance.
            </h2>
            <div className="mt-10">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>
      </Reveal>

      {/* FINAL CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
          <div className="overflow-hidden rounded-3xl bg-brand-navy p-10 text-center md:p-14 text-white">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Prêt·e à vivre votre prochaine aventure ?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-white/80">
              Que vous partiez étudier, travailler ou découvrir, nous transformons votre projet en
              réalité. Démarrez maintenant et recevez une proposition sous 24h.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/new-request"
                search={{ service: undefined }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white"
              >
                <Rocket className="h-4 w-4" /> Démarrer mon projet{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA + NEWSLETTER */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pt-8 pb-20">
          <div className="overflow-hidden rounded-3xl bg-brand-cream p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">Restez inspiré·e.</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Études, tourisme, découvertes, vacances — directement dans votre boîte.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const email = (form.elements.namedItem("newsletter-email") as HTMLInputElement)
                    .value;
                  toast.success(`Merci ! Vous êtes inscrit·e avec ${email}.`);
                  form.reset();
                }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  id="newsletter-email"
                  name="newsletter-email"
                  type="email"
                  required
                  placeholder="Votre adresse e-mail"
                  aria-label="Adresse e-mail pour la newsletter"
                  className="flex-1 rounded-full border border-border bg-white px-5 py-4 text-sm outline-none focus:border-foreground"
                />
                <button
                  type="submit"
                  className="rounded-full bg-brand-red px-6 py-4 text-sm font-semibold text-white"
                >
                  Je m'inscris
                </button>
              </form>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
