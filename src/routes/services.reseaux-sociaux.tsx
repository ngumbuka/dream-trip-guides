import { createFileRoute } from "@tanstack/react-router";
import { Share2, Smartphone, TrendingUp, MessageCircle, Megaphone } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-community.jpg";

export const Route = createFileRoute("/services/reseaux-sociaux")({
  head: () => ({
    meta: [
      { title: "Gestion des Réseaux Sociaux — VoyageonsEnsemble" },
      { name: "description", content: "Animation de vos comptes Facebook, Instagram, LinkedIn, TikTok pour développer votre communauté." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Réseaux sociaux"
      title="Engagez votre communauté."
      intro="Les réseaux sociaux sont la vitrine de votre marque. Nous créons du contenu pertinent et engageant pour développer votre audience, fidéliser vos clients et augmenter votre notoriété sur toutes les plateformes."
      image={image}
      imageAlt="Grille de photos sur un écran de smartphone"
      highlights={[
        "Création de calendriers éditoriaux mensuels",
        "Rédaction de posts optimisés pour chaque plateforme",
        "Modération quotidienne (réponses aux commentaires et messages)",
        "Stratégies d'engagement spécifiques à Facebook, Instagram, TikTok et LinkedIn",
      ]}
      steps={[
        { title: "Ligne éditoriale", desc: "Nous définissons le ton et les thèmes abordés." },
        { title: "Création", desc: "Nous produisons les textes, images et vidéos courtes." },
        { title: "Publication", desc: "Nous programmons les posts aux heures d'audience optimale." },
        { title: "Animation", desc: "Nous interagissons avec vos abonnés au quotidien." },
      ]}
      included={[
        { icon: Smartphone, t: "Création contenu" },
        { icon: MessageCircle, t: "Modération" },
        { icon: TrendingUp, t: "Croissance" },
        { icon: Share2, t: "Multi-plateformes" },
        { icon: Megaphone, t: "CM & Digital", to: "/services/community-management" },
      ]}
      faqs={[
        { q: "Dois-je valider les posts avant publication ?", a: "Oui, nous vous soumettons le calendrier éditorial à l'avance pour validation avant toute publication." },
        { q: "Quels réseaux privilégier ?", a: "Cela dépend de votre cible (B2B pour LinkedIn, B2C jeune pour TikTok/Instagram). Nous vous conseillons lors de l'audit initial." },
      ]}
      serviceSlug="reseaux-sociaux"
    />
  ),
});
