import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Grâce à VoyageonsEnsemble, j'ai trouvé un logement et j'ai été accueilli dès mon arrivée. Ils ont rendu mon intégration au Canada beaucoup plus facile.",
    name: "Sarah",
    role: "Étudiante en Master, Canada",
  },
  {
    quote:
      "Les démarches d'admission en France semblaient complexes, mais l'équipe m'a aidé à chaque étape. Merci pour votre soutien !",
    name: "Karim",
    role: "Étudiant, France",
  },
  {
    quote:
      "Un accompagnement humain et professionnel. Je recommande à tout étudiant qui veut éviter le stress des démarches.",
    name: "Aïcha",
    role: "Étudiante, Allemagne",
  },
];

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    duration: 25,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4 first:pl-0"
            >
              <figure className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur h-full">
                <blockquote
                  className="text-lg leading-relaxed text-white/90"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-white/60">{t.role}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Précédent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
              aria-label={`Aller au témoignage ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
