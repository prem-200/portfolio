import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPhp, FaLaravel } from 'react-icons/fa';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Skills() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: 'ease-out-back', // Smooth animation effect
      once: true, // Animation occurs only once
      offset: 200, // Trigger when the element is 200px from the viewport
    });
  }, []);

  return (
    <section id="skills" className="skills-section container">
      <h2 className="text-center my-heading bg-info rounded-3 mb-5" data-aos="fade-down">My Skills</h2>
      <div className="row skills-container">
        <div className="col-md-3 col-sm-6 skill-box" data-aos="fade-up" data-aos-delay="100">
          <FaHtml5 className="skill-icon" style={{ color: '#E34F26' }} />
          <h3>HTML</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box" data-aos="fade-up" data-aos-delay="200">
          <FaCss3Alt className="skill-icon" style={{ color: '#1572B6' }} />
          <h3>CSS</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box" data-aos="fade-up" data-aos-delay="300">
          <FaJs className="skill-icon" style={{ color: '#F7DF1E' }} />
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box" data-aos="fade-up" data-aos-delay="400">
          <FaReact className="skill-icon" style={{ color: '#61DAFB' }} />
          <h3>React</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box" data-aos="fade-up" data-aos-delay="500">
          <FaNodeJs className="skill-icon" style={{ color: '#339933' }} />
          <h3>Node.js</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box" data-aos="fade-up" data-aos-delay="600">
          <FaDatabase className="skill-icon" style={{ color: '#4DB33D' }} />
          <h3>MongoDB</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box" data-aos="fade-up" data-aos-delay="700">
          <FaPhp className="skill-icon" style={{ color: '#777BB4' }} />
          <h3>PHP</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box" data-aos="fade-up" data-aos-delay="800">
          <FaLaravel className="skill-icon" style={{ color: '#FF2D20' }} />
          <h3>Laravel</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
