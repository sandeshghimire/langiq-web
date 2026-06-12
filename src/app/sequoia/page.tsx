import React from "react";
import { getPlatformById } from "@/data/platforms";
import PlatformPage from "@/components/PlatformPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sequoia — Intel & AMD x86",
  description:
    "Sequoia: Production-Ready Embedded Linux for Intel & AMD x86 — Atom, Core, Ryzen Embedded. UEFI / coreboot, secure boot, TPM 2.0, KVM / ACRN, PREEMPT_RT.",
  openGraph: {
    title: "Sequoia — Intel & AMD x86",
    description: "Production-Ready Embedded Linux for Intel & AMD x86 — Atom, Core, Ryzen Embedded.",
    url: "https://soccentric.com/sequoia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sequoia — Intel & AMD x86",
    description: "Production-Ready Embedded Linux for Intel & AMD x86 — Atom, Core, Ryzen Embedded.",
  },
};

export default function SequoiaPage() {
  const platform = getPlatformById("sequoia");
  if (!platform) {
    notFound();
  }
  return <PlatformPage platform={platform} />;
}
