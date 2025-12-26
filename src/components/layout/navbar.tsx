"use client";

import { useState } from "react";
import { SkiperButton } from "@/components/ui/skiper-button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Amenities", href: "/amenities" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="skiper-navbar sticky top-4 z-50 mx-auto flex w-[calc(100%-2rem)] items-center justify-between rounded-full border border-gold/20 bg-black/95 px-4 md:px-6 py-3 backdrop-blur-sm shadow-skiper-lg"
    >
      <Link href="/" className="text-sm md:text-lg font-semibold tracking-[0.2em] text-gold">
        DASARA DEVELOPERS
      </Link>
      <div className="flex items-center gap-3 md:gap-6">
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-colors ${
                  isActive ? "text-gold" : "hover:text-gold"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-gold via-gold-light to-gold-dark"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <SkiperButton href="/contact" variant="primary">
            Contact Us
          </SkiperButton>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gold p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-gold/20 bg-black/95 backdrop-blur-sm md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isActive ? "text-gold bg-gold/10" : "text-white/80 hover:text-gold hover:bg-gold/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/contact") ? "text-gold bg-gold/10" : "text-white/80 hover:text-gold hover:bg-gold/10"
                }`}
              >
                Contact
              </Link>
              <div className="pt-2">
                <SkiperButton href="/contact" variant="primary" className="w-full">
                  Contact Us
                </SkiperButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

