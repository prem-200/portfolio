import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Tecla Media',
      period: 'Jan 2025 - Present',
      type: 'Full-time',
      responsibilities: [
        'Independently developed full-stack e-commerce, HRMS, and insurance management systems, ensuring scalable architecture and efficient data management.',
        'Engaged with clients to analyze business needs, refine design and content strategies, align project objectives, and ensure timely delivery through structured communication and coordination.',
        'Focused on back-end development with strong experience in building role-based workflows, real-time dashboards, REST APIs, and automated notifications.'
      ]
    },
    {
      title: 'Software Development Intern',
      company: 'Tecla Media',
      period: 'Oct 2024 - Dec 2024',
      type: 'Internship',
      responsibilities: [
        'Contributed to the development of marketplace platforms and business websites.',
        'Implemented secure payments, order management, and role-based access control.',
        'Built responsive dashboards using HTML, CSS, Bootstrap, and JavaScript; implemented REST APIs and Laravel Passport for secure authentication and data handling.'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Nanlogical Consultancy Services Pvt Ltd',
      period: 'Jun 2024 - Aug 2024',
      type: 'Full-time',
      responsibilities: [
        'Gained foundational knowledge in web development, including HTML, CSS, JavaScript, and basic front-end/back-end workflows.',
        'Learned project structure, development lifecycle, and version control while assisting with minor bug fixes and UI improvements.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center my-heading bg-info rounded-3 mb-5" data-aos="fade-down">Experience</h2>
        
        <div className="row justify-content-center">
          {experiences.map((exp, index) => (
            <div key={index} className="col-lg-10 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="experience-card shadow-lg p-4 bg-white rounded">
                <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                  <div>
                    <h4 className="text-primary mb-1">{exp.title}</h4>
                    <h5 className="text-secondary mb-2">{exp.company}</h5>
                  </div>
                  <div className="text-end">
                    <span className="badge bg-info text-white px-3 py-2 mb-2">{exp.period}</span>
                    <br />
                    <span className="badge bg-secondary px-3 py-2">{exp.type}</span>
                  </div>
                </div>
                <ul className="list-unstyled">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
