import React from 'react';
import '../App.css'; // Importing custom CSS for styling

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
      <h2 class="text-center my-heading mb-4 bg-info rounded-3">Contact </h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fas fa-phone fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">Phone</h5>
                <p className="card-text">
                  <a href="tel:+916379348861" className="text-decoration-none">+91 6379348861</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fas fa-envelope fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">Email</h5>
                <p className="card-text">
                  <a href="mailto:prem0572003@example.com" className="text-decoration-none">prem0572003@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fab fa-github fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">(Check it)</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fab fa-linkedin fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text">
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">(Check it)</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
