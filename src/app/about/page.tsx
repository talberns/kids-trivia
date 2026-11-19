import type { Metadata } from "next";
import { CONFIDENCE_LABEL } from "@/components/game/labels";
import { PUBLISHED_QUESTIONS } from "@/content/index";
import { getPlayer } from "@/lib/auth/current";
import { REPO_URL } from "@/lib/report";

export const metadata: Metadata = {
  title: "Sources & Method",
  description: "How every question is researched, checked and labelled — and how to report an error.",
};

export default async function AboutPage() {
  const player = await getPlayer();
  return (
    <article className="space-y-6 pt-4">
      <header className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan">Sources &amp; method</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">
          <span className="gold-text">How we check every answer</span>
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-white/70">
          Written for Jewish, Christian and secular players alike — and for scholars who want to check our facts.
        </p>
      </header>

      <section className="panel space-y-3 p-5">
        <h2 className="font-display text-xl font-extrabold">Our stance</h2>
        <p className="text-white/80">
          This game teaches what the Bible says and the world it came from. It does not tell you what to believe. We
          keep four kinds of statement apart, and label each one:
        </p>
        <ul className="space-y-1.5 text-white/80">
          <li>
            📜 <strong>The text says</strong> — what the biblical text itself states, with chapter and verse.
          </li>
          <li>
            🏛️ <strong>The world around it</strong> — history, archaeology and ancient sources outside the Bible.
          </li>
          <li>
            ✡️ <strong>Jewish tradition in Jesus&apos; day</strong> — how Jews of the late Second Temple period (about
            200 BCE – 70 CE), the world of Jesus and the apostles, read the story: Josephus, Philo, the Dead Sea
            Scrolls, Jubilees and the Apocrypha.
          </li>
          <li>
            ✝️ <strong>Christian tradition</strong> — how the New Testament and the church have understood it.
          </li>
          <li>
            ⚖️ <strong>Scholars debate</strong> — where there is no consensus, we say so and give the main positions.
          </li>
        </ul>
        <p className="text-white/80">
          Faith claims, such as miracles, are presented as what the text says and what each tradition believes — not
          affirmed or denied as historical fact. Dates use BCE / CE.
        </p>
      </section>

      <section className="panel space-y-3 p-5">
        <h2 className="font-display text-xl font-extrabold">Confidence labels</h2>
        <ul className="space-y-2">
          {Object.values(CONFIDENCE_LABEL).map((c) => (
            <li key={c.label} className="flex items-start gap-3">
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${c.className}`}>{c.label}</span>
              <span className="text-white/80">{c.hint}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel space-y-3 p-5">
        <h2 className="font-display text-xl font-extrabold">How a question gets into the game</h2>
        <ol className="list-decimal space-y-1.5 pl-5 text-white/80">
          <li>It is written from sources, with a citation for every claim.</li>
          <li>
            A separate reviewer that did not write it checks every verse, date, name and citation, looks for wrong
            answers that could arguably be right, and reads it for fairness to each tradition.
          </li>
          <li>Errors are corrected or the question is cut. Nothing unverified is softened and kept.</li>
          <li>Only questions marked as published can appear in the game; the build fails otherwise.</li>
        </ol>
        <p className="text-white/80">
          The questions are researched and checked with the help of AI, without an outside human expert. That
          reduces errors but cannot promise there are none — which is why every answer shows its sources and has a
          report button.
        </p>
        <p className="text-sm text-white/60">
          {PUBLISHED_QUESTIONS.length} questions are live. Bible quotations are from the World English Bible, which is
          in the public domain.
        </p>
      </section>

      <section className="panel space-y-3 p-5">
        <h2 className="font-display text-xl font-extrabold">Found a mistake?</h2>
        <p className="text-white/80">
          Every answer card has a “Report it” link that opens a pre-filled issue. Corrections are tracked publicly.
        </p>
        <a href={`${REPO_URL}/issues`} target="_blank" rel="noopener noreferrer" className="btn-gold focus-ring">
          See or report issues ↗
        </a>
      </section>

      <section className="panel space-y-2 p-5 text-sm text-white/70">
        <h2 className="font-display text-xl font-extrabold text-white">Fair play</h2>
        <p>
          This is a free, educational project. There are no purchases, no ads and no chance-based rewards — everything
          is earned by learning. Your points and stars are stored on your device. While the site is in private
          testing, your name and game activity are also recorded so the organiser can improve the game.
        </p>
      </section>

      <section className="panel flex flex-wrap items-center gap-3 p-5 text-sm">
        <p className="text-white/70">
          {player ? (
            <>
              Signed in as <strong className="text-white">{player.firstName} {player.lastName}</strong>
            </>
          ) : (
            "Signed in"
          )}
        </p>
        <form method="post" action="/api/logout" className="ml-auto">
          <button type="submit" className="focus-ring rounded-full bg-white/10 px-4 py-2 font-bold hover:bg-white/15">
            Sign out
          </button>
        </form>
      </section>
    </article>
  );
}
