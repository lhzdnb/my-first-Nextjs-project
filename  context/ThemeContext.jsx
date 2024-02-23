"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: undefined,
  changeTheme: undefined,
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  if (!isMounted) {
    return <span className="loading"></span>;
  }

  function changeTheme(theme) {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
