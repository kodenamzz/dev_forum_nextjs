"use client";

import { AppTheme } from "@/types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  mode: AppTheme;
  setMode: React.Dispatch<React.SetStateAction<AppTheme>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>({
  mode: "light",
  setMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<AppTheme>("light");
  const [isMounted, setIsMounted] = useState(false);

  const handleThemeChange = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
