import { createFileRoute, Link } from "@tanstack/react-router";
import { Megaphone, Search, Globe2, PenTool, BarChart3, ArrowRight, Check } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import image from "@/assets/service-community.jpg";

export const Route = createFileRoute("/services/community-management")({
  head: () => ({
    meta: [
      { title: "Community Management & Marketing Digital — VoyageonsEnsemble" },
      {
        name: "description",
        content:
          "Gestion de réseaux sociaux, SEO, sites web et identité visuelle : votre communauté, votre image, votre impact.",
      },
      {
        property: "og:title",
        content: "Community Management & Marketing Digital — VoyageonsEnsemble",
      },
      { property: "og:description", content: "Votre communauté, votre image, votre impact." },
      { property: "og:image", content: image },
    ],
  }),
  component: CommunityManagementPage,
});

const packs = [
  {
    name: "Pack Essentiel",
    items: [
      "Gestion de 2 réseaux sociaux",
      "Création de 5 visuels par mois",
      "Rapport de performance mensuel",
    ],
  },
  {
    name: "Pack Avancé",
    items: [
      "Gestion de 3 réseaux sociaux",
      "Création de 10 visuels par mois",
      "Optimisation SEO de votre site web",
      "Rapport de performance détaillé",
    ],
    featured: true,
  },
  {
    name: "Pack Premium",
    items: [
      "Gestion complète de vos réseaux sociaux",
      "Création de 20 visuels par mois",
      "SEO avancé et publicité en ligne",
      "Création d'un site web personnalisé",
      "Suivi et optimisation des performances",
    ],
  },
];

function CommunityManagementPage() {
  return (
    <>
      <ServiceDetail
        eyebrow="Community Management & Marketing Digital"
        title="Votre communauté, votre image, votre impact."
        intro="87 % des consommateurs consultent les réseaux sociaux avant d'acheter, un bon référencement triple vos conversions et une identité visuelle forte augmente votre notoriété de 80 %. Nous vous accompagnons à chaque étape pour bâtir une marque mémorable et engagée."
        image={image}
        imageAlt="Équipe marketing travaillant sur les réseaux sociaux et l'identité de marque"
        highlights={[
          "Gestion quotidienne de Facebook, Instagram, LinkedIn, TikTok et Twitter",
          "Calendriers éditoriaux et rédaction de messages engageants",
          "Modération et interaction active avec votre communauté",
          "Référencement SEO et campagnes publicitaires (Google Ads, Meta Ads)",
          "Création de sites web sur mesure, responsive et orientés conversion",
          "Identité visuelle : logo, charte graphique, visuels réseaux sociaux",
        ]}
        steps={[
          {
            title: "Audit & stratégie",
            desc: "Analyse de votre marque, de vos cibles et de vos concurrents.",
          },
          {
            title: "Production",
            desc: "Calendrier éditorial, visuels et contenus prêts à publier.",
          },
          {
            title: "Diffusion & ads",
            desc: "Publication, modération et campagnes publicitaires ciblées.",
          },
          {
            title: "Mesure",
            desc: "Rapports mensuels, ajustements et recommandations d'amélioration.",
          },
        ]}
        included={[
          { icon: Megaphone, t: "Réseaux sociaux", to: "/services/reseaux-sociaux" },
          { icon: Search, t: "SEO & Ads", to: "/services/seo-ads" },
          { icon: Globe2, t: "Sites web", to: "/services/creation-sites-web" },
          { icon: PenTool, t: "Identité visuelle", to: "/services/identite-visuelle" },
          { icon: BarChart3, t: "Reporting", to: "/services/reporting-performance" },
        ]}
        faqs={[
          {
            q: "Sur quels réseaux intervenez-vous ?",
            a: "Facebook, Instagram, LinkedIn, TikTok, Twitter/X et YouTube selon votre audience cible.",
          },
          {
            q: "Combien de temps avant de voir des résultats SEO ?",
            a: "Les premiers gains apparaissent en 6 à 12 semaines, avec une montée en puissance continue sur 3 à 6 mois.",
          },
          {
            q: "Pouvez-vous reprendre une stratégie existante ?",
            a: "Oui, nous démarrons par un audit et adaptons notre intervention à l'existant pour préserver vos acquis.",
          },
          {
            q: "Travaillez-vous avec des marques hors mobilité ?",
            a: "Absolument — restaurants, e-commerce, services B2B, associations : notre équipe digitale est multi-secteurs.",
          },
        ]}
        serviceSlug="community-management"
      />

      {/* PACKS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p
          className="text-sm font-medium uppercase tracking-[0.2em]"
          style={{ color: "var(--brand-red)" }}
        >
          Packs & tarifs
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Nos offres de Community Management & Digital Branding
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Trois formules pensées pour accompagner votre marque, du démarrage à la stratégie premium.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packs.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-3xl border bg-card p-8"
              style={
                p.featured
                  ? {
                      borderColor: "var(--brand-red)",
                      boxShadow: "0 10px 30px -15px rgba(229,49,69,0.35)",
                    }
                  : undefined
              }
            >
              {p.featured && (
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--brand-red)" }}
                >
                  Le plus choisi
                </p>
              )}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <ul className="mt-6 space-y-3 text-sm">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground/85">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: "var(--brand-red)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: p.featured ? "var(--brand-red)" : "var(--brand-navy)" }}
              >
                Choisir ce pack <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
