/**
 * Tiny Web Audio synthesiser — no audio files to download, and nothing plays
 * until the player has interacted with the page (browser autoplay rules).
 */

export type SoundName = "tap" | "correct" | "wrong" | "combo" | "coin" | "levelUp" | "jackpot";

type Note = readonly [frequency: number, offset: number, duration: number, wave?: OscillatorType];

const PATTERNS: Record<SoundName, readonly Note[]> = {
  tap: [[880, 0, 0.04, "triangle"]],
  correct: [
    [659.25, 0, 0.12],
    [987.77, 0.08, 0.28],
  ],
  wrong: [
    [233.08, 0, 0.18, "triangle"],
    [196, 0.12, 0.32, "triangle"],
  ],
  combo: [
    [523.25, 0, 0.09],
    [659.25, 0.07, 0.09],
    [783.99, 0.14, 0.09],
    [1046.5, 0.21, 0.32],
  ],
  coin: [
    [1318.51, 0, 0.07, "square"],
    [1975.53, 0.06, 0.22, "square"],
  ],
  levelUp: [
    [392, 0, 0.12],
    [523.25, 0.12, 0.12],
    [659.25, 0.24, 0.12],
    [783.99, 0.36, 0.4],
  ],
  jackpot: [
    [523.25, 0, 0.1],
    [659.25, 0.08, 0.1],
    [783.99, 0.16, 0.1],
    [1046.5, 0.24, 0.1],
    [1318.51, 0.32, 0.1],
    [1567.98, 0.4, 0.5],
    [2093, 0.48, 0.6],
  ],
};

let context: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!context) {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return null;
      context = new Ctor();
    }
    if (context.state === "suspended") void context.resume();
    return context;
  } catch {
    return null;
  }
}

export function playSound(name: SoundName, enabled: boolean): void {
  if (!enabled) return;
  const ctx = getContext();
  if (!ctx) return;
  const start = ctx.currentTime + 0.01;
  const volume = name === "coin" || name === "tap" ? 0.04 : 0.1;
  for (const [frequency, offset, duration, wave = "sine"] of PATTERNS[name]) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = start + offset;
    osc.type = wave;
    osc.frequency.setValueAtTime(frequency, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + duration + 0.05);
  }
}
