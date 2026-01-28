import React, { createContext, useContext, useEffect, useState } from "react";

export interface Theme {
  // Couleurs principales
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryDark: string;

  // Arrière-plans
  background: string;
  backgroundSecondary: string;
  surface: string;
  cardBackground: string;

  // Textes
  textPrimary: string;
  textSecondary: string;
  textMuted: string;

  // Bordures et ombres
  border: string;
  shadow: string;
  shadowHover: string;
}

const lightTheme: Theme = {
  primary: "#1e3a8a", // Bleu roi
  primaryHover: "#1e40af",
  primaryLight: "#dbeafe",
  primaryDark: "#1e40af",

  background: "#ffffff",
  backgroundSecondary: "#f8f9fa",
  surface: "#ffffff",
  cardBackground: "#ffffff",

  textPrimary: "#1f2937",
  textSecondary: "#4b5563",
  textMuted: "#6b7280",

  border: "rgba(0, 0, 0, 0.1)",
  shadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  shadowHover: "0 8px 30px rgba(0, 0, 0, 0.15)",
};

const darkTheme: Theme = {
  primary: "#3b82f6", // Bleu roi plus clair pour le mode sombre
  primaryHover: "#2563eb",
  primaryLight: "#1e3a8a",
  primaryDark: "#1e40af",

  background: "#0f172a",
  backgroundSecondary: "#1e293b",
  surface: "#334155",
  cardBackground: "#1e293b",

  textPrimary: "#f1f5f9",
  textSecondary: "#cbd5e1",
  textMuted: "#94a3b8",

  border: "rgba(255, 255, 255, 0.1)",
  shadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  shadowHover: "0 8px 30px rgba(0, 0, 0, 0.4)",
};

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
