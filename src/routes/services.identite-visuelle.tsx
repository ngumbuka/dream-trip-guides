import { createFileRoute } from "@tanstack/react-router";
import { Palette, Image as ImageIcon, PenTool, LayoutTemplate, Megaphone } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-community.jpg";

export const Route = createFileRoute("/services/identite-visuelle")({
  head: () => ({
    meta: [
      { title: "Identité visuelle & Branding — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Création de logo, charte graphique et supports visuels pour démarquer votre marque.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Identité visuelle"
      title="Une marque qui marque les esprits."
      intro="L'identité visuelle est le premier contact entre votre marque et vos clients. Nous concevons un univers graphique fort, cohérent et mémorable qui reflète vos valeurs et attire votre cible."
      image={image}
      imageAlt="Planches de tendances, nuanciers de couleurs et croquis de logo"
      highlights={[
        "Création de logos originaux et déclinables",
        "Définition d'une charte graphique complète (couleurs, typographies)",
        "Design de supports de communication digitaux (bannières, templates réseaux sociaux)",
        "Design de supports imprimés (cartes de visite, plaquettes, flyers)",
      ]}
      steps={[
        {
          title: "Brief créatif",
          desc: "Nous discutons de vos valeurs, votre vision et votre cible.",
        },
        { title: "Propositions", desc: "Nous vous présentons plusieurs pistes créatives de logo." },
        { title: "Affinage", desc: "Nous perfectionnons la piste retenue selon vos retours." },
        { title: "Livrables", desc: "Remise des fichiers sources et de la charte graphique." },
      ]}
      included={[
        { icon: PenTool, t: "Création logo" },
        { icon: Palette, t: "Charte graphique" },
        { icon: LayoutTemplate, t: "Templates digitaux" },
        { icon: ImageIcon, t: "Supports Print" },
        { icon: Megaphone, t: "CM & Digital", to: "/services/community-management" },
      ]}
      faqs={[
        {
          q: "Combien de propositions de logo faites-vous ?",
          a: "Généralement 2 à 3 pistes distinctes lors de la première présentation, que nous affinons ensuite ensemble.",
        },
        {
          q: "Quels formats de fichiers sont livrés ?",
          a: "Nous livrons tous les formats professionnels nécessaires : vectoriel (AI, EPS, SVG) et raster (PNG, JPG, PDF).",
        },
      ]}
      serviceSlug="identite-visuelle"
    />
  ),
});
