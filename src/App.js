import React from 'react';
import Navbar from './Portfolio/nav';
import Home from './Portfolio/home';
import About from './Portfolio/about';
import Contact from './Portfolio/contact';
import Skill from './Portfolio/skill';
import Footer from './Portfolio/footer';
import Certificate from './Portfolio/Certificate';
import Experience from './Portfolio/experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './Portfolio/project';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import SettingsPanel from './Portfolio/SettingsPanel';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <SettingsPanel />
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skill /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><ProjectCard /></section>
        <section id="certificates"><Certificate /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;