import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zion — Xilinx Zynq",
  description: "Zion: Xilinx Zynq platform and programmable logic bitstreams. When the deadline is in microseconds, software isn't enough.",
  openGraph: {
    title: "Zion — Xilinx Zynq",
    description: "When the deadline is in microseconds, software isn't enough.",
    url: "https://soccentric.com/zion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion — Xilinx Zynq",
    description: "When the deadline is in microseconds, software isn't enough.",
  },
};

export default function ZionPage() {
  const platform = getPlatformById("zion");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
