import React from 'react';

import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow custom-navbar fixed-top"> {/* Added fixed-top class */}
      <div className="container">
        <a className="navbar-brand fs-3 hover-brand" href="#home">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link active hover-transform fs-5" aria-current="page" href="#home"><span>H</span>ome</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link hover-transform fs-5" href="#about-me"><span>A</span>bout</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link hover-transform fs-5" href="#projects"><span>P</span>rojects</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link hover-transform fs-5" href="#skills"><span>S</span>kills</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link hover-transform fs-5" href="#certificates"><span>C</span>ertificates</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link hover-transform fs-5" href="#contact"><span>C</span>ontact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
