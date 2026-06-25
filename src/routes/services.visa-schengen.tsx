import { createFileRoute } from "@tanstack/react-router";
import { FileText, CalendarCheck, Stamp, Headphones, ShieldCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-court.jpg";

export const Route = createFileRoute("/services/visa-schengen")({
  head: () => ({
    meta: [
      { title: "Visa Schengen — Tourisme, vacances, affaires | VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Visa Schengen pour la France, la Belgique, l'Allemagne et l'espace européen : constitution du dossier, prise de rendez-vous, suivi jusqu'à l'obtention.",
      },
      { property: "og:title", content: "Visa Schengen — VoyageonsEnsemble" },
      { property: "og:description", content: "Un dossier béton, des chances maximisées." },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Visa Schengen"
      title="Votre visa court séjour, sans le stress."
      intro="Le visa Schengen ouvre les portes de 27 pays européens. Nous prenons en charge tout votre dossier : pièces justificatives, lettre d'invitation, réservations, assurance et prise de rendez-vous au consulat — pour un dossier conforme et des chances maximales d'acceptation."
      image={image}
      imageAlt="Passeport et visa Schengen"
      highlights={[
        "Visa de tourisme, vacances, visite familiale et affaires (court séjour < 90 jours)",
        "Audit gratuit de votre profil et de votre éligibilité",
        "Constitution complète du dossier (revenus, hébergement, itinéraire)",
        "Réservations conditionnelles d'avion et d'hôtel valables au consulat",
        "Lettre d'invitation et prise en charge le cas échéant",
        "Prise de rendez-vous VFS / TLS / consulat et suivi jusqu'à la décision",
      ]}
      steps={[
        {
          title: "Bilan d'éligibilité",
          desc: "Nous vérifions votre profil et listons les pièces à rassembler.",
        },
        {
          title: "Préparation dossier",
          desc: "Constitution complète, lettres et réservations conformes aux exigences.",
        },
        {
          title: "Rendez-vous",
          desc: "Prise de rendez-vous au centre VFS / TLS et préparation à l'entretien.",
        },
        {
          title: "Suivi & retrait",
          desc: "Suivi du traitement et récupération du passeport visé.",
        },
      ]}
      included={[
        { icon: FileText, t: "Audit dossier", to: "/services/audit-dossier-visa" },
        { icon: Stamp, t: "Réservations VFS", to: "/services/reservations-vfs" },
        { icon: CalendarCheck, t: "Rendez-vous", to: "/services/rendez-vous-consulat" },
        { icon: ShieldCheck, t: "Assurance voyage", to: "/services/caution-avi" },
        { icon: Headphones, t: "Assistance", to: "/services/accueil-integration" },
      ]}
      faqs={[
        {
          q: "Quel délai pour obtenir un visa Schengen ?",
          a: "Entre 2 et 6 semaines selon le consulat et la saison. Démarrez 6 à 8 semaines avant le départ.",
        },
        {
          q: "Pouvez-vous garantir l'obtention ?",
          a: "La décision appartient au consulat. Un dossier solide maximise vos chances — nous refusons d'accompagner les dossiers manifestement non éligibles.",
        },
        {
          q: "Quels pays sont couverts ?",
          a: "Les 27 États de l'espace Schengen, dont France, Belgique, Allemagne, Espagne, Italie, Portugal, Pays-Bas.",
        },
        {
          q: "Et si mon visa est refusé ?",
          a: "Nous analysons le motif et préparons gratuitement le recours ou une nouvelle demande.",
        },
      ]}
      serviceSlug="visa-schengen"
    />
  ),
});
