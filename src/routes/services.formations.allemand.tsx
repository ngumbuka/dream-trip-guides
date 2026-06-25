import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Sparkles, Rocket } from "lucide-react";

export const Route = createFileRoute("/services/formations/allemand")({
  head: () => ({
    meta: [
      { title: "Cours d'Allemand & Goethe-Zertifikat | VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Apprenez l'allemand du A1 au B2 avec préparation Goethe-Zertifikat et TestDaF. Cours en petits groupes, formateurs expérimentés, examens blancs et suivi personnalisé.",
      },
      { property: "og:title", content: "Cours d'Allemand — Goethe / TestDaF" },
      {
        property: "og:description",
        content:
          "L'Allemagne vous attend. La langue, c'est la clé. Préparation structurée jusqu'au B2, niveau requis par les universités allemandes.",
      },
    ],
  }),
  component: AllemandPage,
});

const levels = [
  {
    n: "A1",
    d: "2 mois",
    w: "Se présenter, comprendre et utiliser des expressions familières, interagir simplement.",
  },
  {
    n: "A2",
    d: "2 mois",
    w: "Communiquer sur des sujets du quotidien, comprendre des phrases courantes.",
  },
  {
    n: "B1",
    d: "2 mois + prépa examen",
    w: "S'exprimer avec autonomie sur des sujets variés, rédiger des textes simples.",
  },
  {
    n: "B2",
    d: "3 mois",
    w: "Comprendre des textes complexes, s'exprimer avec aisance — niveau requis pour l'université.",
  },
];

const skills = [
  {
    t: "Compréhension orale",
    d: "Comprendre dialogues, annonces et émissions en allemand courant.",
  },
  {
    t: "Expression orale",
    d: "Prendre la parole avec confiance, défendre un point de vue, interagir naturellement.",
  },
  {
    t: "Compréhension écrite",
    d: "Lire et analyser des textes de niveaux croissants, y compris académiques.",
  },
  { t: "Expression écrite", d: "Rédiger courriers, textes argumentés et résumés structurés." },
];

const format = [
  "Petits groupes : 8 à 12 apprenants maximum",
  "Horaires flexibles : sessions matin ou soir",
  "Supports de cours fournis, exercices et corrections individualisées",
  "Simulations d'examen à chaque fin de niveau",
  "Présentiel et en ligne disponibles",
];

function AllemandPage() {
  return (
    <div>
      <section className="border-b border-border" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--brand-red)" }}
          >
            Formations · Allemand
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            🇩🇪 L'Allemagne vous attend. La langue, c'est la clé.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Universités publiques gratuites, bourses DAAD, formations reconnues mondialement :
            l'Allemagne est l'une des destinations les plus attractives pour les étudiants
            camerounais. Mais sans Goethe-Zertifikat ou TestDaF, aucune université n'ouvrira ses
            portes. Nous vous y amenons, étape par étape, jusqu'au B2.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              <Rocket className="h-4 w-4" /> M'inscrire au cours d'allemand
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
          Un apprentissage structuré niveau par niveau
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Nos cours suivent le Cadre Européen Commun de Référence (CECRL). Vous progressez à votre
          rythme, en groupe réduit, avec des formateurs qui connaissent ce que les examinateurs
          attendent.
        </p>
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <table className="w-full text-left text-sm">
            <thead style={{ backgroundColor: "var(--brand-navy)", color: "white" }}>
              <tr>
                <th className="px-5 py-4 font-semibold">Niveau</th>
                <th className="px-5 py-4 font-semibold">Durée</th>
                <th className="px-5 py-4 font-semibold">Ce que vous apprendrez</th>
              </tr>
            </thead>
            <tbody>
              {levels.map((l, i) => (
                <tr key={l.n} className={i % 2 ? "bg-muted/30" : "bg-background"}>
                  <td className="px-5 py-4 font-semibold" style={{ color: "var(--brand-red)" }}>
                    {l.n}
                  </td>
                  <td className="px-5 py-4 text-foreground/80">{l.d}</td>
                  <td className="px-5 py-4 text-foreground/80">{l.w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Les 4 compétences travaillées</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Bien plus que la grammaire : nous travaillons toutes les compétences évaluées en
            certification officielle.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Format & organisation</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {format.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--brand-red)" }}
                  />
                  <span className="text-foreground/80">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-3xl p-8"
            style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
          >
            <h2 className="text-2xl font-semibold">Certifications préparées</h2>
            <div className="mt-6 space-y-5 text-sm">
              <div>
                <h3 className="text-lg font-semibold">Goethe-Zertifikat</h3>
                <p className="mt-1 text-white/75">
                  La certification de référence de l'Institut Goethe, reconnue mondialement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">TestDaF</h3>
                <p className="mt-1 text-white/75">
                  L'examen spécifiquement conçu pour les admissions universitaires en Allemagne.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Révisions d'annales, mises en situation et examens blancs complets chronométrés.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center md:p-14"
          style={{ backgroundColor: "var(--brand-cream)" }}
        >
          <h2 className="text-3xl font-semibold md:text-4xl">
            Inscriptions ouvertes — places limitées
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Rejoignez la prochaine session. Le premier pas est aussi le plus important.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              <Rocket className="h-4 w-4" /> M'inscrire <ArrowRight className="h-4 w-4" />
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
