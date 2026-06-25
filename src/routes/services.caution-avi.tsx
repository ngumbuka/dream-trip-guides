import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, ShieldCheck, FileText, Banknote, Globe2 } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-caution.jpg";

export const Route = createFileRoute("/services/caution-avi")({
  head: () => ({
    meta: [
      { title: "Caution bancaire & AVI — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Compte de garantie bloqué et Assurance Visa International : nous sécurisons votre dossier financier pour respecter les exigences consulaires.",
      },
      { property: "og:title", content: "Caution bancaire & AVI — VoyageonsEnsemble" },
      {
        property: "og:description",
        content: "Respectez les exigences financières de vos études et de votre visa.",
      },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Caution & AVI"
      title="Respectez les exigences financières en toute sérénité."
      intro="Les autorités académiques et les ambassades exigent une preuve de ressources et une couverture santé adaptée. Nous vous accompagnons dans l'obtention d'une caution bancaire et d'une Assurance Visa International conforme à votre pays de destination."
      image={image}
      imageAlt="Signature d'un dossier bancaire et d'une assurance étudiante"
      highlights={[
        "Caution bancaire bloquée auprès de banques partenaires",
        "Compte de garantie attestant de votre capacité à subvenir à vos besoins",
        "Assurance Visa International (soins, responsabilité civile, rapatriement)",
        "Conseil sur les couvertures complémentaires (mutuelle, logement)",
        "Conformité avec les exigences Canada, France, Belgique, Allemagne",
        "Suivi du dossier jusqu'à la délivrance des attestations",
      ]}
      steps={[
        {
          title: "Audit du dossier visa",
          desc: "Nous identifions les justificatifs financiers et d'assurance demandés.",
        },
        {
          title: "Banque partenaire",
          desc: "Ouverture du compte de garantie et virement du montant requis.",
        },
        {
          title: "Souscription AVI",
          desc: "Choix de la couverture et émission de l'attestation pour l'ambassade.",
        },
        {
          title: "Remise des justificatifs",
          desc: "Nous compilons les preuves prêtes à déposer avec votre demande de visa.",
        },
      ]}
      included={[
        { icon: Banknote, t: "Compte bloqué", to: "/services/compte-bloque" },
        { icon: CreditCard, t: "Caution bancaire", to: "/services/compte-bloque" },
        { icon: ShieldCheck, t: "Assurance visa", to: "/services/assurance-visa" },
        { icon: FileText, t: "Logement & bail", to: "/services/logement" },
        { icon: Globe2, t: "Accueil arrivée", to: "/services/accueil-integration" },
      ]}
      faqs={[
        {
          q: "Quel montant prévoir pour la caution ?",
          a: "Cela dépend du pays : environ 11 900 € pour l'Allemagne (Sperrkonto), 7 000 $ CAD pour le Canada, et un budget équivalent à un an de besoins en France ou Belgique.",
        },
        {
          q: "L'argent est-il bloqué pendant longtemps ?",
          a: "Il est débloqué progressivement à votre arrivée (mensuellement ou en une fois selon le pays) pour couvrir vos dépenses.",
        },
        {
          q: "L'AVI couvre-t-elle toute la durée du séjour ?",
          a: "Oui, nous proposons des formules de 3 à 12 mois renouvelables, adaptées à la durée de votre visa.",
        },
        {
          q: "Et si mon visa est refusé ?",
          a: "La plupart de nos solutions prévoient un remboursement de la caution sur présentation du refus officiel.",
        },
      ]}
      serviceSlug="caution-avi"
    />
  ),
});
