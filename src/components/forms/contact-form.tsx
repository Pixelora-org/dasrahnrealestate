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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name">
          <input
            required
            placeholder="Nova Sterling"
            className="skiper-input"
            type="text"
          />
        </Field>
        <Field label="Company">
          <input
            placeholder="Sterling Atelier"
            className="skiper-input"
            type="text"
          />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email">
          <input
            required
            placeholder="nova@atelier.com"
            className="skiper-input"
            type="email"
          />
        </Field>
        <Field label="Phone">
          <input placeholder="+1 (310) 555-0118" className="skiper-input" type="tel" />
        </Field>
      </div>
      <Field label="Message">
        <textarea
          required
          rows={4}
          placeholder="Tell us about your search and ideal timeline..."
          className="skiper-input resize-none"
        />
      </Field>
      <SkiperButton type="submit">
        {status === "sent" ? "Message Sent" : "Send Message"}
      </SkiperButton>
      {status === "sent" && (
        <p className="text-sm text-gold">
          We received your note and will respond within one business day.
        </p>
      )}
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="space-y-2 text-sm text-platinum/60">
      <span>{label}</span>
      {children}
    </label>
  );
}

