import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acadia — Raspberry Pi",
  description:
    "Acadia: Production-Ready Embedded Linux for Raspberry Pi — CM4, CM5, Pi 4, Pi 5, Pico. Custom Yocto build, carrier-board bring-up, tryboot A/B OTA, signed boot.",
  openGraph: {
    title: "Acadia — Raspberry Pi",
    description: "Production-Ready Embedded Linux for Raspberry Pi — CM4, CM5, Pi 4, Pi 5, Pico.",
    url: "https://soccentric.com/acadia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acadia — Raspberry Pi",
    description: "Production-Ready Embedded Linux for Raspberry Pi — CM4, CM5, Pi 4, Pi 5, Pico.",
  },
};

export default function AcadiaPage() {
  const platform = getPlatformById("acadia");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
