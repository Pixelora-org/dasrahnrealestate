"use client";

import { FormEvent, ReactNode, useState } from "react";
import { SkiperButton } from "@/components/ui/skiper-button";

export function TourForm({ propertyName }: { propertyName: string }) {
  const [status, setStatus] = useState<"idle" | "scheduled">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("scheduled");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Preferred Date">
        <input type="date" required className="skiper-input" />
      </Field>
      <Field label="Time Zone">
        <input type="text" placeholder="GMT-8" className="skiper-input" />
      </Field>
      <Field label="Notes">
        <textarea
          rows={3}
          placeholder="Virtual walkthrough, drone preview, or in-person visit?"
          className="skiper-input resize-none"
        />
      </Field>
      <SkiperButton type="submit">
        {status === "scheduled" ? "Request Received" : `Tour ${propertyName}`}
      </SkiperButton>
      {status === "scheduled" && (
        <p className="text-sm text-gold">
          We will confirm logistics within 12 hours.
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

