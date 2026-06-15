import React from "react";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

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
    <main id="main" className="w-full min-h-screen bg-[#faf9f5] pt-24 pb-16 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-6">
        <div className="border-b border-[#e8e3d8] pb-4">
          <span className="font-mono text-[10px] tracking-[0.18em] text-[#cc785c] uppercase font-semibold">
            SOCCENTRIC // CONTACT
          </span>
        </div>

        <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-[#1f1e1c] tracking-[-0.02em] leading-[1.05]" style={{ fontVariationSettings: "'opsz' 36" }}>
          Tell us what you&apos;re building.
        </h1>

        <p className="font-display italic font-normal text-lg md:text-xl text-[#6f6c66] -mt-2 max-w-lg leading-[1.4]">
          An engineer reads every message — and an engineer answers it.
        </p>

        <ContactForm />
      </div>
    </main>
  );
}
