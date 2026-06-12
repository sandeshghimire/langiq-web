import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinnacle — NXP i.MX",
  description:
    "Pinnacle: Production-Ready Embedded Linux for NXP i.MX — 8M (Mini / Nano / Plus), 93, 95. HAB / AHAB secure boot, EdgeLock integration, RTOS on Cortex-M7 / M33 with RPMsg.",
  openGraph: {
    title: "Pinnacle — NXP i.MX",
    description: "Production-Ready Embedded Linux for NXP i.MX — 8M, 93, 95.",
    url: "https://soccentric.com/pinnacle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinnacle — NXP i.MX",
    description: "Production-Ready Embedded Linux for NXP i.MX — 8M, 93, 95.",
  },
};

export default function PinnaclePage() {
  const platform = getPlatformById("pinnacle");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
