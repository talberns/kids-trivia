import { DailyCard } from "@/components/daily-card";
import { JourneyMap } from "@/components/journey-map";
import { ERAS } from "@/content/eras";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="pt-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan">Bible history trivia</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          <span className="gold-text">See the Scriptures</span>
          <br />
          through their eyes
        </h1>
        <figure className="mx-auto mt-4 max-w-xl">
          <blockquote className="font-serif text-xl italic leading-snug text-white/90">
            &ldquo;Ask and it will be given to you; seek and you will find; knock and the door will be opened to
            you.&rdquo;
          </blockquote>
          <figcaption className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold/80">
            Matthew 7:7 (NIV)
          </figcaption>
        </figure>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Every answer opens a window into the world of the Bible — its history, its cultures and its traditions,
          with sources you can check.
        </p>
      </section>

      <DailyCard />

      <JourneyMap eras={ERAS} />
    </div>
  );
}
