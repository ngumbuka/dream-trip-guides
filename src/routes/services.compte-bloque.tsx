import { createFileRoute } from "@tanstack/react-router";
import { Lock, FileText, Globe2, ShieldCheck, CreditCard } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-caution.jpg";

export const Route = createFileRoute("/services/compte-bloque")({
  head: () => ({
    meta: [
      { title: "Compte bloqué & Caution Bancaire — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Ouverture de compte bloqué (Sperrkonto, AVI) pour répondre aux exigences financières des visas étudiants.",
      },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Compte bloqué & AVI"
      title="Votre garantie financière consulaire."
      intro="Pour étudier à l'étranger, vous devez prouver que vous avez les ressources suffisantes pour vivre. L'Attestation de Virement Irrévocable (AVI) ou le compte bloqué (Sperrkonto en Allemagne) est la preuve exigée par les consulats."
      image={image}
      imageAlt="Document bancaire avec tampon officiel"
      highlights={[
        "Partenariats avec des banques et organismes financiers agréés par les consulats",
        "Ouverture de compte bloqué à distance (Allemagne, France, Belgique, Canada)",
        "Obtention rapide de l'attestation pour le dossier de visa",
        "Garantie de remboursement en cas de refus de visa",
      ]}
      steps={[
        {
          title: "Dossier",
          desc: "Nous rassemblons votre pièce d'identité et lettre d'admission.",
        },
        { title: "Ouverture", desc: "Création du compte auprès de notre partenaire financier." },
        { title: "Virement", desc: "Vous transférez les fonds requis de manière sécurisée." },
        { title: "Attestation", desc: "Délivrance de l'attestation officielle pour l'ambassade." },
      ]}
      included={[
        { icon: Lock, t: "Compte sécurisé" },
        { icon: FileText, t: "Attestation officielle" },
        { icon: Globe2, t: "Multi-pays" },
        { icon: ShieldCheck, t: "Garantie refus" },
        { icon: CreditCard, t: "Caution & AVI", to: "/services/caution-avi" },
      ]}
      faqs={[
        {
          q: "Comment récupérer mon argent une fois sur place ?",
          a: "À votre arrivée, vous ouvrez un compte courant local. L'organisme transfère chaque mois la somme prévue (ex: 934€/mois pour l'Allemagne).",
        },
        {
          q: "Quels sont les frais de service ?",
          a: "En plus du montant bloqué, l'organisme financier facture des frais de mise en place (souvent entre 50€ et 150€) que nous incluons dans le devis transparent.",
        },
      ]}
      serviceSlug="compte-bloque"
    />
  ),
});
