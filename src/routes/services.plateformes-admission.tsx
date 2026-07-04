import { createFileRoute } from "@tanstack/react-router";
import { Laptop, Database, Bell, RefreshCcw, ClipboardCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/plateformes-admission")({
  head: () => ({
    meta: [
      { title: "Plateformes d'Admission (Campus France, etc.) — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Gestion complète de vos candidatures sur les plateformes officielles : Campus France, Uni-Assist, Parcoursup.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Plateformes d'admission"
      title="On s'occupe de la paperasse digitale."
      intro="Campus France, Uni-Assist (Allemagne), Parcoursup, MyBC... Chaque pays et système a sa propre plateforme en ligne, avec ses règles complexes et ses bugs. Nous gérons ces interfaces pour vous."
      image={image}
      imageAlt="Interface de plateforme universitaire sur écran d'ordinateur"
      highlights={[
        "Création et paramétrage complet de vos comptes candidats",
        "Saisie minutieuse de votre parcours académique",
        "Upload de vos documents dans les bons formats (PDF, poids max)",
        "Paiement des frais de dossier (si inclus dans le pack) et soumission dans les temps",
      ]}
      steps={[
        { title: "Création", desc: "Ouverture des comptes sur les plateformes choisies." },
        {
          title: "Remplissage",
          desc: "Saisie de vos notes, diplômes et informations personnelles.",
        },
        {
          title: "Vérification",
          desc: "Contrôle avant soumission finale (aucune erreur permise).",
        },
        {
          title: "Validation",
          desc: "Validation des vœux et paiement des frais d'étude de dossier.",
        },
      ]}
      included={[
        { icon: Laptop, t: "Saisie comptes" },
        { icon: Database, t: "Upload documents" },
        { icon: RefreshCcw, t: "Suivi technique" },
        { icon: Bell, t: "Respect délais" },
        { icon: ClipboardCheck, t: "Admission", to: "/services/admission-etudes" },
      ]}
      faqs={[
        {
          q: "Quelles plateformes maîtrisez-vous ?",
          a: "Principalement Études en France (Campus France), Parcoursup, Uni-Assist (Allemagne), et les portails d'admission directe des universités et collèges canadiens.",
        },
        {
          q: "Que se passe-t-il si la plateforme plante le dernier jour ?",
          a: "C'est précisément pour cela que nous n'attendons jamais le dernier moment. Vos dossiers sont toujours soumis plusieurs jours avant la date limite.",
        },
      ]}
      serviceSlug="plateformes-admission"
    />
  ),
});
