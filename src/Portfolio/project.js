import React from 'react';
import { Card } from 'react-bootstrap';
import projectimg from '../project1.jpg';
import projectimg2 from '../project2.jpg';
import '../App.css'; // Import custom styles

function ProjectCard({ image, title, description, demoLink, repoLink }) {
  return (
    <>
    <div className="container">

   <h1 class="text-center my-heading bg-info  rounded-3">Project</h1>
   </div>
   

    <div className="project-card-container">
      <Card className="project-card shadow-sm hover-effect">
        <Card.Img variant="top" src={projectimg} alt={title} className="project-image" />
        <Card.Body className='projectbody'>
          <Card.Title className="project-title">MULTILINGUAL SENTIMENT ANALYSIS FOR YOUTUBE EDUCATIONAL VIDEOS USING NLP AND MACHINE LEARNING APPROACH</Card.Title>
          <Card.Text className="project-description">
          This project presents a comprehensive study on sentiment analysis for YouTube educational videos, leveraging the power of Natural Language Processing (NLP) and Machine Learning approaches.Natural Language Processing (NLP) is a field of artificial intelligence and computational linguistics that focuses on enabling computers to understand, interpret, and generate human language.

          </Card.Text>
         
        </Card.Body>
      </Card>

      <Card className="project-card shadow-sm hover-effect">
        <Card.Img variant="top" src={projectimg2} alt={title} className="project-image" />
        <Card.Body className='projectbody'>
          <Card.Title className="project-title">Comprehensive Strategies for Detecting Malware on Websites</Card.Title>
          <Card.Text className="project-description">
          This content explores the latest approaches and tools for detecting malware in websites. It covers how malicious code can infiltrate websites, the risks it poses to users and businesses, and various techniques—such as behavior-based analysis, signature detection, and machine learning—that help identify and neutralize threats in real-time. Whether you're a developer or a website owner, understanding malware detection is key to safeguarding your digital presence.
          </Card.Text>
       
        </Card.Body>
      </Card>



      <Card className="project-card shadow-sm hover-effect">
        <Card.Img variant="top" src={projectimg} alt={title} className="project-image" />
        <Card.Body className='projectbody'>
          <Card.Title className="project-title">MULTILINGUAL SENTIMENT ANALYSIS FOR YOUTUBE EDUCATIONAL VIDEOS USING NLP AND MACHINE LEARNING APPROACH</Card.Title>
          <Card.Text className="project-description">
            This project presents a comprehensive study on sentiment analysis for YouTube educational videos...
          </Card.Text>
       
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default ProjectCard;
