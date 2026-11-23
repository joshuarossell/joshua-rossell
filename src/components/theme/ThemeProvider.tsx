"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Follows the OS theme by default; the toggle stores an override in localStorage.
// next-themes injects a tiny script that applies the theme before first paint (no flash).
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
