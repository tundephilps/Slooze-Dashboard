import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Check if there's a saved theme in localStorage on initial load
  const savedTheme = localStorage.getItem("theme");

  // If there's a saved theme in localStorage, use it, otherwise default to 'light'
  const [theme, setTheme] = useState(savedTheme || "light");

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the selected theme in localStorage
  };

  useEffect(() => {
    // This effect will run on the first render to apply the saved theme (if any)
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
