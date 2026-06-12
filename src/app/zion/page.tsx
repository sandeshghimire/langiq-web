import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zion — AMD Xilinx Zynq",
  description:
    "Zion: Production-Ready Embedded Linux for AMD Xilinx Zynq — 7000, UltraScale+ MPSoC, Versal, Kria. PetaLinux, bitstream OTA, partial reconfiguration, OpenAMP / RPMsg.",
  openGraph: {
    title: "Zion — AMD Xilinx Zynq",
    description:
      "Production-Ready Embedded Linux for AMD Xilinx Zynq — 7000, UltraScale+ MPSoC, Versal, Kria.",
    url: "https://soccentric.com/zion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion — AMD Xilinx Zynq",
    description:
      "Production-Ready Embedded Linux for AMD Xilinx Zynq — 7000, UltraScale+ MPSoC, Versal, Kria.",
  },
};

export default function ZionPage() {
  const platform = getPlatformById("zion");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
