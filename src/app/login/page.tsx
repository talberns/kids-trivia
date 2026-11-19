import type { Metadata } from "next";
import { safeNextPath } from "@/lib/auth/session";

export const metadata: Metadata = { title: "Sign in", robots: { index: false, follow: false } };

const ERRORS: Record<string, string> = {
  name: "Please enter your first and last name (letters, spaces, apostrophes and hyphens only).",
  password: "That password isn't right. Please try again.",
  unavailable: "Sign-in isn't available right now. Please try again later.",
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? "";

export default async function LoginPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const error = ERRORS[one(params.error)];
  const next = safeNextPath(one(params.next));

  return (
    <div className="mx-auto max-w-md space-y-6 pt-10">
      <header className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan">Private preview</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">
          <span className="gold-text">Apostle Quiz</span>
        </h1>
        <p className="mt-2 text-white/70">Sign in with your name and the password you were given.</p>
      </header>

      <form method="post" action="/api/login" className="panel space-y-4 p-6">
        <input type="hidden" name="next" value={next} />
        {error && (
          <p role="alert" className="rounded-xl border border-ruby/40 bg-ruby/10 px-4 py-3 text-sm font-semibold text-white">
            {error}
          </p>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm font-bold text-white/80">First name</span>
            <input
              name="firstName"
              required
              maxLength={40}
              autoComplete="given-name"
              defaultValue={one(params.first)}
              className="focus-ring w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-bold text-white/80">Last name</span>
            <input
              name="lastName"
              required
              maxLength={40}
              autoComplete="family-name"
              defaultValue={one(params.last)}
              className="focus-ring w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30"
            />
          </label>
        </div>
        <label className="block space-y-1.5">
          <span className="text-sm font-bold text-white/80">Password</span>
          <input
            name="password"
            type="password"
            required
            maxLength={100}
            autoComplete="current-password"
            autoFocus={Boolean(one(params.first))}
            className="focus-ring w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white"
          />
        </label>
        <button
          type="submit"
          className="focus-ring w-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-6 py-3.5 font-display text-lg font-extrabold text-night shadow-lg"
        >
          Enter
        </button>
      </form>

      <p className="px-2 text-center text-xs leading-relaxed text-white/55">
        While this site is in testing, we record your name and what you do in the game (pages opened, levels played,
        answers and scores) so the organiser can improve it. We don&apos;t record your IP address. Ask the organiser if
        you&apos;d like your activity deleted.
      </p>
    </div>
  );
}
