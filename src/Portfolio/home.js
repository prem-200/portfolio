import React from 'react';
import profileImg from '../img.jpg'; // Ensure the path to your image is correct
import '../App.css';

function Home() {
  return (
    <div className="container-fluid mt-5">
      <header className="header d-flex flex-column flex-md-row align-items-center justify-content-between py-5 gradient-bg">
        <div className="text-container text-center text-md-start">
          <h1 className="display-3 text-white">HELLO! THIS IS PREM</h1>
          <p className="lead display-6 text-white">FULL-STACK Developer</p>
          <a href="../prem.pdf" download="Prem.pdf" className="btn btn-light mb-3 mb-md-0">
            Download CV
          </a>
        </div>
        <img src={profileImg} alt="Profile" className="profile-image img-fluid rounded-circle ms-4 mt-3 mt-md-0" />
      </header>
    </div>
  );
}

export default Home;
