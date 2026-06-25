import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, LineChart, PieChart, FileSpreadsheet, Megaphone } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-community.jpg";

export const Route = createFileRoute("/services/reporting-performance")({
  head: () => ({
    meta: [
      { title: "Reporting & Performance — VoyageonsEnsemble" },
      { name: "description", content: "Suivez vos résultats en temps réel avec nos rapports d'analyse de performance digitale." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Reporting"
      title="Mesurez l'impact de vos actions."
      intro="Parce qu'on ne peut améliorer que ce que l'on mesure, nous vous fournissons des rapports détaillés sur l'impact de vos réseaux sociaux, de votre site web et de vos campagnes publicitaires."
      image={image}
      imageAlt="Tableau de bord affichant des graphiques de performance analytique"
      highlights={[
        "Rapports mensuels clairs et personnalisés",
        "Suivi des indicateurs clés (KPIs) : portée, engagement, conversion, ROI",
        "Analyse concurrentielle et veille sectorielle",
        "Recommandations stratégiques basées sur l'analyse des données",
      ]}
      steps={[
        { title: "Définition KPIs", desc: "Nous identifions ensemble les métriques qui comptent pour vous." },
        { title: "Collecte", desc: "Nous agrégeons les données de toutes vos plateformes." },
        { title: "Analyse", desc: "Nous dégageons les tendances et les points d'amélioration." },
        { title: "Restitution", desc: "Présentation des résultats et ajustement de la stratégie." },
      ]}
      included={[
        { icon: BarChart3, t: "Rapports mensuels" },
        { icon: LineChart, t: "Suivi des KPIs" },
        { icon: PieChart, t: "Analyse d'audience" },
        { icon: FileSpreadsheet, t: "Recommandations" },
        { icon: Megaphone, t: "CM & Digital", to: "/services/community-management" },
      ]}
      faqs={[
        { q: "Les rapports sont-ils compliqués à lire ?", a: "Non, nous concevons des tableaux de bord visuels et commentés pour que les chiffres vous parlent, sans jargon inutile." },
        { q: "À quelle fréquence recevrai-je ces rapports ?", a: "Généralement tous les mois, mais nous pouvons adapter la fréquence (hebdomadaire, trimestrielle) selon l'envergure de vos campagnes." },
      ]}
      serviceSlug="reporting-performance"
    />
  ),
});
