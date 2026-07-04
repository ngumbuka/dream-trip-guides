import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, HeartPulse, Stethoscope, Plane, ShieldCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-caution.jpg";

export const Route = createFileRoute("/services/assurance-visa")({
  head: () => ({
    meta: [
      { title: "Assurance voyage & Visa — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Assurance médicale et rapatriement conforme aux exigences Schengen et internationales.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Assurance Visa"
      title="Couvert en toutes circonstances."
      intro="Une assurance maladie, accidents et rapatriement est obligatoire pour obtenir la plupart des visas (Schengen, études, travail). Nous vous fournissons l'attestation conforme aux critères stricts des ambassades."
      image={image}
      imageAlt="Parapluie protégeant une famille (symbole de l'assurance)"
      highlights={[
        "Couverture médicale d'urgence d'au moins 30 000 € (exigence Schengen)",
        "Assistance rapatriement incluse",
        "Couverture Covid-19 intégrée (si exigée par le pays)",
        "Attestation générée immédiatement pour votre dossier consulaire",
      ]}
      steps={[
        { title: "Analyse", desc: "Nous vérifions les exigences exactes du pays de destination." },
        {
          title: "Sélection",
          desc: "Choix de la formule d'assurance adaptée (durée, âge, motif).",
        },
        {
          title: "Souscription",
          desc: "Émission instantanée du contrat avec nos assureurs partenaires.",
        },
        { title: "Dossier", desc: "Intégration de l'attestation à votre demande de visa." },
      ]}
      included={[
        { icon: HeartPulse, t: "Frais médicaux" },
        { icon: Plane, t: "Rapatriement" },
        { icon: ShieldAlert, t: "Couverture Covid" },
        { icon: Stethoscope, t: "Assistance" },
        { icon: ShieldCheck, t: "Caution & AVI", to: "/services/caution-avi" },
      ]}
      faqs={[
        {
          q: "Dois-je prendre l'assurance pour toute la durée des études ?",
          a: "Pour un visa long séjour, vous pouvez généralement souscrire pour les 3 à 6 premiers mois, le temps de vous affilier à la sécurité sociale locale du pays d'accueil.",
        },
        {
          q: "L'assurance rembourse-t-elle si le visa est refusé ?",
          a: "Oui, la plupart de nos partenaires remboursent intégralement la prime d'assurance (hors frais de dossier minimes) sur présentation de la lettre de refus.",
        },
      ]}
      serviceSlug="assurance-visa"
    />
  ),
});
