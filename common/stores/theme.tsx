"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const ThemeProviderContext = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};
