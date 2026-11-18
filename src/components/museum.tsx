"use client";

import type { Artifact } from "@/content/artifacts";
import { useProgress } from "@/lib/progress-store";

interface MuseumProps {
  readonly artifacts: readonly Artifact[];
  readonly eraNames: Readonly<Record<string, string>>;
}

export function Museum({ artifacts, eraNames }: MuseumProps) {
  const progress = useProgress();
  const owned = new Set(progress.artifacts);

  return (
    <>
      <p className="text-center font-display text-lg font-extrabold tabular-nums text-gold">
        {owned.size} / {artifacts.length} unearthed
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {artifacts.map((a) => {
          const has = owned.has(a.id);
          return (
            <li key={a.id} className={`panel p-5 ${has ? "glow-gold" : ""}`}>
              <div className="flex items-start gap-4">
                <span className={`text-5xl ${has ? "" : "opacity-30 grayscale"}`} aria-hidden>
                  {has ? a.emoji : "❔"}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan/80">
                    {eraNames[a.era]} · Level {a.level}
                  </p>
                  <h2 className="font-display text-lg font-extrabold">{has ? a.name : "Still buried"}</h2>
                  <p className="mt-1 text-sm text-white/70">
                    {has ? a.blurb : `Earn at least one star on level ${a.level} to unearth it.`}
                  </p>
                  {has && a.reference && <p className="mt-2 text-xs font-semibold text-white/50">{a.reference}</p>}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
