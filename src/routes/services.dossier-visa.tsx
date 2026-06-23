import { createFileRoute } from "@tanstack/react-router";
import { FileText, Stamp, CalendarCheck, ShieldCheck, Headphones } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/dossier-visa")({
  head: () => ({
    meta: [
      { title: "Dossier visa long séjour — VoyageonsEnsemble" },
      { name: "description", content: "Visa étudiant, travail, regroupement familial : constitution complète, prise de rendez-vous consulat, suivi jusqu'à la décision." },
      { property: "og:title", content: "Dossier visa — VoyageonsEnsemble" },
      { property: "og:description", content: "Un dossier visa solide pour une décision favorable." },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Dossier visa"
      title="Un dossier visa long séjour irréprochable."
      intro="Visa étudiant (VLS-TS), visa travail, regroupement familial, conjoint : chaque type de visa a ses pièges. Nous constituons votre dossier consulaire selon les standards les plus stricts, prenons votre rendez-vous et vous suivons jusqu'à la délivrance."
      image={image}
      imageAlt="Passeports et formulaires de visa"
      highlights={[
        "Audit complet de votre profil et choix du bon visa",
        "Constitution du dossier (formulaires, justificatifs, traductions)",
        "Lettre de motivation et projet d'études / mission",
        "Prise de rendez-vous VFS / TLS / consulat",
        "Préparation à l'entretien consulaire",
        "Suivi du traitement et recours en cas de refus",
      ]}
      steps={[
        { title: "Audit", desc: "Analyse de votre profil et choix de la catégorie de visa la plus pertinente." },
        { title: "Constitution", desc: "Rassemblement, traduction et certification des pièces justificatives." },
        { title: "Rendez-vous", desc: "Prise de rendez-vous et coaching d'entretien consulaire." },
        { title: "Décision & recours", desc: "Suivi du traitement, recours gracieux ou contentieux si nécessaire." },
      ]}
      included={[
        { icon: FileText, t: "Audit dossier" },
        { icon: Stamp, t: "Formulaires & pièces" },
        { icon: CalendarCheck, t: "Rendez-vous VFS" },
        { icon: ShieldCheck, t: "Caution & AVI", to: "/services/caution-avi" },
        { icon: Headphones, t: "Suivi & recours" },
      ]}
      faqs={[
        { q: "Quels visas long séjour traitez-vous ?", a: "VLS-TS étudiant, visa travail (passeport talent, salarié), regroupement familial, conjoint de Français, recherche d'emploi post-diplôme." },
        { q: "Combien de temps pour obtenir le visa ?", a: "Entre 2 et 12 semaines selon le consulat, la nationalité et la période. Démarrez 3 à 4 mois avant la date de départ." },
        { q: "Et si mon visa est refusé ?", a: "Nous analysons le motif et préparons un recours gracieux (2 mois) ou un nouveau dossier renforcé." },
        { q: "Travaillez-vous avec tous les consulats ?", a: "Oui — France, Allemagne, Belgique, Canada, Italie, Espagne, Pays-Bas, Royaume-Uni." },
      ]}
      serviceSlug="dossier-visa"
    />
  ),
});