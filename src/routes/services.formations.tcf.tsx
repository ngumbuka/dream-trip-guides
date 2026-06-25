import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Sparkles, Rocket } from "lucide-react";

export const Route = createFileRoute("/services/formations/tcf")({
  head: () => ({
    meta: [
      { title: "Préparation TCF — France & Canada | VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Préparez le TCF Tout Public ou TCF DAP pour vos études en France ou votre immigration au Canada. Bilan gratuit, plan personnalisé, examens blancs en conditions réelles.",
      },
      { property: "og:title", content: "Préparation TCF — VoyageonsEnsemble" },
      {
        property: "og:description",
        content: "France, Canada, Belgique… Le TCF ouvre les portes de la francophonie mondiale.",
      },
    ],
  }),
  component: TcfPage,
});

const versions = [
  {
    n: "TCF Tout Public",
    for: "Toute personne souhaitant certifier son niveau de français.",
    epreuves: "Compréhension orale, structures de la langue, compréhension écrite.",
    ideal: "Immigration Canada, dossiers professionnels, valorisation du profil.",
    duree: "Environ 1h30",
  },
  {
    n: "TCF DAP",
    for: "Candidats à une université française (Campus France ou admission directe).",
    epreuves: "Mêmes épreuves + expression écrite et expression orale.",
    ideal: "Toute candidature universitaire en France.",
    duree: "Environ 2h30",
  },
];

const skills = [
  {
    icon: "🎧",
    t: "Compréhension de l'oral",
    d: "Comprendre dialogues, émissions, annonces, discours formels — écoute active et repérage d'informations clés.",
  },
  {
    icon: "📖",
    t: "Maîtrise des structures de la langue",
    d: "Grammaire, lexique académique et pièges classiques de l'examen.",
  },
  {
    icon: "📄",
    t: "Compréhension de l'écrit",
    d: "Lecture analytique d'articles, extraits académiques et documents informatifs.",
  },
  {
    icon: "✍️",
    t: "Expression écrite (TCF DAP)",
    d: "Textes argumentés, synthèse, structure du discours et registre formel.",
  },
  {
    icon: "🗣️",
    t: "Expression orale (TCF DAP)",
    d: "Défendre un point de vue, fluidité, correction phonétique, pensée structurée en temps limité.",
  },
];

const method = [
  "Bilan de départ complet sur toutes les compétences",
  "Plan personnalisé de 4 à 10 semaines selon votre niveau et vos délais",
  "Entraînements intensifs sur sujets officiels et annales",
  "Corrections individualisées avec conseils précis",
  "Examens blancs complets en conditions réelles",
  "Suivi post-formation jusqu'à la date de votre examen",
];

function TcfPage() {
  return (
    <div>
      <section className="border-b border-border" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--brand-red)" }}
          >
            Formations · TCF
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            🇫🇷🇨🇦 Le TCF ouvre les portes de la francophonie mondiale.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Vous parlez français depuis l'enfance — mais le TCF n'évalue pas si vous savez parler
            français : il évalue si vous maîtrisez le français à un niveau académique. C'est
            précisément ce qui se prépare, et ce que nous travaillons avec vous.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              <Sparkles className="h-4 w-4" /> Réserver mon bilan gratuit
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <Rocket className="h-4 w-4" /> S'inscrire à la préparation TCF
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Quelle version du TCF pour vous ?</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Le choix dépend directement de votre projet — études en France ou immigration /
          valorisation professionnelle.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {versions.map((v) => (
            <div key={v.n} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="text-2xl font-semibold">{v.n}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Pour qui
                  </dt>
                  <dd className="mt-1 text-foreground/80">{v.for}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Épreuves obligatoires
                  </dt>
                  <dd className="mt-1 text-foreground/80">{v.epreuves}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Idéal pour
                  </dt>
                  <dd className="mt-1 text-foreground/80">{v.ideal}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Durée
                  </dt>
                  <dd className="mt-1 text-foreground/80">{v.duree}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Les compétences évaluées — et comment nous les travaillons
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-2xl">{s.icon}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Notre méthode</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {method.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--brand-red)" }}
                  />
                  <span className="text-foreground/80">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-3xl p-8"
            style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
          >
            <h2 className="text-2xl font-semibold">Niveaux visés</h2>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-white/10 p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Minimum
                </div>
                <div className="mt-1 text-3xl font-semibold">B2</div>
                <p className="mt-2 text-sm text-white/75">
                  Seuil d'admission pour la majorité des universités françaises.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Recommandé
                </div>
                <div className="mt-1 text-3xl font-semibold">C1</div>
                <p className="mt-2 text-sm text-white/75">
                  Pour les dossiers compétitifs, grandes écoles et procédures d'immigration
                  canadienne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center md:p-14"
          style={{ backgroundColor: "var(--brand-cream)" }}
        >
          <h2 className="text-3xl font-semibold md:text-4xl">Un projet en France ou au Canada ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            30 minutes offertes pour évaluer votre niveau réel et bâtir ensemble un plan adapté à
            vos délais.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              <Sparkles className="h-4 w-4" /> Réserver mon bilan gratuit{" "}
              <ArrowRight className="h-4 w-4" />
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
