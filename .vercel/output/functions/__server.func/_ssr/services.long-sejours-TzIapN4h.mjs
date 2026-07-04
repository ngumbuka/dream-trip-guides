import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as ServiceHero, c as ServiceIncluded, b as ServiceProcess, a as ServiceHighlights, d as ServiceFaq, e as ServiceCta } from "./ServiceDetail-BH7p6F-Z.mjs";
import { D as DestinationsSection } from "./DestinationsSection-CgWPVeJq.mjs";
import { f as image$5 } from "./router-DJhV2vx3.mjs";
import { G as GraduationCap, F as FileText, p as CreditCard, o as House, j as Plane } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./Reveal-No4zfIuz.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./client-DqghxSme.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./server-BODjEJm3.mjs";
import "node:async_hooks";
import "./auth-middleware-DoepXbKI.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
const pageData = {
  eyebrow: "Longs séjours",
  title: "Étudier ou s'installer, sereinement.",
  intro: "De l'admission universitaire à votre premier jour sur place : nous orchestrons les démarches consulaires, financières et logistiques pour que votre nouveau chapitre commence sans accroc.",
  image: image$5,
  imageAlt: "Étudiants sur un campus universitaire européen",
  highlights: ["Recherche d'établissements & admission (Campus France, universités, écoles privées)", "Constitution du dossier de visa long séjour (étudiant, travail, regroupement familial)", "Caution bancaire bloquée et Attestation de Virement Irrévocable (AVI)", "Recherche de logement sécurisé (résidence, studio, colocation)", "Souscription assurance santé & responsabilité civile", "Accueil à l'aéroport et accompagnement à l'installation"],
  steps: [{
    title: "Bilan d'orientation",
    desc: "Entretien gratuit pour cerner votre profil, votre projet et votre budget."
  }, {
    title: "Dossier académique",
    desc: "Choix des établissements, candidatures et suivi jusqu'à l'admission."
  }, {
    title: "Visa & finances",
    desc: "Préparation du dossier consulaire, AVI, caution et prise de rendez-vous."
  }, {
    title: "Arrivée & intégration",
    desc: "Logement, accueil aéroport, ouverture de compte et premiers pas."
  }],
  included: [{
    icon: GraduationCap,
    t: "Admission études",
    to: "/services/admission-etudes"
  }, {
    icon: FileText,
    t: "Dossier visa",
    to: "/services/dossier-visa"
  }, {
    icon: CreditCard,
    t: "AVI & caution",
    to: "/services/caution-avi"
  }, {
    icon: House,
    t: "Logement",
    to: "/services/logement"
  }, {
    icon: Plane,
    t: "Accueil arrivée",
    to: "/services/accueil-integration"
  }],
  faqs: [{
    q: "Dans quels pays accompagnez-vous ?",
    a: "France, Belgique, Allemagne et Canada principalement, avec des partenaires en Italie, Espagne et au Royaume-Uni."
  }, {
    q: "Faut-il déjà avoir une admission pour commencer ?",
    a: "Non. Nous accompagnons aussi la recherche d'établissement et la candidature."
  }, {
    q: "Quels sont les délais à prévoir ?",
    a: "Comptez de 2 semaines à 9 mois entre le démarrage du projet et le départ, en fonction du projet de voyage et de la destination."
  }, {
    q: "Comment se passent les paiements ?",
    a: "Devis personnalisé après le bilan, paiement échelonné par étape clé."
  }, {
    q: "Puis-je travailler pendant mes études ?",
    a: "Oui dans tous nos pays partenaires : 964 h/an en France, 24 h/semaine au Canada, 140 jours/an en Allemagne, 20 h/semaine en Belgique."
  }, {
    q: "Quel niveau de langue est requis ?",
    a: "Variable selon le pays et la formation : B2 français pour la France, B1/B2 allemand ou anglais pour l'Allemagne, IELTS/TOEFL pour le Canada anglophone. Nous proposons des formations linguistiques dédiées."
  }, {
    q: "Que se passe-t-il si mon visa est refusé ?",
    a: "Nous analysons le motif, préparons gratuitement un recours gracieux et/ou un nouveau dossier renforcé pour la session suivante."
  }, {
    q: "Proposez-vous un accompagnement après l'arrivée ?",
    a: "Oui : accueil aéroport, ouverture de compte bancaire, sécurité sociale, démarches CAF/APL, premier mois sur place avec un référent local."
  }],
  serviceSlug: "long-sejours"
};
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceHero, { ...pageData }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(DestinationsSection, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceIncluded, { included: pageData.included }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceProcess, { steps: pageData.steps }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceHighlights, { highlights: pageData.highlights }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceFaq, { faqs: pageData.faqs }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCta, { serviceSlug: pageData.serviceSlug })
] });
export {
  SplitComponent as component
};
