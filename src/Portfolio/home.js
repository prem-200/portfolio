import React, { useRef, useEffect, useState, useCallback } from 'react';
import '../App.css';

const roles = ['Front-End Developer', 'Software Developer', 'Full Stack Developer'];

function Home() {
  const homeRef = useRef(null);
  const canvasRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  // Floating particles canvas
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.5 + 0.2,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();
    const onResize = () => initCanvas();
    window.addEventListener('resize', onResize);
    return () => { cleanup && cleanup(); window.removeEventListener('resize', onResize); };
  }, [initCanvas]);

  return (
    <section id="home" ref={homeRef} className="home-section">

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none' }} />

      {/* Decorative background blobs */}
      <div className="home-blob home-blob-1"></div>
      <div className="home-blob home-blob-2"></div>

      <div className="home-inner">

        {/* LEFT */}
        <div className="home-left home-animate-left">
          <span className="home-tag">Available for Work</span>

          <h1 className="home-title">
            Hi, I'm <span className="home-name-highlight">Prem S</span>
          </h1>

          <div className="home-role-wrap">
            <span className="home-role-label">I'm a </span>
            <span className="home-role-text">{displayed}<span className="cursor">|</span></span>
          </div>

          <p className="home-bio">
            Passionate about building modern, responsive web applications with clean code
            and great user experiences. I turn ideas into reality using the latest technologies.
          </p>

          {/* Stats */}
          <div className="home-stats">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Certificates</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="home-btns">
            <a
              href={`${process.env.PUBLIC_URL}/Prem_resume .pdf`}
              download="Prem_Resume.pdf"
              className="home-btn-primary"
            >
              Download CV
            </a>
            <a href="#contact" className="home-btn-outline">Hire Me</a>
          </div>

          {/* Social Links */}
          <div className="home-socials">
            <a href="https://github.com/prem-200" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/premsathiyaseelan/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/916379348861" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right home-animate-right">
          <div className="profile-card">
            <div className="profile-img-wrap">
              <img
                src={`${process.env.PUBLIC_URL}/logo.jpeg`}
                alt="Prem S"
                className="profile-img"
              />
            </div>
            <div className="profile-info-card">
              <span className="profile-status-dot"></span>
              <span>Open to opportunities</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            <span className="tech-chip">React</span>
            <span className="tech-chip">JavaScript</span>
            <span className="tech-chip">Laravel</span>
            <span className="tech-chip">Node.js</span>
            <span className="tech-chip">MongoDB</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>

    </section>
  );
}

export default Home;
