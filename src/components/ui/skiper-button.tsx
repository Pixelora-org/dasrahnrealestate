"use client";

import { clsx } from "clsx";
import Link from "next/link";
import {
  type ButtonHTMLAttributes,
  type ReactNode,
  type AnchorHTMLAttributes,
} from "react";

type Variant = "primary" | "ghost" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = (ButtonProps | AnchorProps) & {
  children: ReactNode;
  href?: string;
  variant?: Variant;
};

const baseStyles =
  "skiper-button relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold to-gold-dark text-white shadow-glow hover:-translate-y-0.5",
  ghost:
    "bg-white/0 text-white border border-gold/30 hover:bg-gold/10 hover:-translate-y-0.5",
  outline:
    "border border-gold/40 text-white hover:bg-gold/10",
};

export function SkiperButton({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: Props) {
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(baseStyles, variants[variant], className)}
        {...(props as AnchorProps)}
      >
        <span className="absolute inset-0 rounded-full border border-white/25 opacity-20" />
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonProps;

  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], className)}
      {...rest}
    >
      <span className="absolute inset-0 rounded-full border border-white/25 opacity-20" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

