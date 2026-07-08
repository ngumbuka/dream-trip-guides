import { createFileRoute } from "@tanstack/react-router";
import { Flag } from "@/components/ui/Flag";
import { useMemo } from "react";
import {
  MapPin,
  Car,
  Home,
  Utensils,
  Camera,
  Globe2,
  Sun,
  Heart,
  Compass,
  Plane,
  Tent,
  Palmtree,
  Mountain,
  Landmark,
  Waves,
  Bird,
} from "lucide-react";
import {
  ServiceHero,
  ServiceHighlights,
  ServiceProcess,
  ServiceIncluded,
  ServiceFaq,
  ServiceCta,
} from "@/components/site/ServiceDetail";
import { Reveal } from "@/components/site/Reveal";
import image from "@/assets/service-cameroun.jpg";

export const Route = createFileRoute("/services/visite-afrique")({
  head: () => ({
    meta: [
      { title: "Visit Africa — Safaris, plages, circuits & séjours | VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Découvrez l'Afrique autrement : Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Cameroun. Safaris, plages, déserts, métropoles — circuits sur mesure.",
      },
      { property: "og:title", content: "Visit Africa — VoyageonsEnsemble" },
      {
        property: "og:description",
        content: "Safaris, plages, déserts, métropoles : l'Afrique sur mesure, organisée de A à Z.",
      },
      { property: "og:image", content: image },
    ],
  }),
  component: VisitAfricaPage,
});

const featuredCountries = [
  {
    flag: "🇨🇲",
    name: "Cameroun",
    capital: "Yaoundé · Douala",
    vibe: "L'Afrique en miniature",
    ideal: "Retour aux sources, nature, plages, safari",
    duration: "7–14 jours",
    bestSeason: "Nov–Fév (saison sèche)",
    highlights: [
      "Kribi et ses chutes de la Lobé — plages paradisiaques",
      "Mont Cameroun — trek jusqu'au toit de l'Afrique de l'Ouest",
      "Parc national de Waza — safari, éléphants, lions, girafes",
      "Route des Chefferies (Ouest) — patrimoine, musées, artisanat",
      "Douala et Yaoundé — vie urbaine, marchés, gastronomie",
      "Limbé et ses plages de sable noir volcanique",
    ],
  },
  {
    flag: "🇸🇳",
    name: "Sénégal",
    capital: "Dakar",
    vibe: "La Teranga",
    ideal: "Culture, farniente, histoire, musique",
    duration: "5–10 jours",
    bestSeason: "Nov–Mai (saison sèche)",
    highlights: [
      "Île de Gorée — mémoire et histoire, patrimoine UNESCO",
      "Lac Rose — balade en 4x4 sur les rives salées",
      "Saint-Louis — architecture coloniale, faune, oiseaux",
      "Saly — plages, hôtels, stations balnéaires",
      "Festival de Jazz ou Biennale Dak'art selon la saison",
      "Parc national du Djoudj — réserve ornithologique exceptionnelle",
    ],
  },
  {
    flag: "🇲🇦",
    name: "Maroc",
    capital: "Rabat · Marrakech · Fès",
    vibe: "Orient & diversité",
    ideal: "Culture, désert, montagne, gastronomie",
    duration: "5–12 jours",
    bestSeason: "Mar–Mai / Sep–Nov",
    highlights: [
      "Marrakech — médina animée, Jemaa el-Fna, jardins secrets",
      "Désert du Sahara — nuit en bivouac sous les étoiles",
      "Fès — plus vieille médina du monde, artisans, tanneries",
      "Chefchaouen — la ville bleue du Rif",
      "Côte atlantique — Essaouira, surf, ports de pêche",
      "Montagnes de l'Atlas — randonnées, vallées berbères",
    ],
  },
];

const otherCountries = [
  { flag: "🇰🇪", name: "Kenya" },
  { flag: "🇹🇿", name: "Tanzanie" },
  { flag: "🇷🇼", name: "Rwanda" },
  { flag: "🇺🇬", name: "Ouganda" },
  { flag: "🇿🇦", name: "Afrique du Sud" },
  { flag: "🇪🇬", name: "Égypte" },
  { flag: "🇨🇮", name: "Côte d'Ivoire" },
  { flag: "🇨🇻", name: "Cap-Vert" },
  { flag: "🇬🇭", name: "Ghana" },
  { flag: "🇧🇯", name: "Bénin" },
];

