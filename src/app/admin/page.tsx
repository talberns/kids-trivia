import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth/current";
import { describeEvent, EVENT_LABEL } from "@/lib/activity/events";
import { loadActivity } from "@/lib/activity/store";

export const metadata: Metadata = { title: "Activity log", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const TIME_ZONE = "America/Toronto";
const dateTime = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function formatTime(iso: string) {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : dateTime.format(date);
}

function device(userAgent: string | null): string {
  if (!userAgent) return "";
  if (/iPhone|iPad/.test(userAgent)) return "iPhone/iPad";
  if (/Android/.test(userAgent)) return "Android";
  if (/Macintosh/.test(userAgent)) return "Mac";
  if (/Windows/.test(userAgent)) return "Windows";
  return "Other";
}

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function AdminPage({ searchParams }: PageProps) {
  if (!(await isAdmin())) redirect("/admin/login");
  const params = await searchParams;
  const player = typeof params.player === "string" ? params.player : undefined;
  const hideViews = params.views !== "1";
  const report = await loadActivity({ player, limit: 500 });

  if (!report.ok) {
    return (
      <div className="panel mt-8 p-6">
        <h1 className="font-display text-2xl font-extrabold">Activity log</h1>
        <p className="mt-2 text-white/75">
          {report.reason === "no-database"
            ? "No database is connected (DATABASE_URL is not set), so nothing is being recorded."
            : "The activity database could not be reached. Try again in a minute."}
        </p>
      </div>
    );
  }

  const selected = player ? report.players.find((p) => p.playerKey === player) : undefined;
  const events = hideViews ? report.events.filter((e) => e.type !== "page_view") : report.events;
  const query = (extra: Record<string, string | undefined>) => {
    const search = new URLSearchParams();
    const merged = { player, views: hideViews ? undefined : "1", ...extra };
    for (const [key, value] of Object.entries(merged)) if (value) search.set(key, value);
    const text = search.toString();
    return text ? `/admin?${text}` : "/admin";
  };

  return (
    <div className="space-y-6 pt-4">
      <header className="flex flex-wrap items-center gap-3">
        <h1 className="font-display text-3xl font-extrabold">
          <span className="gold-text">Activity log</span>
        </h1>
        <div className="ml-auto flex items-center gap-2 text-sm">
          <a href={`/admin/export${player ? `?player=${encodeURIComponent(player)}` : ""}`} className="focus-ring rounded-full bg-white/10 px-4 py-2 font-bold hover:bg-white/15">
            Download CSV
          </a>
          <form method="post" action="/api/admin/logout">
            <button type="submit" className="focus-ring rounded-full bg-white/5 px-4 py-2 font-bold text-white/70 hover:bg-white/10">
              Sign out
            </button>
          </form>
        </div>
      </header>

      <section className="panel overflow-hidden" aria-labelledby="players-heading">
        <h2 id="players-heading" className="px-5 pt-4 font-display text-xl font-extrabold">
          Players ({report.players.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wider text-white/50">
              <tr>
                <th className="px-5 py-2">Name</th>
                <th className="px-3 py-2">Last active</th>
                <th className="px-3 py-2">First seen</th>
                <th className="px-3 py-2 text-right">Logins</th>
                <th className="px-3 py-2 text-right">Rounds</th>
                <th className="px-3 py-2 text-right">Answers</th>
                <th className="px-5 py-2 text-right">Correct</th>
              </tr>
            </thead>
            <tbody>
              {report.players.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-4 text-white/60">
                    No activity yet.
                  </td>
                </tr>
              )}
              {report.players.map((p) => (
                <tr key={p.playerKey} className={`border-t border-white/5 ${p.playerKey === player ? "bg-gold/10" : ""}`}>
                  <td className="px-5 py-2 font-semibold">
                    <Link className="focus-ring rounded hover:text-gold" href={query({ player: p.playerKey })}>
                      {p.name}
                    </Link>
                    {p.failedLogins > 0 && (
                      <span className="ml-2 text-xs text-ruby" title="Wrong-password attempts">
                        {p.failedLogins} failed
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-white/75">{formatTime(p.lastSeen)}</td>
                  <td className="px-3 py-2 text-white/60">{formatTime(p.firstSeen)}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{p.logins}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{p.rounds}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{p.answers}</td>
                  <td className="px-5 py-2 text-right tabular-nums">
                    {p.answers > 0 ? `${Math.round((p.correct / p.answers) * 100)}%` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel overflow-hidden" aria-labelledby="events-heading">
        <div className="flex flex-wrap items-center gap-3 px-5 pt-4">
          <h2 id="events-heading" className="font-display text-xl font-extrabold">
            {selected ? `Activity: ${selected.name}` : "Recent activity"}
          </h2>
          <div className="ml-auto flex gap-2 text-xs font-bold">
            {player && (
              <Link href={query({ player: undefined })} className="focus-ring rounded-full bg-white/10 px-3 py-1.5">
                Show everyone
              </Link>
            )}
            <Link href={query({ views: hideViews ? "1" : undefined })} className="focus-ring rounded-full bg-white/5 px-3 py-1.5">
              {hideViews ? "Include page views" : "Hide page views"}
            </Link>
          </div>
        </div>
        <p className="px-5 pt-1 text-xs text-white/50">Latest 500 events · times in Toronto time</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wider text-white/50">
              <tr>
                <th className="px-5 py-2">When</th>
                <th className="px-3 py-2">Who</th>
                <th className="px-3 py-2">What</th>
                <th className="px-3 py-2">Details</th>
                <th className="px-5 py-2">Device</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e) => (
                <tr key={e.id} className="border-t border-white/5 align-top">
                  <td className="whitespace-nowrap px-5 py-2 text-white/70">{formatTime(e.createdAt)}</td>
                  <td className="whitespace-nowrap px-3 py-2 font-semibold">{e.name}</td>
                  <td className={`whitespace-nowrap px-3 py-2 ${e.type === "login_failed" ? "text-ruby" : ""}`}>
                    {EVENT_LABEL[e.type as keyof typeof EVENT_LABEL] ?? e.type}
                  </td>
                  <td className="px-3 py-2 text-white/75">{describeEvent(e.type, e.data)}</td>
                  <td className="whitespace-nowrap px-5 py-2 text-white/55">
                    {[device(e.userAgent), e.country].filter(Boolean).join(" · ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
