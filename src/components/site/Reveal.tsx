import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  as?: "div" | "section";
}

export function Reveal({ children, className, stagger, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {stagger
        ? (Array.isArray(children) ? children : [children]).map((child, i) => (
            <div
              key={i}
              className="transition-all duration-700 ease-out"
              style={{
                transform: inView ? "translateY(0)" : "translateY(20px)",
                opacity: inView ? 1 : 0,
                transitionDelay: `${delay + i * 100}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </Tag>
  );
}
