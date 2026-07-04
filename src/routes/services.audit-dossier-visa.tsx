import { createFileRoute } from "@tanstack/react-router";
import { FileSearch, CheckCircle, AlertTriangle, Lightbulb, FileText } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-court.jpg";

export const Route = createFileRoute("/services/audit-dossier-visa")({
  head: () => ({
    meta: [
      { title: "Audit de dossier de visa — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Faites évaluer votre dossier de visa par nos experts avant de le soumettre pour maximiser vos chances.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Audit dossier"
      title="Sécurisez votre demande de visa."
      intro="Un refus de visa laisse souvent une trace. Avant de déposer votre demande, nos experts analysent chaque document de votre dossier pour s'assurer qu'il répond exactement aux attentes des autorités consulaires."
      image={image}
      imageAlt="Personne examinant attentivement un dossier avec une loupe"
      highlights={[
        "Vérification de la cohérence globale du dossier",
        "Contrôle rigoureux de chaque justificatif fourni",
        "Identification des faiblesses ou risques de refus",
        "Recommandations d'amélioration et ajout de pièces complémentaires",
      ]}
      steps={[
        { title: "Transmission", desc: "Vous nous envoyez vos documents au format numérique." },
        {
          title: "Analyse",
          desc: "Nous passons votre dossier au peigne fin (profil, finances, motifs).",
        },
        {
          title: "Restitution",
          desc: "Entretien pour vous expliquer nos conclusions et recommandations.",
        },
        { title: "Correction", desc: "Vous ajustez le dossier selon nos conseils avant le dépôt." },
      ]}
      included={[
        { icon: FileSearch, t: "Analyse experte" },
        { icon: AlertTriangle, t: "Gestion risques" },
        { icon: Lightbulb, t: "Recommandations" },
        { icon: CheckCircle, t: "Validation finale" },
        { icon: FileText, t: "Service Visa", to: "/services/visa-schengen" },
      ]}
      faqs={[
        {
          q: "Garantissez-vous l'obtention du visa après l'audit ?",
          a: "Non, la décision finale appartient toujours au consulat. Cependant, un dossier audité et corrigé a des chances de succès considérablement plus élevées.",
        },
        {
          q: "Combien de temps prend l'audit ?",
          a: "Généralement 48 à 72 heures ouvrées après réception du dossier complet.",
        },
      ]}
      serviceSlug="audit-dossier-visa"
    />
  ),
});
