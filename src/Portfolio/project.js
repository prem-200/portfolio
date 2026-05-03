import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import './project.css';
import projectimg1 from '../project1.jpg';
import projectimg2 from '../project2.jpg';

const ALL = 'All';

const projects = [
  {
    img: projectimg1,
    badge: 'featured',
    badgeLabel: '⭐ Featured',
    category: 'Mobile App',
    categoryIcon: 'fa-mobile-alt',
    title: 'Kaasu Buddy – Expense Tracker',
    desc: 'A smart personal finance app to track daily expenses, manage budgets, and visualize spending habits with an intuitive UI. Published live on the Indus App Store.',
    chips: ['React Native', 'JavaScript', 'Firebase'],
    liveUrl: 'https://indusapp.store/5lpgiuu6',
    liveLabel: 'Indus App Store',
    githubUrl: '',
  },
  {
    img: projectimg2,
    badge: 'mern',
    badgeLabel: 'MERN Stack',
    category: 'Web App',
    categoryIcon: 'fa-layer-group',
    title: 'Stock Management System',
    desc: 'Full-stack inventory and stock management system with real-time product tracking, supplier management, stock alerts, sales reports, and role-based access control.',
    chips: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    liveUrl: '',
    liveLabel: '',
    githubUrl: 'https://github.com/yourprofile',
  },
  {
    img: projectimg1,
    badge: '',
    badgeLabel: '',
    category: 'Web App',
    categoryIcon: 'fa-users',
    title: 'HRMS – Human Resource Management',
    desc: 'Comprehensive system to manage employee records, attendance, payroll, and leave processes with role-based access and automated workflows.',
    chips: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    liveUrl: '',
    liveLabel: '',
    githubUrl: '',
  },
  {
    img: projectimg2,
    badge: '',
    badgeLabel: '',
    category: 'Web App',
    categoryIcon: 'fa-shield-alt',
    title: 'Insurance Management System',
    desc: 'Scalable system to optimize policy lifecycle, claims processing, premium tracking, and automated renewals with structured user access control.',
    chips: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    liveUrl: '',
    liveLabel: '',
    githubUrl: '',
  },
  {
    img: projectimg1,
    badge: '',
    badgeLabel: '',
    category: 'Web Design',
    categoryIcon: 'fa-globe',
    title: 'Business & Corporate Websites',
    desc: 'Responsive static and dynamic business websites with modern UI/UX, SEO-friendly architecture, and performance optimization for better user engagement.',
    chips: ['React', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: '',
    liveLabel: '',
    githubUrl: '',
  },
  {
    img: projectimg2,
    badge: 'iot',
    badgeLabel: 'IoT',
    category: 'IoT / Research',
    categoryIcon: 'fa-satellite',
    title: 'Seismic Tremor & Downpour Alert',
    desc: 'Real-time alert system that identifies seismic tremors and rainfall patterns to issue early warnings for earthquakes and heavy rain events.',
    chips: ['Python', 'IoT', 'Sensors', 'Raspberry Pi'],
    liveUrl: '',
    liveLabel: '',
    githubUrl: '',
  },
];

const FILTERS = [ALL, 'Mobile App', 'Web App', 'Web Design', 'IoT / Research'];

const BADGE_CLASS = {
  featured: 'proj-badge--featured',
  live:     'proj-badge--live',
  mern:     'proj-badge--mern',
  iot:      'proj-badge--iot',
};

function ProjectCard() {
  const [active, setActive] = useState(ALL);

  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

  const filtered = active === ALL ? projects : projects.filter(p => p.category === active);

  return (
    <section className="proj-section">
      <div className="proj-blob proj-blob-1"></div>
      <div className="proj-blob proj-blob-2"></div>
      <div className="proj-blob proj-blob-3"></div>

      <div className="proj-container">

        {/* Header */}
        <div className="proj-header" data-aos="fade-down">
          <span className="proj-tag">What I've Built</span>
          <h2 className="proj-title">My <span className="proj-highlight">Projects</span></h2>
          <p className="proj-subtitle">
            Real-world applications and systems I've designed, developed, and
            deployed across web and mobile platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="proj-filters" data-aos="fade-up" data-aos-delay="100">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`proj-filter-btn ${active === f ? 'proj-filter-btn--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {filtered.map((proj, i) => (
            <div key={proj.title} className="proj-card" data-aos="fade-up" data-aos-delay={i * 70}>

              {/* Image */}
              <div className="proj-img-wrap">
                <img src={proj.img} alt={proj.title} loading="lazy" />
                {proj.badge && (
                  <span className={`proj-badge ${BADGE_CLASS[proj.badge]}`}>
                    {proj.badgeLabel}
                  </span>
                )}
                <span className="proj-num">0{i + 1}</span>
              </div>

              {/* Body */}
              <div className="proj-card-body">
                <span className="proj-category">
                  <i className={`fas ${proj.categoryIcon}`}></i>
                  {proj.category}
                </span>
                <h3 className="proj-card-title">{proj.title}</h3>
                <p className="proj-card-desc">{proj.desc}</p>

                <div className="proj-chips">
                  {proj.chips.map(c => <span key={c} className="proj-chip">{c}</span>)}
                </div>

                {(proj.liveUrl || proj.githubUrl) && (
                  <div className="proj-links">
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="proj-link proj-link--primary">
                        <i className="fas fa-external-link-alt"></i> {proj.liveLabel || 'Live Demo'}
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="proj-link proj-link--outline">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  );
}

export default ProjectCard;
