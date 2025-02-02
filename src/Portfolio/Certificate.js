import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../App.css';
import wirpo from '../wirpo.png';
import cer1 from '../cer1.png';
import cer2 from '../cer2.png';
import cer3 from '../cer3.png';
import cer4 from '../cer4.png';
import cer5 from '../cer5.png';

function Certificate() {
  const certificates = [
    { img: wirpo, title: 'Wipro TalentNext' },
    { img: cer1, title: 'Cybersecurity Essentials' },
    { img: cer2, title: 'SQL' },
    { img: cer3, title: 'Introduction to Packet Tracer' },
    { img: cer4, title: 'Introduction to Cybersecurity' },
    { img: cer5, title: 'Introduction to Networks' },
  ];

  return (
    <section id="certificates" className="bg-light">
      <div className="container">
        <h2 className="text-center my-heading bg-info rounded-3 mb-4">Certificates</h2>
        <Carousel
          indicators={false}
          interval={3000}
          controls
          className="custom-carousel"
        >
          {certificates.map((certificate, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center">
                <img
                  className="d-block shadow-lg rounded"
                  src={certificate.img}
                  alt={certificate.title}
                  style={{ width: '80%', height: 'auto' }} // Adjust width and height as per your requirement
                />
                <h5 className="mt-3 bg-dark text-white py-1 px-3 rounded">
                  {certificate.title}
                </h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Certificate;
