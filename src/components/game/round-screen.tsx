"use client";

import Link from "next/link";
import { useEffect, useReducer, useRef, useState } from "react";
import type { Question } from "@/content/schema";
import {
  canUseFiftyFifty,
  comboMultiplier,
  correctCount,
  createRound,
  currentItem,
  pointsFor,
  roundReducer,
  starsFor,
} from "@/game/engine";
import {
  applyDailyResult,
  applyLevelResult,
  toDateKey,
  type ProgressUpdate,
  type RoundOutcome,
} from "@/game/progress";
import { track } from "@/lib/activity/track";
import { getProgress, setProgress, useProgress } from "@/lib/progress-store";
import { playSound } from "@/lib/sound";
import { CoinBurst } from "../coin-burst";
import { ChoiceButton, type ChoiceStatus } from "./choice-button";
import { InsightCard } from "./insight-card";
import { InsightFooter } from "./insight-footer";
import { CATEGORY_LABEL } from "./labels";
import { RoundSummary } from "./round-summary";

const LETTERS = ["A", "B", "C", "D"] as const;
const SESSION_KEY = "tte:session-start";
const LONG_SESSION_MS = 25 * 60 * 1000;

export interface RoundConfig {
  readonly mode: "level" | "daily";
  readonly title: string;
  readonly subtitle: string;
  readonly questions: readonly Question[];
  readonly era?: string;
  readonly level?: number;
  readonly artifactId: string | null;
  readonly nextLevelHref: string | null;
}

interface RoundScreenProps {
  readonly config: RoundConfig;
  /** Seed for the first attempt; must match on server and client to avoid a hydration mismatch. */
  readonly initialSeed: number;
}

/** Owns retries: each attempt remounts the round with a fresh shuffle. */
export function RoundScreen({ config, initialSeed }: RoundScreenProps) {
  const [attempt, setAttempt] = useState({ n: 0, seed: initialSeed });

  useEffect(() => {
    try {
      if (!window.sessionStorage.getItem(SESSION_KEY)) window.sessionStorage.setItem(SESSION_KEY, String(Date.now()));
    } catch {
      // sessionStorage unavailable; the break reminder simply won't show.
    }
  }, []);

  return (
    <Round
      key={attempt.n}
      config={config}
      seed={attempt.seed}
      onReplay={() => {
        setAttempt((a) => ({ n: a.n + 1, seed: Math.floor(Math.random() * 2 ** 31) }));
        window.scrollTo({ top: 0 });
      }}
    />
  );
}

interface Summary {
  readonly outcome: RoundOutcome;
  readonly update: ProgressUpdate;
  readonly longSession: boolean;
}

function isLongSession(): boolean {
  try {
    const start = Number(window.sessionStorage.getItem(SESSION_KEY));
    return start > 0 && Date.now() - start > LONG_SESSION_MS;
  } catch {
    return false;
  }
}

