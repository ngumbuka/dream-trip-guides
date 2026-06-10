import { createFileRoute } from "@tanstack/react-router";
import { Ticket, Plane, Luggage, Calendar, LifeBuoy } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-billets.jpg";

export const Route = createFileRoute("/services/billets-avion")({
  head: () => ({
    meta: [
      { title: "Réservation de billets d'avion — VoyageonsEnsemble" },
      { name: "description", content: "Tarifs négociés, billets flexibles et conseils voyage : nous organisons votre départ dans les meilleures conditions." },
      { property: "og:title", content: "Billets d'avion — VoyageonsEnsemble" },
      { property: "og:description", content: "Tarifs avantageux et accompagnement pour vos vols internationaux." },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Billets d'avion"
      title="Voyagez sereinement, au meilleur tarif."
      intro="Voyager pour la première fois dans un nouveau pays peut être source d'appréhension. Nous travaillons avec un réseau de compagnies pour vous obtenir les meilleurs tarifs et vous accompagner sur tous les détails pratiques, du choix du bagage aux formalités d'embarquement."
      image={image}
      imageAlt="Aile d'avion au-dessus des nuages au coucher du soleil"
      highlights={[
        "Recherche de tarifs compétitifs auprès de compagnies partenaires",
        "Options bagages adaptées aux longs séjours (jusqu'à 2 × 23 kg)",
        "Billets flexibles avec modification sans frais importants",
        "Conseils sur les formalités d'entrée et les objets autorisés",
        "Coordination avec votre arrivée et votre accueil à l'aéroport",
        "Assistance en cas d'imprévu ou de modification de dernière minute",
      ]}
      steps={[
        { title: "Brief voyage", desc: "Dates souhaitées, ville de départ/arrivée, préférences compagnie et bagages." },
        { title: "Comparatif", desc: "Nous vous présentons 2 à 3 options optimales en tarif et flexibilité." },
        { title: "Réservation", desc: "Émission du billet et envoi des e-tickets et confirmations." },
        { title: "Avant le vol", desc: "Check-list bagages, formalités d'enregistrement et conseils pratiques." },
      ]}
      included={[
        { icon: Ticket, t: "Billet émis" },
        { icon: Plane, t: "Tarifs négociés" },
        { icon: Luggage, t: "Bagages adaptés" },
        { icon: Calendar, t: "Accueil arrivée", to: "/services/accueil-integration" },
        { icon: LifeBuoy, t: "Logement prêt", to: "/services/logement" },
      ]}
      faqs={[
        { q: "Quand réserver pour avoir les meilleurs prix ?", a: "Idéalement 6 à 10 semaines avant le départ pour un vol long-courrier, davantage en haute saison." },
        { q: "Puis-je modifier mon vol après réservation ?", a: "Oui, sur les tarifs flexibles que nous privilégions ; les frais éventuels sont communiqués avant émission." },
        { q: "Prenez-vous en charge les escales ?", a: "Oui, nous optimisons les correspondances et vous indiquons les durées et terminaux d'escale." },
        { q: "Et pour les bagages étudiants longue durée ?", a: "Nous sélectionnons les compagnies offrant le meilleur quota et vous conseillons sur le fret accompagné si nécessaire." },
      ]}
    />
  ),
});