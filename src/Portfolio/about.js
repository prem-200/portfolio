import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function About() {
    // Initialize AOS when the component mounts
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duration of animations (1200ms)
            easing: 'ease-out-back', // Animation easing for a smoother effect
            once: true, // Animation triggers only once
            offset: 200, // Animation starts when the element is 200px from the viewport
        });
    }, []);

    return (
        <div className="container mt-5 p-5 shadow-lg rounded">
            {/* Title Section */}
            <h1 className="text-center mb-5 my-heading bg-info rounded-3" data-aos="fade-down" data-aos-delay="100">
                About Me
            </h1>

            {/* Introductory Paragraph */}
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
                Passionate about full-stack development with a solid foundation in front-end and back-end technologies. Skilled in HTML, CSS, MediaQuery, Bootstrap, JavaScript, and ReactJS. Eager to work as a team and create advanced web applications that push the boundaries of innovation.
            </p>

            {/* Personal Information Table */}
            <div className="table-responsive" data-aos="flip-left" data-aos-delay="300">
                <table className="table table-hover table-bordered text-center">
                    <thead className="thead-light">
                        <tr>
                            <th colSpan="2" className="bg-info text-white table-header">Personal Information</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '1.2rem' }}>
                        <tr>
                            <th className="bg-light">Name</th>
                            <td>PREM</td>
                        </tr>
                        <tr>
                            <th className="bg-light">Date of Birth</th>
                            <td>05-07-2003</td>
                        </tr>
                        <tr>
                            <th className="bg-light">Address</th>
                            <td>7/1, Muthampalyam, Villupuram, 605602</td>
                        </tr>
                        <tr>
                            <th className="bg-light">Email</th>
                            <td>prem0572003@gmail.com</td>
                        </tr>
                        <tr>
                            <th className="bg-light">Languages Known</th>
                            <td>Tamil, English</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Graduation Information Table */}
            <div className="mt-5 table-responsive" data-aos="zoom-in" data-aos-delay="400">
                <table className="table table-hover table-bordered text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th colSpan="2" className="bg-info text-white table-header">Graduation Information</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '1.1rem' }}>
                        <tr>
                            <th className="bg-light">Course</th>
                            <td>B.E (Computer Science and Engineering)</td>
                        </tr>
                        <tr>
                            <th className="bg-light">College</th>
                            <td>IFET College of Engineering, Villupuram</td>
                        </tr>
                        <tr>
                            <th className="bg-light">Expected Year of Passing</th>
                            <td>2024</td>
                        </tr>
                        <tr>
                            <th className="bg-light">CGPA</th>
                            <td>7.56</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default About;
