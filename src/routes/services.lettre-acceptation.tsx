import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, MailCheck, Handshake, BookmarkCheck, FileText } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/lettre-acceptation")({
  head: () => ({
    meta: [
      { title: "Lettre d'Acceptation & Inscription — VoyageonsEnsemble" },
      { name: "description", content: "Réception de vos admissions, choix final et confirmation d'inscription." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Lettre d'acceptation"
      title="Votre sésame pour l'avenir."
      intro="C'est le moment le plus gratifiant : la réception des réponses positives ! Mais le travail n'est pas terminé. Nous vous aidons à choisir la meilleure offre et à finaliser votre inscription."
      image={image}
      imageAlt="Étudiant souriant tenant une lettre d'admission officielle"
      highlights={[
        "Analyse comparative des différentes lettres d'acceptation reçues",
        "Aide au choix final (coût de la vie, renommée, opportunités)",
        "Démarches de confirmation d'inscription auprès de l'établissement",
        "Récupération de la lettre officielle nécessaire pour la demande de visa",
      ]}
      steps={[
        { title: "Réception", desc: "Notification des réponses positives des écoles." },
        { title: "Choix", desc: "Discussion stratégique pour valider le meilleur choix." },
        { title: "Confirmation", desc: "Paiement de l'acompte (le cas échéant) pour bloquer votre place." },
        { title: "Visa", desc: "Utilisation de la lettre pour lancer la procédure consulaire." },
      ]}
      included={[
        { icon: MailCheck, t: "Suivi réponses" },
        { icon: Handshake, t: "Conseil choix final" },
        { icon: BookmarkCheck, t: "Confirmation place" },
        { icon: FileText, t: "Doc officiel visa" },
        { icon: GraduationCap, t: "Admission", to: "/services/admission-etudes" },
      ]}
      faqs={[
        { q: "Et si je reçois plusieurs réponses positives ?", a: "C'est le meilleur scénario ! Nous ferons un tableau comparatif avec vous pour choisir l'établissement qui offre le meilleur équilibre (académique, budget, ville)." },
        { q: "Faut-il payer l'école avant d'avoir le visa ?", a: "Pour la plupart des écoles privées et universités nord-américaines, oui, le paiement de la scolarité (ou d'un acompte) est nécessaire pour obtenir la lettre définitive d'acceptation exigée par l'ambassade." },
      ]}
      serviceSlug="lettre-acceptation"
    />
  ),
});
