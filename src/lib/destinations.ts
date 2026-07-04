import imgFrance from "@/assets/dest-france.jpg";
import imgCanada from "@/assets/dest-canada.jpg";
import imgGermany from "@/assets/dest-germany.jpg";
import imgBelgium from "@/assets/dest-belgium.jpg";
import imgCameroun from "@/assets/dest-cameroun.jpg";

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  image: string;
  accent: string; // CSS color for accents
  intro: string;
  highlights: { title: string; desc: string }[];
  cities: { name: string; desc: string }[];
  visa: {
    types: { name: string; desc: string }[];
    timeline: string;
    documents: string[];
  };
  practical: { label: string; value: string }[];
  tips: string[];
  serviceFocus: { label: string; to: string }[];
};

export const destinations: Record<string, Destination> = {
  france: {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    tagline: "Excellence académique, art de vivre.",
    image: imgFrance,
    accent: "#0055A4",
    intro:
      "Première destination des étudiants camerounais, la France offre un système universitaire reconnu, une vie culturelle riche et un statut étudiant protégé (CAF, sécurité sociale, transport).",
    highlights: [
      {
        title: "Campus France obligatoire",
        desc: "Procédure « Études en France » pour tous les dossiers d'admission depuis le Cameroun.",
      },
      {
        title: "Frais réduits",
        desc: "Universités publiques accessibles, bourses (Eiffel, Erasmus+) disponibles.",
      },
      {
        title: "Travail étudiant",
        desc: "Jusqu'à 964 h/an autorisées avec le titre de séjour étudiant.",
      },
    ],
    cities: [
      {
        name: "Paris",
        desc: "Sorbonne, Sciences Po, Dauphine — capitale académique et culturelle.",
      },
      { name: "Lyon", desc: "Pôle business, ingénierie et santé, qualité de vie reconnue." },
      { name: "Toulouse", desc: "Aéronautique, ingénierie, recherche spatiale." },
      { name: "Montpellier", desc: "Ville étudiante du Sud, médecine et droit." },
    ],
    visa: {
      types: [
        {
          name: "VLS-TS Étudiant",
          desc: "Visa long séjour valant titre de séjour, dès 6 mois d'études.",
        },
        {
          name: "Visa court séjour Schengen",
          desc: "Tourisme, visite famille, séjour < 90 jours.",
        },
      ],
      timeline: "Campus France : 2-3 mois. Visa : 2-4 semaines après acceptation.",
      documents: [
        "Passeport valide 3 mois après retour",
        "Acceptation Campus France / établissement",
        "Justificatif de ressources (877,80 €/mois minimum, au 01/08/2026)",
        "Attestation de logement",
        "Assurance voyage / OFII",
      ],
    },
    practical: [
      { label: "Monnaie", value: "Euro (€)" },
      { label: "Langue", value: "Français" },
      { label: "Coût de vie étudiant", value: "877,80 €/mois (au 01/08/2026)" },
      { label: "Logement (CROUS)", value: "> 200 €/mois" },
    ],
    tips: [
      "Ouvrez votre dossier Campus France dès octobre pour la rentrée suivante.",
      "Demandez l'APL auprès de la CAF dès votre arrivée.",
      "La sécurité sociale étudiante est gratuite et automatique.",
    ],
    serviceFocus: [
      { label: "Long séjour & études", to: "/services/long-sejours" },
      { label: "Court séjour & visa", to: "/services/court-sejours" },
      { label: "Logement étudiant", to: "/services/logement" },
      { label: "Caution & AVI", to: "/services/caution-avi" },
      { label: "Accueil & intégration", to: "/services/accueil-integration" },
    ],
  },
  canada: {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Études d'excellence, voie vers la résidence.",
    image: imgCanada,
    accent: "#D52B1E",
    intro:
      "Le Canada combine universités de classe mondiale, marché du travail accueillant et parcours clair vers la résidence permanente via le PEQ, le PGWP et Entrée Express.",
    highlights: [
      { title: "Permis post-diplôme (PGWP)", desc: "Jusqu'à 3 ans de travail après vos études." },
      { title: "Bilingue", desc: "Étudiez en français au Québec ou en anglais ailleurs." },
      {
        title: "Voie vers la PR",
        desc: "Programmes provinciaux et fédéraux facilitant la résidence.",
      },
    ],
    cities: [
      { name: "Montréal", desc: "McGill, UdeM, Concordia — francophone et abordable." },
      { name: "Toronto", desc: "U of T, York — cœur économique du Canada." },
      { name: "Québec", desc: "Université Laval, cadre 100% francophone." },
      { name: "Vancouver", desc: "UBC, SFU — côte Pacifique, nature et tech." },
    ],
    visa: {
      types: [
        {
          name: "Permis d'études",
          desc: "Pour tout programme > 6 mois, exige une lettre d'acceptation.",
        },
        { name: "AVE / visa visiteur", desc: "Court séjour pour tourisme ou visite familiale." },
        {
          name: "CAQ (Québec)",
          desc: "Certificat d'acceptation obligatoire avant le permis fédéral.",
        },
      ],
      timeline: "CAQ : 4-6 semaines. Permis d'études : 6-12 semaines (volet direct possible).",
      documents: [
        "Lettre d'acceptation d'un EED (établissement désigné)",
        "Preuve de fonds (CAD 20 635/an + frais de scolarité)",
        "CAQ pour le Québec",
        "Examen médical agréé",
        "Biométrie",
      ],
    },
    practical: [
      { label: "Monnaie", value: "Dollar canadien (CAD)" },
      { label: "Langues", value: "Français · Anglais" },
      { label: "Coût de vie étudiant", value: "1 200 – 1 800 CAD/mois" },
      { label: "Logement", value: "600 – 1 200 CAD/mois" },
    ],
    tips: [
      "Pour le Québec, déposez le CAQ avant le permis fédéral.",
      "Le Volet direct pour les études (VDE) accélère le traitement à 20 jours.",
      "Travaillez jusqu'à 24 h/semaine pendant les sessions.",
    ],
    serviceFocus: [
      { label: "Long séjour & études", to: "/services/long-sejours" },
      { label: "Billets d'avion", to: "/services/billets-avion" },
      { label: "Logement", to: "/services/logement" },
      { label: "Accueil & intégration", to: "/services/accueil-integration" },
    ],
  },
  allemagne: {
    slug: "allemagne",
    name: "Allemagne",
    flag: "🇩🇪",
    tagline: "Ingénierie, gratuité, opportunités.",
    image: imgGermany,
    accent: "#000000",
    intro:
      "L'Allemagne est la première économie d'Europe : universités publiques quasi gratuites, formations duales prisées et marché de l'emploi favorable aux ingénieurs et techniciens.",
    highlights: [
      {
        title: "Études gratuites",
        desc: "Universités publiques sans frais (sauf Bade-Wurtemberg).",
      },
      { title: "Compte bloqué", desc: "Sperrkonto de 11 904 € (2025) requis pour le visa." },
      { title: "Emploi facilité", desc: "18 mois pour chercher un emploi après le diplôme." },
    ],
    cities: [
      { name: "Berlin", desc: "Capitale créative, startups et universités internationales." },
      { name: "Munich", desc: "TUM, LMU — ingénierie et industrie de pointe." },
      { name: "Aix-la-Chapelle", desc: "RWTH Aachen, référence mondiale en ingénierie." },
      { name: "Hambourg", desc: "Port, commerce, médias et droit." },
    ],
    visa: {
      types: [
        {
          name: "Visa national D — études",
          desc: "Long séjour pour études universitaires ou cours de langue.",
        },
        { name: "Visa de candidat aux études", desc: "Pour finaliser votre admission sur place." },
        { name: "Visa Schengen", desc: "Court séjour, tourisme, visite." },
      ],
      timeline: "Visa étudiant : 6-12 semaines. Compte bloqué : 2-3 semaines.",
      documents: [
        "Lettre d'admission (Zulassung) ou Uni-Assist",
        "Sperrkonto de 11 904 € minimum",
        "Assurance santé allemande (TK, AOK…)",
        "Diplômes traduits assermentés",
        "Niveau de langue B1/B2 si formation en allemand",
      ],
    },
    practical: [
      { label: "Monnaie", value: "Euro (€)" },
      { label: "Langues", value: "Allemand · Anglais (Master)" },
      { label: "Coût de vie étudiant", value: "850 – 1 100 €/mois" },
      { label: "Logement (Wohnheim)", value: "250 – 500 €/mois" },
    ],
    tips: [
      "Ouvrez votre Sperrkonto chez Expatrio, Fintiba ou Coracle.",
      "Beaucoup de Masters sont 100 % en anglais — pas besoin d'allemand.",
      "Travail étudiant : 140 jours complets ou 280 demi-journées par an.",
    ],
    serviceFocus: [
      { label: "Long séjour & études", to: "/services/long-sejours" },
      { label: "Caution & AVI (Sperrkonto)", to: "/services/caution-avi" },
      { label: "Logement", to: "/services/logement" },
      { label: "Accueil & intégration", to: "/services/accueil-integration" },
    ],
  },
  belgique: {
    slug: "belgique",
    name: "Belgique",
    flag: "🇧🇪",
    tagline: "Carrefour de l'Europe, accès simplifié.",
    image: imgBelgium,
    accent: "#FAE042",
    intro:
      "Aux portes des institutions européennes, la Belgique propose des universités francophones de qualité (ULB, UCLouvain, ULiège), à des coûts contenus et avec une vie étudiante dynamique.",
    highlights: [
      {
        title: "Frais accessibles",
        desc: "Environ 4 175 €/an pour les non-européens en universités publiques.",
      },
      { title: "Francophone", desc: "Pas de barrière linguistique en Wallonie-Bruxelles." },
      {
        title: "Court séjour facile",
        desc: "Idéal pour stages, conférences, visites familiales en Europe.",
      },
    ],
    cities: [
      { name: "Bruxelles", desc: "ULB, VUB — capitale européenne, multiculturelle." },
      { name: "Louvain-la-Neuve", desc: "UCLouvain, campus 100% étudiant." },
      { name: "Liège", desc: "ULiège, ville chaleureuse et abordable." },
      { name: "Gand", desc: "Université flamande, vie étudiante animée." },
    ],
    visa: {
      types: [
        {
          name: "Visa D long séjour",
          desc: "Études supérieures, requiert inscription définitive.",
        },
        { name: "Visa C court séjour", desc: "Tourisme, visite famille, jusqu'à 90 jours." },
      ],
      timeline: "Visa long séjour : 30 à 60 jours après dépôt VFS.",
      documents: [
        "Attestation d'inscription d'un établissement reconnu",
        "Prise en charge (annexe 32) ou preuve de ressources (≈ 803 €/mois)",
        "Certificat médical et extrait de casier judiciaire",
        "Légalisation des diplômes (équivalence)",
      ],
    },
    practical: [
      { label: "Monnaie", value: "Euro (€)" },
      { label: "Langues", value: "Français · Néerlandais" },
      { label: "Coût de vie étudiant", value: "850 – 1 100 €/mois" },
      { label: "Kot (logement)", value: "350 – 600 €/mois" },
    ],
    tips: [
      "Demandez l'équivalence de diplôme à la Fédération Wallonie-Bruxelles tôt (avant le 15 juillet).",
      "La prise en charge (garant) est souvent acceptée à la place du blocage de compte.",
      "Inscrivez-vous à la commune dans les 8 jours après votre arrivée.",
    ],
    serviceFocus: [
      { label: "Court séjour & visa", to: "/services/court-sejours" },
      { label: "Long séjour & études", to: "/services/long-sejours" },
      { label: "Logement (kot)", to: "/services/logement" },
      { label: "Accueil & intégration", to: "/services/accueil-integration" },
    ],
  },
  cameroun: {
    slug: "cameroun",
    name: "Cameroun",
    flag: "🇨🇲",
    tagline: "L'Afrique en miniature, à découvrir.",
    image: imgCameroun,
    accent: "#007A5E",
    intro:
      "De la plage de Kribi aux montagnes du Nord, du Mont Cameroun aux forêts de l'Est : nous organisons des circuits authentiques, sécurisés et clés en main pour la diaspora et les touristes.",
    highlights: [
      {
        title: "Circuits sur mesure",
        desc: "Nord safari, Sud balnéaire, Ouest culturel — à votre rythme.",
      },
      {
        title: "Logistique complète",
        desc: "Transferts, hébergement, guides francophones, sécurité.",
      },
      {
        title: "Pour la diaspora",
        desc: "Retours au pays, événements familiaux, démarches administratives.",
      },
    ],
    cities: [
      { name: "Douala", desc: "Capitale économique, point d'arrivée international." },
      { name: "Yaoundé", desc: "Capitale politique, sept collines et musées." },
      { name: "Kribi", desc: "Plages, chutes de la Lobé, fruits de mer." },
      { name: "Maroua / Nord", desc: "Parcs de Waza, paysages de savane, culture peule." },
    ],
    visa: {
      types: [
        { name: "e-Visa touristique", desc: "Demande en ligne, valable 30 jours, prolongeable." },
        { name: "Visa d'affaires", desc: "Pour missions courtes, séminaires, prospection." },
      ],
      timeline: "e-Visa : 48 à 72 h après dépôt complet.",
      documents: [
        "Passeport valide 6 mois",
        "Réservation d'hôtel ou invitation",
        "Billet aller-retour",
        "Carnet de vaccination international (fièvre jaune)",
      ],
    },
    practical: [
      { label: "Monnaie", value: "Franc CFA (XAF)" },
      { label: "Langues", value: "Français · Anglais" },
      { label: "Saison idéale", value: "Novembre – Février (sèche)" },
      { label: "Décalage horaire", value: "GMT+1" },
    ],
    tips: [
      "Prévoyez la vaccination contre la fièvre jaune (obligatoire).",
      "Privilégiez la saison sèche pour les circuits Nord.",
      "Nos guides locaux parlent français, anglais et langues nationales.",
    ],
    serviceFocus: [
      { label: "Visit Africa", to: "/services/visite-afrique" },
      { label: "Billets d'avion", to: "/services/billets-avion" },
      { label: "Accueil à l'arrivée", to: "/services/accueil-integration" },
    ],
  },
};

export const destinationList = Object.values(destinations);
