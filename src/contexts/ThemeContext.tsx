import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  hasSelectedTheme: boolean;
  initializeTheme: (selectedTheme: Theme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('dibexa-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Default to dark mode (Glacier Abyss)
    return 'dark'; 
  });

  const [hasSelectedTheme, setHasSelectedTheme] = useState<boolean>(() => {
    return localStorage.getItem('dibexa-theme-initialized') === 'true';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.setAttribute('data-theme', theme === 'light' ? 'dibexa-solar' : 'glacier-abyss');

    if (body) {
      body.style.backgroundColor = theme === 'light' ? '#F8FAFC' : '#01060D';
      body.style.color = theme === 'light' ? '#0F172A' : '#FFFFFF';
    }

    if (hasSelectedTheme) {
      localStorage.setItem('dibexa-theme', theme);
    }
  }, [theme, hasSelectedTheme]);

  const initializeTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setHasSelectedTheme(true);
    localStorage.setItem('dibexa-theme-initialized', 'true');
    localStorage.setItem('dibexa-theme', selectedTheme);
  };

  const toggleMode = () => {
    initializeTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, hasSelectedTheme, initializeTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
