import { Link } from "@tanstack/react-router";
import { ArrowRight, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { LazyImage } from "@/components/ui/LazyImage";

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
  {
    name: "Africa",
    slug: "cameroun",
    img: imgCameroun,
    type: "Visite · Tourisme",
    to: "/services/visite-afrique" as const,
    params: {},
  },
];

export function DestinationsSection() {
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => (s === 0 ? destinations.length - 1 : s - 1));
  const next = () => setSlide((s) => (s === destinations.length - 1 ? 0 : s + 1));

  return (
    <Reveal>
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
                Destinations
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold md:text-5xl">
                Plusieurs destinations, mille opportunités.
              </h2>
            </div>
            <Link
              to="/new-request"
              search={{ service: undefined }}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Rocket className="h-4 w-4" /> Choisir ma destination
            </Link>
          </div>

          {/* Desktop grid */}
          <div className="mt-10 hidden md:grid md:grid-cols-5 gap-4">
            {destinations.map((d, i) => {
              const img = (
                <>
                  <LazyImage
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                </>
              );
              return d.to ? (
                <Link
                  key={d.name}
                  to={d.to}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {img}
                </Link>
              ) : (
                <Link
                  key={d.name}
                  to="/destinations/$country"
                  params={{ country: d.slug }}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {img}
                </Link>
              );
            })}
          </div>

          {/* Mobile carousel */}
          <div className="mt-10 md:hidden">
            <div className="relative">
              {(() => {
                const d = destinations[slide];
                const card = (
                  <>
                    <LazyImage
                      src={d.img}
                      alt={d.name}
                      className="h-full w-full object-cover transition-transform duration-700"
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
                  </>
                );
                return d.to ? (
                  <Link
                    to={d.to}
                    className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm"
                  >
                    {card}
                  </Link>
                ) : (
                  <Link
                    to="/destinations/$country"
                    params={{ country: d.slug }}
                    className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm"
                  >
                    {card}
                  </Link>
                );
              })()}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm"
                aria-label="Destination précédente"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm"
                aria-label="Destination suivante"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {destinations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === slide ? "w-6 bg-brand-red" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Aller à la destination ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/new-request"
              search={{ service: undefined }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
            >
              <Rocket className="h-4 w-4" /> Choisir ma destination et démarrer{" "}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
