import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function About() {
    return (
        <div className="container mt-5 p-5 shadow-lg rounded">
         <h1 className="text-center mb-5 my-heading bg-info rounded-3">About Me</h1>

            
            {/* Centered <p> tag */}
            <p className="text-center">
                Passionate about full-stack development with a solid foundation in front-end and back-end technologies. Skilled in HTML, CSS, MediaQuery, Bootstrap, JavaScript, and ReactJS. Eager to work as a team and create advanced web applications that push the boundaries of innovation.
            </p>
            
            <div className="table-responsive">
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
                            <td>07-06-2003</td>
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

            <div className="mt-5 table-responsive">
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
                            <td>8.26</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default About;
