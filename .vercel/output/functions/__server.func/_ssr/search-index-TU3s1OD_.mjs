import { d as destinationList } from "./router-DJhV2vx3.mjs";
const services = [
  {
    kind: "service",
    title: "Longs séjours",
    subtitle: "Études, visa long séjour, installation",
    to: "/services/long-sejours",
    keywords: ["long", "etudes", "études", "visa", "master", "licence", "universite", "université"]
  },
  {
    kind: "service",
    title: "Courts séjours",
    subtitle: "Visa touristique, vacances, affaires",
    to: "/services/court-sejours",
    keywords: ["court", "tourisme", "vacances", "schengen", "affaires"]
  },
  {
    kind: "service",
    title: "Visit Africa",
    subtitle: "Circuits & séjours en Afrique",
    to: "/services/visite-afrique",
    keywords: [
      "africa",
      "afrique",
      "senegal",
      "cameroun",
      "kenya",
      "tanzanie",
      "maroc",
      "egypte",
      "rwanda",
      "cap-vert",
      "ghana",
      "safari",
      "circuit",
      "voyage"
    ]
  },
  {
    kind: "service",
    title: "Logement",
    subtitle: "Recherche et sécurisation du logement",
    to: "/services/logement",
    keywords: ["logement", "appartement", "kot", "crous", "wohnheim", "studio"]
  },
  {
    kind: "service",
    title: "Caution bancaire & AVI",
    subtitle: "Sperrkonto, attestation, garant",
    to: "/services/caution-avi",
    keywords: ["caution", "avi", "sperrkonto", "banque", "garant"]
  },
  {
    kind: "service",
    title: "Billets d'avion",
    subtitle: "Réservation au meilleur tarif",
    to: "/services/billets-avion",
    keywords: ["billet", "avion", "vol", "aller"]
  },
  {
    kind: "service",
    title: "Accueil & intégration",
    subtitle: "Aéroport, démarches, installation",
    to: "/services/accueil-integration",
    keywords: ["accueil", "integration", "aeroport", "arrivee"]
  },
  {
    kind: "service",
    title: "Community management",
    subtitle: "Présence et marque en ligne",
    to: "/services/community-management",
    keywords: ["community", "social", "marketing", "communication"]
  }
];
const destinations = destinationList.map((d) => ({
  kind: "destination",
  title: d.name,
  subtitle: d.tagline,
  to: "/destinations/$country",
  params: { country: d.slug },
  keywords: [d.name.toLowerCase(), d.slug, ...d.cities.map((c) => c.name.toLowerCase())]
}));
const searchIndex = [...destinations, ...services];
const normalize = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function searchAll(query, limit = 8) {
  const q = normalize(query.trim());
  if (!q) return [];
  return searchIndex.map((r) => {
    const hay = normalize([r.title, r.subtitle, ...r.keywords].join(" "));
    const score = hay.includes(q) ? normalize(r.title).startsWith(q) ? 3 : hay.startsWith(q) ? 2 : 1 : 0;
    return { r, score };
  }).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).slice(0, limit).map((x) => x.r);
}
function suggestionsForType(type) {
  const t = normalize(type);
  if (t.includes("long"))
    return searchIndex.filter(
      (r) => [
        "/services/long-sejours",
        "/services/logement",
        "/services/caution-avi",
        "/services/accueil-integration"
      ].includes(r.to)
    );
  if (t.includes("court"))
    return searchIndex.filter(
      (r) => [
        "/services/court-sejours",
        "/services/billets-avion",
        "/services/accueil-integration"
      ].includes(r.to)
    );
  if (t.includes("africa") || t.includes("afrique"))
    return searchIndex.filter(
      (r) => [
        "/services/visite-afrique",
        "/services/billets-avion",
        "/services/accueil-integration"
      ].includes(r.to)
    );
  return [];
}
export {
  suggestionsForType as a,
  searchIndex as b,
  searchAll as s
};
