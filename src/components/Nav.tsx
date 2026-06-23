"use client";

import React from "react";
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

  // Active accent of the CURRENT page we are on. Falls back to the neutral
  // brand ink on the home/non-platform pages (Home was removed from the nav,
  // the SoCcentric brand link covers it).
  const currentPageItem = navItems.find((item) => item.id === platformId);
  const currentAccent = currentPageItem?.accent ?? "#16181a";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8e3d8] bg-[#faf9f5]/80 backdrop-blur-md px-6 md:px-12 py-3 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-display font-semibold text-lg tracking-tight text-[#1f1e1c] flex items-center gap-2">
          <span>SoCcentric</span>
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: currentAccent }}
          />
        </Link>

        {/* Navigation Items */}
        <nav aria-label="Primary" className="flex items-center gap-2 lg:gap-6">
          {navItems.map((item) => {
            const isActive = platformId === item.id;

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center py-1"
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={item.chipLabel ? `${item.name} — ${item.chipLabel}` : item.name}
                  // py-1 + min-h gives a touch target ≥ 32px (req.md §10
                  // "touch-friendly targets" — full 44px is hit by the
                  // px-3 + py-2 wrapper below).
                  className="font-display font-medium text-[15px] transition-colors duration-200 block text-[#1f1e1c] hover:text-[#1f1e1c]/70 px-3 py-2 min-h-[44px] flex items-center tracking-tight whitespace-nowrap"
                >
                  {item.chipLabel ? item.chipLabel : item.name}
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
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
