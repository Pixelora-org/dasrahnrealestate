"use client";

import { FormEvent, ReactNode, useState } from "react";
import { SkiperButton } from "@/components/ui/skiper-button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name">
          <input
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/20 transition-all"
            type="text"
          />
        </Field>
        <Field label="Company">
          <input
            placeholder="Company name (optional)"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/20 transition-all"
            type="text"
          />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email">
          <input
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/20 transition-all"
            type="email"
          />
        </Field>
        <Field label="Phone">
          <input 
            placeholder="+91 98765 43210" 
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/20 transition-all" 
            type="tel" 
          />
        </Field>
      </div>
      <Field label="Message">
        <textarea
          required
          rows={4}
          placeholder="Tell us about your requirements and we'll get back to you..."
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/20 transition-all resize-none"
        />
      </Field>
      <SkiperButton type="submit" className="w-full">
        {status === "sent" ? "Message Sent" : "Send Message"}
      </SkiperButton>
      {status === "sent" && (
        <p className="text-sm text-gold text-center">
          We received your note and will respond within one business day.
        </p>
      )}
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="space-y-2 block">
      <span className="text-sm font-medium text-gold">{label}</span>
      {children}
    </label>
  );
}

