import type { Metadata } from "next";
import Link from "next/link";
import { AuthError, AuthField, authButtonClass } from "@/components/auth-field";
import { safeNextPath } from "@/lib/auth/session";

export const metadata: Metadata = { title: "Sign in", robots: { index: false, follow: false } };

const ERRORS: Record<string, string> = {
  credentials: "That username and password don't match. Please try again.",
  unavailable: "Sign-in isn't available right now. Please try again later.",
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? "";

export default async function LoginPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const next = safeNextPath(one(params.next));
  const signupHref = next === "/" ? "/signup" : `/signup?next=${encodeURIComponent(next)}`;

  return (
    <div className="mx-auto max-w-md space-y-6 pt-10">
      <header className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan">Private preview</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">
          <span className="gold-text">Apostle Quiz</span>
        </h1>
        <p className="mt-2 text-white/70">Sign in to pick up where you left off, on any device.</p>
      </header>

      <form method="post" action="/api/login" className="panel space-y-4 p-6">
        <input type="hidden" name="next" value={next} />
        <AuthError message={ERRORS[one(params.error)]} />
        <AuthField
          label="Username"
          name="username"
          required
          maxLength={24}
          autoComplete="username"
          autoCapitalize="none"
          defaultValue={one(params.username)}
        />
        <AuthField
          label="Password"
          name="password"
          type="password"
          required
          maxLength={100}
          autoComplete="current-password"
          autoFocus={Boolean(one(params.username))}
        />
        <button type="submit" className={authButtonClass}>
          Sign in
        </button>
      </form>

      <p className="text-center text-sm text-white/70">
        New here?{" "}
        <Link href={signupHref} className="focus-ring rounded font-bold text-gold underline-offset-4 hover:underline">
          Create an account
        </Link>
      </p>
      <p className="text-center text-xs text-white/45">Forgot your password? Ask the organiser to reset it.</p>
    </div>
  );
}
