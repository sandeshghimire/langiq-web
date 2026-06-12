import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arches — NVIDIA Jetson",
  description: "Arches: NVIDIA Jetson platform bring-up and real-time control. Inference on the GPU. Control loops on the MCU. One board does the whole robot.",
  openGraph: {
    title: "Arches — NVIDIA Jetson",
    description: "Inference on the GPU. Control loops on the MCU. One board does the whole robot.",
    url: "https://soccentric.com/arches",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arches — NVIDIA Jetson",
    description: "Inference on the GPU. Control loops on the MCU. One board does the whole robot.",
  },
};

export default function ArchesPage() {
  const platform = getPlatformById("arches");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
