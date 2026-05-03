import React, { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import './certificate.css';
import wirpo from '../wirpo.png';
import cer1 from '../cer1.png';
import cer2 from '../cer2.png';
import cer3 from '../cer3.png';
import cer4 from '../cer4.png';
import cer5 from '../cer5.png';

const certificates = [
  { img: wirpo, title: 'Wipro TalentNext',              badge: 'Wipro' },
  { img: cer1,  title: 'Python – Basics',               badge: 'Python' },
  { img: cer2,  title: 'C Programming Course',          badge: 'C Language' },
  { img: cer3,  title: 'Java Basics',                   badge: 'Java' },
  { img: cer4,  title: 'Java Application Development',  badge: 'Internship' },
  { img: cer5,  title: 'Cybersecurity Essentials',      badge: 'Security' },
];

function Certificate() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  /* Close lightbox on Escape */
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') setLightbox(null);
  }, []);
  useEffect(() => {
    if (lightbox !== null) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightbox, handleKey]);

  return (
    <section className="cert-section">
      <div className="cert-blob cert-blob-1"></div>
      <div className="cert-blob cert-blob-2"></div>

      <div className="cert-container">

        {/* Header */}
        <div className="cert-header" data-aos="fade-down">
          <span className="cert-tag">My Achievements</span>
          <h2 className="cert-title">
            My <span className="cert-highlight">Certificates</span>
          </h2>
          <p className="cert-subtitle">
            Professional certifications and course completions that validate
            my skills across development, security, and programming.
          </p>
        </div>

        {/* Grid */}
        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="cert-card"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              onClick={() => setLightbox(i)}
            >
              <div className="cert-img-wrap">
                <img src={cert.img} alt={cert.title} loading="lazy" />
                <div className="cert-overlay">
                  <span className="cert-overlay-btn">
                    <i className="fas fa-expand-alt"></i> View Certificate
                  </span>
                </div>
              </div>
              <div className="cert-card-body">
                <div className="cert-card-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="cert-card-info">
                  <p className="cert-card-title">{cert.title}</p>
                  <span className="cert-card-badge">{cert.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="cert-stats" data-aos="fade-up" data-aos-delay="200">
          {[
            ['6', 'Certificates'],
            ['4+', 'Technologies'],
            ['1', 'Internship'],
          ].map(([num, lbl], i, arr) => (
            <React.Fragment key={lbl}>
              {i > 0 && <div className="cert-stat-divider"></div>}
              <div className="cert-stat-item">
                <span className="cert-stat-number">{num}</span>
                <span className="cert-stat-label">{lbl}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <div className="cert-lightbox__inner" onClick={e => e.stopPropagation()}>
            <button className="cert-lightbox__close" onClick={() => setLightbox(null)}>
              <i className="fas fa-times"></i>
            </button>
            <img
              className="cert-lightbox__img"
              src={certificates[lightbox].img}
              alt={certificates[lightbox].title}
            />
            <p className="cert-lightbox__caption">{certificates[lightbox].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
