"use client";

import { useEffect, useRef, useState } from "react";

interface InsightFooterProps {
  readonly label: string;
  /** Called with whether the reader reached the end of the explanation before moving on. */
  readonly onNext: (reachedEnd: boolean) => void;
}

/**
 * Sits at the end of the "Window into the time" card. The button is quiet until the reader
 * has scrolled to the end of the explanation, so the learning comes first. It always works:
 * nobody is blocked from moving on.
 */
export function InsightFooter({ label, onNext }: InsightFooterProps) {
  const sentinel = useRef<HTMLDivElement>(null);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    const node = sentinel.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setReachedEnd(true);
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 pb-6 pt-2">
      <div ref={sentinel} aria-hidden className="h-px w-full" />
      <button
        type="button"
        onClick={() => onNext(reachedEnd)}
        className={`focus-ring w-full max-w-sm text-lg transition-all duration-500 ${
          reachedEnd ? "btn-gold" : "btn-ghost opacity-70"
        }`}
      >
        {label}
      </button>
    </div>
  );
}
