import React from 'react';
import profileImg from '../img.jpg'; // Ensure the path to your image is correct
import { useRef } from 'react';
import '../App.css';

function Home() {
  const homeRef = useRef(null);
  return (
    <section id="home" ref={homeRef}>
    <div className="container-fluid mt-5">
      <header className="header d-flex flex-column flex-md-row align-items-center justify-content-between py-5 gradient-bg">
        <div className="text-container text-center text-md-start">
          <h1 className="display-3 text-white">HELLO! THIS IS PREM S</h1>
          <p className="lead display-6 text-white">FRONT-END DEVELOPER</p>
          <a href={`${process.env.PUBLIC_URL}/Prem_resume .pdf`} download="Prem_Resume.pdf" className="btn btn-light mb-3 mb-md-0">
            Download CV
          </a>
        </div>
        <img src={profileImg} alt="Profile" className="profile-image img-fluid rounded-circle ms-4 mt-3 mt-md-0" />
      </header>
    </div>
    </section>
  );
}

export default Home;
