import { createFileRoute } from "@tanstack/react-router";
import { FolderOpen, Languages, Shield, RefreshCcw, FileText } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/formulaires-pieces")({
  head: () => ({
    meta: [
      { title: "Formulaires & Pièces justificatives — VoyageonsEnsemble" },
      { name: "description", content: "Assistance complète pour le remplissage des formulaires et la compilation de vos pièces justificatives." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Formulaires & pièces"
      title="Un dossier irréprochable et certifié."
      intro="La moindre erreur dans un formulaire ou une pièce manquante peut entraîner un refus de visa. Nous vous assistons dans le remplissage précis des documents officiels et la mise en conformité de vos justificatifs."
      image={image}
      imageAlt="Remplissage de formulaires administratifs"
      highlights={[
        "Saisie rigoureuse des formulaires en ligne (France-Visas, etc.)",
        "Vérification de la validité de chaque pièce justificative",
        "Service de traduction assermentée pour les documents étrangers",
        "Certification et légalisation des diplômes ou actes d'état civil si requis",
      ]}
      steps={[
        { title: "Collecte", desc: "Vous nous fournissez vos documents bruts." },
        { title: "Traitement", desc: "Traductions, certifications et vérifications." },
        { title: "Formulaires", desc: "Nous remplissons les demandes officielles sans erreur." },
        { title: "Assemblage", desc: "Votre dossier est classé exactement dans l'ordre attendu." },
      ]}
      included={[
        { icon: FolderOpen, t: "Classement parfait" },
        { icon: Languages, t: "Traductions" },
        { icon: Shield, t: "Conformité" },
        { icon: RefreshCcw, t: "Mise à jour" },
        { icon: FileText, t: "Dossier Visa", to: "/services/dossier-visa" },
      ]}
      faqs={[
        { q: "Travaillez-vous avec des traducteurs assermentés ?", a: "Oui, nous avons un réseau de traducteurs agréés pour garantir l'acceptation de vos documents par les autorités." },
        { q: "Si je n'ai pas tous les documents, m'aidez-vous à les obtenir ?", a: "Nous vous orientons vers les bonnes administrations pour obtenir les pièces manquantes (casiers judiciaires, actes de naissance...)." },
      ]}
      serviceSlug="formulaires-pieces"
    />
  ),
});
