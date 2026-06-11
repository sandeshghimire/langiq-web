import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoCcentric — Zion Xilinx Zynq Platform",
  description: "Zion: Xilinx Zynq platform and programmable logic bitstreams. When the deadline is in microseconds, software isn't enough.",
};

export default function ZionPage() {
  const platform = getPlatformById("zion");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
