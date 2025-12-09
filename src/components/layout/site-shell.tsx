"use client";

import { type ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { PageTransition } from "./page-transition";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-platinum">
      {/* Half white and half golden background for entire screen - vertical split */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,white_50%,rgba(212,175,55,0.15)_50%)]" />
      {/* Subtle background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-glow opacity-30" />
      <div className="noise-overlay pointer-events-none fixed inset-0 -z-10" />
      <Navbar />
      <main className="container mt-20 flex-1 pb-20">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

