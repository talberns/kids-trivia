"use client";

import Link from "next/link";
import { useProgress, useToday } from "@/lib/progress-store";

export function DailyCard() {
  const progress = useProgress();
  const today = useToday();
  const done = today !== null && progress.daily.lastCompleted === today;

  return (
    <Link
      href="/daily"
      className={`panel shine focus-ring block p-5 transition-transform hover:scale-[1.01] ${done ? "" : "glow-gold"}`}
    >
      <div className="flex items-center gap-4">
        <span className="text-5xl" aria-hidden>
          🎁
        </span>
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan">Daily challenge</p>
          <p className="font-display text-2xl font-extrabold">
            {done ? <span className="text-white/80">Done for today ✓</span> : <span className="gold-text">2× XP bonus</span>}
          </p>
          <p className="text-sm text-white/65">
            {done ? "Come back tomorrow to keep your streak alive." : "Five questions from across the eras. New every day."}
          </p>
        </div>
        <span className="text-2xl text-gold" aria-hidden>
          ›
        </span>
      </div>
    </Link>
  );
}
