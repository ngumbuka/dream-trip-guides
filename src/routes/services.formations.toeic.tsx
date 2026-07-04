import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Sparkles, Rocket } from "lucide-react";

export const Route = createFileRoute("/services/formations/toeic")({
  head: () => ({
    meta: [
      { title: "Préparation TOEIC — Anglais professionnel | VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Certifiez votre anglais professionnel avec un score TOEIC compétitif (750+). Diagnostic personnalisé, examens blancs en conditions réelles, méthode rigoureuse.",
      },
      { property: "og:title", content: "Préparation TOEIC — VoyageonsEnsemble" },
      {
        property: "og:description",
        content: "Un score TOEIC élevé, c'est un CV qui se démarque dès le premier regard.",
      },
    ],
  }),
  component: ToeicPage,
});

const sections = [
  {
    s: "🎧 Listening",
    f: "100 questions (4 parties)",
    d: "45 min",
    e: "Compréhension de dialogues, annonces et monologues professionnels.",
  },
  {
    s: "📖 Reading",
    f: "100 questions (3 parties)",
    d: "75 min",
    e: "Vocabulaire, grammaire, compréhension de textes professionnels et d'e-mails.",
  },
];

const pillars = [
  {
    t: "Connaître l'examen",
    d: "Format, types de questions, pièges récurrents : on commence par poser les bases.",
  },
  {
    t: "Travailler ses lacunes",
    d: "Diagnostic complet dès le premier cours, plan personnalisé selon votre score cible.",
  },
  {
    t: "S'entraîner en conditions réelles",
    d: "Examens blancs complets, chronométrés, avec débriefing détaillé.",
  },
  {
    t: "Optimiser sa stratégie le jour J",
    d: "Gestion du temps, du stress, des sections : maximiser chaque point.",
  },
];

const workAreas = [
  "Grammaire et vocabulaire professionnels (finance, RH, logistique, communication…)",
  "Techniques de compréhension orale et repérage d'informations clés",
  "Stratégies de lecture rapide sur e-mails, articles, tableaux et rapports",
  "Gestion du temps et du stress sur chaque section",
  "Examens blancs complets avec correction détaillée et débriefing personnalisé",
];

const audience = [
  "Valoriser son profil pour une insertion professionnelle internationale",
  "Répondre à une exigence de certification dans un concours ou une candidature",
  "Obtenir une preuve officielle et reconnue de son niveau d'anglais",
  "Préparer une mobilité professionnelle ou académique vers un pays anglophone",
];

function ToeicPage() {
  return (
    <div>
      <section className="border-b border-border bg-brand-cream">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
            Formations · TOEIC
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            💼 Un score TOEIC élevé, c'est un CV qui se démarque.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Présent dans plus de 160 pays, le TOEIC est la certification d'anglais professionnel la
            plus demandée au monde. Nous vous préparons à atteindre un score compétitif en un
            minimum de temps — méthode rigoureuse, suivi individualisé, résultats concrets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
            >
              <Rocket className="h-4 w-4" /> S'inscrire à la préparation TOEIC
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <Sparkles className="h-4 w-4" /> Réserver un bilan gratuit (30 min)
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Comprendre l'examen pour mieux s'y préparer
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Le TOEIC Listening &amp; Reading : 200 questions, 2 heures, un score entre 10 et 990
          points.
        </p>
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="px-5 py-4 font-semibold">Section</th>
                <th className="px-5 py-4 font-semibold">Format</th>
                <th className="px-5 py-4 font-semibold">Durée</th>
                <th className="px-5 py-4 font-semibold">Ce qui est évalué</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((s, i) => (
                <tr key={s.s} className={i % 2 ? "bg-muted/30" : "bg-background"}>
                  <td className="px-5 py-4 font-semibold">{s.s}</td>
                  <td className="px-5 py-4 text-foreground/80">{s.f}</td>
                  <td className="px-5 py-4 text-foreground/80">{s.d}</td>
                  <td className="px-5 py-4 text-foreground/80">{s.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Notre méthode en 4 piliers</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                  Pilier {i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Ce que vous travaillerez</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {workAreas.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  <span className="text-foreground/80">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-brand-navy p-8 text-white">
            <h2 className="text-2xl font-semibold">À qui s'adresse cette formation ?</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {audience.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#ffb3bd" }} />
                  <span className="text-white/85">{a}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Score visé
              </div>
              <div className="mt-1 text-3xl font-semibold">750 points et +</div>
              <p className="mt-2 text-sm text-white/75">
                Le seuil reconnu à l'international comme niveau professionnel compétent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl bg-brand-cream p-10 text-center md:p-14">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Prêt à faire certifier votre anglais ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Groupes réduits, suivi personnalisé, résultats concrets. Rejoignez la prochaine session.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
            >
              <Rocket className="h-4 w-4" /> S'inscrire <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services/formations"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Voir les autres formations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
