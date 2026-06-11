"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface LayoutContextType {
  activeStage: number; // 1 to 9
  setActiveStage: (stage: number) => void;
  scrollProgress: number; // 0 to 100
  setScrollProgress: (progress: number) => void;
  platformId: string; // "home", "arches", "acadia", etc.
  isContactSubmitted: boolean;
  setIsContactSubmitted: (val: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

// Map the URL pathname to the platformId that every consumer reads.
function platformIdForPathname(pathname: string): string {
  const p = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  if (p === "") return "home";
  return p;
}

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [activeStage, setActiveStage] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  // platformId is a pure derivation from pathname; no effect needed.
  const platformId = platformIdForPathname(pathname);

  // Reset scroll/contact state when the route changes. This is a legitimate
  // external-system sync (the URL is the source of truth, and we have to
  // mirror the change into local React state), so the set-state-in-effect
  // rule doesn't apply here.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveStage(1);
    setScrollProgress(0);
    setIsContactSubmitted(false);
  }, [pathname]);

  return (
    <LayoutContext.Provider
      value={{
        activeStage,
        setActiveStage,
        scrollProgress,
        setScrollProgress,
        platformId,
        isContactSubmitted,
        setIsContactSubmitted,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutState() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}
