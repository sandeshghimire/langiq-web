"use client";

import React, { useEffect, useState } from "react";
import { LayoutProvider } from "./LayoutContext";
import Nav from "./Nav";
import ProgressBar from "./ProgressBar";
import StatusLine from "./StatusLine";
import BootTerminal from "./BootTerminal";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  // Skip the boot screen on re-visits within the same session. We start
  // `bootFinished` at `false` so the server-rendered HTML always matches
  // the first client render (both show the BootTerminal); the
  // sessionStorage check runs in an effect on mount and is allowed to
  // change the value then. Reading sessionStorage in the initial-state
  // lazy initializer would split the server and client trees and trip a
  // React hydration mismatch (#69 regression lesson).
  const [bootFinished, setBootFinished] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("soccentric_booted") !== null) {
      // sessionStorage is the source of truth for "did the boot screen
      // finish on a prior visit"; reading it in a mount-only effect and
      // mirroring into React state is a legitimate external-system sync,
      // not a cascading render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBootFinished(true);
      return;
    }
    // `?nohup=1` query param or `prefers-reduced-motion` skips the boot
    // terminal entirely. The dev workflow on the LAN hits this so the
    // user actually sees the page instead of being trapped at a login
    // prompt they didn't ask for.
    const params = new URLSearchParams(window.location.search);
    if (params.get("nohup") === "1") {
      setBootFinished(true);
      return;
    }
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setBootFinished(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem("soccentric_booted", "true");
    setBootFinished(true);
  };

  return (
    <LayoutProvider>
      {/* Skip-to-content — req.md §10: keyboard users should not have to
          tab through the fixed top nav to reach the main content. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-white focus:text-[#1f1e1c] focus:px-4 focus:py-2 focus:border focus:border-[#1f1e1c] focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider"
      >
        Skip to main content
      </a>

      <ProgressBar />
      {!bootFinished && <BootTerminal onComplete={handleBootComplete} />}

      {/* Dynamic contents */}
      <div className={`transition-opacity duration-700 ${bootFinished ? "opacity-100" : "opacity-0"}`}>
        <Nav />
        {children}
        <StatusLine />
      </div>
    </LayoutProvider>
  );
}
