import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arches — NVIDIA Jetson",
  description:
    "Arches: Production-Ready Embedded Linux for NVIDIA Jetson — TX2, Xavier NX, Orin, Thor. Hardened Yocto build, custom BSP, multi-stage boot, A/B OTA, RTOS on SPE.",
  openGraph: {
    title: "Arches — NVIDIA Jetson",
    description:
      "Production-Ready Embedded Linux for NVIDIA Jetson — TX2, Xavier NX, Orin, Thor.",
    url: "https://soccentric.com/arches",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arches — NVIDIA Jetson",
    description:
      "Production-Ready Embedded Linux for NVIDIA Jetson — TX2, Xavier NX, Orin, Thor.",
  },
};

export default function ArchesPage() {
  const platform = getPlatformById("arches");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
