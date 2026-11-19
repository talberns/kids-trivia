"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Journey", icon: "🗺️" },
  { href: "/daily", label: "Daily", icon: "🎁" },
  { href: "/museum", label: "Museum", icon: "🏛️" },
  { href: "/about", label: "Sources", icon: "📚" },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  // Keep play screens (levels and the daily challenge) distraction-free.
  if (pathname.startsWith("/play") || pathname.startsWith("/daily")) return null;

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-white/5 bg-night/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
    >
      <ul className="mx-auto grid max-w-3xl grid-cols-4">
        {ITEMS.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`focus-ring flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold transition-colors ${
                  active ? "text-gold" : "text-white/55 hover:text-white"
                }`}
              >
                <span className="text-xl" aria-hidden>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
