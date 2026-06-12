import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinnacle — NXP i.MX",
  description: "Pinnacle: NXP i.MX mainline Linux and longevity support. Silicon that outlives your product plan. Linux that passes your audit.",
  openGraph: {
    title: "Pinnacle — NXP i.MX",
    description: "Silicon that outlives your product plan. Linux that passes your audit.",
    url: "https://soccentric.com/pinnacle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinnacle — NXP i.MX",
    description: "Silicon that outlives your product plan. Linux that passes your audit.",
  },
};

export default function PinnaclePage() {
  const platform = getPlatformById("pinnacle");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
