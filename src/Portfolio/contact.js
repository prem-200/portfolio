import React from 'react';
import '../App.css'; // Importing custom CSS for styling

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center my-heading mb-4 bg-info rounded-3">Contact</h2>
        <div className="row text-center">
          {/* Phone */}
          <div className="col-md-2 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fas fa-phone fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">Phone</h5>
                <p className="card-text">
                  <a href="tel:+916379348861" className="text-decoration-none">6379348861</a>
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-2 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fas fa-envelope fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">Email</h5>
                <p className="card-text">
                  <a href="mailto:prem@gmail.com" className="text-decoration-none">prem@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-md-2 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fab fa-github fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Check it</a>
                </p>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="col-md-2 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fab fa-linkedin fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text">
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Check it</a>
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="col-md-2 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fab fa-whatsapp fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">WhatsApp</h5>
                <p className="card-text">
                  <a href="https://wa.me/916379348861" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Chat with me</a>
                </p>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="col-md-2 mb-4">
            <div className="card contact-card">
              <div className="card-body">
                <i className="fab fa-instagram fa-3x mb-3 contact-icon"></i>
                <h5 className="card-title">Instagram</h5>
                <p className="card-text">
                  <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Check it</a>
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
