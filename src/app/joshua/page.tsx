import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joshua — TI Sitara",
  description:
    "Joshua: Production-Ready Embedded Linux for TI Sitara — AM335x, AM62x, AM64x. PRU-ICSS firmware, EtherCAT / PROFINET on PRU, RTOS on Cortex-M4F / R5F.",
  openGraph: {
    title: "Joshua — TI Sitara",
    description: "Production-Ready Embedded Linux for TI Sitara — AM335x, AM62x, AM64x.",
    url: "https://soccentric.com/joshua",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua — TI Sitara",
    description: "Production-Ready Embedded Linux for TI Sitara — AM335x, AM62x, AM64x.",
  },
};

export default function JoshuaPage() {
  const platform = getPlatformById("joshua");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
