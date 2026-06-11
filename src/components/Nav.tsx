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
  { name: "Acadia", href: "/acadia", id: "acadia", chipLabel: "Raspberry Pi CM5", accent: "#c43a3a" },
  { name: "Zion", href: "/zion", id: "zion", chipLabel: "Xilinx Zynq", accent: "#6b4fd3" },
  { name: "Pinnacle", href: "/pinnacle", id: "pinnacle", chipLabel: "NXP i.MX", accent: "#1f6fd6" },
  { name: "Joshua", href: "/joshua", id: "joshua", chipLabel: "TI Sitara", accent: "#d4622a" },
  { name: "Sequoia", href: "/sequoia", id: "sequoia", chipLabel: "Intel / AMD x86", accent: "#4a6478" },
  { name: "Contact", href: "/contact", id: "contact", accent: "#16181a" },
];

export default function Nav() {
  const { platformId } = useLayoutState();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
        <nav className="flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => {
            const isActive = platformId === item.id;
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center py-1"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link
                  href={item.href}
                  className="font-display font-medium text-sm transition-colors duration-200 block text-[#16181a] hover:text-[#16181a]/80"
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

                {/* Sub-label showing processor type on hover */}
                {item.chipLabel && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 pointer-events-none overflow-hidden h-5 min-w-[120px] text-center">
                    <motion.span
                      initial={{ y: -15, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : -15, opacity: isHovered ? 1 : 0 }}
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
