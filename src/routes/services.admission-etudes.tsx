import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, FileText, ClipboardCheck, School, BookOpenCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/admission-etudes")({
  head: () => ({
    meta: [
      { title: "Admission études supérieures — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Campus France, Uni-Assist, universités et écoles privées : nous bâtissons votre dossier d'admission et le suivons jusqu'à l'acceptation.",
      },
      { property: "og:title", content: "Admission études — VoyageonsEnsemble" },
      {
        property: "og:description",
        content: "De la sélection des établissements à l'admission définitive.",
      },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Admission études"
      title="Décrochez votre place dans la bonne université."
      intro="Choix d'établissements, rédaction du projet d'études, traduction des diplômes, candidatures plateformes (Campus France, Uni-Assist, MyBC, Parcoursup) : nous orchestrons votre dossier académique de A à Z."
      image={image}
      imageAlt="Étudiants à l'université"
      highlights={[
        "Bilan d'orientation et choix des établissements (publics, privés, écoles)",
        "Constitution complète du dossier (CV, lettre de motivation, projet d'études)",
        "Traduction et légalisation des diplômes",
        "Candidatures Campus France, Uni-Assist, MyBC, Parcoursup, plateformes canadiennes",
        "Préparation aux entretiens d'admission",
        "Suivi jusqu'à l'obtention de la lettre d'acceptation",
      ]}
      steps={[
        {
          title: "Orientation",
          desc: "Définition du projet d'études, des filières et des établissements cibles.",
        },
        { title: "Dossier", desc: "Rédaction, relecture, traduction et certification des pièces." },
        {
          title: "Candidatures",
          desc: "Soumission sur toutes les plateformes pertinentes, suivi des relances.",
        },
        { title: "Admission", desc: "Préparation aux entretiens et confirmation d'inscription." },
      ]}
      included={[
        { icon: School, t: "Choix établissements", to: "/services/choix-etablissements" },
        { icon: BookOpenCheck, t: "Projet d'études", to: "/services/projet-etudes" },
        { icon: ClipboardCheck, t: "Plateformes", to: "/services/plateformes-admission" },
        { icon: GraduationCap, t: "Lettre d'acceptation", to: "/services/lettre-acceptation" },
        { icon: FileText, t: "Dossier visa", to: "/services/dossier-visa" },
      ]}
      faqs={[
        {
          q: "À partir de quel niveau accompagnez-vous ?",
          a: "Du Bac (Licence) au Doctorat, dans toutes les filières (sciences, ingénierie, business, santé, art).",
        },
        {
          q: "Quand démarrer le dossier ?",
          a: "Idéalement 10 à 12 mois avant la rentrée. Campus France ouvre dès octobre pour la rentrée de septembre suivante.",
        },
        {
          q: "Garantissez-vous l'admission ?",
          a: "Non — la décision appartient à l'établissement. Nous garantissons un dossier complet et stratégiquement positionné pour maximiser vos chances.",
        },
        {
          q: "Combien de candidatures puis-je faire ?",
          a: "Jusqu'à 7 vœux sur Campus France, illimités hors plateforme. Nous recommandons 4 à 6 candidatures bien ciblées.",
        },
      ]}
      serviceSlug="admission-etudes"
    />
  ),
});
