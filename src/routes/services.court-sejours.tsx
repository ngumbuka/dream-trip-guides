import { createFileRoute } from "@tanstack/react-router";
import { FileText, Ticket, Home, ShieldCheck, Headphones } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-court.jpg";

export const Route = createFileRoute("/services/court-sejours")({
  head: () => ({
    meta: [
      { title: "Courts séjours — Visa & voyages | VoyageonsEnsemble" },
      { name: "description", content: "Visa Schengen, billets, hébergement et itinéraires sur mesure pour vos vacances et voyages d'affaires." },
      { property: "og:title", content: "Courts séjours — VoyageonsEnsemble" },
      { property: "og:description", content: "Vivez l'expérience d'un voyage clé en main." },
      { property: "og:image", content: image },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Courts séjours"
      title="Voyagez en toute légèreté."
      intro="Visa touristique, billets, hôtels, itinéraires : on s'occupe de tout pour vos vacances, voyages d'affaires ou visites familiales — vous n'avez plus qu'à profiter."
      image={image}
      imageAlt="Voyageuse avec passeport et carte d'embarquement"
      highlights={[
        "Visa court séjour Schengen (tourisme, affaires, famille)",
        "Réservation de billets d'avion au meilleur tarif",
        "Hébergement (hôtels, appart-hôtels, locations)",
        "Itinéraires sur mesure & activités",
        "Assurance voyage et assistance rapatriement",
        "Assistance 7j/7 pendant tout votre séjour",
      ]}
      steps={[
        { title: "Brief & devis", desc: "Vous nous parlez de votre projet, on revient avec une proposition chiffrée." },
        { title: "Dossier visa", desc: "Constitution complète, prise de rendez-vous et suivi jusqu'à l'obtention." },
        { title: "Réservations", desc: "Vols, hébergements, transferts et activités confirmés à votre rythme." },
        { title: "Voyage serein", desc: "Documents prêts, assistance à toute heure, et vous partez tranquille." },
      ]}
      included={[
        { icon: FileText, t: "Visa Schengen" },
        { icon: Ticket, t: "Billets d'avion", to: "/services/billets-avion" },
        { icon: Home, t: "Hébergement", to: "/services/logement" },
        { icon: ShieldCheck, t: "Assurance", to: "/services/caution-avi" },
        { icon: Headphones, t: "Assistance 7j/7", to: "/services/accueil-integration" },
      ]}
      faqs={[
        { q: "Quel délai pour un visa Schengen ?", a: "Entre 2 et 6 semaines selon le consulat et la période. Nous recommandons de démarrer 6 à 8 semaines avant le départ." },
        { q: "Garantissez-vous l'obtention du visa ?", a: "La décision appartient au consulat. Nous maximisons les chances grâce à un dossier solide et conforme." },
        { q: "Puis-je personnaliser mon itinéraire ?", a: "Oui, chaque voyage est sur mesure : durée, villes, niveau de confort, activités." },
        { q: "Y a-t-il une assistance pendant le séjour ?", a: "Oui, notre équipe est joignable 7j/7 en cas de besoin (modification, urgence)." },
      ]}
    />
  ),
});