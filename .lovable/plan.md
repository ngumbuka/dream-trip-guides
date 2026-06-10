## What I'll build

Five new service detail pages, one for each card on `/services`, populated with the wording from the uploaded documents and wired through the shared `ServiceDetail` component.

```text
src/routes/services.logement.tsx              → /services/logement
src/routes/services.caution-avi.tsx           → /services/caution-avi
src/routes/services.billets-avion.tsx         → /services/billets-avion
src/routes/services.accueil-integration.tsx   → /services/accueil-integration
src/routes/services.community-management.tsx  → /services/community-management
```

Each page reuses the existing `ServiceDetail` layout (hero, highlights, 4‑step method, "Inclus" tiles, FAQ, CTA) and per‑page `head()` metadata (title, description, og:title, og:description, og:image). Hero images already generated in `src/assets/service-*.jpg`.

## Content per page (from the docx)

- **Logement** — "Trouvez un logement confortable et sécurisé". Highlights: évaluation des préférences, logements sécurisés, gestion administrative du bail, service de relocalisation.
- **Caution bancaire & AVI** — "Respectez les exigences financières". Highlights: compte de garantie via banques partenaires, assurance visa international, conformité Canada / France / Belgique / Allemagne.
- **Billets d'avion** — "Bénéficiez de tarifs avantageux". Highlights: tarifs compétitifs, options flexibles, conseils sur bagages et formalités.
- **Accueil & intégration** — "Une arrivée en douceur". Highlights: accueil aéroport, programme d'intégration, ouverture de compte / sécurité sociale / transport, soutien continu.
- **Community management** — "Votre communauté, votre image, votre impact". Highlights: gestion réseaux sociaux, SEO + ads, création de sites, identité visuelle. Extra block under FAQs listing the three packs **Essentiel / Avancé / Premium** from the docx.

FAQ entries reuse the relevant items from the docx contact FAQ (délais admission, coût de la vie, documents visa, etc.) and add 1–2 page‑specific ones each.

## Wiring

Update `src/routes/services.index.tsx`:
- Make the 5 "Inclus dans nos accompagnements" tiles clickable `<Link>`s to the new routes.
- Add the corresponding `Link` imports.

No other file changes. Routes auto‑register through TanStack's file‑based router.

## Out of scope

- No new database tables, server functions, auth changes, or images beyond the 5 already generated.
- No changes to the three main service pages (`long-sejours`, `court-sejours`, `visite-cameroun`).
