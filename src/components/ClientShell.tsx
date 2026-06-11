"use client";

import React, { useState, useEffect } from "react";
import { LayoutProvider } from "./LayoutContext";
import Nav from "./Nav";
import ProgressBar from "./ProgressBar";
import BootRail from "./BootRail";
import StatusLine from "./StatusLine";
import BootTerminal from "./BootTerminal";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [bootFinished, setBootFinished] = useState(false);

  useEffect(() => {
    // Check if the boot screen was already shown in this session
    const hasBooted = sessionStorage.getItem("soccentric_booted");
    if (hasBooted) {
      setBootFinished(true);
    }
  }, []);

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
