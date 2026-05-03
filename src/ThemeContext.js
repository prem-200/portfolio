import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  blue:   { name: 'Blue',   accent: '#047bfa', accent2: '#00c6ff', swatch: '#047bfa' },
  purple: { name: 'Purple', accent: '#7c3aed', accent2: '#a78bfa', swatch: '#7c3aed' },
  green:  { name: 'Green',  accent: '#059669', accent2: '#34d399', swatch: '#059669' },
  rose:   { name: 'Rose',   accent: '#e11d48', accent2: '#fb7185', swatch: '#e11d48' },
  orange: { name: 'Orange', accent: '#ea580c', accent2: '#fb923c', swatch: '#ea580c' },
  teal:   { name: 'Teal',   accent: '#0891b2', accent2: '#22d3ee', swatch: '#0891b2' },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(() => localStorage.getItem('themeKey') || 'blue');
  const [dark, setDark] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    const t = THEMES[themeKey] || THEMES.blue;
    const root = document.documentElement;
    root.style.setProperty('--accent',  t.accent);
    root.style.setProperty('--accent2', t.accent2);

    if (dark) {
      root.setAttribute('data-mode', 'dark');
    } else {
      root.setAttribute('data-mode', 'light');
    }

    localStorage.setItem('themeKey', themeKey);
    localStorage.setItem('darkMode', dark);
  }, [themeKey, dark]);

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey, dark, toggleDark: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
