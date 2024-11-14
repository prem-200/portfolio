import React from 'react';
import '../App.css';
import wirpo from '../wirpo.png'; // Imported image
import cer1 from '../cer1.png'; // Imported image
import cer2 from '../cer2.png'; // Imported image
import cer3 from '../cer3.png'; // Extra certificate
import cer4 from '../cer4.png'; // Extra certificate
import cer5 from '../cer5.png'; // Extra certificate

function Certificate() {
  return (
    <>
      <section id="certificates" className="py-5">
        <div className="container">
        <h2 class="text-center my-heading bg-info rounded-3">Certificates</h2>
          <div className="certificate-container">
            {/* Certificate 1 */}
            <div className="certificate-card">
              <img src={wirpo} className="img-fluid" alt="" />
              <div className="img-overlay">wirpo TalentNext</div>
            </div>

            {/* Certificate 2 */}
            <div className="certificate-card">
              <img src={cer1} className="img-fluid" alt="Certificate 2" />
              <div className="img-overlay">Cybersecurity Essentials</div>
            </div>

            {/* Certificate 3 */}
            <div className="certificate-card">
              <img src={cer2} className="img-fluid" alt="Certificate 3" />
              <div className="img-overlay"> SQL</div>
            </div>

            {/* Certificate 4 */}
            <div className="certificate-card">
              <img src={cer3} className="img-fluid" alt="Certificate 4" />
              <div className="img-overlay">Introduction to Packet Tracer</div>
            </div>

            {/* Certificate 5 */}
            <div className="certificate-card">
              <img src={cer4} className="img-fluid" alt="Certificate 5" />
              <div className="img-overlay">Introduction to Cybersecurity</div>
            </div>

            {/* Certificate 6 */}
            <div className="certificate-card">
              <img src={cer5} className="img-fluid" alt="Certificate 6" />
              <div className="img-overlay">Introduction to Networks</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificate;
