import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, FileText, Home, CreditCard, Plane } from "lucide-react";
import {
  ServiceHero,
  ServiceIncluded,
  ServiceProcess,
  ServiceHighlights,
  ServiceFaq,
  ServiceCta,
} from "@/components/site/ServiceDetail";
import { DestinationsSection } from "@/components/site/DestinationsSection";
import image from "@/assets/service-long.jpg";

const pageData = {
  eyebrow: "Longs séjours",
  title: "Étudier ou s'installer, sereinement.",
  intro:
    "De l'admission universitaire à votre premier jour sur place : nous orchestrons les démarches consulaires, financières et logistiques pour que votre nouveau chapitre commence sans accroc.",
  image,
  imageAlt: "Étudiants sur un campus universitaire européen",
  highlights: [
    "Recherche d'établissements & admission (Campus France, universités, écoles privées)",
    "Constitution du dossier de visa long séjour (étudiant, travail, regroupement familial)",
    "Caution bancaire bloquée et Attestation de Virement Irrévocable (AVI)",
    "Recherche de logement sécurisé (résidence, studio, colocation)",
    "Souscription assurance santé & responsabilité civile",
    "Accueil à l'aéroport et accompagnement à l'installation",
  ],
  steps: [
    {
      title: "Bilan d'orientation",
      desc: "Entretien gratuit pour cerner votre profil, votre projet et votre budget.",
    },
    {
      title: "Dossier académique",
      desc: "Choix des établissements, candidatures et suivi jusqu'à l'admission.",
    },
    {
      title: "Visa & finances",
      desc: "Préparation du dossier consulaire, AVI, caution et prise de rendez-vous.",
    },
    {
      title: "Arrivée & intégration",
      desc: "Logement, accueil aéroport, ouverture de compte et premiers pas.",
    },
  ],
  included: [
    { icon: GraduationCap, t: "Admission études", to: "/services/admission-etudes" },
    { icon: FileText, t: "Dossier visa", to: "/services/dossier-visa" },
    { icon: CreditCard, t: "AVI & caution", to: "/services/caution-avi" },
    { icon: Home, t: "Logement", to: "/services/logement" },
    { icon: Plane, t: "Accueil arrivée", to: "/services/accueil-integration" },
  ],
  faqs: [
    {
      q: "Dans quels pays accompagnez-vous ?",
      a: "France, Belgique, Allemagne et Canada principalement, avec des partenaires en Italie, Espagne et au Royaume-Uni.",
    },
    {
      q: "Faut-il déjà avoir une admission pour commencer ?",
      a: "Non. Nous accompagnons aussi la recherche d'établissement et la candidature.",
    },
    {
      q: "Quels sont les délais à prévoir ?",
      a: "Comptez de 2 semaines à 9 mois entre le démarrage du projet et le départ, en fonction du projet de voyage et de la destination.",
    },
    {
      q: "Comment se passent les paiements ?",
      a: "Devis personnalisé après le bilan, paiement échelonné par étape clé.",
    },
    {
      q: "Puis-je travailler pendant mes études ?",
      a: "Oui dans tous nos pays partenaires : 964 h/an en France, 24 h/semaine au Canada, 140 jours/an en Allemagne, 20 h/semaine en Belgique.",
    },
    {
      q: "Quel niveau de langue est requis ?",
      a: "Variable selon le pays et la formation : B2 français pour la France, B1/B2 allemand ou anglais pour l'Allemagne, IELTS/TOEFL pour le Canada anglophone. Nous proposons des formations linguistiques dédiées.",
    },
    {
      q: "Que se passe-t-il si mon visa est refusé ?",
      a: "Nous analysons le motif, préparons gratuitement un recours gracieux et/ou un nouveau dossier renforcé pour la session suivante.",
    },
    {
      q: "Proposez-vous un accompagnement après l'arrivée ?",
      a: "Oui : accueil aéroport, ouverture de compte bancaire, sécurité sociale, démarches CAF/APL, premier mois sur place avec un référent local.",
    },
  ],
  serviceSlug: "long-sejours",
};

export const Route = createFileRoute("/services/long-sejours")({
  head: () => ({
    meta: [
      { title: "Longs séjours — Études & installation | VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Admission universitaire, visa long séjour, AVI, logement et accueil : un accompagnement complet pour étudier ou s'installer en Europe et au Canada.",
      },
      { property: "og:title", content: "Longs séjours — VoyageonsEnsemble" },
      {
        property: "og:description",
        content: "Études, travail, installation durable : tout l'admin géré pour vous.",
      },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <div>
      <ServiceHero {...pageData} />
      <DestinationsSection />
      <ServiceIncluded included={pageData.included} />
      <ServiceProcess steps={pageData.steps} />
      <ServiceHighlights highlights={pageData.highlights} />
      <ServiceFaq faqs={pageData.faqs} />
      <ServiceCta serviceSlug={pageData.serviceSlug} />
    </div>
  ),
});
