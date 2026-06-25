import { createFileRoute } from "@tanstack/react-router";
import { School, Map, Star, Target, GraduationCap } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/choix-etablissements")({
  head: () => ({
    meta: [
      { title: "Choix des Établissements & Orientation — VoyageonsEnsemble" },
      { name: "description", content: "Trouvez l'université ou l'école idéale pour vos études supérieures à l'étranger." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Choix établissements"
      title="L'école qui correspond à votre ambition."
      intro="Il existe des milliers de formations à travers le monde. Nous vous aidons à cibler les universités et écoles privées qui correspondent à votre profil académique, votre projet professionnel et votre budget."
      image={image}
      imageAlt="Étudiants consultant une carte et des brochures universitaires"
      highlights={[
        "Bilan d'orientation gratuit et analyse de votre profil académique",
        "Sélection stratégique (universités publiques, grandes écoles, collèges)",
        "Analyse des critères d'admission et des prérequis linguistiques",
        "Équilibre entre établissements sélectifs et de 'sécurité'",
      ]}
      steps={[
        { title: "Bilan", desc: "Entretien pour comprendre vos envies, notes et budget." },
        { title: "Sélection", desc: "Nous vous proposons une liste de 5 à 10 établissements pertinents." },
        { title: "Affinement", desc: "Vous choisissez les 3 à 5 écoles pour lesquelles nous allons postuler." },
        { title: "Lancement", desc: "Nous préparons les dossiers de candidature." },
      ]}
      included={[
        { icon: Map, t: "Stratégie pays" },
        { icon: School, t: "Écoles privées/publiques" },
        { icon: Star, t: "Classements" },
        { icon: Target, t: "Vœux ciblés" },
        { icon: GraduationCap, t: "Admission", to: "/services/admission-etudes" },
      ]}
      faqs={[
        { q: "Accompagnez-vous pour les universités publiques françaises ?", a: "Oui, nous vous aidons à sélectionner vos vœux sur Campus France ou Parcoursup pour les universités publiques." },
        { q: "Quels sont les frais de scolarité à prévoir ?", a: "En France (public) : de 170€ à 3770€ selon le niveau et le statut. Au Canada : de 10 000 à 30 000 CAD selon le programme. Les écoles privées varient entre 5 000€ et 15 000€." },
      ]}
      serviceSlug="choix-etablissements"
    />
  ),
});
