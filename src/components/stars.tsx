interface StarsProps {
  readonly count: number;
  readonly size?: "sm" | "lg";
  readonly animate?: boolean;
}

export function Stars({ count, size = "sm", animate = false }: StarsProps) {
  const cls = size === "lg" ? "text-5xl" : "text-sm";
  return (
    <span className={`inline-flex gap-1 ${cls}`} role="img" aria-label={`${count} of 3 stars`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden
          className={`${i < count ? "text-gold drop-shadow-[0_0_8px_rgb(247_201_72/0.8)]" : "text-white/15"} ${
            animate && i < count ? "animate-pop-in" : ""
          }`}
          style={animate ? { animationDelay: `${300 + i * 250}ms` } : undefined}
        >
          ★
        </span>
      ))}
    </span>
  );
}
