"use client";

import React, { useState } from "react";
import { useLayoutState } from "@/components/LayoutContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
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
        // req.md §9.8: "stamps `✓ message queued` on submit". The
        // success affordance lives in the BootRail's timestamp slot
        // (handled in BootRail.tsx). Here we only need to confirm
        // the submission to the user in the form column.
        <motion.div
          key="success-message"
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-white border border-[#e4e2dd] rounded-[3px] flex flex-col gap-3 max-w-lg"
        >
          <span className="font-mono text-sm text-emerald-600 font-bold">
            ✓ message queued
          </span>
          <span className="font-mono text-[10px] text-[#6b7075]">
            {name} · {company}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
