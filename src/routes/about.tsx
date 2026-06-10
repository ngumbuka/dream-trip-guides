import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Heart, Target, MapPin, ArrowRight, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — VoyageonsEnsemble" },
      { name: "description", content: "Notre histoire, notre vision, notre mission et nos fondateurs." },
      { property: "og:title", content: "À propos — VoyageonsEnsemble" },
      { property: "og:description", content: "Quand l'expérience personnelle inspire l'accompagnement." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="border-b border-border" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--brand-red)" }}>À propos</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Quand l'expérience personnelle <br className="hidden md:inline" /> inspire l'accompagnement.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            VoyageonsEnsemble est née de l'histoire de deux jeunes ambitieux qui, après avoir affronté les défis
            de l'intégration en France, ont décidé d'aider les autres à surmonter ces mêmes obstacles.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {[
          { icon: Compass, title: "Vision", text: "Devenir le partenaire de référence de la mobilité internationale pour les étudiants et professionnels francophones." },
          { icon: Target, title: "Mission", text: "Simplifier les démarches, ouvrir des opportunités et offrir une tranquillité d'esprit inégalée à chaque voyageur." },
          { icon: Heart, title: "Valeurs", text: "Bienveillance, transparence, exigence et proximité — à chaque étape du parcours." },
        ].map((b) => (
          <div key={b.title} className="rounded-3xl border border-border bg-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: "var(--brand-navy)", color: "white" }}>
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{b.title}</h3>
            <p className="mt-3 text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </section>

      {/* FOUNDERS */}
      <section className="py-24" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--brand-red)" }}>Fondateurs</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Les visages derrière VoyageonsEnsemble.</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-10 shadow-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-semibold text-white" style={{ backgroundColor: "var(--brand-navy)" }}>JJ</div>
              <h3 className="mt-6 text-2xl font-semibold">Jacques Junior</h3>
              <p className="text-sm font-medium" style={{ color: "var(--brand-red)" }}>Co-fondateur — Finance & intégration étudiante</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Titulaire d'un master en Comptabilité et Finance, Jacques s'est spécialisé en France en finance d'entreprise
                et banque d'investissement. Confronté aux défis administratifs et culturels à son arrivée, il a aidé
                gratuitement de nombreux étudiants à trouver logement et orientation — découvrant ainsi une véritable vocation.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-10 shadow-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>B</div>
              <h3 className="mt-6 text-2xl font-semibold">Benito</h3>
              <p className="text-sm font-medium" style={{ color: "var(--brand-red)" }}>Co-fondateur — Entrepreneuriat & accompagnement</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Entrepreneur passionné, Benito a exploré plusieurs secteurs avant de se former en marketing international en France.
                Son goût pour le relationnel et le service client l'a naturellement conduit à co-fonder une structure d'accompagnement
                bienveillante pour les nouveaux arrivants.
              </p>
            </article>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-white p-10">
            <h3 className="text-2xl font-semibold">Aujourd'hui</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              VoyageonsEnsemble est une entreprise reconnue, animée par une équipe de plus de trente collaborateurs.
              Des experts en orientation académique, recherche de logement et gestion administrative travaillent chaque jour
              avec passion pour rendre chaque parcours plus serein. Chaque étape compte — nous sommes là pour vous guider.
            </p>
          </div>
        </div>
      </section>

      {/* HQ */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--brand-red)" }}>Nos bureaux</p>
        <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Sièges & contacts.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { city: "Paris (Siège)", addr: "France · Europe", phone: "+33 7 00 00 00 00", email: "paris@voyageonsensemble.com" },
            { city: "Douala", addr: "Cameroun · Afrique", phone: "+237 6 00 00 00 00", email: "douala@voyageonsensemble.com" },
          ].map((o) => (
            <div key={o.city} className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" style={{ color: "var(--brand-red)" }} />
                <h3 className="text-2xl font-semibold">{o.city}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">{o.addr}</p>
              <div className="mt-6 space-y-1 text-sm">
                <div><span className="text-muted-foreground">Tél : </span>{o.phone}</div>
                <div><span className="text-muted-foreground">E-mail : </span>{o.email}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl p-10 text-center md:p-16" style={{ backgroundColor: "var(--brand-cream)" }}>
          <h2 className="text-3xl font-semibold md:text-4xl">Vous aussi, commencez votre voyage.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Notre équipe est prête à vous accompagner, de la première question à l'arrivée sur place.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/_authenticated/new-request" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              <Rocket className="h-4 w-4" /> Démarrer mon projet <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}