import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joshua — TI Sitara",
  description: "Joshua: TI Sitara real-time PRUs and industrial EtherCAT. FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem.",
  openGraph: {
    title: "Joshua — TI Sitara",
    description: "FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem.",
    url: "https://soccentric.com/joshua",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua — TI Sitara",
    description: "FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem.",
  },
};

export default function JoshuaPage() {
  const platform = getPlatformById("joshua");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
