import type { Metadata } from "next";
import { Museum } from "@/components/museum";
import { ARTIFACTS } from "@/content/artifacts";
import { ERAS } from "@/content/eras";

export const metadata: Metadata = { title: "Museum" };

export default function MuseumPage() {
  const eraNames = Object.fromEntries(ERAS.map((e) => [e.id, e.name]));
  return (
    <div className="space-y-6">
      <header className="pt-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan">Your collection</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">
          <span className="gold-text">The Museum</span>
        </h1>
        <p className="mx-auto mt-2 max-w-md text-white/70">Clear a level to unearth its artifact.</p>
      </header>
      <Museum artifacts={ARTIFACTS} eraNames={eraNames} />
    </div>
  );
}
