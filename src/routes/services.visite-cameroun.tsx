import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Car, Home, Utensils, Camera } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-cameroun.jpg";

export const Route = createFileRoute("/services/visite-cameroun")({
  head: () => ({
    meta: [
      { title: "Visit Africa — Circuits & séjours | VoyageonsEnsemble" },
      { name: "description", content: "Découvrez l'Afrique : Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Cameroun…" },
      { property: "og:title", content: "Visit Africa — VoyageonsEnsemble" },
      { property: "og:description", content: "Safaris, plages, déserts, métropoles : l'Afrique sur mesure." },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Visit Africa"
      title="L'Afrique, à votre rythme."
      intro="Safari au Kenya, plages du Cap-Vert, médinas du Maroc, gorilles du Rwanda, pyramides d'Égypte, savanes de Tanzanie, retour aux sources au Cameroun : nous organisons votre séjour de A à Z, avec le confort d'un voyage premium et l'âme d'une expérience authentique."
      image={image}
      imageAlt="Paysage africain — plage, savane et métropoles"
      highlights={[
        "Circuits multi-pays : Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Cameroun…",
        "Safaris (Kenya, Tanzanie, Ouganda, Afrique du Sud)",
        "Plages & farniente (Cap-Vert, Zanzibar, Kribi, Diani)",
        "Découvertes culturelles (médinas du Maroc, pyramides d'Égypte, Gorée au Sénégal)",
        "Transferts aéroport, véhicule avec chauffeur, guides francophones et anglophones",
        "Hébergement sélectionné : hôtels, lodges, villas, riads",
        "Organisation d'événements (anniversaires, mariages, retours au pays, séminaires)",
      ]}
      steps={[
        { title: "Votre envie", desc: "On échange sur vos dates, vos envies et le rythme souhaité." },
        { title: "Itinéraire", desc: "Nous concevons un programme personnalisé, validé avec vous." },
        { title: "Logistique", desc: "Vols internes, visas pays, hôtels, chauffeurs et activités réservés." },
        { title: "Sur place", desc: "Un référent local disponible tout au long de votre séjour." },
      ]}
      included={[
        { icon: MapPin, t: "Circuits multi-pays" },
        { icon: Car, t: "Chauffeur & transferts" },
        { icon: Home, t: "Hébergement" },
        { icon: Utensils, t: "Gastronomie locale" },
        { icon: Camera, t: "Safaris & excursions" },
      ]}
      faqs={[
        { q: "Quels pays africains couvrez-vous ?", a: "Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Cameroun et plus encore. Multi-pays possible sur un même séjour." },
        { q: "Faut-il un visa pour chaque pays ?", a: "Cela dépend de votre nationalité. Beaucoup de pays proposent des e-visas ou un visa à l'arrivée. Nous gérons toutes les démarches pour vous." },
        { q: "Quand partir ?", a: "Toute l'année selon la région : saison sèche pour les safaris (juin-octobre en Afrique de l'Est), hiver pour le Maroc et l'Égypte, novembre-février pour l'Afrique de l'Ouest." },
        { q: "Organisez-vous des voyages de groupe ?", a: "Oui — familles, amis, associations, entreprises, retours au pays en groupe diaspora." },
        { q: "Quelles vaccinations sont nécessaires ?", a: "Fièvre jaune obligatoire pour la plupart des pays subsahariens. Antipaludéen recommandé selon la zone. Nous vous remettons un guide santé par destination." },
      ]}
      serviceSlug="visite-cameroun"
    />
  ),
});