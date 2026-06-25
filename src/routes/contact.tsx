import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VoyageonsEnsemble" },
      {
        name: "description",
        content: "Contactez-nous pour démarrer votre projet de mobilité internationale.",
      },
      { property: "og:title", content: "Contact — VoyageonsEnsemble" },
      { property: "og:description", content: "Discutons de votre projet. Réponse sous 24h." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="border-b border-border" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--brand-red)" }}
          >
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Parlons de votre projet.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Que votre projet soit clair ou encore en réflexion, nous sommes là pour en discuter.
            Réponse sous 24h.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-6">
          {[
            { icon: Mail, label: "E-mail", value: "contact@voyageonsensemble.com" },
            { icon: Phone, label: "Téléphone", value: "+33 7 00 00 00 00" },
            { icon: MapPin, label: "Bureaux", value: "Paris, France · Douala, Cameroun" },
          ].map((i) => (
            <div
              key={i.label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
              >
                <i.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</p>
                <p className="mt-1 font-medium">{i.value}</p>
              </div>
            </div>
          ))}
        </aside>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-card p-8 md:p-10"
        >
          {sent ? (
            <div className="py-16 text-center">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--brand-red)", color: "white" }}
              >
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Message envoyé !</h3>
              <p className="mt-2 text-muted-foreground">Nous revenons vers vous sous 24h.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">Envoyez-nous un message</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Nom complet" name="name" required />
                <Field label="E-mail" type="email" name="email" required />
                <Field label="Téléphone" name="phone" />
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Type de projet
                  </label>
                  <select className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground">
                    <option>Long séjour</option>
                    <option>Court séjour</option>
                    <option>Visite Cameroun</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Votre message
                </label>
                <textarea
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
                  placeholder="Parlez-nous de votre projet…"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--brand-red)" }}
              >
                Envoyer <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
      />
    </div>
  );
}
