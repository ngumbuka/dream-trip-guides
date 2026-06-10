import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, FileText, Home, CreditCard, Plane } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-long.jpg";

export const Route = createFileRoute("/services/long-sejours")({
  head: () => ({
    meta: [
      { title: "Longs séjours — Études & installation | VoyageonsEnsemble" },
      { name: "description", content: "Admission universitaire, visa long séjour, AVI, logement et accueil : un accompagnement complet pour étudier ou s'installer en Europe et au Canada." },
      { property: "og:title", content: "Longs séjours — VoyageonsEnsemble" },
      { property: "og:description", content: "Études, travail, installation durable : tout l'admin géré pour vous." },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Longs séjours"
      title="Étudier ou s'installer, sereinement."
      intro="De l'admission universitaire à votre premier jour sur place : nous orchestrons les démarches consulaires, financières et logistiques pour que votre nouveau chapitre commence sans accroc."
      image={image}
      imageAlt="Étudiants sur un campus universitaire européen"
      highlights={[
        "Recherche d'établissements & admission (Campus France, universités, écoles privées)",
        "Constitution du dossier de visa long séjour (étudiant, travail, regroupement familial)",
        "Caution bancaire bloquée et Attestation de Virement Irrévocable (AVI)",
        "Recherche de logement sécurisé (résidence, studio, colocation)",
        "Souscription assurance santé & responsabilité civile",
        "Accueil à l'aéroport et accompagnement à l'installation",
      ]}
      steps={[
        { title: "Bilan d'orientation", desc: "Entretien gratuit pour cerner votre profil, votre projet et votre budget." },
        { title: "Dossier académique", desc: "Choix des établissements, candidatures et suivi jusqu'à l'admission." },
        { title: "Visa & finances", desc: "Préparation du dossier consulaire, AVI, caution et prise de rendez-vous." },
        { title: "Arrivée & intégration", desc: "Logement, accueil aéroport, ouverture de compte et premiers pas." },
      ]}
      included={[
        { icon: GraduationCap, t: "Admission études" },
        { icon: FileText, t: "Dossier visa" },
        { icon: CreditCard, t: "AVI & caution", to: "/services/caution-avi" },
        { icon: Home, t: "Logement", to: "/services/logement" },
        { icon: Plane, t: "Accueil arrivée", to: "/services/accueil-integration" },
      ]}
      faqs={[
        { q: "Dans quels pays accompagnez-vous ?", a: "France, Belgique, Allemagne et Canada principalement, avec des partenaires en Italie, Espagne et au Royaume-Uni." },
        { q: "Faut-il déjà avoir une admission pour commencer ?", a: "Non. Nous accompagnons aussi la recherche d'établissement et la candidature." },
        { q: "Quels sont les délais à prévoir ?", a: "Comptez 4 à 9 mois entre le démarrage du projet et le départ, selon la destination et la période." },
        { q: "Comment se passent les paiements ?", a: "Devis personnalisé après le bilan, paiement échelonné par étape clé." },
      ]}
    />
  ),
});