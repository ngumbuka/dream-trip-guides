import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Car, Home, Utensils, Camera } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-cameroun.jpg";

export const Route = createFileRoute("/services/visite-cameroun")({
  head: () => ({
    meta: [
      { title: "Visite Cameroun — Circuits & séjours | VoyageonsEnsemble" },
      { name: "description", content: "Découvrez le Cameroun en toute sérénité : circuits, hébergement, transferts et excursions culturelles." },
      { property: "og:title", content: "Visite Cameroun — VoyageonsEnsemble" },
      { property: "og:description", content: "Une expérience authentique, pensée pour la diaspora et les voyageurs." },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Visite Cameroun"
      title="Le Cameroun, à votre rythme."
      intro="Plages de Kribi, métropoles dynamiques, paysages du Grand Nord : nous organisons votre séjour de A à Z, avec le confort d'un voyage premium et l'âme d'un retour aux sources."
      image={image}
      imageAlt="Plage de Kribi au Cameroun, palmiers et eau turquoise"
      highlights={[
        "Circuits sur mesure : Yaoundé, Douala, Kribi, Limbé, Bafoussam…",
        "Transferts aéroport et véhicule avec chauffeur",
        "Hébergement sélectionné (hôtels, lodges, villas)",
        "Excursions culturelles, nature et gastronomiques",
        "Conseils pratiques et accompagnement local",
        "Organisation d'événements (anniversaires, mariages, retours au pays)",
      ]}
      steps={[
        { title: "Votre envie", desc: "On échange sur vos dates, vos envies et le rythme souhaité." },
        { title: "Itinéraire", desc: "Nous concevons un programme personnalisé, validé avec vous." },
        { title: "Logistique", desc: "Vols internes, hôtels, chauffeurs et activités réservés." },
        { title: "Sur place", desc: "Un référent local disponible tout au long de votre séjour." },
      ]}
      included={[
        { icon: MapPin, t: "Circuits" },
        { icon: Car, t: "Chauffeur" },
        { icon: Home, t: "Hébergement" },
        { icon: Utensils, t: "Gastronomie" },
        { icon: Camera, t: "Excursions" },
      ]}
      faqs={[
        { q: "Faut-il un visa pour entrer au Cameroun ?", a: "Oui, pour la majorité des nationalités. Nous pouvons vous accompagner dans la demande d'e-visa." },
        { q: "Quelles régions recommandez-vous ?", a: "Tout dépend de vos envies : balnéaire à Kribi, culturel à Foumban, nature au Mont Cameroun, urbain à Douala et Yaoundé." },
        { q: "Quand partir ?", a: "La saison sèche (novembre à février) est idéale, mais nous organisons des voyages toute l'année." },
        { q: "Organisez-vous des voyages de groupe ?", a: "Oui, pour familles, amis, associations ou entreprises." },
      ]}
    />
  ),
});