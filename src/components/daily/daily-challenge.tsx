"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { DAILY_QUESTION_COUNT, DAILY_XP_RATE, FEEDBACK_MS, QUESTION_TIME_MS } from "@/game/daily";
import { starsFor } from "@/game/engine";
import { applyDailyResult } from "@/game/progress";
import { getProgress, setProgress, useProgress } from "@/lib/progress-store";
import { playSound } from "@/lib/sound";
import { CoinBurst } from "../coin-burst";
import { ChoiceButton, type ChoiceStatus } from "../game/choice-button";
import { Leaderboard, type LeaderboardData } from "./leaderboard";

interface PublicQuestion {
  index: number;
  total: number;
  prompt: string;
  choices: string[];
  category: string;
  difficulty: number;
  startsInMs: number;
  limitMs: number;
}

interface ReviewItem {
  prompt: string;
  yourAnswer: string | null;
  correctAnswer: string;
  correct: boolean;
  points: number;
  seconds: number;
}

type DailyState =
  | { status: "not-started"; day: string; total: number }
  | { status: "playing"; day: string; question: PublicQuestion; score: number; correct: number; answered: number }
  | { status: "finished"; day: string; score: number; correct: number; total: number; totalMs: number; review: ReviewItem[] };

interface AnswerResult {
  correct: boolean;
  timedOut: boolean;
  points: number;
  correctChoice: number | null;
}

const LETTERS = ["A", "B", "C", "D"] as const;

