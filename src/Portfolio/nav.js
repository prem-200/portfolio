import React from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow custom-navbar fixed-top" style={{ padding: '5px 32px' }}>
      <a className="navbar-brand fs-3 hover-brand" href="#home">Portfolio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-3">
            <Link className="nav-link active hover-transform fs-5" to="home" smooth={true} duration={300}><span>H</span>ome</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link hover-transform fs-5" to="about" smooth={true} duration={300}><span>A</span>bout</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link hover-transform fs-5" to="projects" smooth={true} duration={300}><span>P</span>rojects</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link hover-transform fs-5" to="skills" smooth={true} duration={300}><span>S</span>kills</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link hover-transform fs-5" to="certificates" smooth={true} duration={300}><span>C</span>ertificates</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link hover-transform fs-5" to="contact" smooth={true} duration={300}><span>C</span>ontact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
