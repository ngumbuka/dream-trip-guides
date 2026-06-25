import { createFileRoute } from "@tanstack/react-router";
import { Plane, Building, FileCheck, CalendarClock, Globe2 } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-court.jpg";

export const Route = createFileRoute("/services/reservations-vfs")({
  head: () => ({
    meta: [
      { title: "Réservations de vols et hôtels pour Visa — VoyageonsEnsemble" },
      { name: "description", content: "Réservations de billets d'avion et d'hôtels conformes aux exigences des centres de visas (VFS, TLS)." },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Réservations VFS"
      title="Des réservations conformes pour votre dossier."
      intro="Les consulats exigent des preuves de transport et d'hébergement. Nous générons des réservations de vols et d'hôtels vérifiables et valides le temps de l'instruction de votre demande, sans que vous n'ayez à payer l'intégralité à l'avance."
      image={image}
      imageAlt="Billets et réservations d'hôtel imprimés"
      highlights={[
        "Réservations de vols aller-retour vérifiables par le consulat",
        "Réservations d'hôtel confirmées et annulables sans frais",
        "Itinéraires de voyage détaillés et cohérents",
        "Documents fournis rapidement au format requis par VFS/TLS/Capago",
      ]}
      steps={[
        { title: "Vos dates", desc: "Indiquez-nous les dates et destinations de votre voyage." },
        { title: "Génération", desc: "Nous bloquons les vols et les chambres d'hôtel." },
        { title: "Remise", desc: "Vous recevez les documents PDF à joindre à votre dossier." },
        { title: "Ajustement", desc: "Nous ajustons les dates si le consulat demande une modification." },
      ]}
      included={[
        { icon: Plane, t: "Vols bloqués" },
        { icon: Building, t: "Hôtels confirmés" },
        { icon: FileCheck, t: "Format VFS" },
        { icon: CalendarClock, t: "Validité garantie" },
        { icon: Globe2, t: "Service Visa", to: "/services/visa-schengen" },
      ]}
      faqs={[
        { q: "Les réservations sont-elles de vrais billets ?", a: "Ce sont des réservations confirmées dans les systèmes (GDS) que le consulat peut vérifier, mais ce ne sont pas des billets émis et payés." },
        { q: "Dois-je acheter ces vols si j'ai mon visa ?", a: "Non, vous êtes libre d'acheter vos billets définitifs où vous le souhaitez une fois le visa obtenu." },
      ]}
      serviceSlug="reservations-vfs"
    />
  ),
});
