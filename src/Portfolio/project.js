import React from 'react';
import { Carousel } from 'react-bootstrap';
import projectimg1 from '../project1.jpg';
import projectimg2 from '../project2.jpg';
import '../App.css'; // Import custom styles

function ProjectCard() {
  const projects = [
    {
      image: projectimg1,
      title: 'Multilingual Sentiment Analysis for YouTube Educational Videos',
      description:
        'This project presents a comprehensive study on sentiment analysis for YouTube educational videos, leveraging the power of Natural Language Processing (NLP) and Machine Learning approaches...',
    },
    {
      image: projectimg2,
      title: 'Comprehensive Strategies for Detecting Malware on Websites',
      description:
        'This project explores the latest approaches and tools for detecting malware in websites. It covers various techniques to identify and neutralize threats in real-time...',
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center my-heading bg-info rounded-3 mb-4">Projects</h1>
      <Carousel>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="project-slide">
              <img
                className="d-block w-100 project-slide-image"
                src={project.image}
                alt={`Project ${index + 1}`}
              />
              <div className="carousel-caption">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ProjectCard;
