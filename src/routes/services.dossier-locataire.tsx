import { createFileRoute } from "@tanstack/react-router";
import { FileSignature, ShieldCheck, CheckSquare, Search, FileText } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-logement.jpg";

export const Route = createFileRoute("/services/dossier-locataire")({
  head: () => ({
    meta: [
      { title: "Montage du dossier locataire — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Un dossier locataire en béton pour convaincre les propriétaires et agences immobilières.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Dossier locataire"
      title="Un profil locataire rassurant et complet."
      intro="En zone tendue, un bon dossier fait toute la différence. Nous vous aidons à compiler, certifier et optimiser votre dossier locataire pour maximiser vos chances d'acceptation par les propriétaires ou agences."
      image={image}
      imageAlt="Dossier de documents avec un stylo"
      highlights={[
        "Analyse de votre situation financière et de vos garants",
        "Compilation des pièces justificatives (identité, revenus, impôts)",
        "Rédaction d'une lettre de motivation pour le propriétaire",
        "Mise en place de garanties alternatives (Visale, Garantme, etc.)",
      ]}
      steps={[
        { title: "Rassemblement", desc: "Vous nous fournissez vos documents de base." },
        { title: "Optimisation", desc: "Nous vérifions la cohérence et complétons le dossier." },
        {
          title: "Garanties",
          desc: "Nous vous accompagnons pour obtenir une certification de garantie si besoin.",
        },
        {
          title: "Soumission",
          desc: "Présentation de votre dossier sous son meilleur jour aux bailleurs.",
        },
      ]}
      included={[
        { icon: CheckSquare, t: "Vérification pièces" },
        { icon: ShieldCheck, t: "Solutions garants" },
        { icon: FileSignature, t: "Lettre motivation" },
        { icon: Search, t: "Optimisation profil" },
        { icon: FileText, t: "Service Logement", to: "/services/logement" },
      ]}
      faqs={[
        {
          q: "Quelles sont les pièces obligatoires ?",
          a: "Généralement : pièce d'identité, justificatif de domicile, contrat de travail/certificat de scolarité, et les 3 derniers bulletins de salaire du garant.",
        },
        {
          q: "Comment faire si je n'ai pas de garant local ?",
          a: "Nous vous orientons vers des dispositifs gratuits (comme la garantie Visale en France) ou des garants privés partenaires (Garantme, Studapart).",
        },
        {
          q: "Puis-je préparer mon dossier avant d'avoir trouvé l'appartement ?",
          a: "Oui, c'est même fortement recommandé ! Un dossier prêt permet de se positionner instantanément après une visite.",
        },
      ]}
      serviceSlug="dossier-locataire"
    />
  ),
});
