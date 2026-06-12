"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` when `document.visibilityState === "visible"`. Subscribes
 * to the `visibilitychange` event so the value updates when the user
 * switches tabs, backgrounds the window, or returns.
 *
 * Used to gate idle animation loops (LivingChip's BSP / OTA / probe-log
 * intervals, BootRail's ticking clock) — when the tab is hidden, those
 * timers are skipped and the underlying `requestAnimationFrame`-driven
 * framer-motion infinite animations also stop firing because the page
 * is throttled by the browser. Net effect: zero CPU/RAF work in the
 * background.
 */
export function usePageVisibility(): boolean {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof document === "undefined") return true;
    return document.visibilityState === "visible";
  });

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return isVisible;
}