async function api<T>(path: string, init?: RequestInit): Promise<T | null> {
  try {
    const response = await fetch(path, { credentials: "same-origin", cache: "no-store", ...init });
    if (!response.ok && response.status !== 409) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

/** The 10-question timed daily challenge with a shared leaderboard. Scoring happens on the server. */
export function DailyChallenge() {
  const progress = useProgress();
  const sound = progress.settings.sound;
  const [state, setState] = useState<DailyState | null>(null);
  const [error, setError] = useState(false);
  const [board, setBoard] = useState<LeaderboardData | null>(null);
  const [busy, setBusy] = useState(false);

  // The question on screen, and its clock.
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [feedback, setFeedback] = useState<{ chosen: number; result: AnswerResult; question: PublicQuestion } | null>(null);
  const [burst, setBurst] = useState(0);
  const answering = useRef(false);
  const [submitting, setSubmitting] = useState(false);
  const rewarded = useRef(false);

  const loadBoard = useCallback(async () => {
    const data = await api<LeaderboardData>("/api/daily/leaderboard");
    if (data) setBoard(data);
  }, []);

  /** Puts a question on screen once its start time arrives. */
  const show = useCallback((q: PublicQuestion) => {
    const reveal = () => {
      setQuestion(q);
      setFeedback(null);
      setDeadline(Date.now() + q.limitMs);
      answering.current = false;
      setSubmitting(false);
    };
    if (q.startsInMs > 0) window.setTimeout(reveal, q.startsInMs);
    else reveal();
  }, []);

  const adopt = useCallback(
    (next: DailyState) => {
      setState(next);
      if (next.status === "playing") show(next.question);
      if (next.status === "finished") {
        setQuestion(null);
        setDeadline(null);
        void loadBoard();
      }
    },
    [show, loadBoard],
  );

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const initial = await api<DailyState>("/api/daily");
      if (cancelled) return;
      if (!initial) setError(true);
      else adopt(initial);
      await loadBoard();
    })();
    return () => {
      cancelled = true;
    };
  }, [adopt, loadBoard]);

  // Reward XP and the streak once per day, when the result is first seen on this account.
  useEffect(() => {
    if (state?.status !== "finished" || rewarded.current) return;
    rewarded.current = true;
    const current = getProgress();
    if (current.daily.lastCompleted === state.day) return;
    const outcome = {
      score: Math.round(state.score * DAILY_XP_RATE),
      stars: starsFor(state.correct, state.total),
      answered: state.total,
      correct: state.correct,
    };
    setProgress(applyDailyResult(current, outcome, state.day).progress);
  }, [state]);

  // Clock tick.
  useEffect(() => {
    if (deadline === null) return;
    const id = window.setInterval(() => setNow(Date.now()), 100);
    return () => window.clearInterval(id);
  }, [deadline]);

  const submit = useCallback(
    async (choice: number) => {
      if (!question || answering.current) return;
      answering.current = true;
      setSubmitting(true);
      setDeadline(null);
      const response = await api<{ result: AnswerResult | null; state: DailyState }>("/api/daily/answer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ index: question.index, choice }),
      });
      if (!response) {
        setError(true);
        return;
      }
      const { result, state: next } = response;
      if (result) {
        playSound(result.correct ? "correct" : "wrong", sound);
        if (result.correct) setBurst((n) => n + 1);
        setFeedback({ chosen: choice, result, question });
        setState(next);
        // Keep the right/wrong colours on screen for the pause before the next question.
        window.setTimeout(() => adopt(next), next.status === "playing" ? 0 : FEEDBACK_MS);
      } else {
        adopt(next);
      }
    },
    [question, sound, adopt],
  );

  // Time's up: send a timeout.
  const remaining = deadline === null ? null : Math.max(0, deadline - now);
  useEffect(() => {
    if (remaining === 0 && question && !answering.current) void submit(-1);
  }, [remaining, question, submit]);

  // Keyboard: 1–4 or A–D.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey || !question || feedback) return;
      const key = event.key.toUpperCase();
      const position = ["1", "2", "3", "4"].indexOf(key) >= 0 ? Number(key) - 1 : LETTERS.indexOf(key as "A");
      if (position >= 0 && position < question.choices.length) void submit(position);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [question, feedback, submit]);

  async function start() {
    setBusy(true);
    const next = await api<DailyState>("/api/daily/start", { method: "POST" });
    setBusy(false);
    if (!next) setError(true);
    else adopt(next);
  }

  if (error) {
    return (
      <div className="panel mt-8 space-y-3 p-6 text-center">
        <p className="font-display text-xl font-extrabold">The daily challenge isn&apos;t available right now.</p>
        <button type="button" onClick={() => window.location.reload()} className="btn-gold focus-ring">
          Try again
        </button>
      </div>
    );
  }

  if (!state) return <p className="py-20 text-center text-white/60">Preparing today&apos;s challenge…</p>;

  const header = (
    <header className="flex items-center gap-3">
      <Link
        href="/"
        className="focus-ring grid size-10 shrink-0 place-items-center rounded-full bg-white/5 text-lg hover:bg-white/10"
        aria-label="Leave and return to the journey map"
      >
        ✕
      </Link>
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-lg font-extrabold">
          <span className="gold-text">Daily challenge</span>
        </p>
        <p className="truncate text-xs font-semibold uppercase tracking-wider text-white/55">{state.day}</p>
      </div>
      {state.status !== "not-started" && (
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Score</p>
          <p className="font-display text-2xl font-extrabold tabular-nums text-gold" aria-live="polite" data-testid="daily-score">
            {state.score}
          </p>
        </div>
      )}
    </header>
  );

  if (state.status === "not-started") {
    return (
      <div className="space-y-6">
        {header}
        <section className="panel space-y-4 p-6 text-center">
          <p className="text-5xl" aria-hidden>
            ⏱️
          </p>
          <h1 className="font-display text-3xl font-extrabold">
            <span className="gold-text">{DAILY_QUESTION_COUNT} questions. Beat the clock.</span>
          </h1>
          <ul className="mx-auto max-w-sm space-y-1.5 text-left text-white/80">
            <li>⏳ {QUESTION_TIME_MS / 1000} seconds for each question</li>
            <li>✅ 100 points for a right answer, plus up to 100 for speed</li>
            <li>🏆 One try per day; your score goes on today&apos;s leaderboard</li>
            <li>🔄 New questions every day at midnight (Toronto time)</li>
          </ul>
          <button type="button" onClick={start} disabled={busy} className="btn-gold focus-ring w-full max-w-sm text-lg">
            {busy ? "Starting…" : "Start the clock"}
          </button>
        </section>
        <Leaderboard data={board} />
      </div>
    );
  }

  if (state.status === "finished") {
    const me = board?.entries.find((e) => e.isMe);
    return (
      <div className="space-y-6">
        <CoinBurst trigger={burst} intensity={2} />
        {header}
        <section className="panel space-y-3 p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan">Today&apos;s result</p>
          <p className="font-display text-5xl font-extrabold tabular-nums">
            <span className="gold-text">{state.score}</span>
          </p>
          <p className="text-white/80">
            {state.correct} of {state.total} correct · {Math.round(state.totalMs / 1000)} seconds
            {me ? ` · #${me.rank} today` : ""}
          </p>
          <p className="text-sm text-white/55">Come back tomorrow for ten new questions.</p>
        </section>
        <Leaderboard data={board} />
        <details className="panel p-5 text-sm">
          <summary className="cursor-pointer select-none font-semibold text-white/80 marker:text-gold">See your answers</summary>
          <ol className="mt-3 space-y-3">
            {state.review.map((item, i) => (
              <li key={i} className="border-t border-white/5 pt-3 first:border-0 first:pt-0">
                <p className="font-semibold text-white">{item.prompt}</p>
                <p className={item.correct ? "text-jade" : "text-ruby"}>
                  {item.correct ? "✓ " : "✕ "}
                  {item.yourAnswer ?? "No answer (time ran out)"}
                  <span className="text-white/50">
                    {" "}
                    · {item.points} pts · {item.seconds}s
                  </span>
                </p>
                {!item.correct && <p className="text-white/70">Answer: {item.correctAnswer}</p>}
              </li>
            ))}
          </ol>
        </details>
      </div>
    );
  }

  // Playing.
  const shown = feedback?.question ?? question;
  if (!shown) return <div className="space-y-6">{header}<p className="py-16 text-center text-white/60">Next question…</p></div>;
  const fraction = remaining === null ? (feedback ? 0 : 1) : remaining / QUESTION_TIME_MS;
  const seconds = remaining === null ? 0 : Math.ceil(remaining / 1000);
  const urgent = remaining !== null && remaining <= 5000;

  function statusFor(i: number): ChoiceStatus {
    if (!feedback) return "idle";
    if (i === feedback.result.correctChoice) return "correct";
    if (i === feedback.chosen) return "wrong";
    return "dimmed";
  }

  return (
    <div className="space-y-5">
      <CoinBurst trigger={burst} intensity={1} />
      {header}

      <ol className="flex gap-1" aria-label={`Question ${shown.index + 1} of ${shown.total}`}>
        {Array.from({ length: shown.total }, (_, i) => (
          <li
            key={i}
            className={`h-2 flex-1 rounded-full ${i < shown.index ? "bg-gold/60" : i === shown.index ? "bg-gold" : "bg-white/10"}`}
          />
        ))}
      </ol>

      <div className="flex items-center gap-3" role="timer" aria-label={`${seconds} seconds left`}>
        <span
          className={`font-display text-3xl font-extrabold tabular-nums ${urgent ? "animate-pulse text-ruby" : "text-gold"}`}
          data-testid="daily-clock"
        >
          0:{String(seconds).padStart(2, "0")}
        </span>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full transition-[width] duration-100 ease-linear ${urgent ? "bg-ruby" : "bg-gradient-to-r from-gold-deep via-gold to-gold-light"}`}
            style={{ width: `${fraction * 100}%` }}
          />
        </div>
      </div>

      <section className="panel space-y-5 p-5" aria-labelledby="daily-prompt">
        <p className="text-xs font-bold uppercase tracking-wider text-white/50">
          Question {shown.index + 1} of {shown.total}
        </p>
        <h2 id="daily-prompt" className="font-serif text-[1.65rem] font-semibold leading-snug text-white">
          {shown.prompt}
        </h2>
        <div className="grid gap-3" role="group" aria-label="Answers">
          {shown.choices.map((choice, i) => (
            <ChoiceButton
              key={`${shown.index}-${i}`}
              letter={LETTERS[i] ?? "?"}
              text={choice}
              status={statusFor(i)}
              disabled={Boolean(feedback) || submitting}
              onSelect={() => void submit(i)}
            />
          ))}
        </div>
      </section>

      <p role="status" aria-live="assertive" className="h-8 text-center font-display text-2xl font-extrabold">
        {feedback ? (
          feedback.result.timedOut ? (
            <span className="text-ruby">Time&apos;s up!</span>
          ) : feedback.result.correct ? (
            <span className="text-jade">+{feedback.result.points}</span>
          ) : (
            <span className="text-ruby">Not quite</span>
          )
        ) : null}
      </p>
    </div>
  );
}
