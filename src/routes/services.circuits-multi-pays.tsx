import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Globe2, Compass, Plane, CheckCircle2 } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-cameroun.jpg";

export const Route = createFileRoute("/services/circuits-multi-pays")({
  head: () => ({
    meta: [
      { title: "Circuits multi-pays en Afrique — VoyageonsEnsemble" },
      { name: "description", content: "Découvrez plusieurs pays africains lors d'un seul voyage sur mesure." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Circuits multi-pays"
      title="Traversez les frontières, multipliez les découvertes."
      intro="Pourquoi choisir un seul pays quand on peut en visiter plusieurs ? Nous créons des itinéraires fluides traversant les frontières, combinant par exemple un safari au Kenya avec un séjour plage à Zanzibar."
      image={image}
      imageAlt="Carte de l'Afrique avec plusieurs destinations épinglées"
      highlights={[
        "Itinéraires optimisés pour minimiser les temps de transport",
        "Gestion complète des visas multi-destinations",
        "Réservation des vols internes et transferts transfrontaliers",
        "Coordination avec nos équipes locales dans chaque pays visité",
      ]}
      steps={[
        { title: "Inspiration", desc: "Choisissez les pays et les ambiances que vous souhaitez combiner." },
        { title: "Logistique", desc: "Nous gérons les vols, visas et connexions." },
        { title: "Exploration", desc: "Profitez d'un voyage sans couture d'un pays à l'autre." },
        { title: "Assistance", desc: "Un suivi continu à chaque passage de frontière." },
      ]}
      included={[
        { icon: MapPin, t: "Itinéraires sur mesure" },
        { icon: Plane, t: "Vols internes gérés" },
        { icon: Globe2, t: "Visas coordonnés" },
        { icon: Compass, t: "Guides locaux" },
        { icon: CheckCircle2, t: "Visit Africa", to: "/services/visite-cameroun" },
      ]}
      faqs={[
        { q: "Quelles sont les combinaisons populaires ?", a: "Kenya/Tanzanie, Sénégal/Cap-Vert, ou Afrique du Sud/Botswana/Victoria Falls sont très demandés." },
        { q: "Est-ce plus cher de faire plusieurs pays ?", a: "Les vols internes ajoutent un coût, mais nos tarifs négociés et l'optimisation de l'itinéraire permettent de maîtriser le budget global." },
      ]}
      serviceSlug="circuits-multi-pays"
    />
  ),
});
