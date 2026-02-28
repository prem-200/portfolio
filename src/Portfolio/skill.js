import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiC, SiAdobephotoshop, SiAdobepremierepro, SiUnity, SiVisualstudiocode, SiCanva, SiMongodb } from 'react-icons/si';
import { Carousel } from 'react-bootstrap';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-back',
      once: true,
      offset: 200,
    });
  }, []);

  const technicalSkills = [
    { icon: <FaHtml5 style={{ color: '#E34F26' }} />, name: 'HTML' },
    { icon: <FaCss3Alt style={{ color: '#1572B6' }} />, name: 'CSS' },
    { icon: <FaJs style={{ color: '#F7DF1E' }} />, name: 'JavaScript' },
    { icon: <FaJava style={{ color: '#007396' }} />, name: 'Java' },
    { icon: <SiC style={{ color: '#A8B9CC' }} />, name: 'C' },
    { icon: <FaPython style={{ color: '#3776AB' }} />, name: 'Python' },
    { icon: <FaReact style={{ color: '#61DAFB' }} />, name: 'React' },
    { icon: <FaNodeJs style={{ color: '#339933' }} />, name: 'Node.js' },
    { icon: <SiMongodb style={{ color: '#47A248' }} />, name: 'MongoDB' },
  ];

  const tools = [
    { icon: <SiAdobephotoshop style={{ color: '#31A8FF' }} />, name: 'Photoshop' },
    { icon: <SiAdobepremierepro style={{ color: '#9999FF' }} />, name: 'Premiere Pro' },
    { icon: <SiUnity style={{ color: '#000000' }} />, name: 'Unity Engine' },
    { icon: <SiVisualstudiocode style={{ color: '#007ACC' }} />, name: 'VS Code' },
    { icon: <SiCanva style={{ color: '#00C4CC' }} />, name: 'Canva' },
  ];

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <section id="skills" className="skills-section container">
      <h2 className="text-center my-heading bg-info rounded-3 mb-5" data-aos="fade-down">My Skills</h2>
      
      <h3 className="text-center mb-4" data-aos="fade-up">Technical Skills</h3>
      <Carousel indicators={false} interval={2500}>
        {chunkArray(technicalSkills, 3).map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <div className="row justify-content-center py-4">
              {chunk.map((skill, i) => (
                <div key={i} className="col-md-4 text-center skill-box mb-3">
                  <div className="skill-icon" style={{ fontSize: '4rem' }}>{skill.icon}</div>
                  <h4 className="mt-3">{skill.name}</h4>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <h3 className="text-center mb-4 mt-5" data-aos="fade-up">Tools</h3>
      <Carousel indicators={false} interval={2500}>
        {chunkArray(tools, 3).map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <div className="row justify-content-center py-4">
              {chunk.map((tool, i) => (
                <div key={i} className="col-md-4 text-center skill-box mb-3">
                  <div className="skill-icon" style={{ fontSize: '4rem' }}>{tool.icon}</div>
                  <h4 className="mt-3">{tool.name}</h4>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <h3 className="text-center mb-4 mt-5" data-aos="fade-up">Non-Technical Skills</h3>
      <div className="row" data-aos="fade-up" data-aos-delay="200">
        <div className="col-12 text-center">
          <p style={{ fontSize: '1.2rem' }}>
            <strong>Teamwork • Time Management • Effective Communication • Hard Work • Problem-Solving</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
