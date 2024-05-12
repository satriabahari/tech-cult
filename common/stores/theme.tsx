"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const ThemeProviderContext = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContext;
