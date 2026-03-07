"use client";

import { type ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { PageTransition } from "./page-transition";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-platinum bg-white">
      <Navbar />
      <main className="flex-1 pb-20 pt-[56px]">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

