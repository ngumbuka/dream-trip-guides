import React from "react";
import { cn } from "@/lib/utils";

interface FlagProps {
  flag: string;
  className?: string;
}

export function Flag({ flag, className }: FlagProps) {
  const codePoints = Array.from(flag).map((char) => char.codePointAt(0)!);
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < codePoints.length) {
    const cp = codePoints[i];

    // Check if it is a regional indicator symbol (U+1F1E6 to U+1F1FF)
    if (cp >= 0x1F1E6 && cp <= 0x1F1FF && i + 1 < codePoints.length) {
      const nextCp = codePoints[i + 1];
      if (nextCp >= 0x1F1E6 && nextCp <= 0x1F1FF) {
        const char1 = String.fromCharCode(cp - 0x1F1E6 + 65);
        const char2 = String.fromCharCode(nextCp - 0x1F1E6 + 65);
        const countryCode = (char1 + char2).toLowerCase();

        elements.push(
          <img
            key={i}
            src={`https://flagcdn.com/w40/${countryCode}.png`}
            srcSet={`https://flagcdn.com/w80/${countryCode}.png 2x`}
            alt={countryCode.toUpperCase()}
            className={cn("inline-block h-[1em] w-auto align-middle shadow-[0_1px_2px_rgba(0,0,0,0.15)] rounded-xs border border-black/5", className)}
            loading="lazy"
          />
        );
        i += 2;
        continue;
      }
    }

    // Fallback: render the original character
    elements.push(<span key={i}>{String.fromCodePoint(cp)}</span>);
    i++;
  }

  return <>{elements}</>;
}