const travelStyles = [
  {
    icon: Mountain,
    title: "Safari & nature",
    desc: "Kenya, Tanzanie, Ouganda, Afrique du Sud, Rwanda : pistes animalières, gorilles des montagnes, Big Five, parcs nationaux légendaires.",
    countries: "Kenya · Tanzanie · Rwanda · Ouganda · Afrique du Sud",
  },
  {
    icon: Waves,
    title: "Plages & farniente",
    desc: "Cap-Vert, Zanzibar, Kribi, Diani Beach, Saly : eaux cristallines, sable blanc ou noir, cocotiers, resorts et paillotes.",
    countries: "Cap-Vert · Tanzanie · Cameroun · Sénégal · Kenya",
  },
  {
    icon: Landmark,
    title: "Culture & histoire",
    desc: "Médinas du Maroc, pyramides d'Égypte, île de Gorée, route des Chefferies au Cameroun, temples de Lalibela en Éthiopie.",
    countries: "Maroc · Égypte · Sénégal · Cameroun · Éthiopie",
  },
  {
    icon: Bird,
    title: "Aventure & trek",
    desc: "Mont Kilimandjaro, Mont Cameroun, désert du Sahara, trek des gorilles au Rwanda, cascades d'Ouganda, randonnées dans l'Atlas.",
    countries: "Tanzanie · Cameroun · Maroc · Rwanda · Ouganda",
  },
];

const highlights = [
  {
    text: "Circuits multi-pays : Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Bénin, Cameroun…",
    featured: true,
  },
  "Safaris (Kenya, Tanzanie, Ouganda, Afrique du Sud, Parc de Waza)",
  "Plages & farniente (Cap-Vert, Zanzibar, Kribi, Diani, Saly)",
  "Découvertes culturelles (médinas du Maroc, pyramides d'Égypte, île de Gorée, route des Chefferies)",
  "Vols internationaux et domestiques, transferts aéroport, véhicule avec chauffeur",
  "Hébergement sélectionné : hôtels, lodges, villas, riads, écolodges, bivouacs luxe",
  "Guides francophones et anglophones, accompagnateurs locaux",
  "Organisation d'événements (anniversaires, mariages, retours au pays, séminaires)",
  "Assurance voyage multirisque incluse sur tous nos circuits",
];

const steps = [
  {
    title: "Votre envie",
    desc: "On échange sur vos dates, vos envies, votre budget et le rythme souhaité. Premier appel gratuit et sans engagement.",
  },
  {
    title: "Itinéraire",
    desc: "Nous concevons un programme personnalisé : pays, étapes, hébergements, activités. Vous validez chaque détail.",
  },
  {
    title: "Logistique",
    desc: "Vols internes et internationaux, visas pays, hôtels, transferts, guides et activités : tout est réservé et confirmé.",
  },
  {
    title: "Avant le départ",
    desc: "Nous vous remettons un carnet de voyage complet : itinéraire jour par jour, conseils santé, formalités, contacts locaux.",
  },
  {
    title: "Sur place",
    desc: "Un référent local disponible 24h/24 et 7j/7 tout au long de votre séjour. Assistance téléphonique permanente.",
  },
  {
    title: "Après le voyage",
    desc: "Nous revenons vers vous pour recueillir vos impressions et améliorer continuellement nos circuits.",
  },
];

const included = [
  { icon: MapPin, t: "Circuits multi-pays", to: "/services/circuits-multi-pays" },
  { icon: Car, t: "Chauffeur & transferts", to: "/services/chauffeur-transferts" },
  { icon: Home, t: "Hébergement", to: "/services/logement" },
  { icon: Utensils, t: "Gastronomie locale", to: "/services/gastronomie-locale" },
  { icon: Camera, t: "Safaris & excursions", to: "/services/safaris-excursions" },
  { icon: Plane, t: "Vols & billets", to: "/services/billets-avion" },
  { icon: Tent, t: "Bivouacs & lodges", to: "/services/logement" },
  { icon: Palmtree, t: "Séjours balnéaires", to: "/services/court-sejours" },
];

