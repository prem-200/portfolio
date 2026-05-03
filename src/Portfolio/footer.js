import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './footer.css';

const NAV = [
  { label: 'Home',         to: 'home' },
  { label: 'About',        to: 'about' },
  { label: 'Skills',       to: 'skills' },
  { label: 'Experience',   to: 'experience' },
  { label: 'Projects',     to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Contact',      to: 'contact' },
];

const SOCIALS = [
  { icon: 'fab fa-github',      href: 'https://github.com/prem-200',                      title: 'GitHub' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/premsathiyaseelan/', title: 'LinkedIn' },
  { icon: 'fab fa-whatsapp',    href: 'https://wa.me/916379348861',          title: 'WhatsApp' },
  { icon: 'fab fa-instagram',   href: 'https://instagram.com/yourprofile',   title: 'Instagram' },
];

const CONTACT = [
  { icon: 'fa-envelope',       text: 'premsathiyaseelan5@gmail.com',  href: 'mailto:premsathiyaseelan5@gmail.com' },
  { icon: 'fa-phone',          text: '+91 6379348861',          href: 'tel:+916379348861' },
  { icon: 'fa-map-marker-alt', text: 'Villupuram, Tamil Nadu',  href: null },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pf-footer">
      <div className="pf-footer__blob pf-footer__blob-1"></div>
      <div className="pf-footer__blob pf-footer__blob-2"></div>

      <div className="pf-footer__inner">
        <div className="pf-footer__grid">

          {/* ── Brand ── */}
          <div>
            <div className="pf-footer__brand-name">
              <span className="pf-footer__brand-dot"></span>
              Prem<span style={{ fontWeight: 300, opacity: 0.6 }}>.dev</span>
            </div>
            <p className="pf-footer__brand-desc">
              Full Stack Developer passionate about building modern,
              scalable web applications with clean code and great
              user experiences.
            </p>
            <div className="pf-footer__socials">
              {SOCIALS.map(s => (
                <a key={s.title} href={s.href} target="_blank"
                  rel="noopener noreferrer" className="pf-footer__social" title={s.title}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <p className="pf-footer__col-title">Quick Links</p>
            <ul className="pf-footer__links">
              {NAV.map(({ label, to }) => (
                <li key={to}>
                  <Link className="pf-footer__link" to={to} smooth duration={500} offset={-70}>
                    <i className="fas fa-chevron-right"></i>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <p className="pf-footer__col-title">Get In Touch</p>
            <ul className="pf-footer__contact-list">
              {CONTACT.map(({ icon, text, href }) => (
                <li key={text} className="pf-footer__contact-item">
                  <div className="pf-footer__contact-icon">
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <span className="pf-footer__contact-text">
                    {href
                      ? <a href={href}>{text}</a>
                      : text
                    }
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pf-footer__bottom">
          <p className="pf-footer__copy">
            &copy; {year} <span>Prem S</span>. All rights reserved.
          </p>
          <p className="pf-footer__made">
            Made with <span className="pf-footer__heart">♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
