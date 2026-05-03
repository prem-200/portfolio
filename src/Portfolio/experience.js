import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import './experience.css';

const experiences = [
  {
    icon: 'fa-code',
    role: 'Software Developer',
    company: 'Tecla Media',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    typeKey: 'fulltime',
    points: [
      'Independently developed full-stack e-commerce, HRMS, and insurance management systems ensuring scalable architecture and efficient data management.',
      'Engaged with clients to analyze business needs, refine design and content strategies, and ensure timely delivery through structured communication.',
      'Built role-based workflows, real-time dashboards, REST APIs, and automated notifications with strong back-end expertise.',
    ],
  },
  {
    icon: 'fa-laptop-code',
    role: 'Software Development Intern',
    company: 'Tecla Media',
    period: 'Oct 2024 – Dec 2024',
    type: 'Internship',
    typeKey: 'intern',
    points: [
      'Contributed to the development of marketplace platforms and responsive business websites.',
      'Implemented secure payments, order management, and role-based access control.',
      'Built responsive dashboards using HTML, CSS, Bootstrap, and JavaScript; implemented REST APIs and Laravel Passport for secure authentication.',
    ],
  },
];

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  return (
    <section className="exp-section">
      <div className="exp-blob exp-blob-1"></div>
      <div className="exp-blob exp-blob-2"></div>

      <div className="exp-container">

        {/* Header */}
        <div className="exp-header" data-aos="fade-down">
          <span className="exp-tag">My Journey</span>
          <h2 className="exp-title">Work <span className="exp-highlight">Experience</span></h2>
          <p className="exp-subtitle">
            Professional roles where I've designed, built, and delivered
            real-world software solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-item" data-aos="fade-up" data-aos-delay={i * 120}>

              {/* Dot */}
              <div className="exp-dot-wrap">
                <div className="exp-dot">
                  <i className={`fas ${exp.icon}`}></i>
                </div>
              </div>

              {/* Card */}
              <div className="exp-card">
                <div className="exp-card-top">
                  <div className="exp-card-left">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">
                      <i className="fas fa-building"></i>
                      {exp.company}
                    </span>
                  </div>
                  <div className="exp-card-right">
                    <span className="exp-period">
                      <i className="fas fa-calendar-alt"></i>
                      {exp.period}
                    </span>
                    <span className={`exp-type exp-type--${exp.typeKey}`}>
                      <i className={`fas ${exp.typeKey === 'fulltime' ? 'fa-briefcase' : 'fa-graduation-cap'}`}></i>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="exp-divider"></div>

                <ul className="exp-list">
                  {exp.points.map((pt, j) => (
                    <li key={j}>
                      <span className="exp-list-dot"></span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  );
}

export default Experience;
