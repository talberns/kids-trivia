export type ChoiceStatus = "idle" | "correct" | "wrong" | "dimmed" | "eliminated";

interface ChoiceButtonProps {
  readonly letter: string;
  readonly text: string;
  readonly status: ChoiceStatus;
  readonly disabled: boolean;
  readonly onSelect: () => void;
}

const STATUS_CLASS: Record<ChoiceStatus, string> = {
  idle: "border-white/10 bg-white/[0.04] hover:border-gold/60 hover:bg-gold/10 hover:-translate-y-0.5",
  correct: "border-jade bg-jade/20 text-white shadow-[0_0_28px_rgb(46_229_157/0.45)] animate-pop-in",
  wrong: "border-ruby bg-ruby/20 animate-shake",
  dimmed: "border-white/5 bg-white/[0.02] opacity-50",
  eliminated: "border-white/5 bg-transparent opacity-25 line-through",
};

const STATUS_SR: Partial<Record<ChoiceStatus, string>> = {
  correct: " — correct answer",
  wrong: " — your answer, incorrect",
  eliminated: " — removed by 50/50",
};

export function ChoiceButton({ letter, text, status, disabled, onSelect }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={`focus-ring flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left font-semibold transition-all duration-150 disabled:cursor-default ${STATUS_CLASS[status]}`}
    >
      <span
        aria-hidden
        className={`grid size-8 shrink-0 place-items-center rounded-full font-display text-sm font-extrabold ${
          status === "correct"
            ? "bg-jade text-night"
            : status === "wrong"
              ? "bg-ruby text-white"
              : "bg-gradient-to-b from-gold-light to-gold text-[#3b2600]"
        }`}
      >
        {status === "correct" ? "✓" : status === "wrong" ? "✕" : letter}
      </span>
      <span className="flex-1">
        {text}
        <span className="sr-only">{STATUS_SR[status] ?? ""}</span>
      </span>
    </button>
  );
}
