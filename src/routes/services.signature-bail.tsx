import { createFileRoute } from "@tanstack/react-router";
import { PenTool, Home, FileText, Key, Eye } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-logement.jpg";

export const Route = createFileRoute("/services/signature-bail")({
  head: () => ({
    meta: [
      { title: "Signature du bail & État des lieux — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Soyez accompagné lors de la signature de votre contrat de location et de l'état des lieux.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Signature & État des lieux"
      title="Engagez-vous en toute sécurité."
      intro="La signature d'un bail est un acte engageant. Nous relisons le contrat pour vous, sécurisons la transaction et pouvons même vous représenter lors de l'état des lieux d'entrée."
      image={image}
      imageAlt="Mains signant un document contractuel avec des clés posées à côté"
      highlights={[
        "Relecture attentive du contrat de location",
        "Vérification des clauses abusives éventuelles",
        "Organisation de la signature électronique à distance si nécessaire",
        "Assistance ou représentation lors de l'état des lieux d'entrée",
      ]}
      steps={[
        {
          title: "Relecture",
          desc: "Nous examinons le projet de bail envoyé par le propriétaire.",
        },
        {
          title: "Explications",
          desc: "Nous vous expliquons vos droits et devoirs en tant que locataire.",
        },
        { title: "Signature", desc: "Signature du bail, en personne ou par voie électronique." },
        { title: "État des lieux", desc: "Inspection détaillée du logement à la remise des clés." },
      ]}
      included={[
        { icon: FileText, t: "Relecture bail" },
        { icon: PenTool, t: "Signature électronique" },
        { icon: Eye, t: "État des lieux" },
        { icon: Key, t: "Remise des clés" },
        { icon: Home, t: "Service Logement", to: "/services/logement" },
      ]}
      faqs={[
        {
          q: "Puis-je signer le bail avant d'arriver dans le pays ?",
          a: "Oui, la majorité de nos partenaires acceptent la signature électronique, vous permettant de sécuriser le logement avant votre départ.",
        },
        {
          q: "Comment payer le dépôt de garantie depuis l'étranger ?",
          a: "Nous vous guidons sur les plateformes de paiement sécurisées ou les virements internationaux pour éviter les fraudes.",
        },
        {
          q: "Que faire si je constate un défaut après l'état des lieux ?",
          a: "Vous disposez légalement de quelques jours pour signaler par courrier recommandé tout défaut non mentionné initialement. Nous vous aidons dans cette démarche.",
        },
      ]}
      serviceSlug="signature-bail"
    />
  ),
});
