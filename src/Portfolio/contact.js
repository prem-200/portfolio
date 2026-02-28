import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:prem0572003@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-5" style={{ background: 'linear-gradient(135deg, #02c8fa 0%, #02c8fa7d 100%)' }}>
      <div className="container">
        <h2 className="text-center text-white mb-5" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Get In Touch</h2>
        
        <div className="row align-items-stretch">
          {/* Left Side - Contact Details */}
          <div className="col-lg-5 mb-4">
            <div className="h-100 p-5 text-white" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px' }}>
              <h3 className="mb-4">Contact Information</h3>
              <p className="mb-4">Fill out the form and I'll get back to you within 24 hours.</p>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-phone fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Phone</h6>
                    <a href="tel:+916379348861" className="text-white text-decoration-none">+91 6379348861</a>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-envelope fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <a href="mailto:prem0572003@gmail.com" className="text-white text-decoration-none">prem0572003@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-map-marker-alt fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Location</h6>
                    <p className="mb-0">Villupuram, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h6 className="mb-3">Connect With Me</h6>
                <div className="d-flex gap-3">
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a href="https://wa.me/916379348861" target="_blank" rel="noopener noreferrer" className="text-white" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                    <i className="fab fa-whatsapp fa-lg"></i>
                  </a>
                  <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-7">
            <div className="bg-white p-5 h-100" style={{ borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
              <h3 className="mb-4 text-dark">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e0e0e0' }}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e0e0e0' }}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e0e0e0' }}
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ padding: '15px', borderRadius: '10px', border: '2px solid #e0e0e0', resize: 'none' }}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-lg w-100 text-white" style={{ padding: '15px', borderRadius: '10px', background: 'linear-gradient(135deg, #02c8fa 0%, #0288d1 100%)', border: 'none', fontWeight: 'bold' }}>
                  <i className="fas fa-paper-plane me-2"></i>Send Message
                </button>
                {status && <div className="alert alert-success mt-3">{status}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
