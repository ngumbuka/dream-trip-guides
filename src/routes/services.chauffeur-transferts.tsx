import { createFileRoute } from "@tanstack/react-router";
import { Car, Map, ShieldCheck, Clock, Navigation } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-cameroun.jpg";

export const Route = createFileRoute("/services/chauffeur-transferts")({
  head: () => ({
    meta: [
      { title: "Chauffeur privé & Transferts — VoyageonsEnsemble" },
      { name: "description", content: "Déplacez-vous en toute sécurité et confort avec nos chauffeurs privés." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Chauffeur & transferts"
      title="Votre mobilité en toute tranquillité."
      intro="Oubliez le stress des transports en commun ou de la location de voiture. Nos chauffeurs privés vous accueillent dès l'aéroport et vous accompagnent tout au long de votre séjour, avec des véhicules climatisés et confortables."
      image={image}
      imageAlt="Chauffeur privé ouvrant la portière d'une voiture de tourisme"
      highlights={[
        "Accueil personnalisé à l'aéroport avec panneau à votre nom",
        "Véhicules récents, climatisés et adaptés au nombre de passagers",
        "Chauffeurs professionnels, ponctuels et connaissant parfaitement la région",
        "Disponibilité à la course, à la demi-journée ou pour tout le séjour",
      ]}
      steps={[
        { title: "Réservation", desc: "Indiquez-nous vos besoins de déplacement." },
        { title: "Accueil", desc: "Votre chauffeur vous attend dès votre arrivée." },
        { title: "Trajets", desc: "Laissez-vous conduire en toute sécurité vers vos destinations." },
        { title: "Flexibilité", desc: "Ajustez vos trajets selon vos envies du moment." },
      ]}
      included={[
        { icon: Car, t: "Véhicules confortables" },
        { icon: ShieldCheck, t: "Chauffeurs pro" },
        { icon: Clock, t: "Ponctualité" },
        { icon: Map, t: "Connaissance locale" },
        { icon: Navigation, t: "Visit Africa", to: "/services/visite-cameroun" },
      ]}
      faqs={[
        { q: "Puis-je louer une voiture sans chauffeur ?", a: "C'est possible dans certains pays, mais nous recommandons fortement l'option avec chauffeur pour des raisons de sécurité, de confort et d'assurance." },
        { q: "Les chauffeurs parlent-ils français ou anglais ?", a: "Oui, nous sélectionnons des chauffeurs bilingues selon votre préférence pour faciliter la communication." },
      ]}
      serviceSlug="chauffeur-transferts"
    />
  ),
});
