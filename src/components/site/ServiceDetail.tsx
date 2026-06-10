import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetailProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  steps: ServiceStep[];
  included: { icon: LucideIcon; t: string }[];
  faqs: ServiceFaq[];
  ctaLabel?: string;
}

export function ServiceDetail(props: ServiceDetailProps) {
  const {
    eyebrow, title, intro, image, imageAlt,
    highlights, steps, included, faqs,
    ctaLabel = "Demander une proposition",
  } = props;

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-white">
          <Link to="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Tous les services
          </Link>
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "#ffb3bd" }}>{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Voir les autres services
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Ce que comprend cet accompagnement</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--brand-red)" }} />
              <span className="text-foreground/85">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESS */}
      <section className="py-20" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--brand-red)" }}>Notre méthode</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Comment ça se passe ?</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-border bg-white p-6">
                <div className="text-sm font-semibold" style={{ color: "var(--brand-red)" }}>Étape {i + 1}</div>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20" style={{ backgroundColor: "var(--brand-navy)", color: "white" }}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Inclus dans cette offre</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {included.map((e) => (
              <div key={e.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <e.icon className="mx-auto h-7 w-7" style={{ color: "#ffb3bd" }} />
                <p className="mt-3 text-sm">{e.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Questions fréquentes</h2>
        <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {f.q}
                <span className="text-2xl text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl p-10 text-center md:p-16" style={{ backgroundColor: "var(--brand-cream)" }}>
          <h2 className="text-3xl font-semibold md:text-4xl">Prêt·e à passer à l'action ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Parlons de votre projet — notre équipe vous répond sous 24h.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "var(--brand-red)" }}>
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}