import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin sign in", robots: { index: false, follow: false } };

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function AdminLoginPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const failed = params.error !== undefined;

  return (
    <div className="mx-auto max-w-sm space-y-6 pt-10">
      <h1 className="text-center font-display text-3xl font-extrabold">
        <span className="gold-text">Activity log</span>
      </h1>
      <form method="post" action="/api/admin/login" className="panel space-y-4 p-6">
        {failed && (
          <p role="alert" className="rounded-xl border border-ruby/40 bg-ruby/10 px-4 py-3 text-sm font-semibold">
            Wrong admin password.
          </p>
        )}
        <label className="block space-y-1.5">
          <span className="text-sm font-bold text-white/80">Admin password</span>
          <input
            name="password"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
            className="focus-ring w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white"
          />
        </label>
        <button
          type="submit"
          className="focus-ring w-full rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light px-6 py-3 font-display text-lg font-extrabold text-night"
        >
          Open
        </button>
      </form>
    </div>
  );
}
