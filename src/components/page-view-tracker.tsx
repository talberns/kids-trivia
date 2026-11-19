"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { track } from "@/lib/activity/track";
import { isChromeless } from "@/lib/chromeless";

/** Logs each page a signed-in player opens. */
export function PageViewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (!isChromeless(pathname)) track({ type: "page_view", path: pathname });
  }, [pathname]);
  return null;
}
