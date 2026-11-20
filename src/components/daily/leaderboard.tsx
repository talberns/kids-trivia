export interface LeaderboardData {
  readonly day: string;
  readonly entries: readonly {
    readonly rank: number;
    readonly name: string;
    readonly score: number;
    readonly correct: number;
    readonly seconds: number;
    readonly isMe: boolean;
  }[];
}

const MEDALS: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

/** Today's daily-challenge leaderboard, shown to every player. */
export function Leaderboard({ data }: { readonly data: LeaderboardData | null }) {
  return (
    <section className="panel overflow-hidden" aria-labelledby="leaderboard-heading">
      <div className="flex items-baseline justify-between px-5 pt-4">
        <h2 id="leaderboard-heading" className="font-display text-xl font-extrabold">
          <span className="gold-text">Today&apos;s leaderboard</span>
        </h2>
        {data && <span className="text-xs text-white/45">{data.day}</span>}
      </div>
      {!data ? (
        <p className="px-5 py-4 text-sm text-white/60">Loading…</p>
      ) : data.entries.length === 0 ? (
        <p className="px-5 py-4 text-sm text-white/60">No one has finished today&apos;s challenge yet. Be the first!</p>
      ) : (
        <ol className="mt-2" data-testid="leaderboard">
          {data.entries.map((e) => (
            <li
              key={`${e.rank}-${e.name}`}
              className={`flex items-center gap-3 border-t border-white/5 px-5 py-2.5 text-sm ${e.isMe ? "bg-gold/10" : ""}`}
            >
              <span className="w-8 text-center font-display font-extrabold tabular-nums text-white/70">
                {MEDALS[e.rank] ?? e.rank}
              </span>
              <span className="min-w-0 flex-1 truncate font-semibold">
                {e.name}
                {e.isMe && <span className="ml-1.5 text-xs font-bold text-gold">(you)</span>}
              </span>
              <span className="tabular-nums text-white/55">
                {e.correct}/10 · {e.seconds}s
              </span>
              <span className="w-14 text-right font-display font-extrabold tabular-nums text-gold">{e.score}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
