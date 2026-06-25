import { createFileRoute } from "@tanstack/react-router";
import { Camera, Map, Compass, Sunrise, Image as ImageIcon } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-cameroun.jpg";

export const Route = createFileRoute("/services/safaris-excursions")({
  head: () => ({
    meta: [
      { title: "Safaris & Excursions — VoyageonsEnsemble" },
      { name: "description", content: "Vivez des aventures extraordinaires, des safaris animaliers aux randonnées immersives." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Safaris & Excursions"
      title="L'aventure au cœur de la nature."
      intro="Rencontrer les Big Five dans la savane, marcher sur les traces des gorilles ou explorer des réserves naturelles préservées : nous organisons des excursions mémorables avec des guides experts."
      image={image}
      imageAlt="Véhicule de safari observant la faune sauvage"
      highlights={[
        "Safaris en 4x4, à pied ou en bateau selon les parcs",
        "Guides naturalistes certifiés et passionnés",
        "Respect strict de la faune, de la flore et des communautés",
        "Matériel fourni (jumelles, guides d'identification, etc.)",
      ]}
      steps={[
        { title: "Choix de l'aventure", desc: "Sélectionnez le type d'excursion qui vous fait rêver." },
        { title: "Préparation", desc: "Nous réservons les permis de parcs et l'équipement." },
        { title: "Exploration", desc: "Partez à l'aventure encadré par des professionnels." },
        { title: "Souvenirs", desc: "Rapportez des images et souvenirs inoubliables." },
      ]}
      included={[
        { icon: Camera, t: "Rencontres faune" },
        { icon: Compass, t: "Guides experts" },
        { icon: Map, t: "Entrées parcs" },
        { icon: Sunrise, t: "Excursions aube/crépuscule" },
        { icon: ImageIcon, t: "Visit Africa", to: "/services/visite-cameroun" },
      ]}
      faqs={[
        { q: "Est-ce sécurisé pour les enfants ?", a: "Oui, de nombreux safaris et lodges sont adaptés aux familles. Nous sélectionnons des activités 'child-friendly' si vous voyagez en famille." },
        { q: "Dois-je réserver longtemps à l'avance ?", a: "Pour certaines activités très prisées (comme le trek des gorilles au Rwanda/Ouganda), il faut réserver plusieurs mois à l'avance en raison du nombre limité de permis." },
      ]}
      serviceSlug="safaris-excursions"
    />
  ),
});
