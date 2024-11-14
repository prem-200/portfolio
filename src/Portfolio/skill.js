import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPhp, FaLaravel } from 'react-icons/fa';
import '../App.css';

function Skills() {
  return (
    <section id="skills" className="skills-section container">
    <h2 class="text-center my-heading bg-info rounded-3 mb-5">My Skills</h2>
      <div className="row skills-container">
        <div className="col-md-3 col-sm-6 skill-box">
          <FaHtml5 className="skill-icon" />
          <h3>HTML</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box">
          <FaCss3Alt className="skill-icon" />
          <h3>CSS</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box">
          <FaJs className="skill-icon" />
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box">
          <FaReact className="skill-icon" />
          <h3>React</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box">
          <FaNodeJs className="skill-icon" />
          <h3>Node.js</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box">
          <FaDatabase className="skill-icon" />
          <h3>MongoDB</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box">
          <FaPhp className="skill-icon" />
          <h3>PHP</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 skill-box">
          <FaLaravel className="skill-icon" />
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