const faqs = [
  {
    q: "Quels pays africains couvrez-vous ?",
    a: "Sénégal, Côte d'Ivoire, Cap-Vert, Kenya, Rwanda, Tanzanie, Égypte, Maroc, Ouganda, Afrique du Sud, Ghana, Bénin, Cameroun et plus encore. Les circuits multi-pays sont notre spécialité.",
  },
  {
    q: "Quel budget prévoir pour un circuit en Afrique ?",
    a: "Tout dépend du pays, du nombre de jours et du standing choisi. Comptez à partir de 1 200 € par personne pour un séjour d'une semaine au Sénégal ou au Maroc, et de 2 500 € pour un safari au Kenya ou en Tanzanie. Nous adaptons chaque proposition à votre budget.",
  },
  {
    q: "Quels pays recommandez-vous pour un premier voyage en Afrique ?",
    a: "Le Sénégal pour sa facilité d'accès et sa culture teranga, le Maroc pour sa proximité et sa diversité, ou le Cameroun pour une première expérience complète « Afrique en miniature ». L'Afrique du Sud est également très accessible pour les francophones.",
  },
  {
    q: "Proposez-vous des circuits combinant plusieurs pays ?",
    a: "Oui — Sénégal + Côte d'Ivoire, Kenya + Tanzanie, Maroc + Sénégal, Cameroun + Sénégal, Afrique du Sud + Namibie. Nous construisons le voyage selon vos envies et votre budget.",
  },
  {
    q: "Faut-il un visa pour chaque pays ?",
    a: "Cela dépend de votre nationalité. Beaucoup de pays proposent des e-visas ou un visa à l'arrivée pour les ressortissants africains et européens. Nous gérons toutes les démarches pour vous, y compris les lettres d'invitation.",
  },
  {
    q: "Quand partir pour un safari ?",
    a: "La saison sèche (juin–octobre) est idéale pour l'Afrique de l'Est : les animaux se rassemblent autour des points d'eau. Pour l'Afrique australe, préférez mai–septembre. Évitez la saison des pluies (mars–mai) pour une expérience optimale.",
  },
  {
    q: "Les vols sont-ils inclus dans vos circuits ?",
    a: "Nous incluons les vols internationaux et domestiques dans nos devis. Nous négocions des tarifs préférentiels grâce à nos partenariats avec les compagnies aériennes desservant l'Afrique.",
  },
  {
    q: "Organisez-vous des voyages de groupe ?",
    a: "Oui — familles nombreuses, amis, associations, entreprises, retours au pays en groupe diaspora. Nous proposons des tarifs dégressifs à partir de 6 personnes et un accompagnateur dédié.",
  },
  {
    q: "Quelles vaccinations sont nécessaires ?",
    a: "Fièvre jaune obligatoire pour la plupart des pays subsahariens (carnet de vaccination international exigé). Antipaludéen recommandé selon la zone visitée. Nous vous remettons un guide santé complet par destination avant le départ.",
  },
  {
    q: "Y a-t-il un risque sécuritaire ?",
    a: "Nous surveillons en temps réel les recommandations du ministère des Affaires étrangères. Nous ne programmons jamais de séjour dans une zone déconseillée. Tous nos partenaires locaux sont soigneusement sélectionnés et éprouvés.",
  },
  {
    q: "Puis-je personnaliser mon circuit ?",
    a: "Absolument. Chaque voyage est unique : vous choisissez vos étapes, votre rythme, votre type d'hébergement et vos activités. Nous ne faisons pas de voyage standardisé.",
  },
  {
    q: "Proposez-vous des circuits pour la diaspora ?",
    a: "Oui — retours au pays, visites familiales, cérémonies, reconnexion avec les racines. Nous organisons aussi les formalités pour les doubles nationaux.",
  },
];

const benefits = [
  {
    icon: Globe2,
    title: "Diversité infinie",
    desc: "Savane, désert, jungle, plages, métropoles : l'Afrique est un continent-monde à explorer sans limites. Nous couvrons plus de 15 destinations.",
  },
  {
    icon: Heart,
    title: "Authenticité",
    desc: "Rencontres, traditions, gastronomie, musique : une immersion culturelle unique à chaque voyage. Pas de tourisme de masse.",
  },
  {
    icon: Compass,
    title: "Clé en main",
    desc: "Vols, visas, hébergement, guides, activités, assurance : nous orchestrons tout de A à Z pour vous. Vous n'avez qu'à profiter.",
  },
  {
    icon: Sun,
    title: "Assistance 24h/24",
    desc: "Un référent local disponible 7j/7 et une hotline d'urgence pendant tout votre séjour. Voyagez serein.",
  },
];

