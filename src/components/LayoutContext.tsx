"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface LayoutContextType {
  activeStage: number; // 1 to 9
  setActiveStage: (stage: number) => void;
  scrollProgress: number; // 0 to 100
  setScrollProgress: (progress: number) => void;
  platformId: string; // "home", "arches", "acadia", etc.
  setPlatformId: (id: string) => void;
  isContactSubmitted: boolean;
  setIsContactSubmitted: (val: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [activeStage, setActiveStage] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [platformId, setPlatformId] = useState("home");
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const pathname = usePathname();

  // Automatically update platformId when path changes
  useEffect(() => {
    const p = pathname.replace(/^\//, "");
    if (p === "") {
      setPlatformId("home");
      setActiveStage(1);
      setScrollProgress(0);
    } else if (p === "contact") {
      setPlatformId("contact");
      setActiveStage(1);
      setScrollProgress(0);
    } else {
      setPlatformId(p);
      setActiveStage(1);
      setScrollProgress(0);
    }
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
        setPlatformId,
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
