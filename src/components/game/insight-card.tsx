import type { Ref } from "react";
import type { Question } from "@/content/schema";
import { reportIssueUrl } from "@/lib/report";
import { CONFIDENCE_LABEL, SOURCE_KIND_LABEL } from "./labels";

interface InsightCardProps {
  readonly question: Question;
  readonly headingRef?: Ref<HTMLHeadingElement>;
}

/** "Window into the time" — the teaching heart of every question. */
export function InsightCard({ question, headingRef }: InsightCardProps) {
  const { explanation: e } = question;
  const confidence = CONFIDENCE_LABEL[question.confidence];

  const sections = [
    { key: "text", icon: "📜", title: "The text says", body: e.textSays },
    { key: "world", icon: "🏛️", title: "The world around it", body: e.world },
    { key: "jewish", icon: "✡️", title: "Jewish tradition", body: e.tradition?.jewish },
    { key: "christian", icon: "✝️", title: "Christian tradition", body: e.tradition?.christian },
    { key: "shared", icon: "🤝", title: "Shared tradition", body: e.tradition?.shared },
    { key: "debate", icon: "⚖️", title: "Scholars debate", body: e.debate },
  ].filter((s): s is typeof s & { body: string } => s.body !== undefined);

  return (
    <section aria-labelledby={`insight-${question.id}`} className="panel animate-rise-in space-y-4 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3
          id={`insight-${question.id}`}
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-xl font-extrabold outline-none"
        >
          <span className="gold-text">Window into the time</span>
        </h3>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${confidence.className}`}
          title={confidence.hint}
        >
          {confidence.label}
        </span>
      </div>

      <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-parchment/[0.12] to-gold/[0.04] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
          <span aria-hidden>👁️ </span>Through their eyes
        </p>
        <p className="mt-1.5 font-display text-[1.05rem] leading-relaxed text-parchment">{e.theirEyes}</p>
      </div>

      <dl className="space-y-3">
        {sections.map((s) => (
          <div key={s.key}>
            <dt className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              <span aria-hidden>{s.icon} </span>
              {s.title}
            </dt>
            <dd className="mt-1 leading-relaxed text-white/85">{s.body}</dd>
          </div>
        ))}
      </dl>

      {question.references.length > 0 && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Scripture references">
          {question.references.map((ref) => (
            <li key={ref} className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/75">
              {ref}
            </li>
          ))}
        </ul>
      )}

      <details className="group rounded-xl bg-black/20 p-3 text-sm">
        <summary className="cursor-pointer select-none font-semibold text-white/80 marker:text-gold">
          Sources ({question.sources.length})
        </summary>
        <ul className="mt-2 space-y-1.5 text-white/70">
          {question.sources.map((s) => (
            <li key={`${s.kind}-${s.citation}`}>
              <span className="font-semibold text-white/85">{SOURCE_KIND_LABEL[s.kind]}:</span> {s.citation}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-white/50">
          Bible quotations: World English Bible (public domain). Question {question.id}
          {question.review.reviewedOn ? ` · checked ${question.review.reviewedOn}` : ""}.
        </p>
      </details>

      <a
        href={reportIssueUrl(question.id, question.prompt)}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-block rounded text-xs font-semibold text-white/50 underline-offset-4 hover:text-white hover:underline"
      >
        Spotted an error? Report it ↗
      </a>
    </section>
  );
}
