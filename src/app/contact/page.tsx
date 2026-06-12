import React from "react";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { PlatformMatrix, HiringReplacementTable } from "@/components/visuals";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building. An engineer reads every message — and an engineer answers it.",
  openGraph: {
    title: "Talk to engineering — SoCcentric",
    description: "Tell us what you're building. An engineer reads every message — and an engineer answers it.",
    url: "https://soccentric.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk to engineering — SoCcentric",
    description: "Tell us what you're building. An engineer reads every message — and an engineer answers it.",
  },
};

export default function ContactPage() {
  return (
    <main id="main" className="w-full min-h-screen bg-[#fafaf8] pt-24 pb-16 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Form */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="border-b border-[#e4e2dd] pb-4">
            <span className="font-mono text-[10px] tracking-widest text-[#16181a] font-semibold">
              SOCCENTRIC // CONTACT
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#16181a] tracking-tight">
            Tell us what you&apos;re building.
          </h1>

          <p className="font-sans text-base text-[#6b7075] -mt-2">
            An engineer reads every message — and an engineer answers it.
          </p>

          <ContactForm />
        </div>

        {/* Right Column - Visual Stack */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:mt-24">
          {/* Side pitch */}
          <div className="p-6 bg-white border border-[#e4e2dd] rounded-[3px] flex flex-col gap-6 font-mono text-xs text-[#6b7075] leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="text-[#16181a] font-bold">&gt;</span>
              <span>Have a schematic? Send it — we&apos;ll tell you what bring-up looks like.</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#16181a] font-bold">&gt;</span>
              <span>Hiring for the platform layer? Send the job description — we&apos;ll send back how we&apos;d deliver it.</span>
            </div>

            <div className="pt-4 border-t border-dashed border-[#e4e2dd] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#6b7075]">Reply time</span>
                <span className="text-[10px] uppercase tracking-wider text-[#16181a] font-bold">≤ 24h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#6b7075]">First call</span>
                <span className="text-[10px] uppercase tracking-wider text-[#16181a] font-bold">Engineer, not sales</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#6b7075]">NDA</span>
                <span className="text-[10px] uppercase tracking-wider text-[#16181a] font-bold">Yours or ours</span>
              </div>
            </div>
          </div>

          {/* Platform matrix — gives the form visual context. */}
          <PlatformMatrix active={true} />

          {/* Hiring comparison — reinforces the "send us your job description" pitch. */}
          <HiringReplacementTable active={true} />
        </div>

      </div>
    </main>
  );
}
