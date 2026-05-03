import React, { useEffect, useState, useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython,
  FaReact, FaNodeJs, FaPhp,
} from 'react-icons/fa';
import {
  SiC, SiMongodb, SiMysql, SiLaravel,
  SiCanva, SiVisualstudiocode, SiGit,
} from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import './skill.css';

const ALL = 'All';

const CATEGORIES = [
  { key: ALL,          label: 'All Skills',  icon: 'fa-th-large' },
  { key: 'Languages',  label: 'Languages',   icon: 'fa-code' },
  { key: 'Frameworks', label: 'Frameworks',  icon: 'fa-layer-group' },
  { key: 'Databases',  label: 'Databases',   icon: 'fa-database' },
  { key: 'Tools',      label: 'Tools',       icon: 'fa-tools' },
];

const skills = [
  { icon: <FaHtml5 color="#E34F26" />,             name: 'HTML5',      level: 95, levelLabel: 'Expert',       category: 'Languages' },
  { icon: <FaCss3Alt color="#1572B6" />,           name: 'CSS3',       level: 90, levelLabel: 'Expert',       category: 'Languages' },
  { icon: <FaJs color="#F7DF1E" />,                name: 'JavaScript', level: 85, levelLabel: 'Advanced',     category: 'Languages' },
  { icon: <FaJava color="#007396" />,              name: 'Java',       level: 75, levelLabel: 'Intermediate', category: 'Languages' },
  { icon: <SiC color="#A8B9CC" />,                 name: 'C',          level: 70, levelLabel: 'Intermediate', category: 'Languages' },
  { icon: <FaPython color="#3776AB" />,            name: 'Python',     level: 72, levelLabel: 'Intermediate', category: 'Languages' },
  { icon: <FaPhp color="#777BB4" />,               name: 'PHP',        level: 80, levelLabel: 'Advanced',     category: 'Languages' },
  { icon: <FaReact color="#61DAFB" />,             name: 'React',      level: 88, levelLabel: 'Advanced',     category: 'Frameworks' },
  { icon: <FaNodeJs color="#339933" />,            name: 'Node.js',    level: 78, levelLabel: 'Advanced',     category: 'Frameworks' },
  { icon: <SiLaravel color="#FF2D20" />,           name: 'Laravel',    level: 82, levelLabel: 'Advanced',     category: 'Frameworks' },
  { icon: <SiMongodb color="#47A248" />,           name: 'MongoDB',    level: 78, levelLabel: 'Advanced',     category: 'Databases' },
  { icon: <SiMysql color="#4479A1" />,             name: 'MySQL',      level: 82, levelLabel: 'Advanced',     category: 'Databases' },
  { icon: <SiGit color="#F05032" />,               name: 'Git',        level: 80, levelLabel: 'Advanced',     category: 'Tools' },
  { icon: <SiVisualstudiocode color="#007ACC" />,  name: 'VS Code',    level: 95, levelLabel: 'Expert',       category: 'Tools' },
  { icon: <SiCanva color="#00C4CC" />,             name: 'Canva',      level: 85, levelLabel: 'Advanced',     category: 'Tools' },
];

const softSkills = [
  { icon: 'fa-users',     label: 'Teamwork' },
  { icon: 'fa-clock',     label: 'Time Management' },
  { icon: 'fa-comments',  label: 'Communication' },
  { icon: 'fa-lightbulb', label: 'Problem Solving' },
  { icon: 'fa-fire',      label: 'Hard Work' },
  { icon: 'fa-sync-alt',  label: 'Adaptability' },
];

const BADGE_CLASS = {
  Expert:       'badge-expert',
  Advanced:     'badge-advanced',
  Intermediate: 'badge-intermediate',
};

/* SVG ring circumference for r=36 → 2π×36 ≈ 226 */
const CIRC = 226;

function RingCard({ skill, delay }) {
  const fillRef = useRef(null);
  const offset  = CIRC - (CIRC * skill.level) / 100;

  useEffect(() => {
    const t = setTimeout(() => {
      if (fillRef.current) fillRef.current.style.strokeDashoffset = offset;
    }, delay + 200);
    return () => clearTimeout(t);
  }, [offset, delay]);

  return (
    <div className="skill-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="skill-ring-wrap">
        <svg className="skill-ring-svg" viewBox="0 0 88 88">
          <defs>
            <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#047bfa" />
              <stop offset="100%" stopColor="#00c6ff" />
            </linearGradient>
          </defs>
          <circle className="skill-ring-track" cx="44" cy="44" r="36" />
          <circle
            ref={fillRef}
            className="skill-ring-fill"
            cx="44" cy="44" r="36"
            style={{ strokeDashoffset: CIRC }}
          />
        </svg>
        <div className="skill-ring-icon">{skill.icon}</div>
      </div>

      <p className="skill-name">{skill.name}</p>

      <div className="skill-meta">
        <span className="skill-pct">{skill.level}%</span>
        <span className={`skill-label-badge ${BADGE_CLASS[skill.levelLabel]}`}>
          {skill.levelLabel}
        </span>
      </div>
    </div>
  );
}

function Skills() {
  const [active, setActive] = useState(ALL);

  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  const filtered = active === ALL ? skills : skills.filter(s => s.category === active);
  const countOf  = (key) => key === ALL ? skills.length : skills.filter(s => s.category === key).length;

  return (
    <section className="skill-section">
      <div className="skill-blob skill-blob-1"></div>
      <div className="skill-blob skill-blob-2"></div>

      <div className="skill-container">

        {/* Header */}
        <div className="skill-header" data-aos="fade-down">
          <span className="skill-tag">What I Know</span>
          <h2 className="skill-title">My <span className="skill-highlight">Skills</span></h2>
          <p className="skill-subtitle">
            Technologies, frameworks, and tools I use to build
            modern, scalable, and performant applications.
          </p>
        </div>

        {/* Two-column body */}
        <div className="skill-body">

          {/* Left — Category Panel */}
          <div className="skill-panel" data-aos="fade-right" data-aos-delay="80">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`skill-panel-btn ${active === cat.key ? 'skill-panel-btn--active' : ''}`}
                onClick={() => setActive(cat.key)}
              >
                <span className="skill-panel-icon">
                  <i className={`fas ${cat.icon}`}></i>
                </span>
                {cat.label}
                <span className="skill-panel-count">{countOf(cat.key)}</span>
              </button>
            ))}
          </div>

          {/* Right — Skills Grid */}
          <div className="skill-grid">
            {filtered.map((skill, i) => (
              <RingCard key={skill.name} skill={skill} delay={i * 70} />
            ))}
          </div>

        </div>

        {/* Soft Skills */}
        <div className="skill-soft-wrap" data-aos="fade-up" data-aos-delay="100">
          <div className="skill-soft-header">
            <div className="skill-soft-header-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Soft Skills</h3>
          </div>
          <div className="skill-soft-pills">
            {softSkills.map(s => (
              <span key={s.label} className="skill-soft-pill">
                <i className={`fas ${s.icon}`}></i>
                {s.label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
