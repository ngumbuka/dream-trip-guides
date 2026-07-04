import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, MonitorCheck, Users, Info, Calendar } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-court.jpg";

export const Route = createFileRoute("/services/rendez-vous-consulat")({
  head: () => ({
    meta: [
      { title: "Prise de rendez-vous consulaire — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Obtenez un rendez-vous rapidement pour déposer votre demande de visa au consulat ou chez VFS/TLS.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Rendez-vous"
      title="On sécurise votre place."
      intro="Trouver un créneau disponible chez VFS, TLS, Capago ou directement au consulat peut être un véritable parcours du combattant. Nous prenons en charge la veille et la prise de rendez-vous pour vous faire gagner du temps."
      image={image}
      imageAlt="Calendrier avec une date entourée en rouge"
      highlights={[
        "Surveillance quotidienne des créneaux disponibles",
        "Prise de rendez-vous rapide dès l'ouverture de nouvelles disponibilités",
        "Gestion des comptes sur les plateformes officielles",
        "Rappels et conseils pratiques avant le jour J",
      ]}
      steps={[
        { title: "Mandat", desc: "Vous nous donnez mandat pour chercher un rendez-vous." },
        { title: "Veille", desc: "Nos équipes surveillent activement les plateformes." },
        { title: "Réservation", desc: "Nous bloquons le créneau qui vous convient." },
        {
          title: "Préparation",
          desc: "Nous vous envoyons la convocation et les dernières consignes.",
        },
      ]}
      included={[
        { icon: MonitorCheck, t: "Veille continue" },
        { icon: CalendarCheck, t: "Créneau sécurisé" },
        { icon: Users, t: "Comptes gérés" },
        { icon: Info, t: "Rappels" },
        { icon: Calendar, t: "Service Visa", to: "/services/visa-schengen" },
      ]}
      faqs={[
        {
          q: "Garantissez-vous une date précise ?",
          a: "Les disponibilités dépendent exclusivement des consulats. Nous garantissons de prendre le premier créneau disponible correspondant à vos contraintes.",
        },
        {
          q: "Comment faites-vous si les sites sont saturés ?",
          a: "Nous avons l'habitude des périodes de forte affluence et disposons d'équipes dédiées à la veille pour réagir dans la minute.",
        },
      ]}
      serviceSlug="rendez-vous-consulat"
    />
  ),
});
