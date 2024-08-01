"use client";

import { createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: any) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
  //notice how ThemeProvider only wraps {children} instead of the entire <html> document.
  //This makes it easier for Next.js to optimize the static parts of your Server Components.
}
