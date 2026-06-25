import { Link } from "@tanstack/react-router";
import { ArrowRight, Rocket } from "lucide-react";

import imgFrance from "@/assets/dest-france.jpg";
import imgCanada from "@/assets/dest-canada.jpg";
import imgGermany from "@/assets/dest-germany.jpg";
import imgBelgium from "@/assets/dest-belgium.jpg";
import imgCameroun from "@/assets/dest-cameroun.jpg";

export const destinations = [
  { name: "France", slug: "france", img: imgFrance, type: "Études · Long séjour" },
  { name: "Canada", slug: "canada", img: imgCanada, type: "Études · Résidence" },
  { name: "Allemagne", slug: "allemagne", img: imgGermany, type: "Études · Travail" },
  { name: "Belgique", slug: "belgique", img: imgBelgium, type: "Études · Court séjour" },
  { name: "Africa", slug: "cameroun", img: imgCameroun, type: "Visite · Tourisme" },
];

export function DestinationsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--brand-cream)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: "var(--brand-red)" }}
            >
              Destinations
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">
              Plusieurs destinations, mille opportunités.
            </h2>
          </div>
          <Link
            to="/new-request"
            search={{ service: undefined }}
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--brand-red)" }}
          >
            <Rocket className="h-4 w-4" /> Choisir ma destination
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {destinations.map((d) => (
            <Link
              key={d.name}
              to="/destinations/$country"
              params={{ country: d.slug }}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <img
                src={d.img}
                alt={d.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {d.name}
                </h3>
                <p className="text-xs text-white/80">{d.type}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/new-request"
            search={{ service: undefined }}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--brand-red)" }}
          >
            <Rocket className="h-4 w-4" /> Choisir ma destination et démarrer{" "}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
