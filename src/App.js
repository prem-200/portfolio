import React from 'react';
import Navbar from './Portfolio/nav'; 
import Home from './Portfolio/home';
import About from './Portfolio/about';
import Contact from './Portfolio/contact';
import Skill from './Portfolio/skill';
import Footer from './Portfolio/footer';
import Certificate from './Portfolio/Certificate';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './Portfolio/project';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar with anchor links */}
      
      <section id="home">
        <Home /> {/* Home section */}
      </section>
      
      <section id="about">
        <About /> {/* About section */}
      </section>
      
      <section id="skills">
        <Skill /> {/* Skills section */}
      </section>
      
      <section id="projects">
        <ProjectCard /> {/* Projects section */}
      </section>
      
      <section id="certificates">
        <Certificate /> {/* Certificates section */}
      </section>
      
      <section id="contact">
        <Contact /> {/* Contact section */}
      </section>
      
      <Footer /> {/* Footer */}
    </div>
  );
}

export default App;
