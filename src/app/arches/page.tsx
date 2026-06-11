import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoCcentric — Arches NVIDIA Jetson Platform",
  description: "Arches: NVIDIA Jetson platform bring-up and real-time control. Inference on the GPU. Control loops on the MCU. One board does the whole robot.",
};

export default function ArchesPage() {
  const platform = getPlatformById("arches");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
