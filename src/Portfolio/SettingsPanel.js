import React, { useState, useEffect, useRef } from 'react';
import { useTheme, THEMES } from '../ThemeContext';
import './settings.css';

const FONT_SIZES = [
  { label: 'Small',  value: '14px' },
  { label: 'Medium', value: '16px' },
  { label: 'Large',  value: '18px' },
];

export default function SettingsPanel() {
  const { themeKey, setThemeKey, dark, toggleDark } = useTheme();
  const [open, setOpen]         = useState(false);
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('fontSize') || '16px');
  const [animations, setAnimations] = useState(() => localStorage.getItem('animations') !== 'false');
  const panelRef = useRef(null);

  // Font size
  useEffect(() => {
    document.documentElement.style.fontSize = fontSize;
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  // Animations
  useEffect(() => {
    document.documentElement.setAttribute('data-animations', animations ? 'on' : 'off');
    localStorage.setItem('animations', animations);
  }, [animations]);



  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="sp-wrap" ref={panelRef}>

      {/* Settings toggle tab */}
      <button
        className={`sp-tab ${open ? 'sp-tab--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Settings"
      >
        <i className={`fa fa-${open ? 'times' : 'sliders'}`}></i>
        {!open && <span className="sp-tab__label">Settings</span>}
      </button>

      {/* Panel */}
      <div className={`sp-panel ${open ? 'sp-panel--open' : ''}`}>
        <div className="sp-panel__header">
          <i className="fa fa-sliders" style={{ color: 'var(--accent)' }}></i>
          <span>Customizer</span>
        </div>

        {/* ── Color Theme ── */}
        <div className="sp-section">
          <div className="sp-section__title">
            <i className="fa fa-paint-brush"></i> Theme Color
          </div>
          <div className="sp-swatches">
            {Object.entries(THEMES).map(([key, t]) => (
              <button
                key={key}
                className={`sp-swatch ${themeKey === key ? 'sp-swatch--active' : ''}`}
                style={{ background: t.swatch }}
                onClick={() => setThemeKey(key)}
                title={t.name}
              >
                {themeKey === key && <i className="fa fa-check"></i>}
              </button>
            ))}
          </div>
          <div className="sp-theme-names">
            {Object.entries(THEMES).map(([key, t]) => (
              <span
                key={key}
                className={`sp-theme-name ${themeKey === key ? 'sp-theme-name--active' : ''}`}
                onClick={() => setThemeKey(key)}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <div className="sp-divider"></div>

        {/* ── Dark / Light Mode ── */}
        <div className="sp-section">
          <div className="sp-section__title">
            <i className="fa fa-adjust"></i> Display Mode
          </div>
          <div className="sp-mode-row">
            <button
              className={`sp-mode-btn ${!dark ? 'sp-mode-btn--active' : ''}`}
              onClick={() => dark && toggleDark()}
            >
              <i className="fa fa-sun-o"></i> Light
            </button>
            <button
              className={`sp-mode-btn ${dark ? 'sp-mode-btn--active' : ''}`}
              onClick={() => !dark && toggleDark()}
            >
              <i className="fa fa-moon-o"></i> Dark
            </button>
          </div>
        </div>

        <div className="sp-divider"></div>

        {/* ── Font Size ── */}
        <div className="sp-section">
          <div className="sp-section__title">
            <i className="fa fa-text-height"></i> Font Size
          </div>
          <div className="sp-font-row">
            {FONT_SIZES.map(f => (
              <button
                key={f.value}
                className={`sp-font-btn ${fontSize === f.value ? 'sp-font-btn--active' : ''}`}
                onClick={() => setFontSize(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="sp-divider"></div>

        {/* ── Animations ── */}
        <div className="sp-section">
          <div className="sp-section__title">
            <i className="fa fa-magic"></i> Animations
          </div>
          <div className="sp-toggle-row">
            <span className="sp-toggle-label">{animations ? 'Enabled' : 'Disabled'}</span>
            <button
              className={`sp-toggle ${animations ? 'sp-toggle--on' : ''}`}
              onClick={() => setAnimations(a => !a)}
              aria-label="Toggle animations"
            >
              <span className="sp-toggle__thumb"></span>
            </button>
          </div>
        </div>

        <div className="sp-divider"></div>

        {/* ── Reset ── */}
        <button
          className="sp-reset-btn"
          onClick={() => {
            setThemeKey('blue');
            if (dark) toggleDark();
            setFontSize('16px');
            setAnimations(true);
          }}
        >
          <i className="fa fa-refresh"></i> Reset to Default
        </button>
      </div>
    </div>
  );
}
