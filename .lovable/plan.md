## Goal
Introduce language training (TOEIC, TCF, Allemand/Goethe) as a new service line of VoyageonsEnsemble — presented as a dedicated training program/center, complementing the travel & immigration offering.

## New routes

1. `src/routes/services.formations.tsx` — Hub page "Formations linguistiques"
   - Intro from the doc (constat: la langue, premier obstacle…)
   - "Pourquoi nos apprenants nous choisissent" (6 bullets)
   - 3 program cards (Allemand/Goethe, TOEIC, TCF) → link to sub-pages
   - CTAs: "Choisir ma formation" → `/contact`, "Réserver un bilan gratuit" → `/contact`

2. `src/routes/services.formations.allemand.tsx` — Cours d'Allemand (Goethe / TestDaF)
   - Tagline, intro Allemagne/DAAD/B2 requirement
   - CECRL progression table (A1 → B2)
   - 4 compétences travaillées
   - Format & organisation (groupes 8–12, présentiel/en ligne…)
   - Préparation Goethe-Zertifikat / TestDaF
   - CTA: "M'inscrire" + "Bilan gratuit 30 min"

3. `src/routes/services.formations.toeic.tsx` — Préparation TOEIC
   - Tagline, value prop (CV, recrutement intl.)
   - Tableau structure de l'examen (Listening / Reading)
   - Méthode en 4 piliers + axes de travail
   - Public cible, score visé 750+
   - CTA: inscription + bilan

4. `src/routes/services.formations.tcf.tsx` — Préparation TCF
   - Tagline France/Canada/Belgique
   - Tableau TCF Tout Public vs TCF DAP
   - 5 compétences évaluées (CO, structures, CE, EE, EO)
   - Méthode (bilan, plan perso, examens blancs, suivi)
   - Niveaux visés B2/C1
   - CTA: bilan gratuit + inscription

These reuse the visual language of existing service detail pages (eyebrow, hero, structured sections, bullet check-lists, CTA band) but use a lightweight inline layout rather than the `ServiceDetail` component, because the language pages have tables and content sections that don't fit that component's shape.

## Updates to existing files

- **`src/components/site/Header.tsx`**: add "Formations" to `serviceItems` (between Longs séjours and Courts séjours, or after) and as its own top-level submenu entry. Mobile menu list updated identically. Optional: small sub-dropdown for the 3 formations — to keep nav simple, link the parent to `/services/formations` and let users branch from there.

- **`src/routes/services.index.tsx`**:
  - Add a 4th offer card "Formations linguistiques" (icon: `Languages` from lucide) with bullets: Allemand (Goethe), TOEIC, TCF, bilan gratuit, groupes réduits. Switch grid from `md:grid-cols-3` → `md:grid-cols-2 lg:grid-cols-4` so it scales.
  - Add a corresponding entry in the dark "Inclus dans nos accompagnements" extras grid (or leave as offer-only since it's a major line, not an add-on).

- **`src/routes/index.tsx`** (homepage): in the existing services preview block, add the Formations card alongside the 3 séjour types, with a short copy ("TOEIC, TCF, Allemand — préparez la certification qui débloque votre projet").

## Technical notes

- All new routes follow `createFileRoute("/services/formations[...]")` with `head()` setting unique title/description/og:title/og:description (no `og:image` until we generate one).
- Use design tokens (`var(--brand-red)`, `var(--brand-navy)`, `var(--brand-cream)`) — no hardcoded colors.
- Tables rendered with Tailwind (`table-auto`, `border-border`, alternating rows).
- All CTAs route to `/contact` (existing contact form) — no new backend, no new DB tables. The doc's "Réserver un bilan gratuit" and "M'inscrire" both funnel to the contact page with the relevant service preselected via a query param if the contact page supports it (otherwise just a plain link).
- No images requested in this round; can be added later.

## Out of scope
- Online booking / payment for courses
- Student dashboard for enrolled learners
- CMS/admin for course schedules
