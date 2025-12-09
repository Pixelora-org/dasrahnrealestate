"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { startTransition, useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-night/80 text-white opacity-50"
        disabled
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-night/80 text-white shadow-glow transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:bg-white/10"
    >
      {!mounted ? (
        <Sun className="h-4 w-4" />
      ) : isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="pointer-events-none absolute inset-0 rounded-full border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}

