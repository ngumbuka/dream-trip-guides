import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Plane, Users, Building2, Phone } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-accueil.jpg";

export const Route = createFileRoute("/services/accueil-integration")({
  head: () => ({
    meta: [
      { title: "Accueil & intégration — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Accueil aéroport, démarches administratives et programme d'intégration : votre arrivée se passe dans les meilleures conditions.",
      },
      { property: "og:title", content: "Accueil & intégration — VoyageonsEnsemble" },
      { property: "og:description", content: "Une arrivée en douceur et une intégration réussie." },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Accueil & intégration"
      title="Une arrivée en douceur, un quotidien bien lancé."
      intro="Avec VoyageonsEnsemble, bénéficiez d'un accueil chaleureux et de conseils pratiques pour faciliter votre installation. De l'aéroport aux premières démarches administratives, nous restons à vos côtés pendant toute votre période d'adaptation."
      image={image}
      imageAlt="Représentant accueillant un voyageur à l'aéroport"
      highlights={[
        "Service d'accueil à l'aéroport et transfert vers votre logement",
        "Programme d'intégration et rencontres avec d'autres étudiants",
        "Inscription au campus et ouverture de compte bancaire",
        "Demande de carte de transport et sécurité sociale",
        "Découverte du quartier et des services locaux utiles",
        "Soutien continu pendant les premières semaines",
      ]}
      steps={[
        {
          title: "Avant l'arrivée",
          desc: "Échange visio pour préparer votre installation et confirmer l'agenda d'accueil.",
        },
        {
          title: "Jour J",
          desc: "Accueil à l'aéroport, transfert et remise des clés de votre logement.",
        },
        {
          title: "Première semaine",
          desc: "Démarches administratives prioritaires : campus, banque, transport, santé.",
        },
        {
          title: "Suivi",
          desc: "Programme d'intégration, événements et hotline pour toute question.",
        },
      ]}
      included={[
        { icon: Plane, t: "Billets d'avion", to: "/services/billets-avion" },
        { icon: Handshake, t: "Logement prêt", to: "/services/logement" },
        { icon: Building2, t: "Caution & AVI", to: "/services/caution-avi" },
        { icon: Users, t: "Intégration", desc: "Soirées, rencontres et visites pour vous sentir chez vous." },
        { icon: Phone, t: "Hotline continue", desc: "Assistance téléphonique 7j/7 pour vos urgences et questions." },
      ]}
      faqs={[
        {
          q: "À quelle heure pouvez-vous m'accueillir à l'aéroport ?",
          a: "Notre service fonctionne 7j/7 et s'adapte à votre vol, y compris en arrivée tardive ou matinale.",
        },
        {
          q: "Quelles démarches sont prioritaires en arrivant ?",
          a: "L'inscription au campus, l'ouverture de compte bancaire, la validation du visa et la souscription à la sécurité sociale.",
        },
        {
          q: "Proposez-vous des activités pour rencontrer d'autres étudiants ?",
          a: "Oui — soirées d'accueil, visites de ville et rencontres thématiques organisées avec nos partenaires locaux.",
        },
        {
          q: "Combien de temps dure l'accompagnement ?",
          a: "L'intégration est incluse pendant 4 à 6 semaines, prolongeable selon vos besoins.",
        },
      ]}
      serviceSlug="accueil-integration"
    />
  ),
});
