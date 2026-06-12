"use client";

import React, { useState } from "react";
import { LayoutProvider } from "./LayoutContext";
import Nav from "./Nav";
import ProgressBar from "./ProgressBar";
import BootRail from "./BootRail";
import StatusLine from "./StatusLine";
import BootTerminal from "./BootTerminal";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  // Skip the boot screen on re-visits within the same session.
  const [bootFinished, setBootFinished] = useState<boolean>(
    () => typeof window !== "undefined" && sessionStorage.getItem("soccentric_booted") !== null
  );

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
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-white focus:text-[#16181a] focus:px-4 focus:py-2 focus:border focus:border-[#16181a] focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider"
      >
        Skip to main content
      </a>

      <ProgressBar />
      {!bootFinished && <BootTerminal onComplete={handleBootComplete} />}

      {/* Dynamic contents */}
      <div className={`transition-opacity duration-700 ${bootFinished ? "opacity-100" : "opacity-0"}`}>
        <Nav />
        {children}
        <BootRail />
        <StatusLine />
      </div>
    </LayoutProvider>
  );
}
