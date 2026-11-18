import Link from "next/link";
import { getArtifact } from "@/content/artifacts";
import type { ProgressUpdate, RoundOutcome } from "@/game/progress";
import { Stars } from "../stars";

interface RoundSummaryProps {
  readonly mode: "level" | "daily";
  readonly outcome: RoundOutcome;
  readonly update: ProgressUpdate;
  readonly bestCombo: number;
  readonly nextLevelHref: string | null;
  readonly longSession: boolean;
  readonly onReplay: () => void;
}

function headline(stars: number): { title: string; sub: string } {
  if (stars === 3) return { title: "JACKPOT!", sub: "A perfect round." };
  if (stars === 2) return { title: "Big win!", sub: "Just one away from perfect." };
  if (stars === 1) return { title: "Level cleared!", sub: "Every wrong answer taught you something." };
  return { title: "So close!", sub: "Get 3 of 5 right to clear the level. You've seen the answers now — try again." };
}

export function RoundSummary({ mode, outcome, update, bestCombo, nextLevelHref, longSession, onReplay }: RoundSummaryProps) {
  const { title, sub } = headline(outcome.stars);
  const artifact = update.newArtifact ? getArtifact(update.newArtifact) : undefined;
  const passed = outcome.stars >= 1;

  return (
    <section className="space-y-5 py-4 text-center" aria-labelledby="summary-title">
      <div className="animate-pop-in">
        <h2 id="summary-title" className="font-display text-5xl font-extrabold tracking-wide">
          <span className="gold-text">{title}</span>
        </h2>
        <p className="mt-2 text-white/70">{sub}</p>
      </div>

      <Stars count={outcome.stars} size="lg" animate />

      <dl className="panel mx-auto grid max-w-md grid-cols-3 divide-x divide-white/10 py-4">
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/55">Correct</dt>
          <dd className="font-display text-2xl font-extrabold tabular-nums">
            {outcome.correct}/{outcome.answered}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/55">Best combo</dt>
          <dd className="font-display text-2xl font-extrabold tabular-nums">×{bestCombo}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/55">XP</dt>
          <dd className="font-display text-2xl font-extrabold tabular-nums text-gold">+{update.xpGained}</dd>
        </div>
      </dl>

      {mode === "daily" && update.xpGained > outcome.score && (
        <p className="text-sm font-bold text-cyan">Daily bonus: XP doubled!</p>
      )}

      {update.rankUp && (
        <div className="panel glow-neon mx-auto max-w-md animate-rise-in p-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-neon">New rank</p>
          <p className="font-display text-3xl font-extrabold">{update.rankUp.name}</p>
        </div>
      )}

      {artifact && (
        <div className="panel glow-gold shine mx-auto max-w-md animate-rise-in p-5 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Artifact unlocked</p>
          <div className="mt-2 flex items-start gap-3">
            <span className="text-5xl" aria-hidden>
              {artifact.emoji}
            </span>
            <div>
              <p className="font-display text-xl font-extrabold">{artifact.name}</p>
              <p className="mt-1 text-sm text-white/75">{artifact.blurb}</p>
            </div>
          </div>
        </div>
      )}

      {longSession && (
        <p className="mx-auto max-w-md rounded-xl bg-white/5 p-3 text-sm text-white/70">
          You&apos;ve been exploring for a while — a great moment for a break. Your progress is saved.
        </p>
      )}

      <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
        {passed && nextLevelHref ? (
          <Link href={nextLevelHref} className="btn-gold focus-ring w-full sm:w-auto">
            Next level →
          </Link>
        ) : null}
        <button type="button" onClick={onReplay} className={`${passed && nextLevelHref ? "btn-ghost" : "btn-gold"} focus-ring w-full sm:w-auto`}>
          {passed ? "Play again" : "Try again"}
        </button>
        <Link href="/" className="btn-ghost focus-ring w-full sm:w-auto">
          Journey map
        </Link>
      </div>
    </section>
  );
}
