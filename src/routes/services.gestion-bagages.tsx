import { createFileRoute } from "@tanstack/react-router";
import { Luggage, Scale, AlertCircle, Plane, Check } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-billets.jpg";

export const Route = createFileRoute("/services/gestion-bagages")({
  head: () => ({
    meta: [
      { title: "Gestion des Bagages — VoyageonsEnsemble" },
      { name: "description", content: "Conseils et optimisation de vos franchises bagages pour un départ sans supplément." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Gestion des bagages"
      title="Emportez tout ce qui compte."
      intro="S'installer dans un nouveau pays signifie souvent emporter sa vie dans quelques valises. Nous vous guidons pour choisir les vols offrant les meilleures franchises bagages et vous évitons les mauvaises surprises à l'aéroport."
      image={image}
      imageAlt="Valises prêtes pour le départ"
      highlights={[
        "Sélection de billets avec franchises bagages généreuses (ex: 2 x 23 kg)",
        "Achats de bagages supplémentaires en amont pour éviter les surcoûts",
        "Informations claires sur les dimensions et poids autorisés (soute et cabine)",
        "Conseils sur les objets interdits ou soumis à déclaration",
      ]}
      steps={[
        { title: "Besoins", desc: "Évaluation du volume de bagages nécessaire pour votre projet." },
        { title: "Sélection vol", desc: "Priorité aux compagnies offrant des avantages bagages." },
        { title: "Ajouts", desc: "Achat anticipé de kilos ou pièces supplémentaires si besoin." },
        { title: "Règles", desc: "Briefing sur les liquides, batteries et restrictions en cabine." },
      ]}
      included={[
        { icon: Scale, t: "Poids & dimensions" },
        { icon: Luggage, t: "Bagages sup." },
        { icon: AlertCircle, t: "Objets interdits" },
        { icon: Check, t: "Sans surcoût" },
        { icon: Plane, t: "Billetterie", to: "/services/billets-avion" },
      ]}
      faqs={[
        { q: "Que se passe-t-il si ma valise dépasse les 23 kg ?", a: "Vous devrez payer une taxe pour excédent de bagage au comptoir. Il vaut toujours mieux peser chez soi ou acheter un bagage supplémentaire en ligne à l'avance, c'est moins cher." },
        { q: "Puis-je voyager avec des denrées alimentaires (nourriture locale) ?", a: "Certaines compagnies et certains pays (comme les pays de l'UE ou le Canada) interdisent l'importation de produits carnés ou laitiers non transformés. Nous vous fournirons les règles douanières." },
      ]}
      serviceSlug="gestion-bagages"
    />
  ),
});
