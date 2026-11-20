import type { Metadata } from "next";
import Link from "next/link";
import { AuthError, AuthField, authButtonClass } from "@/components/auth-field";
import { safeNextPath } from "@/lib/auth/session";

export const metadata: Metadata = { title: "Create account", robots: { index: false, follow: false } };

const ERRORS: Record<string, string> = {
  invite: "That invite code isn't right. Ask the organiser for the code.",
  name: "Please enter your first and last name (letters, spaces, apostrophes and hyphens only).",
  username: "Usernames are 3–24 characters: letters, numbers, dots, dashes or underscores.",
  taken: "That username is already taken. Please choose another.",
  password: "Passwords need at least 8 characters.",
  mismatch: "The two passwords don't match.",
  unavailable: "Accounts can't be created right now. Please try again later.",
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? "";

export default async function SignupPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const next = safeNextPath(one(params.next));

  return (
    <div className="mx-auto max-w-md space-y-6 pt-10">
      <header className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan">Private preview</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">
          <span className="gold-text">Create your account</span>
        </h1>
        <p className="mt-2 text-white/70">Your points, stars and streak are saved to your account.</p>
      </header>

      <form method="post" action="/api/signup" className="panel space-y-4 p-6">
        <input type="hidden" name="next" value={next} />
        <AuthError message={ERRORS[one(params.error)]} />
        <div className="grid gap-4 sm:grid-cols-2">
          <AuthField label="First name" name="firstName" required maxLength={40} autoComplete="given-name" defaultValue={one(params.first)} />
          <AuthField label="Last name" name="lastName" required maxLength={40} autoComplete="family-name" defaultValue={one(params.last)} />
        </div>
        <AuthField
          label="Username"
          name="username"
          required
          minLength={3}
          maxLength={24}
          autoComplete="username"
          autoCapitalize="none"
          hint="3–24 characters. You'll use this to sign in."
          defaultValue={one(params.username)}
        />
        <AuthField label="Password" name="password" type="password" required minLength={8} maxLength={100} autoComplete="new-password" hint="At least 8 characters." />
        <AuthField label="Confirm password" name="passwordConfirm" type="password" required minLength={8} maxLength={100} autoComplete="new-password" />
        <AuthField label="Invite code" name="inviteCode" type="password" required maxLength={100} autoComplete="off" hint="The code the organiser gave you." />
        <button type="submit" className={authButtonClass}>
          Create account
        </button>
      </form>

      <p className="text-center text-sm text-white/70">
        Already have an account?{" "}
        <Link href={next === "/" ? "/login" : `/login?next=${encodeURIComponent(next)}`} className="focus-ring rounded font-bold text-gold underline-offset-4 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
