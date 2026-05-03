import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:premsathiyaseelan5@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactItems = [
    { icon: 'fa-phone', label: 'Phone', value: '+91 6379348861', href: 'tel:+916379348861' },
    { icon: 'fa-envelope', label: 'Email', value: 'premsathiyaseelan5@gmail.com', href: 'mailto:premsathiyaseelan5@gmail.com' },
    { icon: 'fa-map-marker-alt', label: 'Location', value: 'Villupuram, Tamil Nadu, India', href: null },
  ];

  const socials = [
    { icon: 'fab fa-github', href: 'https://github.com/prem-200', title: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/premsathiyaseelan/', title: 'LinkedIn' },
    { icon: 'fab fa-whatsapp', href: 'https://wa.me/916379348861', title: 'WhatsApp' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/yourprofile', title: 'Instagram' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-blob contact-blob-1"></div>
      <div className="contact-blob contact-blob-2"></div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header" data-aos="fade-down">
          <span className="contact-tag">Let's Connect</span>
          <h2 className="contact-title">Get In <span className="contact-highlight">Touch</span></h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Fill out the form and I'll get back within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="contact-info-card" data-aos="fade-right" data-aos-delay="100">
            <h3>Contact Information</h3>
            <p>Reach out through any of these channels and let's build something great together.</p>

            <ul className="contact-info-list">
              {contactItems.map(({ icon, label, value, href }) => (
                <li key={label} className="contact-info-item">
                  <div className="contact-info-icon-wrap">
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <div className="contact-info-text">
                    <strong>{label}</strong>
                    {href
                      ? <a href={href}>{value}</a>
                      : <span>{value}</span>
                    }
                  </div>
                </li>
              ))}
            </ul>

            <p className="contact-socials-title">Connect With Me</p>
            <div className="contact-socials">
              {socials.map(({ icon, href, title }) => (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                  className="contact-social-btn" title={title}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-card" data-aos="fade-left" data-aos-delay="200">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="Prem S"
                    value={formData.name} onChange={handleChange} required />
                </div>
                <div className="contact-field">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="you@example.com"
                    value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="contact-field">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Project Inquiry"
                  value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="contact-field">
                <label>Message</label>
                <textarea name="message" rows="6" placeholder="Tell me about your project..."
                  value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
              {status && <div className="contact-status">{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
