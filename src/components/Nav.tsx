"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLayoutState } from "./LayoutContext";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
  id: string;
  chipLabel?: string;
  accent: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", id: "home", accent: "#16181a" },
  { name: "Arches", href: "/arches", id: "arches", chipLabel: "NVIDIA Jetson", accent: "#0f7a4d" },
  { name: "Acadia", href: "/acadia", id: "acadia", chipLabel: "Raspberry Pi", accent: "#c43a3a" },
  { name: "Zion", href: "/zion", id: "zion", chipLabel: "AMD Xilinx Zynq", accent: "#6b4fd3" },
  { name: "Pinnacle", href: "/pinnacle", id: "pinnacle", chipLabel: "NXP i.MX", accent: "#1f6fd6" },
  { name: "Joshua", href: "/joshua", id: "joshua", chipLabel: "TI Sitara", accent: "#d4622a" },
  { name: "Sequoia", href: "/sequoia", id: "sequoia", chipLabel: "Intel / AMD x86", accent: "#4a6478" },
  { name: "Contact", href: "/contact", id: "contact", accent: "#16181a" },
];

export default function Nav() {
  const { platformId } = useLayoutState();
  // Track focused as well as hovered so keyboard tabbing also reveals the
  // mono chip label — req.md §3 "hovering a platform item reveals a small
  // mono chip label"; §10 "aria-labels on rail/nav".
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const revealedId = hoveredId ?? focusedId;

  // Active accent of the CURRENT page we are on
  const currentPageItem = navItems.find((item) => item.id === platformId) || navItems[0];
  const currentAccent = currentPageItem.accent;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e4e2dd] bg-[#fafaf8]/80 backdrop-blur-md px-6 md:px-12 py-3 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-display font-bold text-lg tracking-wider text-[#16181a] flex items-center gap-2">
          <span>SOCCENTRIC</span>
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: currentAccent }}
          />
        </Link>

        {/* Navigation Items */}
        <nav aria-label="Primary" className="flex items-center gap-2 lg:gap-6">
          {navItems.map((item) => {
            const isActive = platformId === item.id;
            const isRevealed = revealedId === item.id;

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center py-1"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={item.chipLabel ? `${item.name} — ${item.chipLabel}` : item.name}
                  onFocus={() => setFocusedId(item.id)}
                  onBlur={() => setFocusedId(null)}
                  // py-1 + min-h gives a touch target ≥ 32px (req.md §10
                  // "touch-friendly targets" — full 44px is hit by the
                  // px-3 + py-2 wrapper below).
                  className="font-display font-medium text-sm transition-colors duration-200 block text-[#16181a] hover:text-[#16181a]/80 px-3 py-2 min-h-[44px] flex items-center"
                >
                  {item.name}
                </Link>

                {/* Active Link Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: item.accent }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Sub-label showing processor type on hover or focus */}
                {item.chipLabel && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 pointer-events-none overflow-hidden h-5 min-w-[120px] text-center">
                    <motion.span
                      initial={{ y: -15, opacity: 0 }}
                      animate={isRevealed ? { y: 0, opacity: 1 } : { y: -15, opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="font-mono text-[10px] text-[#6b7075] uppercase block whitespace-nowrap"
                    >
                      {item.chipLabel}
                    </motion.span>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
