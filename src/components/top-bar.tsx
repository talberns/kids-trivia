"use client";

import Link from "next/link";
import { currentStreak, rankFor, withSound } from "@/game/progress";
import { setProgress, useProgress, useToday } from "@/lib/progress-store";
import { playSound } from "@/lib/sound";

export function TopBar() {
  const progress = useProgress();
  const today = useToday();
  const { current, next, progress: rankProgress } = rankFor(progress.xp);
  const streak = today ? currentStreak(progress, today) : 0;
  const soundOn = progress.settings.sound;

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-night/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        <Link href="/" className="focus-ring rounded-md font-display text-lg font-extrabold leading-none tracking-wide">
          <span className="gold-text">Through Their Eyes</span>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden min-w-32 sm:block" title={next ? `${next.minXp - progress.xp} XP to ${next.name}` : "Top rank"}>
            <div className="flex justify-between text-[11px] font-semibold uppercase tracking-wider text-white/60">
              <span>{current.name}</span>
              <span className="tabular-nums text-gold">{progress.xp.toLocaleString()} XP</span>
            </div>
            <div
              className="mt-1 h-2 overflow-hidden rounded-full bg-white/10"
              role="progressbar"
              aria-label={`Progress to ${next?.name ?? "top rank"}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(rankProgress * 100)}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light transition-[width] duration-700"
                style={{ width: `${rankProgress * 100}%` }}
              />
            </div>
          </div>

          <div
            className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1.5 text-sm font-bold tabular-nums"
            title="Daily streak"
            aria-label={`${streak}-day streak`}
          >
            <span className={streak > 0 ? "animate-flame" : "opacity-40 grayscale"} aria-hidden>
              🔥
            </span>
            {streak}
          </div>

          <button
            type="button"
            className="focus-ring rounded-full bg-white/5 p-2 text-base"
            aria-pressed={soundOn}
            aria-label={soundOn ? "Mute sound" : "Turn sound on"}
            onClick={() => {
              setProgress(withSound(progress, !soundOn));
              playSound("tap", !soundOn);
            }}
          >
            <span aria-hidden>{soundOn ? "🔊" : "🔇"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