function Round({ config, seed, onReplay }: { config: RoundConfig; seed: number; onReplay: () => void }) {
  const progress = useProgress();
  const sound = progress.settings.sound;
  const [state, dispatch] = useReducer(roundReducer, undefined, () => createRound(config.questions, seed));
  const [burst, setBurst] = useState({ n: 0, intensity: 1 });
  const [lastGain, setLastGain] = useState({ n: 0, points: 0 });
  const [summary, setSummary] = useState<Summary | null>(null);
  const insightRef = useRef<HTMLHeadingElement>(null);
  const revealedAt = useRef(0);

  const item = currentItem(state);
  const { question } = item;
  const total = state.items.length;
  const category = CATEGORY_LABEL[question.category];
  const where = { mode: config.mode, era: config.era, level: config.level };

  // Activity log: one "started" event per attempt.
  useEffect(() => {
    track({ type: "round_start", mode: config.mode, era: config.era, level: config.level });
  }, [config.mode, config.era, config.level]);

  function answer(choice: number) {
    if (state.phase !== "answering" || state.eliminated.includes(choice)) return;
    const correct = choice === question.answer;
    if (correct) {
      const streak = state.combo + 1;
      const points = pointsFor(question.difficulty, streak, state.eliminated.length > 0);
      playSound(streak >= 3 ? "combo" : "correct", sound);
      setBurst((b) => ({ n: b.n + 1, intensity: Math.min(2, 0.6 + streak * 0.25) }));
      setLastGain((g) => ({ n: g.n + 1, points }));
    } else {
      playSound("wrong", sound);
    }
    track({ type: "answer", ...where, questionId: question.id, correct, usedFiftyFifty: state.eliminated.length > 0 });
    dispatch({ type: "answer", choice });
    revealedAt.current = Date.now();
    // Bring the explanation into view once it renders: learning is the point of each question.
    window.setTimeout(() => {
      const heading = insightRef.current;
      if (!heading) return;
      heading.focus({ preventScroll: true });
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("round-verdict")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }, 120);
  }

  function next(reachedEnd = false) {
    if (state.phase !== "revealed") return;
    track({
      type: "insight_read",
      ...where,
      questionId: question.id,
      seconds: Math.min(3600, Math.max(0, Math.round((Date.now() - revealedAt.current) / 1000))),
      reachedEnd,
    });
    const isLast = state.index + 1 >= total;
    if (isLast) {
      const correct = correctCount(state);
      const stars = starsFor(correct, total);
      const outcome: RoundOutcome = { score: state.score, stars, answered: total, correct };
      const today = toDateKey(new Date());
      const update =
        config.mode === "level" && config.era && config.level
          ? applyLevelResult(getProgress(), {
              era: config.era,
              level: config.level,
              outcome,
              artifactId: config.artifactId,
              today,
            })
          : applyDailyResult(getProgress(), outcome, today);
      setProgress(update.progress);
      track({ type: "round_complete", ...where, score: state.score, stars, correct, total });
      setSummary({ outcome, update, longSession: isLongSession() });
      playSound(stars === 3 ? "jackpot" : stars >= 1 ? "levelUp" : "wrong", sound);
      if (stars >= 1) setBurst((b) => ({ n: b.n + 1, intensity: stars === 3 ? 2.6 : 1.4 }));
    } else {
      playSound("tap", sound);
    }
    dispatch({ type: "next" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function fiftyFifty() {
    if (!canUseFiftyFifty(state)) return;
    playSound("coin", sound);
    dispatch({ type: "fifty-fifty", seed: Math.floor(Math.random() * 2 ** 31) });
  }

  // Keyboard: 1–4 or A–D to answer, Enter to continue.
  const handlers = useRef({ answer, next });
  useEffect(() => {
    handlers.current = { answer, next };
  });
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      const key = event.key.toUpperCase();
      const position = ["1", "2", "3", "4"].indexOf(key) >= 0 ? Number(key) - 1 : LETTERS.indexOf(key as "A");
      const current = handlers.current;
      if (position >= 0) {
        const original = item.order[position];
        if (original !== undefined) current.answer(original);
      } else if (event.key === "Enter" && state.phase === "revealed") {
        event.preventDefault();
        current.next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, state.phase]);

  if (state.phase === "complete" && summary) {
    return (
      <>
        <CoinBurst trigger={burst.n} intensity={burst.intensity} />
        <RoundSummary
          mode={config.mode}
          outcome={summary.outcome}
          update={summary.update}
          bestCombo={state.bestCombo}
          nextLevelHref={config.nextLevelHref}
          longSession={summary.longSession}
          onReplay={onReplay}
        />
      </>
    );
  }

  const revealed = state.phase === "revealed";
  const lastRecord = state.records.at(-1);
  const answeredCorrectly = revealed && lastRecord?.correct === true;

  function statusFor(original: number): ChoiceStatus {
    if (!revealed) return state.eliminated.includes(original) ? "eliminated" : "idle";
    if (original === question.answer) return "correct";
    if (original === state.selected) return "wrong";
    return "dimmed";
  }

  return (
    <div className="space-y-5">
      <CoinBurst trigger={burst.n} intensity={burst.intensity} />

      <header className="flex items-center gap-3">
        <Link
          href="/"
          className="focus-ring grid size-10 shrink-0 place-items-center rounded-full bg-white/5 text-lg hover:bg-white/10"
          aria-label="Leave round and return to the journey map"
        >
          ✕
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-lg font-extrabold">
            <span className="gold-text">{config.title}</span>
          </p>
          <p className="truncate text-xs font-semibold uppercase tracking-wider text-white/55">{config.subtitle}</p>
        </div>
        <div className="relative text-right">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Score</p>
          <p className="font-display text-2xl font-extrabold tabular-nums text-gold" aria-live="polite">
            {state.score}
          </p>
          {lastGain.n > 0 && (
            <span
              key={lastGain.n}
              aria-hidden
              className="animate-float-up pointer-events-none absolute -top-2 right-0 font-display text-lg font-extrabold text-jade"
            >
              +{lastGain.points}
            </span>
          )}
        </div>
      </header>

      <ol className="flex gap-1.5" aria-label={`Question ${state.index + 1} of ${total}`}>
        {state.items.map((it, i) => {
          const record = state.records[i];
          const color = record ? (record.correct ? "bg-jade" : "bg-ruby") : i === state.index ? "bg-gold" : "bg-white/10";
          return <li key={it.question.id} className={`h-2 flex-1 rounded-full transition-colors ${color}`} />;
        })}
      </ol>

      <section className="panel space-y-5 p-5" aria-labelledby="question-prompt">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-white/75">
            <span aria-hidden>{category.icon} </span>
            {category.label}
          </span>
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-gold" aria-label={`Difficulty ${question.difficulty} of 3`}>
            {"◆".repeat(question.difficulty)}
            <span className="text-white/20">{"◆".repeat(3 - question.difficulty)}</span>
          </span>
          {state.combo >= 2 && (
            <span key={state.combo} className="animate-pop-in rounded-full bg-neon/20 px-2.5 py-1 text-neon ring-1 ring-neon/50">
              🔥 ×{comboMultiplier(state.combo + 1)} combo
            </span>
          )}
        </div>

        <h2 id="question-prompt" className="font-serif text-[1.65rem] font-semibold leading-snug text-white">
          {question.prompt}
        </h2>

        <div className="grid gap-3" role="group" aria-label="Answers">
          {item.order.map((original, position) => (
            <ChoiceButton
              key={original}
              letter={LETTERS[position] ?? "?"}
              text={question.choices[original] ?? ""}
              status={statusFor(original)}
              disabled={revealed || state.eliminated.includes(original)}
              onSelect={() => answer(original)}
            />
          ))}
        </div>

        {!revealed && question.format === "multiple-choice" && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={fiftyFifty}
              disabled={!canUseFiftyFifty(state)}
              className="focus-ring rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-sm font-bold text-cyan transition-opacity disabled:opacity-30"
            >
              50/50 <span className="font-normal text-cyan/70">· {state.fiftyFiftyLeft} left · half points</span>
            </button>
          </div>
        )}
      </section>

      <div role="status" aria-live="assertive" className="sr-only">
        {revealed
          ? answeredCorrectly
            ? `Correct! Plus ${lastRecord?.points ?? 0} points.`
            : `Not quite. The answer is ${question.choices[question.answer]}.`
          : ""}
      </div>

      {revealed && (
        <>
          <p
            id="round-verdict"
            className={`animate-pop-in scroll-mt-20 text-center font-display text-3xl font-extrabold ${
              answeredCorrectly ? "text-jade" : "text-ruby"
            }`}
            aria-hidden
          >
            {answeredCorrectly ? (state.combo >= 3 ? "On fire! 🔥" : "Correct!") : "Not quite"}
          </p>
          <InsightCard question={question} headingRef={insightRef} />
          <InsightFooter
            key={question.id}
            label={state.index + 1 >= total ? "See results" : "Next question →"}
            onNext={next}
          />
        </>
      )}
    </div>
  );
}
