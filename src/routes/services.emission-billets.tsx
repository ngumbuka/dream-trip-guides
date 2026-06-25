import { createFileRoute } from "@tanstack/react-router";
import { Ticket, Send, CheckCircle2, FileCheck, Plane } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-billets.jpg";

export const Route = createFileRoute("/services/emission-billets")({
  head: () => ({
    meta: [
      { title: "Émission de billets d'avion — VoyageonsEnsemble" },
      { name: "description", content: "Réservation et émission de vos billets d'avion de manière sécurisée et rapide." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Émission de billets"
      title="Votre place est réservée."
      intro="Une fois votre visa obtenu ou votre date de départ fixée, nous procédons à l'émission définitive de votre billet d'avion en vous garantissant la sécurité de la transaction et l'exactitude des informations."
      image={image}
      imageAlt="Billets d'avion électroniques sur un téléphone"
      highlights={[
        "Émission rapide des e-tickets",
        "Vérification stricte de l'orthographe des noms (correspondance passeport)",
        "Gestion des correspondances et des temps d'escale",
        "Envoi des documents de voyage et récapitulatifs clairs",
      ]}
      steps={[
        { title: "Confirmation", desc: "Vous validez le devis et l'itinéraire proposés." },
        { title: "Paiement", desc: "Règlement sécurisé de votre réservation." },
        { title: "Émission", desc: "Génération du PNR et du billet électronique par la compagnie." },
        { title: "Envoi", desc: "Vous recevez votre billet prêt pour l'embarquement." },
      ]}
      included={[
        { icon: CheckCircle2, t: "Vérification stricte" },
        { icon: Send, t: "Envoi e-ticket" },
        { icon: FileCheck, t: "Dossier voyage" },
        { icon: Ticket, t: "Réservation sûre" },
        { icon: Plane, t: "Billetterie", to: "/services/billets-avion" },
      ]}
      faqs={[
        { q: "Quelles informations faut-il pour émettre le billet ?", a: "Nous avons besoin d'une copie de votre passeport en cours de validité pour s'assurer qu'aucune erreur ne soit faite sur les noms et prénoms." },
        { q: "Comment se passe l'enregistrement ?", a: "Nous vous expliquons comment vous enregistrer en ligne (généralement 24 à 48h avant le vol) ou au comptoir de l'aéroport." },
      ]}
      serviceSlug="emission-billets"
    />
  ),
});
