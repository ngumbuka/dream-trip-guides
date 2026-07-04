import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-traveler.jpg";
import hero2 from "@/assets/dest-france.jpg";
import hero3 from "@/assets/dest-cameroun.jpg";
import hero4 from "@/assets/dest-canada.jpg";

const slides = [
  { src: hero1, alt: "Voyageuse à l'aéroport" },
  { src: hero2, alt: "Ville de France" },
  { src: hero3, alt: "Paysage africain" },
  { src: hero4, alt: "Paysage canadien" },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{
            opacity: i === active ? 1 : 0,
            transform: i === active ? "scale(1)" : "scale(1.05)",
            transition: "opacity 1.5s ease-in-out, transform 8s ease-out",
          }}
          width={1920}
          height={1080}
        />
      ))}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
