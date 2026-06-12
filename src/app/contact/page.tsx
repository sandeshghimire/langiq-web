"use client";

import React, { useState } from "react";
import { useLayoutState } from "@/components/LayoutContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const { isContactSubmitted, setIsContactSubmitted } = useLayoutState();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [platform, setPlatform] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !company || !platform || !message) return;

    setSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setSubmitting(false);
      setIsContactSubmitted(true);
    }, 1200);
  };

  return (
    <main id="main" className="w-full min-h-screen bg-[#fafaf8] pt-24 pb-16 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
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

          <AnimatePresence mode="wait">
            {!isContactSubmitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 mt-4"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-[#6b7075]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={submitting}
                    className="mono-input w-full"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-[#6b7075]">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    disabled={submitting}
                    className="mono-input w-full"
                    placeholder="Enter company name"
                  />
                </div>

                {/* Platform Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-[#6b7075]">
                    Platform
                  </label>
                  <select
                    required
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    disabled={submitting}
                    className="mono-input w-full appearance-none cursor-pointer bg-white"
                  >
                    <option value="" disabled>Select a platform ...</option>
                    <option value="Arches">Arches</option>
                    <option value="Acadia">Acadia</option>
                    <option value="Zion">Zion</option>
                    <option value="Pinnacle">Pinnacle</option>
                    <option value="Joshua">Joshua</option>
                    <option value="Sequoia">Sequoia</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-[#6b7075]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={submitting}
                    className="mono-input w-full resize-none"
                    placeholder="Describe your project, architecture, or timeline"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="font-mono text-xs uppercase tracking-wider px-6 py-3 bg-[#16181a] text-[#fafaf8] border border-[#16181a] hover:bg-transparent hover:text-[#16181a] transition-all duration-300 font-bold self-start mt-2 disabled:opacity-50"
                >
                  {submitting ? "CONNECTING..." : "Talk to engineering"}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-white border border-[#e4e2dd] rounded-[3px] flex flex-col gap-4 max-w-lg"
              >
                <div className="flex items-center gap-2 text-emerald-600 font-mono text-sm font-bold">
                  <span>✓</span>
                  <span>MESSAGE QUEUED SUCCESSFUL</span>
                </div>
                <p className="font-sans text-sm text-[#6b7075] leading-relaxed">
                  Thank you, {name}. Your schematic details or description have been logged. An embedded engineer will review this payload and respond to you directly.
                </p>
                <span className="font-mono text-[9px] text-[#6b7075]">
                  [ SYSTEM_LOG: MESSAGE_DISPATCHED_TO_QUEUE_0 ]
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column - Side Details Info */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:mt-24">
          <div className="p-6 bg-white border border-[#e4e2dd] rounded-[3px] flex flex-col gap-6 font-mono text-xs text-[#6b7075] leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="text-[#16181a] font-bold">&gt;</span>
              <span>Have a schematic? Send it — we&apos;ll tell you what bring-up looks like.</span>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-[#16181a] font-bold">&gt;</span>
              <span>Hiring for the platform layer? Send the job description — we&apos;ll send back how we&apos;d deliver it.</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
