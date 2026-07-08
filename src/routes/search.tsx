import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { destinationList } from "@/lib/destinations";
import { searchAll, suggestionsForType, searchIndex } from "@/lib/search-index";
import { Flag } from "@/components/ui/Flag";

const schema = z.object({
  q: fallback(z.string(), "").default(""),
  type: fallback(z.enum(["Long séjour", "Court séjour", "Visit Africa", "Formations linguistiques"]), "Long séjour").default(
    "Long séjour",
  ),
});

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(schema),
  head: () => ({
    meta: [
      { title: "Recherche — VoyageonsEnsemble" },
      { name: "description", content: "Trouvez votre destination et nos services dédiés." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q, type } = Route.useSearch();
  const results = q ? searchAll(q, 12) : [];
  const typeSuggestions = suggestionsForType(type);
  const matchedDestination = destinationList.find(
    (d) =>
      q && (d.name.toLowerCase().includes(q.toLowerCase()) || d.slug.includes(q.toLowerCase())),
  );
  const fallbackResults = !q ? searchIndex : [];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">Résultats</p>
      <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
        {q ? <>Pour « {q} »</> : "Explorez nos destinations & services"}
      </h1>
      <p className="mt-3 text-muted-foreground">
        Type de séjour : <span className="font-semibold text-foreground">{type}</span>
      </p>

      {matchedDestination && (
        <section className="mt-10 overflow-hidden rounded-3xl border border-border">
          <div className="grid md:grid-cols-2">
            <img
              src={matchedDestination.image}
              alt={matchedDestination.name}
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="p-8">
              <p className="text-sm font-semibold text-brand-red">Destination</p>
              <h2 className="mt-2 text-3xl font-semibold flex items-center gap-2">
                <Flag flag={matchedDestination.flag} /> {matchedDestination.name}
              </h2>
              <p className="mt-3 text-muted-foreground">{matchedDestination.tagline}</p>
              <Link
                to="/destinations/$country"
                params={{ country: matchedDestination.slug }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
              >
                Voir la fiche pays <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {(results.length > 0 || fallbackResults.length > 0) && (
        <section className="mt-12">
          <h3 className="text-2xl font-semibold">{q ? "Tous les résultats" : "Tout parcourir"}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(results.length ? results : fallbackResults).map((r) => (
              <Link
                key={r.to + (r.params?.country ?? "")}
                to={r.to}
                params={r.params}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white">
                  {r.kind === "destination" ? (
                    <MapPin className="h-5 w-5" />
                  ) : (
                    <Sparkles className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {r.kind === "destination" ? "Destination" : "Service"}
                  </p>
                  <h4 className="text-lg font-semibold">{r.title}</h4>
                  <p className="text-sm text-muted-foreground">{r.subtitle}</p>
                </div>
                <ArrowRight className="mt-2 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {q && results.length === 0 && !matchedDestination && (
        <p className="mt-10 rounded-2xl border border-border bg-muted/30 p-6 text-muted-foreground">
          Aucun résultat pour « {q} ». Essayez « France », « Cameroun », « logement » ou « visa ».
        </p>
      )}

      <section className="mt-16">
        <h3 className="text-2xl font-semibold">Recommandé pour « {type} »</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {typeSuggestions.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
            >
              <h4 className="text-lg font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{s.subtitle}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
                Découvrir{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-16 rounded-3xl bg-brand-cream p-8 md:p-12">
        <h3 className="text-2xl font-semibold md:text-3xl">
          Besoin d'une proposition personnalisée ?
        </h3>
        <p className="mt-3 text-muted-foreground">
          Notre équipe revient vers vous sous 24h avec un plan sur-mesure.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
        >
          Recevoir une proposition <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
