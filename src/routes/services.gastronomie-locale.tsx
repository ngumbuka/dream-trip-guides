import { createFileRoute } from "@tanstack/react-router";
import { Utensils, Coffee, Star, MapPin, Heart } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-cameroun.jpg";

export const Route = createFileRoute("/services/gastronomie-locale")({
  head: () => ({
    meta: [
      { title: "Expériences gastronomiques — VoyageonsEnsemble" },
      { name: "description", content: "Découvrez les saveurs locales et les meilleures tables de votre destination." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Gastronomie locale"
      title="Un voyage culinaire inoubliable."
      intro="La découverte d'un pays passe par ses saveurs. Nous vous guidons vers les meilleures adresses, de la street food authentique et sécurisée aux tables gastronomiques étoilées."
      image={image}
      imageAlt="Plat traditionnel richement dressé"
      highlights={[
        "Sélection de restaurants locaux testés et approuvés",
        "Organisation de dîners traditionnels ou spectacles",
        "Cours de cuisine avec des chefs locaux",
        "Prise en compte de vos régimes alimentaires (végétarien, halal, allergies)",
      ]}
      steps={[
        { title: "Découverte", desc: "Nous vous suggérons des adresses incontournables." },
        { title: "Réservations", desc: "Nous gérons vos tables, même dans les lieux très prisés." },
        { title: "Expériences", desc: "Participez à des dégustations ou cours de cuisine." },
        { title: "Dégustation", desc: "Savourez l'authenticité de la gastronomie locale." },
      ]}
      included={[
        { icon: Utensils, t: "Bonnes adresses" },
        { icon: Coffee, t: "Cours de cuisine" },
        { icon: Star, t: "Dîners d'exception" },
        { icon: MapPin, t: "Street food sûre" },
        { icon: Heart, t: "Visit Africa", to: "/services/visite-cameroun" },
      ]}
      faqs={[
        { q: "La nourriture locale est-elle sûre ?", a: "Oui, toutes les adresses que nous recommandons respectent des normes d'hygiène strictes. Nous vous donnons aussi des conseils pour éviter les désagréments." },
        { q: "Je suis végétarien, aurai-je des options ?", a: "Absolument. De nombreuses cuisines africaines proposent d'excellents plats végétariens, et nous informerons les établissements de vos contraintes." },
      ]}
      serviceSlug="gastronomie-locale"
    />
  ),
});
