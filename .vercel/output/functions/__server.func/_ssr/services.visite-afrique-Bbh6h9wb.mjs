import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as ServiceHero, a as ServiceHighlights, b as ServiceProcess, c as ServiceIncluded, d as ServiceFaq, e as ServiceCta } from "./ServiceDetail-BH7p6F-Z.mjs";
import { R as Reveal } from "./Reveal-No4zfIuz.mjs";
import { i as image$7 } from "./router-DJhV2vx3.mjs";
import { E as Earth, H as Heart, h as Compass, s as Sun, t as Mountain, W as Waves, u as Landmark, B as Bird, e as MapPin, v as Car, o as House, w as Utensils, x as Camera, j as Plane, y as Tent, z as TreePalm } from "../_libs/lucide-react.mjs";
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
const featuredCountries = [{
  flag: "🇨🇲",
  name: "Cameroun",
  capital: "Yaoundé · Douala",
  vibe: "L'Afrique en miniature",
  ideal: "Retour aux sources, nature, plages, safari",
  duration: "7–14 jours",
  bestSeason: "Nov–Fév (saison sèche)",
  highlights: ["Kribi et ses chutes de la Lobé — plages paradisiaques", "Mont Cameroun — trek jusqu'au toit de l'Afrique de l'Ouest", "Parc national de Waza — safari, éléphants, lions, girafes", "Route des Chefferies (Ouest) — patrimoine, musées, artisanat", "Douala et Yaoundé — vie urbaine, marchés, gastronomie", "Limbé et ses plages de sable noir volcanique"]
}, {
  flag: "🇸🇳",
  name: "Sénégal",
  capital: "Dakar",
  vibe: "La Teranga",
  ideal: "Culture, farniente, histoire, musique",
  duration: "5–10 jours",
  bestSeason: "Nov–Mai (saison sèche)",
  highlights: ["Île de Gorée — mémoire et histoire, patrimoine UNESCO", "Lac Rose — balade en 4x4 sur les rives salées", "Saint-Louis — architecture coloniale, faune, oiseaux", "Saly — plages, hôtels, stations balnéaires", "Festival de Jazz ou Biennale Dak'art selon la saison", "Parc national du Djoudj — réserve ornithologique exceptionnelle"]
}, {
  flag: "🇲🇦",
  name: "Maroc",
  capital: "Rabat · Marrakech · Fès",
  vibe: "Orient & diversité",
  ideal: "Culture, désert, montagne, gastronomie",
  duration: "5–12 jours",
  bestSeason: "Mar–Mai / Sep–Nov",
  highlights: ["Marrakech — médina animée, Jemaa el-Fna, jardins secrets", "Désert du Sahara — nuit en bivouac sous les étoiles", "Fès — plus vieille médina du monde, artisans, tanneries", "Chefchaouen — la ville bleue du Rif", "Côte atlantique — Essaouira, surf, ports de pêche", "Montagnes de l'Atlas — randonnées, vallées berbères"]
}];
const otherCountries = [{
  flag: "🇰🇪",
  name: "Kenya"
}, {
  flag: "🇹🇿",
  name: "Tanzanie"
}, {
  flag: "🇷🇼",
  name: "Rwanda"
}, {
  flag: "🇺🇬",
  name: "Ouganda"
}, {
  flag: "🇿🇦",
  name: "Afrique du Sud"
}, {
  flag: "🇪🇬",
  name: "Égypte"
}, {
  flag: "🇨🇮",
  name: "Côte d'Ivoire"
}, {
  flag: "🇨🇻",
  name: "Cap-Vert"
}, {
  flag: "🇬🇭",
  name: "Ghana"
}, {
  flag: "🇧🇯",
  name: "Bénin"
}];
const travelStyles = [{
  icon: Mountain,
  title: "Safari & nature",
  desc: "Kenya, Tanzanie, Ouganda, Afrique du Sud, Rwanda : pistes animalières, gorilles des montagnes, Big Five, parcs nationaux légendaires.",
  countries: "Kenya · Tanzanie · Rwanda · Ouganda · Afrique du Sud"
}, {
  icon: Waves,
  title: "Plages & farniente",
  desc: "Cap-Vert, Zanzibar, Kribi, Diani Beach, Saly : eaux cristallines, sable blanc ou noir, cocotiers, resorts et paillotes.",
  countries: "Cap-Vert · Tanzanie · Cameroun · Sénégal · Kenya"
}, {
  icon: Landmark,
  title: "Culture & histoire",
  desc: "Médinas du Maroc, pyramides d'Égypte, île de Gorée, route des Chefferies au Cameroun, temples de Lalibela en Éthiopie.",
  countries: "Maroc · Égypte · Sénégal · Cameroun · Éthiopie"
}, {
  icon: Bird,
  title: "Aventure & trek",
  desc: "Mont Kilimandjaro, Mont Cameroun, désert du Sahara, trek des gorilles au Rwanda, cascades d'Ouganda, randonnées dans l'Atlas.",
  countries: "Tanzanie · Cameroun · Maroc · Rwanda · Ouganda"
}];
const highlights = [{
  text: "Circuits multi-pays : Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Bénin, Cameroun…",
  featured: true
}, "Safaris (Kenya, Tanzanie, Ouganda, Afrique du Sud, Parc de Waza)", "Plages & farniente (Cap-Vert, Zanzibar, Kribi, Diani, Saly)", "Découvertes culturelles (médinas du Maroc, pyramides d'Égypte, île de Gorée, route des Chefferies)", "Vols internationaux et domestiques, transferts aéroport, véhicule avec chauffeur", "Hébergement sélectionné : hôtels, lodges, villas, riads, écolodges, bivouacs luxe", "Guides francophones et anglophones, accompagnateurs locaux", "Organisation d'événements (anniversaires, mariages, retours au pays, séminaires)", "Assurance voyage multirisque incluse sur tous nos circuits"];
const steps = [{
  title: "Votre envie",
  desc: "On échange sur vos dates, vos envies, votre budget et le rythme souhaité. Premier appel gratuit et sans engagement."
}, {
  title: "Itinéraire",
  desc: "Nous concevons un programme personnalisé : pays, étapes, hébergements, activités. Vous validez chaque détail."
}, {
  title: "Logistique",
  desc: "Vols internes et internationaux, visas pays, hôtels, transferts, guides et activités : tout est réservé et confirmé."
}, {
  title: "Avant le départ",
  desc: "Nous vous remettons un carnet de voyage complet : itinéraire jour par jour, conseils santé, formalités, contacts locaux."
}, {
  title: "Sur place",
  desc: "Un référent local disponible 24h/24 et 7j/7 tout au long de votre séjour. Assistance téléphonique permanente."
}, {
  title: "Après le voyage",
  desc: "Nous revenons vers vous pour recueillir vos impressions et améliorer continuellement nos circuits."
}];
const included = [{
  icon: MapPin,
  t: "Circuits multi-pays",
  to: "/services/circuits-multi-pays"
}, {
  icon: Car,
  t: "Chauffeur & transferts",
  to: "/services/chauffeur-transferts"
}, {
  icon: House,
  t: "Hébergement",
  to: "/services/logement"
}, {
  icon: Utensils,
  t: "Gastronomie locale",
  to: "/services/gastronomie-locale"
}, {
  icon: Camera,
  t: "Safaris & excursions",
  to: "/services/safaris-excursions"
}, {
  icon: Plane,
  t: "Vols & billets",
  to: "/services/billets-avion"
}, {
  icon: Tent,
  t: "Bivouacs & lodges",
  to: "/services/logement"
}, {
  icon: TreePalm,
  t: "Séjours balnéaires",
  to: "/services/court-sejours"
}];
const faqs = [{
  q: "Quels pays africains couvrez-vous ?",
  a: "Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Bénin, Cameroun et plus encore. Les circuits multi-pays sont notre spécialité."
}, {
  q: "Quel budget prévoir pour un circuit en Afrique ?",
  a: "Tout dépend du pays, du nombre de jours et du standing choisi. Comptez à partir de 1 200 € par personne pour un séjour d'une semaine au Sénégal ou au Maroc, et de 2 500 € pour un safari au Kenya ou en Tanzanie. Nous adaptons chaque proposition à votre budget."
}, {
  q: "Quels pays recommandez-vous pour un premier voyage en Afrique ?",
  a: "Le Sénégal pour sa facilité d'accès et sa culture teranga, le Maroc pour sa proximité et sa diversité, ou le Cameroun pour une première expérience complète « Afrique en miniature ». L'Afrique du Sud est également très accessible pour les francophones."
}, {
  q: "Proposez-vous des circuits combinant plusieurs pays ?",
  a: "Oui — Sénégal + Côte d'Ivoire, Kenya + Tanzanie, Maroc + Sénégal, Cameroun + Sénégal, Afrique du Sud + Namibie. Nous construisons le voyage selon vos envies et votre budget."
}, {
  q: "Faut-il un visa pour chaque pays ?",
  a: "Cela dépend de votre nationalité. Beaucoup de pays proposent des e-visas ou un visa à l'arrivée pour les ressortissants africains et européens. Nous gérons toutes les démarches pour vous, y compris les lettres d'invitation."
}, {
  q: "Quand partir pour un safari ?",
  a: "La saison sèche (juin–octobre) est idéale pour l'Afrique de l'Est : les animaux se rassemblent autour des points d'eau. Pour l'Afrique australe, préférez mai–septembre. Évitez la saison des pluies (mars–mai) pour une expérience optimale."
}, {
  q: "Les vols sont-ils inclus dans vos circuits ?",
  a: "Nous incluons les vols internationaux et domestiques dans nos devis. Nous négocions des tarifs préférentiels grâce à nos partenariats avec les compagnies aériennes desservant l'Afrique."
}, {
  q: "Organisez-vous des voyages de groupe ?",
  a: "Oui — familles nombreuses, amis, associations, entreprises, retours au pays en groupe diaspora. Nous proposons des tarifs dégressifs à partir de 6 personnes et un accompagnateur dédié."
}, {
  q: "Quelles vaccinations sont nécessaires ?",
  a: "Fièvre jaune obligatoire pour la plupart des pays subsahariens (carnet de vaccination international exigé). Antipaludéen recommandé selon la zone visitée. Nous vous remettons un guide santé complet par destination avant le départ."
}, {
  q: "Y a-t-il un risque sécuritaire ?",
  a: "Nous surveillons en temps réel les recommandations du ministère des Affaires étrangères. Nous ne programmons jamais de séjour dans une zone déconseillée. Tous nos partenaires locaux sont soigneusement sélectionnés et éprouvés."
}, {
  q: "Puis-je personnaliser mon circuit ?",
  a: "Absolument. Chaque voyage est unique : vous choisissez vos étapes, votre rythme, votre type d'hébergement et vos activités. Nous ne faisons pas de voyage standardisé."
}, {
  q: "Proposez-vous des circuits pour la diaspora ?",
  a: "Oui — retours au pays, visites familiales, cérémonies, reconnexion avec les racines. Nous organisons aussi les formalités pour les doubles nationaux."
}];
const benefits = [{
  icon: Earth,
  title: "Diversité infinie",
  desc: "Savane, désert, jungle, plages, métropoles : l'Afrique est un continent-monde à explorer sans limites. Nous couvrons plus de 15 destinations."
}, {
  icon: Heart,
  title: "Authenticité",
  desc: "Rencontres, traditions, gastronomie, musique : une immersion culturelle unique à chaque voyage. Pas de tourisme de masse."
}, {
  icon: Compass,
  title: "Clé en main",
  desc: "Vols, visas, hébergement, guides, activités, assurance : nous orchestrons tout de A à Z pour vous. Vous n'avez qu'à profiter."
}, {
  icon: Sun,
  title: "Assistance 24h/24",
  desc: "Un référent local disponible 7j/7 et une hotline d'urgence pendant tout votre séjour. Voyagez serein."
}];
function VisitAfricaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceHero, { eyebrow: "Visit Africa", title: "L'Afrique, à votre rythme.", intro: "Safari au Kenya, plages du Cap-Vert, médinas du Maroc, gorilles du Rwanda, pyramides d'Égypte, savanes de Tanzanie, retour aux sources au Cameroun, teranga au Sénégal : nous organisons votre séjour de A à Z, avec le confort d'un voyage premium et l'âme d'une expérience authentique.", image: image$7, imageAlt: "Paysage africain — plage, savane et métropoles", serviceSlug: "visite-afrique" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-4", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: b.desc })
    ] }, b.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Façon de voyager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-semibold md:text-5xl", children: "Quel voyageur êtes-vous ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Safari, plage, culture ou trek : chaque style de voyage a sa saison et ses destinations de prédilection. Trouvez le vôtre." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: travelStyles.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-white p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-brand-red font-medium", children: s.countries })
      ] }, s.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Focus pays" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-semibold md:text-5xl", children: "Trois incontournables, en détail." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Nous vous accompagnons sur tout le continent. Voici un aperçu de trois destinations phares — notre équipe connaît chaque destination sur le bout des doigts." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-8 md:grid-cols-3", children: featuredCountries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl leading-none", children: c.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c.capital })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-brand-navy px-3 py-1 text-xs font-medium text-white", children: c.vibe }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground", children: c.ideal }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground", children: c.duration })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs font-medium text-brand-red uppercase tracking-wider", children: [
          "Meilleure saison : ",
          c.bestSeason
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: c.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 shrink-0", children: c.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
        ] }, h)) })
      ] }, c.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Et aussi…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold md:text-4xl", children: "Vous voyagez partout en Afrique" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-muted-foreground", children: "Ce ne sont pas les seules. Nous organisons votre séjour dans tout le continent — savane, villes, littoral, désert, jungle. Chaque destination a ses trésors." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5", children: otherCountries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl leading-none", children: c.flag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: c.name })
      ] }, c.name)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.2em] text-brand-red", children: "Calendrier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold md:text-4xl", children: "Quand partir selon vos envies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-muted-foreground", children: "L'Afrique est vaste et chaque région a ses saisons idéales. Voici un guide pour vous aider à choisir le meilleur moment pour votre voyage." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [{
        period: "Novembre – Février",
        regions: "Afrique de l'Ouest",
        desc: "Saison sèche, idéale pour le Sénégal, le Cameroun, la Côte d'Ivoire, le Ghana et le Bénin. Températures agréables, peu de pluie.",
        goodFor: "Plages, culture, découvertes urbaines, festivals"
      }, {
        period: "Juin – Octobre",
        regions: "Afrique de l'Est & Australe",
        desc: "Meilleure période pour les safaris au Kenya, Tanzanie, Ouganda, Afrique du Sud et Rwanda. Les animaux se concentrent autour des points d'eau.",
        goodFor: "Safari, gorilles, Big Five, photographes animaliers"
      }, {
        period: "Mars – Mai / Sept – Nov",
        regions: "Maroc & Afrique du Nord",
        desc: "Printemps et automne : températures douces, idéal pour les médinas, le désert du Sahara et les montagnes de l'Atlas.",
        goodFor: "Culture, désert, randonnée, gastronomie"
      }].map((season) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: season.period }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-brand-red", children: season.regions }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: season.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Idéal pour :" }),
          " ",
          season.goodFor
        ] })
      ] }, season.period)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceHighlights, { highlights }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceProcess, { steps }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceIncluded, { included }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceFaq, { faqs }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCta, { serviceSlug: "visite-afrique" })
  ] });
}
export {
  VisitAfricaPage as component
};
