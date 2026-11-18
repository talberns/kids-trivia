"use client";

import { useMemo } from "react";
import type { Question } from "@/content/schema";
import { pickDailyQuestions } from "@/game/daily";
import { hashString } from "@/game/rng";
import { useToday } from "@/lib/progress-store";
import { RoundScreen } from "./round-screen";

/** The daily set depends on the player's local date, so it is chosen in the browser. */
export function DailyRound({ pool }: { pool: readonly Question[] }) {
  const today = useToday();
  const questions = useMemo(() => (today ? pickDailyQuestions(pool, today) : []), [pool, today]);

  if (!today || questions.length === 0) {
    return <p className="py-20 text-center text-white/60">Preparing today&apos;s challenge…</p>;
  }

  return (
    <RoundScreen
      key={today}
      initialSeed={hashString(`daily-order:${today}`)}
      config={{
        mode: "daily",
        title: "Daily challenge",
        subtitle: `${today} · first finish today earns 2× XP`,
        questions,
        artifactId: null,
        nextLevelHref: null,
      }}
    />
  );
}
