import { createFileRoute } from "@tanstack/react-router";
import { Mail, Scale, MessageSquare, History, LifeBuoy } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/suivi-recours")({
  head: () => ({
    meta: [
      { title: "Suivi & Recours Visa — VoyageonsEnsemble" },
      {
        name: "description",
        content: "Suivi de votre demande de visa et assistance juridique en cas de refus.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Suivi & recours"
      title="On ne lâche rien."
      intro="L'attente d'un visa est stressante, et un refus peut sembler être la fin de votre projet. Nous suivons l'avancement de votre dossier et, en cas de refus injustifié, nous montons un recours gracieux ou hiérarchique avec nos avocats partenaires."
      image={image}
      imageAlt="Marteau de juge et documents officiels"
      highlights={[
        "Suivi de l'état d'avancement de votre demande (tracking)",
        "Analyse détaillée des motifs de refus de visa (si applicable)",
        "Rédaction de recours gracieux argumentés auprès du consulat",
        "Saisine de la commission des recours (CRRV) en France",
        "Accompagnement par des avocats spécialisés en droit des étrangers",
      ]}
      steps={[
        { title: "Suivi", desc: "Nous surveillons votre dossier pendant l'instruction." },
        {
          title: "Analyse",
          desc: "En cas de refus, nous identifions les failles ou les erreurs du consulat.",
        },
        { title: "Recours", desc: "Nous rédigeons un courrier juridique argumenté." },
        {
          title: "Nouvelle tentative",
          desc: "Si le recours échoue, nous préparons un nouveau dépôt renforcé.",
        },
      ]}
      included={[
        { icon: History, t: "Tracking dossier" },
        { icon: Scale, t: "Recours juridiques" },
        { icon: Mail, t: "Correspondance" },
        { icon: MessageSquare, t: "Avocats partenaires" },
        { icon: LifeBuoy, t: "Dossier Visa", to: "/services/dossier-visa" },
      ]}
      faqs={[
        {
          q: "Quelles sont les chances de succès d'un recours ?",
          a: "Si le refus est fondé sur une erreur manifeste du consulat (ex: document non vu), les chances sont excellentes. Si votre profil était faible, il vaut parfois mieux refaire un dossier.",
        },
        {
          q: "Combien de temps prend un recours ?",
          a: "Un recours gracieux prend généralement 1 à 2 mois. Un recours auprès de la CRRV peut prendre plusieurs mois.",
        },
      ]}
      serviceSlug="suivi-recours"
    />
  ),
});
