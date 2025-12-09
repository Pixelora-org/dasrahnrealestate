"use client";

import { SkiperButton } from "@/components/ui/skiper-button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Our Projects", href: "/listings" },
  { label: "Amenities", href: "/amenities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="skiper-navbar sticky top-4 z-50 mx-auto flex w-[calc(100%-2rem)] items-center justify-between rounded-full border border-gold/20 bg-white/95 px-6 py-3 backdrop-blur-sm shadow-skiper-lg"
    >
      <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-gold">
        DASARA DEVELOPERS
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium text-platinum/70 md:flex">
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
                isActive ? "text-platinum" : "hover:text-gold"
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
      <div className="flex items-center gap-3">
        <SkiperButton href="/listings" variant="primary">
          Our Projects
        </SkiperButton>
      </div>
    </motion.header>
  );
}

