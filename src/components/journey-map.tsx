"use client";

import Link from "next/link";
import type { Era } from "@/content/eras";
import { isLevelUnlocked, levelStars } from "@/game/progress";
import { useProgress } from "@/lib/progress-store";
import { Stars } from "./stars";

interface JourneyMapProps {
  readonly eras: readonly Era[];
}

const TESTAMENT_LABEL: Record<Era["testament"], string> = {
  "hebrew-bible": "Hebrew Bible / Old Testament",
  between: "Between the Testaments",
  "new-testament": "New Testament",
};

/** Splits levels 1..n into rows of five so long eras stay readable on phones. */
function rowsOf(levels: number): number[][] {
  const rows: number[][] = [];
  for (let start = 1; start <= levels; start += 5) {
    rows.push(Array.from({ length: Math.min(5, levels - start + 1) }, (_, i) => start + i));
  }
  return rows;
}

export function JourneyMap({ eras }: JourneyMapProps) {
  const progress = useProgress();

  return (
    <ol className="relative space-y-4" aria-label="Eras of the journey">
      {eras.map((era, index) => {
        const heading = era.testament !== eras[index - 1]?.testament ? TESTAMENT_LABEL[era.testament] : null;
        const earned = Array.from({ length: era.levels }, (_, i) => levelStars(progress, era.id, i + 1)).reduce(
          (a, b) => a + b,
          0,
        );

        return (
          <li key={era.id}>
            {heading && (
              <h2 className="mb-3 mt-8 text-center font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/50 first:mt-0">
                {heading}
              </h2>
            )}
            <section
              aria-labelledby={`era-${era.id}`}
              className={`panel p-5 ${era.playable ? "" : "opacity-55"}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl leading-none" aria-hidden>
                  {era.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 id={`era-${era.id}`} className="font-display text-xl font-extrabold">
                    {era.playable ? <span className="gold-text">{era.name}</span> : era.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan/80">{era.period}</p>
                  <p className="mt-1.5 text-sm text-white/70">{era.blurb}</p>
                </div>
                {era.playable && (
                  <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-xs font-bold tabular-nums text-gold">
                    ★ {earned}/{era.levels * 3}
                  </span>
                )}
              </div>

              {era.playable ? (
                <div className="mt-5 space-y-4">
                  {rowsOf(era.levels).map((row) => (
                    <div key={row[0]} className="flex items-center justify-around">
                      {row.map((level, idx) => {
                        const unlocked = isLevelUnlocked(progress, era.id, level);
                        const stars = levelStars(progress, era.id, level);
                        return (
                          <div key={level} className="flex flex-1 items-center">
                            {idx > 0 && (
                              <span
                                aria-hidden
                                className={`h-1 flex-1 rounded-full ${unlocked ? "bg-gold/50" : "bg-white/10"}`}
                              />
                            )}
                            <div className="flex flex-col items-center gap-1.5 px-1 sm:px-2">
                              {unlocked ? (
                                <Link
                                  href={`/play/${era.id}/${level}`}
                                  className={`coin focus-ring grid size-12 place-items-center font-display text-xl sm:size-16 sm:text-2xl font-extrabold text-[#3b2600] transition-transform hover:scale-110 ${
                                    stars === 0 ? "animate-pulse-glow" : ""
                                  }`}
                                  aria-label={`Play ${era.name}, level ${level}${stars ? `, ${stars} stars earned` : ""}`}
                                >
                                  {level}
                                </Link>
                              ) : (
                                <span
                                  className="coin-locked grid size-12 place-items-center text-base sm:size-16 sm:text-xl"
                                  aria-label={`Level ${level} locked — earn a star on level ${level - 1}`}
                                  role="img"
                                >
                                  🔒
                                </span>
                              )}
                              <Stars count={stars} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-center text-xs font-semibold uppercase tracking-widest text-white/40">
                  Coming soon
                </p>
              )}
            </section>
          </li>
        );
      })}
    </ol>
  );
}
