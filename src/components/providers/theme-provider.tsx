"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="skiper-ui-theme"
    >
      {children}
    </NextThemeProvider>
  );
}



