import { createFileRoute } from "@tanstack/react-router";
import { Home, Map, Building, BedDouble, ArrowRight } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-logement.jpg";

export const Route = createFileRoute("/services/selection-logements")({
  head: () => ({
    meta: [
      { title: "Sélection de logements — VoyageonsEnsemble" },
      { name: "description", content: "Trouvez le logement idéal : résidences étudiantes, colocations, studios ou appartements privés." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Sélection de logements"
      title="Votre futur chez-vous, sélectionné avec soin."
      intro="La recherche d'un logement à distance est souvent fastidieuse. Nous ciblons et visitons pour vous les meilleures options selon vos critères : budget, proximité du campus, ambiance du quartier."
      image={image}
      imageAlt="Intérieur d'un appartement étudiant moderne et lumineux"
      highlights={[
        "Recherche personnalisée selon vos critères précis",
        "Accès à un réseau exclusif de résidences et propriétaires",
        "Vérification de la conformité et de la sécurité des logements",
        "Visites virtuelles ou reportages photo/vidéo dédiés",
      ]}
      steps={[
        { title: "Cahier des charges", desc: "Définition de vos besoins (budget, surface, localisation)." },
        { title: "Chasse immobilière", desc: "Nous sélectionnons 3 à 5 biens correspondants." },
        { title: "Visites & retours", desc: "Nous visitons pour vous et vous envoyons un compte-rendu." },
        { title: "Validation", desc: "Vous choisissez votre coup de cœur pour lancer le dossier." },
      ]}
      included={[
        { icon: Map, t: "Étude quartier" },
        { icon: Building, t: "Réseau résidences" },
        { icon: BedDouble, t: "Colocations" },
        { icon: Home, t: "Visites virtuelles" },
        { icon: ArrowRight, t: "Service Logement", to: "/services/logement" },
      ]}
      faqs={[
        { q: "Visitez-vous réellement les appartements ?", a: "Oui, un agent local effectue la visite pour s'assurer que le logement correspond aux photos et qu'il n'y a pas de mauvaises surprises." },
        { q: "Proposez-vous des colocations ?", a: "Absolument. Nous pouvons vous trouver une chambre dans une colocation existante ou constituer une colocation avec d'autres étudiants de notre réseau." },
        { q: "Quels types de logements sont disponibles ?", a: "Nous trouvons des studios, des T2, des chambres en résidences étudiantes privées et publiques, ainsi que des colocations." },
      ]}
      serviceSlug="selection-logements"
    />
  ),
});
