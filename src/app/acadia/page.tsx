import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoCcentric — Acadia Raspberry Pi Platform",
  description: "Acadia: Industrialized Raspberry Pi CM4/CM5 platform. Your prototype already runs on it. Now it survives the factory floor.",
};

export default function AcadiaPage() {
  const platform = getPlatformById("acadia");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
