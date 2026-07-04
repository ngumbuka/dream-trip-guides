import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Laptop, Smartphone, Code, Megaphone } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-community.jpg";

export const Route = createFileRoute("/services/creation-sites-web")({
  head: () => ({
    meta: [
      { title: "Création de sites web — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Conception de sites vitrines et e-commerce modernes, performants et orientés conversion.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Sites web"
      title="Une vitrine digitale à votre image."
      intro="Votre site web est le cœur de votre écosystème digital. Nous concevons des sites sur mesure, esthétiques, rapides et parfaitement adaptés aux mobiles (responsive), qu'il s'agisse d'un site vitrine ou d'une boutique en ligne."
      image={image}
      imageAlt="Développeur travaillant sur la maquette d'un site web"
      highlights={[
        "Design sur mesure et expérience utilisateur (UX/UI) optimisée",
        "Développement technique performant et sécurisé",
        "Adaptation parfaite sur tous les écrans (Responsive Design)",
        "Intégration d'outils de suivi (Analytics) et conformité RGPD",
      ]}
      steps={[
        { title: "Maquettage", desc: "Création des maquettes graphiques (wireframes et UI)." },
        { title: "Développement", desc: "Intégration technique et création des pages." },
        { title: "Recettage", desc: "Tests approfondis sur différents navigateurs et appareils." },
        { title: "Lancement", desc: "Mise en ligne, formation à l'outil de gestion et suivi." },
      ]}
      included={[
        { icon: Laptop, t: "Sites sur mesure" },
        { icon: Smartphone, t: "Responsive mobile" },
        { icon: Code, t: "Haute performance" },
        { icon: Globe2, t: "SEO inclus" },
        { icon: Megaphone, t: "CM & Digital", to: "/services/community-management" },
      ]}
      faqs={[
        {
          q: "Serai-je propriétaire de mon site ?",
          a: "Oui, vous êtes l'unique propriétaire du code, du nom de domaine et de l'hébergement.",
        },
        {
          q: "Pourrai-je modifier le contenu moi-même ?",
          a: "Oui, nous utilisons des systèmes de gestion de contenu (CMS) intuitifs et nous vous formons à leur utilisation.",
        },
      ]}
      serviceSlug="creation-sites-web"
    />
  ),
});
