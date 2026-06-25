import { createFileRoute, Link } from "@tanstack/react-router";
import { Languages, Briefcase, GlobeLock, Check, ArrowRight, Rocket, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services/formations/")({
  head: () => ({
    meta: [
      { title: "Formations linguistiques — TOEIC, TCF, Allemand | VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Préparez les certifications qui débloquent vos études et votre immigration : TOEIC, TCF (France & Canada), Allemand Goethe / TestDaF. Petits groupes, examens blancs, suivi personnalisé.",
      },
      { property: "og:title", content: "Formations linguistiques — VoyageonsEnsemble" },
      {
        property: "og:description",
        content:
          "TOEIC, TCF, Allemand : trois filières, une seule mission — vous amener au niveau qu'il faut, dans le délai qu'il faut.",
      },
    ],
  }),
  component: FormationsHub,
});

const programs = [
  {
    id: "allemand",
    flag: "🇩🇪",
    title: "Allemand / Goethe",
    tagline: "Études en Allemagne",
    desc: "Du A1 au B2 avec préparation Goethe-Zertifikat et TestDaF, le sésame pour les universités allemandes.",
    to: "/services/formations/allemand" as const,
    icon: GlobeLock,
  },
  {
    id: "toeic",
    flag: "💼",
    title: "TOEIC",
    tagline: "Insertion professionnelle internationale",
    desc: "Un score compétitif (750+) en anglais professionnel pour démarquer votre CV à l'international.",
    to: "/services/formations/toeic" as const,
    icon: Briefcase,
  },
  {
    id: "tcf",
    flag: "🇫🇷🇨🇦",
    title: "TCF",
    tagline: "Études en France & immigration au Canada",
    desc: "TCF Tout Public ou TCF DAP : la préparation académique qui fait la différence sur un dossier.",
    to: "/services/formations/tcf" as const,
    icon: Languages,
  },
];

const reasons = [
  "Formations orientées résultats, pas du remplissage de programme",
  "Formateurs expérimentés, pédagogues et disponibles",
  "Groupes réduits pour un suivi réellement personnalisé",
  "Examens blancs réguliers en conditions réelles",
  "Accompagnement du premier cours jusqu'à la certification",
  "Horaires flexibles adaptés aux étudiants et lycéens",
];

function FormationsHub() {
  return (
    <div>
      <section className="border-b border-border" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--brand-red)" }}
          >
            Formations linguistiques
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            La langue, votre premier visa.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Un dossier solide ne suffit plus : sans certification linguistique au bon niveau, un
            projet d'études ou d'immigration s'arrête net. Notre pôle de formation vous amène au
            score qu'il faut, dans le délai qu'il faut.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              <Sparkles className="h-4 w-4" /> Réserver un bilan gratuit
            </Link>
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Voir les 3 filières <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Pourquoi nos apprenants nous choisissent
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trois filières. Trois destinations. Une seule mission : transformer votre niveau en
              certification reconnue par les universités, les consulats et les recruteurs.
            </p>
          </div>
          <ul className="grid gap-3 md:col-span-3 md:grid-cols-2">
            {reasons.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--brand-red)" }} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="programmes"
        className="py-20"
        style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Nos 3 filières de formation</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Choisissez la certification qui correspond à votre projet — ou laissez-nous vous
            orienter lors d'un bilan gratuit.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <Link
                key={p.id}
                to={p.to}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                <div className="text-3xl">{p.flag}</div>
                <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "#ffb3bd" }}>
                  {p.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm text-white/80">{p.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Découvrir la formation{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center md:p-14"
          style={{ backgroundColor: "var(--brand-cream)" }}
        >
          <h2 className="text-3xl font-semibold md:text-4xl">
            Pas sûr de la formation à choisir ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            30 minutes pour évaluer votre niveau, clarifier votre objectif et bâtir un plan de
            préparation réaliste — c'est offert.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--brand-red)" }}
            >
              <Rocket className="h-4 w-4" /> Réserver mon bilan gratuit
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
