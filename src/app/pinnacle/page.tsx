import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoCcentric — Pinnacle NXP i.MX Platform",
  description: "Pinnacle: NXP i.MX mainline Linux and longevity support. Silicon that outlives your product plan. Linux that passes your audit.",
};

export default function PinnaclePage() {
  const platform = getPlatformById("pinnacle");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
