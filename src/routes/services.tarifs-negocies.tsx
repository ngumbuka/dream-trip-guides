import { createFileRoute } from "@tanstack/react-router";
import { HandCoins, TrendingDown, Users, BadgePercent, Plane } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-billets.jpg";

export const Route = createFileRoute("/services/tarifs-negocies")({
  head: () => ({
    meta: [
      { title: "Tarifs négociés sur les vols — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Profitez de nos accords avec les compagnies aériennes pour voyager au meilleur prix.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Tarifs négociés"
      title="Voyagez sans vous ruiner."
      intro="Grâce à nos volumes de réservation et à nos partenariats avec les plus grandes compagnies aériennes (Air France, Brussels Airlines, Ethiopian, Royal Air Maroc, Turkish Airlines...), nous vous faisons bénéficier de tarifs avantageux."
      image={image}
      imageAlt="Graphique montrant une baisse de prix et avion"
      highlights={[
        "Accès à des tarifs exclusifs 'Agences de voyages'",
        "Tarifs spécifiques pour les étudiants (franchises bagages offertes)",
        "Offres spéciales pour les groupes ou familles nombreuses",
        "Veille tarifaire pour acheter au meilleur moment",
      ]}
      steps={[
        { title: "Recherche", desc: "Nous scannons toutes les bases de données GDS." },
        { title: "Comparaison", desc: "Nous mettons en concurrence plusieurs compagnies." },
        {
          title: "Avantages",
          desc: "Nous appliquons les codes promos ou tarifs étudiants applicables.",
        },
        { title: "Proposition", desc: "Nous vous offrons le meilleur ratio qualité/prix/durée." },
      ]}
      included={[
        { icon: BadgePercent, t: "Tarifs étudiants" },
        { icon: Users, t: "Tarifs groupes" },
        { icon: TrendingDown, t: "Veille prix" },
        { icon: HandCoins, t: "Budget maîtrisé" },
        { icon: Plane, t: "Billetterie", to: "/services/billets-avion" },
      ]}
      faqs={[
        {
          q: "Les compagnies low-cost sont-elles incluses ?",
          a: "Oui, nous comparons les vols réguliers et les compagnies low-cost pour vous donner toutes les options, en vous avertissant toujours des coûts cachés (bagages, repas).",
        },
        {
          q: "Le tarif est-il garanti ?",
          a: "Les prix des vols fluctuent en temps réel. Un devis est valable le jour de son émission ; seul le paiement et l'émission bloquent le tarif.",
        },
      ]}
      serviceSlug="tarifs-negocies"
    />
  ),
});
