import type { InputHTMLAttributes } from "react";

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
  readonly hint?: string;
}

/** A labelled text input styled for the sign-in and sign-up forms. */
export function AuthField({ label, hint, ...input }: AuthFieldProps) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-bold text-white/80">{label}</span>
      <input
        {...input}
        className="focus-ring w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30"
      />
      {hint && <span className="block text-xs text-white/50">{hint}</span>}
    </label>
  );
}

export function AuthError({ message }: { readonly message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="rounded-xl border border-ruby/40 bg-ruby/10 px-4 py-3 text-sm font-semibold text-white">
      {message}
    </p>
  );
}

export const authButtonClass =
  "focus-ring w-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-6 py-3.5 font-display text-lg font-extrabold text-night shadow-lg";
