import { useState, useRef, useEffect } from "react";

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export function EditableImage({
  src,
  alt,
  className = "",
  width,
  height,
  aspectRatio,
}: EditableImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (currentSrc !== src) {
      setIsLoaded(false);
      setIsError(false);
      setCurrentSrc(src);
    }
  }, [src, currentSrc]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.src !== currentSrc) {
              img.src = currentSrc;
            }
            if (!isLoaded) {
              observer.disconnect();
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [currentSrc, isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span>Image non disponible</span>
        </div>
      )}

      <img
        ref={imgRef}
        src={isLoaded ? currentSrc : ""}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-brand-red" />
        </div>
      )}
    </div>
  );
}
