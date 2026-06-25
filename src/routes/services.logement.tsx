import { createFileRoute } from "@tanstack/react-router";
import { Home, Key, ShieldCheck, FileSignature, MapPin } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-logement.jpg";

export const Route = createFileRoute("/services/logement")({
  head: () => ({
    meta: [
      { title: "Recherche de logement — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Résidences étudiantes, colocations ou studios : nous trouvons un logement sécurisé, adapté à votre budget et géré de A à Z.",
      },
      { property: "og:title", content: "Recherche de logement — VoyageonsEnsemble" },
      {
        property: "og:description",
        content: "Un logement confortable et sécurisé dans votre nouvelle destination.",
      },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Logement"
      title="Trouvez un logement confortable et sécurisé."
      intro="Nous travaillons avec un réseau d'agences immobilières et de résidences étudiantes pour vous proposer un logement adapté à vos besoins, votre budget et votre quartier de prédilection — avec un accompagnement jusqu'à la remise des clés."
      image={image}
      imageAlt="Intérieur lumineux d'un appartement étudiant"
      highlights={[
        "Évaluation de vos préférences : localisation, budget, type de logement",
        "Résidences universitaires, colocations conviviales ou studios individuels",
        "Sélection de logements dans des quartiers sûrs et bien desservis",
        "Préparation des dossiers de location et solutions de garant",
        "Signature du bail à distance ou sur place",
        "Service de relocalisation et orientation dans votre nouveau quartier",
      ]}
      steps={[
        {
          title: "Cahier des charges",
          desc: "Nous cernons vos préférences : ville, quartier, surface, budget, durée.",
        },
        {
          title: "Sélection",
          desc: "Nous présélectionnons les meilleures options de notre réseau partenaire.",
        },
        {
          title: "Dossier & bail",
          desc: "Constitution du dossier, négociation et signature du contrat de location.",
        },
        {
          title: "Installation",
          desc: "Accompagnement à l'état des lieux et orientation dans votre quartier.",
        },
      ]}
      included={[
        { icon: Home, t: "Sélection logements", to: "/services/selection-logements" },
        { icon: FileSignature, t: "Dossier locataire", to: "/services/dossier-locataire" },
        { icon: ShieldCheck, t: "Caution & AVI", to: "/services/caution-avi" },
        { icon: Key, t: "Signature du bail", to: "/services/signature-bail" },
        { icon: MapPin, t: "Accueil sur place", to: "/services/accueil-integration" },
      ]}
      faqs={[
        {
          q: "Peut-on signer un bail sans être encore sur place ?",
          a: "Oui. Nous traitons les démarches à distance grâce à la signature électronique et présentons votre dossier en votre nom.",
        },
        {
          q: "Travaillez-vous avec les résidences universitaires ?",
          a: "Oui, ainsi qu'avec des résidences étudiantes privées, des agences immobilières et des particuliers de confiance.",
        },
        {
          q: "Pouvez-vous servir de garant ?",
          a: "Selon votre profil, nous proposons des solutions adaptées (Visale, garants privés, caution bancaire) conformes aux exigences du bailleur.",
        },
        {
          q: "Quel budget logement prévoir ?",
          a: "Comptez 250 à 600 € en résidence ou colocation, et 600 à 1 200 € pour un studio individuel selon la ville.",
        },
      ]}
      serviceSlug="logement"
    />
  ),
});
