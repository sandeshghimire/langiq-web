import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoCcentric — Sequoia x86 Edge Platform",
  description: "Sequoia: Intel & AMD x86 edge servers and real-time PREEMPT_RT. If it only runs on x86, it runs here — with all the I/O it needs.",
};

export default function SequoiaPage() {
  const platform = getPlatformById("sequoia");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