function VisitAfricaPage() {
  return (
    <div>
      <ServiceHero
        eyebrow="Visit Africa"
        title="L'Afrique, à votre rythme."
        intro="Safari au Kenya, plages du Cap-Vert, médinas du Maroc, gorilles du Rwanda, pyramides d'Égypte, savanes de Tanzanie, retour aux sources au Cameroun, teranga au Sénégal : nous organisons votre séjour de A à Z, avec le confort d'un voyage premium et l'âme d'une expérience authentique."
        image={image}
        imageAlt="Paysage africain — plage, savane et métropoles"
        serviceSlug="visite-afrique"
      />

      {/* Benefits */}
      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-3xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white">
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Travel styles */}
      <Reveal>
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
              Façon de voyager
            </p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Quel voyageur êtes-vous ?</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Safari, plage, culture ou trek : chaque style de voyage a sa saison et ses
              destinations de prédilection. Trouvez le vôtre.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {travelStyles.map((s) => (
                <div key={s.title} className="rounded-3xl border border-border bg-white p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <p className="mt-4 text-xs text-brand-red font-medium">{s.countries}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Featured countries */}
      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
            Focus pays
          </p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
            Trois incontournables, en détail.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Nous vous accompagnons sur tout le continent. Voici un aperçu de trois destinations
            phares — notre équipe connaît chaque destination sur le bout des doigts.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredCountries.map((c) => (
              <article key={c.name} className="rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center gap-4">
                  <span className="text-5xl leading-none flex items-center"><Flag flag={c.flag} /></span>
                  <div>
                    <h3 className="text-2xl font-semibold">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">{c.capital}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-navy px-3 py-1 text-xs font-medium text-white">
                    {c.vibe}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                    {c.ideal}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                    {c.duration}
                  </span>
                </div>

                <p className="mt-4 text-xs font-medium text-brand-red uppercase tracking-wider">
                  Meilleure saison : {c.bestSeason}
                </p>

                <ul className="mt-4 space-y-3">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="mt-0.5 shrink-0 inline-flex"><Flag flag={c.flag} /></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Other countries */}
      <Reveal>
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
              Et aussi…
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Vous voyagez partout en Afrique
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Ce ne sont pas les seules. Nous organisons votre séjour dans tout le continent —
              savane, villes, littoral, désert, jungle. Chaque destination a ses trésors.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {otherCountries.map((c) => (
                <div
                  key={c.name}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
                >
                  <span className="text-4xl leading-none flex items-center justify-center"><Flag flag={c.flag} /></span>
                  <span className="text-sm font-semibold">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Seasonal guide */}
      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
            Calendrier
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Quand partir selon vos envies</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            L'Afrique est vaste et chaque région a ses saisons idéales. Voici un guide pour vous
            aider à choisir le meilleur moment pour votre voyage.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                period: "Novembre – Février",
                regions: "Afrique de l'Ouest",
                desc: "Saison sèche, idéale pour le Sénégal, le Cameroun, la Côte d'Ivoire, le Ghana et le Bénin. Températures agréables, peu de pluie.",
                goodFor: "Plages, culture, découvertes urbaines, festivals",
              },
              {
                period: "Juin – Octobre",
                regions: "Afrique de l'Est & Australe",
                desc: "Meilleure période pour les safaris au Kenya, Tanzanie, Ouganda, Afrique du Sud et Rwanda. Les animaux se concentrent autour des points d'eau.",
                goodFor: "Safari, gorilles, Big Five, photographes animaliers",
              },
              {
                period: "Mars – Mai / Sept – Nov",
                regions: "Maroc & Afrique du Nord",
                desc: "Printemps et automne : températures douces, idéal pour les médinas, le désert du Sahara et les montagnes de l'Atlas.",
                goodFor: "Culture, désert, randonnée, gastronomie",
              },
            ].map((season) => (
              <div key={season.period} className="rounded-3xl border border-border bg-card p-8">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <Sun className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{season.period}</h3>
                <p className="mt-2 text-sm font-medium text-brand-red">{season.regions}</p>
                <p className="mt-2 text-sm text-muted-foreground">{season.desc}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Idéal pour :</span>{" "}
                  {season.goodFor}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <ServiceHighlights highlights={highlights} />
      <ServiceProcess steps={steps} />
      <ServiceIncluded included={included} />
      <ServiceFaq faqs={faqs} />
      <ServiceCta serviceSlug="visite-afrique" />
    </div>
  );
}
