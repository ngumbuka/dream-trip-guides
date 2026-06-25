import { createFileRoute } from "@tanstack/react-router";
import { Search, Target, MousePointerClick, BarChart, Megaphone } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-community.jpg";

export const Route = createFileRoute("/services/seo-ads")({
  head: () => ({
    meta: [
      { title: "SEO & Publicité en ligne (Ads) — VoyageonsEnsemble" },
      { name: "description", content: "Référencement naturel et campagnes publicitaires pour booster votre visibilité en ligne." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="SEO & Ads"
      title="Soyez visible par ceux qui vous cherchent."
      intro="Attirez un trafic qualifié sur votre site internet grâce à une stratégie combinée de référencement naturel (SEO) sur le long terme et de campagnes publicitaires ciblées (Google Ads, Meta Ads) pour des résultats immédiats."
      image={image}
      imageAlt="Graphiques de croissance et cible avec une flèche"
      highlights={[
        "Audit SEO technique et sémantique de votre site web",
        "Optimisation des mots-clés et création de contenu SEO-friendly",
        "Création et gestion de campagnes Google Ads (Search, Display)",
        "Campagnes publicitaires ciblées sur Facebook, Instagram et LinkedIn",
      ]}
      steps={[
        { title: "Audit & Stratégie", desc: "Analyse de votre visibilité actuelle et des mots-clés." },
        { title: "Optimisation SEO", desc: "Mise en place des recommandations techniques et sémantiques." },
        { title: "Lancement Ads", desc: "Création de vos campagnes publicitaires avec un budget défini." },
        { title: "Optimisation", desc: "Ajustement continu pour maximiser le retour sur investissement (ROI)." },
      ]}
      included={[
        { icon: Search, t: "Audit SEO" },
        { icon: Target, t: "Ciblage précis" },
        { icon: MousePointerClick, t: "Google & Meta Ads" },
        { icon: BarChart, t: "Suivi ROI" },
        { icon: Megaphone, t: "CM & Digital", to: "/services/community-management" },
      ]}
      faqs={[
        { q: "Quelle est la différence entre SEO et Ads ?", a: "Le SEO (naturel) prend du temps mais offre une visibilité durable et gratuite par clic. Les Ads (payant) offrent des résultats immédiats mais s'arrêtent dès que vous coupez le budget." },
        { q: "Quel budget publicitaire prévoir ?", a: "Le budget dépend de vos objectifs et de la concurrence dans votre secteur. Nous recommandons un budget minimum pour pouvoir tester et optimiser les annonces." },
      ]}
      serviceSlug="seo-ads"
    />
  ),
});
