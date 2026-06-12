import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acadia — Raspberry Pi CM5",
  description: "Acadia: Industrialized Raspberry Pi CM4/CM5 platform. Your prototype already runs on it. Now it survives the factory floor.",
  openGraph: {
    title: "Acadia — Raspberry Pi CM5",
    description: "Your prototype already runs on it. Now it survives the factory floor.",
    url: "https://soccentric.com/acadia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acadia — Raspberry Pi CM5",
    description: "Your prototype already runs on it. Now it survives the factory floor.",
  },
};

export default function AcadiaPage() {
  const platform = getPlatformById("acadia");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
