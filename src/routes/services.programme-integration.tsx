import { createFileRoute } from "@tanstack/react-router";
import { Users, Calendar, Map, MessageSquare, Handshake } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-accueil.jpg";

export const Route = createFileRoute("/services/programme-integration")({
  head: () => ({
    meta: [
      { title: "Programme d'intégration — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Rencontrez d'autres étudiants et découvrez votre nouvelle ville grâce à notre programme d'intégration.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Intégration"
      title="Créez votre réseau dès votre arrivée."
      intro="Arriver dans un nouveau pays peut être intimidant. Notre programme d'intégration est conçu pour vous aider à vous faire des amis, découvrir votre quartier et vous sentir chez vous dès les premières semaines."
      image={image}
      imageAlt="Étudiants discutant et riant ensemble"
      highlights={[
        "Soirées d'accueil et événements réseau",
        "Visites guidées de la ville et du campus",
        "Groupes de discussion et entraide",
        "Ateliers pratiques (budget, transports, coutumes locales)",
      ]}
      steps={[
        { title: "Inscription", desc: "Rejoignez notre réseau d'étudiants internationaux." },
        { title: "Événements", desc: "Participez aux rencontres et activités organisées." },
        {
          title: "Découverte",
          desc: "Explorez la ville avec des guides locaux et anciens étudiants.",
        },
        {
          title: "Réseautage",
          desc: "Construisez votre cercle d'amis et de contacts professionnels.",
        },
      ]}
      included={[
        { icon: Users, t: "Rencontres" },
        { icon: Calendar, t: "Événements" },
        { icon: Map, t: "Visites guidées" },
        { icon: MessageSquare, t: "Groupes d'entraide" },
        { icon: Handshake, t: "Accueil global", to: "/services/accueil-integration" },
      ]}
      faqs={[
        {
          q: "Les activités sont-elles gratuites ?",
          a: "La plupart des activités d'intégration de base sont incluses dans nos packs d'accueil. Certaines sorties spécifiques peuvent demander une petite participation.",
        },
        {
          q: "Puis-je venir accompagné ?",
          a: "Oui, vos amis et autres étudiants internationaux sont généralement les bienvenus lors de nos événements ouverts.",
        },
        {
          q: "Combien de temps dure l'accompagnement ?",
          a: "Notre programme actif dure environ 4 à 6 semaines, mais vous restez membre de notre communauté à vie !",
        },
      ]}
      serviceSlug="programme-integration"
    />
  ),
});
