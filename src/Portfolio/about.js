import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import './about.css';

const personalInfo = [
  { icon: 'fa-user',          label: 'Full Name',  value: 'Prem S' },
  { icon: 'fa-calendar-alt',  label: 'Date of Birth', value: '05 July 2003' },
  { icon: 'fa-envelope',      label: 'Email',      value: 'premsathiyaseelan5@gmail.com', href: 'mailto:premsathiyaseelan5@gmail.com' },
  { icon: 'fa-map-marker-alt',label: 'Location',   value: 'Villupuram, Tamil Nadu' },
  { icon: 'fa-language',      label: 'Languages',  value: 'Tamil, English' },
];

const education = [
  {
    icon: 'fa-graduation-cap',
    year: '2020 – 2024',
    degree: 'B.E. Computer Science & Engineering',
    institution: 'IFET College of Engineering, Villupuram',
    badge: 'CGPA: 7.57',
    badgeType: 'blue',
  },
  {
    icon: 'fa-check-circle',
    year: 'July 2024',
    degree: 'Bachelor of Engineering — Graduated',
    institution: 'IFET College of Engineering',
    badge: 'Completed',
    badgeType: 'green',
  },
];

const coreSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Laravel', 'Java', 'Python', 'MySQL', 'MongoDB'];

const stats = [
  ['1+', 'Years Exp'],
  ['15+', 'Projects'],
  ['5+', 'Certificates'],
  ['7.57', 'CGPA'],
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  return (
    <section className="about-section">
      <div className="about-blob about-blob-1"></div>
      <div className="about-blob about-blob-2"></div>

      <div className="about-container">

        {/* Header */}
        <div className="about-header" data-aos="fade-down">
          <span className="about-tag">Get To Know Me</span>
          <h2 className="about-title">About <span className="about-highlight">Me</span></h2>
          <p className="about-subtitle">
            A dynamic Computer Science graduate passionate about building modern
            web applications with clean code and great user experiences.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="about-grid">

          {/* LEFT — Personal Info */}
          <div className="about-card" data-aos="fade-right" data-aos-delay="100">
            <div className="about-card-header">
              <div className="about-card-icon-box">
                <i className="fas fa-id-card"></i>
              </div>
              <h3>Personal Information</h3>
            </div>

            <ul className="about-info-list">
              {personalInfo.map(({ icon, label, value, href }) => (
                <li key={label} className="about-info-item">
                  <div className="about-info-icon">
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <div>
                    <span className="about-info-label">{label}</span>
                    <span className="about-info-value">
                      {href ? <a href={href}>{value}</a> : value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Education + Skills */}
          <div className="about-card" data-aos="fade-left" data-aos-delay="200">
            <div className="about-card-header">
              <div className="about-card-icon-box">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
            </div>

            <div className="about-edu-timeline">
              {education.map((edu, i) => (
                <div key={i} className="about-edu-item">
                  <div className="about-edu-dot">
                    <i className={`fas ${edu.icon}`}></i>
                  </div>
                  <div className="about-edu-content">
                    <span className="about-edu-year">{edu.year}</span>
                    <h4>{edu.degree}</h4>
                    <p>{edu.institution}</p>
                    <span className={`about-edu-badge about-edu-badge--${edu.badgeType}`}>
                      {edu.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <span className="about-chips-label">Core Skills</span>
            <div className="about-chips">
              {coreSkills.map(s => (
                <span key={s} className="about-chip">{s}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Stats bar */}
        <div className="about-stats" data-aos="fade-up" data-aos-delay="300">
          {stats.map(([num, lbl], i) => (
            <React.Fragment key={lbl}>
              {i > 0 && <div className="about-stat-divider"></div>}
              <div className="about-stat-item">
                <span className="about-stat-number">{num}</span>
                <span className="about-stat-label">{lbl}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
