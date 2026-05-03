import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './nav.css';

const NAV_LINKS = [
  { label: 'Home',         to: 'home' },
  { label: 'About',        to: 'about' },
  { label: 'Skills',       to: 'skills' },
  { label: 'Experience',   to: 'experience' },
  { label: 'Projects',     to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
];

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');

  /* Scroll → glassmorphism */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const ids = [...NAV_LINKS.map(l => l.to), 'contact'];
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  /* Close drawer on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 992) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav className={`pf-nav ${scrolled ? 'pf-nav--scrolled' : 'pf-nav--top'}`}>

        {/* Brand */}
        <a href="#home" className="pf-nav__brand">
          <span className="pf-nav__brand-dot"></span>
          Prem<span style={{ fontWeight: 300, opacity: 0.7 }}>.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="pf-nav__links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                className={`pf-nav__link ${active === to ? 'pf-nav__link--active' : ''}`}
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="pf-nav__link pf-nav__cta"
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`pf-nav__hamburger ${menuOpen ? 'pf-nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="pf-nav__bar"></span>
          <span className="pf-nav__bar"></span>
          <span className="pf-nav__bar"></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`pf-nav__drawer ${menuOpen ? 'pf-nav__drawer--open' : ''}`}>
        {[...NAV_LINKS, { label: 'Contact', to: 'contact' }].map(({ label, to }) => (
          <Link
            key={to}
            className={`pf-nav__drawer-link ${active === to ? 'pf-nav__drawer-link--active' : ''}`}
            to={to}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
          >
            <span className="pf-nav__drawer-dot"></span>
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;
