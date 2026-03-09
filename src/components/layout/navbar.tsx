"use client";

import { useState } from "react";
import { SkiperButton } from "@/components/ui/skiper-button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { properties } from "@/data/properties";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

  const isProjectsActive = pathname.startsWith("/properties");

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="skiper-navbar fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between border-b border-white/10 px-6 md:px-10 py-3 shadow-skiper-lg"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <Link href="/" className="flex items-center h-8 md:h-10 hover:opacity-80 transition-opacity">
        <Image
          src="/dasara developers logo.png"
          alt="Dasara Developers Logo"
          width={140}
          height={45}
          className="h-full w-auto object-contain"
          priority
        />
      </Link>

      <div className="flex items-center gap-3 md:gap-6">
        <nav className="hidden items-center gap-6 text-base font-bold text-[#2E2E2E] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-2 py-1 text-[#2E2E2E] font-bold tracking-wide transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button className="flex items-center gap-1 px-2 py-1 text-[#2E2E2E] font-bold tracking-wide transition-opacity hover:opacity-60">
              Projects
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isProjectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-56 border border-white/10 shadow-skiper-lg"
                  style={{ backgroundColor: "#F2F2F2" }}
                >
                  {properties.map((property) => (
                    <Link
                      key={property.slug}
                      href={`/properties/${property.slug}`}
                      className="block px-4 py-2.5 text-sm font-semibold text-[#2E2E2E] transition-opacity hover:opacity-60 border-b border-black/10 last:border-b-0"
                    >
                      {property.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden md:block">
          <SkiperButton href="/contact" variant="primary" className="bg-none bg-black from-black to-black text-white shadow-none border border-black/20 hover:bg-black/80">
            Contact Us
          </SkiperButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#2E2E2E] p-2"
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
            className="absolute top-full left-0 right-0 border-t border-white/10 md:hidden overflow-hidden"
            style={{ backgroundColor: "#F2F2F2" }}
          >
            <div className="flex flex-col p-4 gap-1">
              <div className="flex justify-center py-3 mb-2 border-b border-white/10">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center h-10">
                  <Image
                    src="/dasara developers logo.png"
                    alt="Dasara Developers Logo"
                    width={140}
                    height={45}
                    className="h-full w-auto object-contain"
                  />
                </Link>
              </div>

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-bold text-[#2E2E2E] transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Projects Accordion */}
              <button
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-bold text-[#2E2E2E] transition-opacity hover:opacity-60"
              >
                Projects
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileProjectsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isMobileProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-l-2 border-white/20 ml-4"
                  >
                    {properties.map((property) => (
                      <Link
                        key={property.slug}
                        href={`/properties/${property.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm font-semibold text-[#2E2E2E] transition-opacity hover:opacity-60"
                      >
                        {property.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-[#2E2E2E] transition-opacity hover:opacity-60"
              >
                Contact
              </Link>
              <div className="pt-3 mt-1 border-t border-white/10">
                <SkiperButton href="/contact" variant="primary" className="w-full bg-none bg-black from-black to-black text-white shadow-none border border-black/20">
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
