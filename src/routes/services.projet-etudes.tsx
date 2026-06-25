import { createFileRoute } from "@tanstack/react-router";
import { PenTool, BrainCircuit, SpellCheck, CheckCircle2, BookOpenCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/projet-etudes")({
  head: () => ({
    meta: [
      { title: "Projet d'études & Motivation — VoyageonsEnsemble" },
      { name: "description", content: "Rédaction de votre projet d'études, CV et lettre de motivation pour vos candidatures." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Projet d'études"
      title="Un dossier qui retient l'attention."
      intro="Les jurys d'admission reçoivent des milliers de candidatures. Ce qui fera la différence, c'est la cohérence de votre projet d'études et la force de votre lettre de motivation. Nous vous aidons à raconter votre histoire."
      image={image}
      imageAlt="Étudiant rédigeant une lettre de motivation sur un ordinateur"
      highlights={[
        "Rédaction et optimisation de votre CV aux normes locales (européennes ou nord-américaines)",
        "Aide à la rédaction des lettres de motivation (personnalisées par école)",
        "Structuration du projet d'études (cohérence parcours passé / futur)",
        "Correction orthographique et stylistique professionnelle",
      ]}
      steps={[
        { title: "Brouillon", desc: "Vous rédigez les grandes lignes de votre parcours et de vos motivations." },
        { title: "Structuration", desc: "Nous vous aidons à trouver le fil conducteur logique de votre projet." },
        { title: "Rédaction", desc: "Mise en forme, enrichissement du vocabulaire et adaptation aux attentes du jury." },
        { title: "Validation", desc: "Relecture finale et validation de vos documents de candidature." },
      ]}
      included={[
        { icon: PenTool, t: "Lettres de motivation" },
        { icon: BrainCircuit, t: "Stratégie projet" },
        { icon: SpellCheck, t: "Correction" },
        { icon: CheckCircle2, t: "CV optimisé" },
        { icon: BookOpenCheck, t: "Admission", to: "/services/admission-etudes" },
      ]}
      faqs={[
        { q: "Rédigez-vous la lettre à ma place ?", a: "Non, nous ne faisons pas de 'copier-coller'. Nous partons de vos idées et de votre histoire, puis nous vous aidons à structurer et reformuler pour produire un document authentique et impactant." },
        { q: "Les CV canadiens sont-ils différents des CV européens ?", a: "Oui, complètement ! Le CV canadien ne doit pas comporter de photo, d'âge ou de statut marital, et insiste sur les compétences. Nous l'adaptons selon la destination." },
      ]}
      serviceSlug="projet-etudes"
    />
  ),
});
