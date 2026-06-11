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
