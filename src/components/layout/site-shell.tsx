"use client";

import { type ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { PageTransition } from "./page-transition";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-platinum bg-white overflow-x-hidden">
      <Navbar />
      <main className="mt-20 flex-1 pb-20 overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

