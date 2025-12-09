/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      // Custom Skiper palette + motion primitives
      colors: {
        night: "rgb(var(--color-night) / <alpha-value>)",
        midnight: "rgb(var(--color-midnight) / <alpha-value>)",
        obsidian: "rgb(var(--color-obsidian) / <alpha-value>)",
        platinum: "rgb(var(--color-platinum) / <alpha-value>)",
        "brand-sage": "#B5FFC2",
        "brand-aqua": "#D4AF37",
        "brand-iris": "#D4AF37",
        "brand-gold": "#D4AF37",
        "gold": "#D4AF37",
        "gold-light": "#F5E6D3",
        "gold-dark": "#B8941E",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(212,175,55,0.13), transparent 50%), radial-gradient(circle at 50% 80%, rgba(212,175,55,0.12), transparent 60%)",
        "card-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(212,175,55,0.2))",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "3xl": "2.25rem",
        "4xl": "3rem",
      },
      boxShadow: {
        "skiper-sm": "0 10px 40px rgba(212,175,55,0.25)",
        "skiper-lg": "0 20px 80px rgba(0,0,0,0.35)",
        glow: "0 10px 60px rgba(212,175,55,0.35)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(.16,1,.3,1)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.65" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { transform: "scale(1.35)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.8s cubic-bezier(.4,0,.2,1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
