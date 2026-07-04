import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, MessageCircle, ShieldCheck, HeartHandshake } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-accueil.jpg";

export const Route = createFileRoute("/services/hotline-continue")({
  head: () => ({
    meta: [
      { title: "Hotline continue & Assistance — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Une assistance 7j/7 pour répondre à toutes vos questions et urgences lors de votre installation.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Assistance 7j/7"
      title="Une équipe toujours à votre écoute."
      intro="Parce qu'une question urgente ou un imprévu peut arriver à tout moment, nous mettons à votre disposition une ligne d'assistance dédiée. Qu'il s'agisse d'un problème administratif, d'une urgence médicale ou d'un simple conseil pratique, nous sommes là."
      image={image}
      imageAlt="Opérateur téléphonique souriant"
      highlights={[
        "Assistance téléphonique et WhatsApp 7j/7",
        "Réponse rapide en cas d'urgence (santé, logement, sécurité)",
        "Conseils sur les démarches administratives locales",
        "Mise en relation avec des professionnels de santé ou des juristes si nécessaire",
      ]}
      steps={[
        {
          title: "Prise de contact",
          desc: "Vous nous appelez ou nous envoyez un message via WhatsApp.",
        },
        { title: "Évaluation", desc: "Nous analysons rapidement votre demande ou votre urgence." },
        {
          title: "Intervention",
          desc: "Nous vous guidons à distance ou coordonnons une aide locale.",
        },
        {
          title: "Suivi",
          desc: "Nous prenons de vos nouvelles jusqu'à la résolution complète du problème.",
        },
      ]}
      included={[
        { icon: Phone, t: "Assistance 7j/7" },
        { icon: MessageCircle, t: "Chat WhatsApp" },
        { icon: Clock, t: "Réponse rapide" },
        { icon: ShieldCheck, t: "Urgences gérées" },
        { icon: HeartHandshake, t: "Accueil global", to: "/services/accueil-integration" },
      ]}
      faqs={[
        {
          q: "Quels sont les horaires de la hotline ?",
          a: "Pour les urgences, la ligne est ouverte 24h/24 et 7j/7. Pour les conseils généraux, nos horaires d'ouverture s'appliquent.",
        },
        {
          q: "Quels types de problèmes puis-je signaler ?",
          a: "Tout ! Un dégât des eaux, un retard de vol, une question sur la sécurité sociale, ou même le besoin de trouver un médecin.",
        },
        {
          q: "La hotline est-elle incluse dans mon pack ?",
          a: "Oui, la hotline est incluse gratuitement pour tous nos clients bénéficiant d'un pack d'accueil et d'intégration.",
        },
      ]}
      serviceSlug="hotline-continue"
    />
  ),
});
