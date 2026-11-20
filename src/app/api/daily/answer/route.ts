import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { dailyDateKey } from "@/game/daily";
import { recordEvent } from "@/lib/activity/store";
import { getPlayer } from "@/lib/auth/current";
import { applyAnswer, correctIndexShown, expireTimeouts, questionsForDay, stateOf } from "@/lib/daily/service";
import { getRepo } from "@/lib/data/repo";

const bodySchema = z.object({
  /** Which question this answer is for (guards against double taps and stale screens). */
  index: z.number().int().min(0).max(50),
  /** Index of the choice as shown, or -1 when the clock ran out. */
  choice: z.number().int().min(-1).max(3),
});

/** Scores one answer with the server's clock and returns the result plus the next question. */
export async function POST(request: NextRequest) {
  const player = await getPlayer();
  if (!player) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const repo = getRepo();
  if (!repo) return NextResponse.json({ error: "unavailable" }, { status: 503 });

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const day = dailyDateKey();
  const now = Date.now();
  const stored = await repo.getAttempt(player.userId, day);
  if (!stored) return NextResponse.json({ error: "not started" }, { status: 409 });
  if (stored.finishedAt) return NextResponse.json({ result: null, state: stateOf(stored, day, now) });

  // Questions that ran out while the player was away are scored as timeouts first.
  const current = expireTimeouts(stored, now);
  if (parsed.data.index !== current.answers.length || current.finishedAt) {
    if (current !== stored) await repo.updateAttempt(current, stored.answers.length);
    return NextResponse.json({ result: null, state: stateOf(current, day, now) }, { status: 409 });
  }

  const question = questionsForDay(day).find((q) => q.id === current.questionIds[current.answers.length]);
  const { attempt, answer } = applyAnswer(current, parsed.data.choice, now);
  if (!(await repo.updateAttempt(attempt, stored.answers.length))) {
    const latest = await repo.getAttempt(player.userId, day);
    return NextResponse.json({ result: null, state: stateOf(latest, day, now) }, { status: 409 });
  }

  if (attempt.finishedAt) {
    await recordEvent(
      { userId: player.userId, firstName: player.firstName, lastName: player.lastName, sessionId: player.sid },
      {
        type: "daily_complete",
        day,
        score: attempt.score,
        correct: attempt.correct,
        total: attempt.questionIds.length,
        seconds: Math.round(attempt.totalMs / 1000),
      },
      request,
    );
  }

  return NextResponse.json(
    {
      result: {
        correct: answer.correct,
        timedOut: answer.choice === -1,
        points: answer.points,
        correctChoice: question ? correctIndexShown(day, question) : null,
      },
      state: stateOf(attempt, day, now),
    },
    { headers: { "cache-control": "no-store" } },
  );
}
