import { NextResponse, type NextRequest } from "next/server";
import { isAdmin } from "@/lib/auth/current";
import { describeEvent } from "@/lib/activity/events";
import { loadActivity } from "@/lib/activity/store";

export const dynamic = "force-dynamic";

/** Quotes a CSV cell and neutralises spreadsheet formulas (cells starting with = + - @). */
function cell(value: string): string {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}

export async function GET(request: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const player = request.nextUrl.searchParams.get("player") ?? undefined;
  const report = await loadActivity({ player, limit: 5000 });
  if (!report.ok) return NextResponse.json({ error: report.reason }, { status: 503 });

  const header = ["time_utc", "first_last_name", "event", "details", "session", "country", "user_agent"];
  const rows = report.events.map((e) =>
    [e.createdAt, e.name, e.type, describeEvent(e.type, e.data), e.sessionId ?? "", e.country ?? "", e.userAgent ?? ""]
      .map(cell)
      .join(","),
  );
  return new NextResponse([header.join(","), ...rows].join("\r\n"), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="apostlequiz-activity.csv"`,
      "cache-control": "no-store",
    },
  });
}
