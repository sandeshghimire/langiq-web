import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoCcentric — Joshua TI Sitara Platform",
  description: "Joshua: TI Sitara real-time PRUs and industrial EtherCAT. FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem.",
};

export default function JoshuaPage() {
  const platform = getPlatformById("joshua");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
