import React from 'react';
import { Carousel } from 'react-bootstrap';
import projectimg1 from '../project1.jpg';
import projectimg2 from '../project2.jpg';
import '../App.css';

function ProjectCard() {
  const projects = [
    {
      image: projectimg1,
      title: 'HRMS (Human Resource Management System)',
      description:
        'Developed a comprehensive HRMS to manage employee records, attendance, payroll, and leave processes, implementing role-based access and automated workflows to improve operational efficiency.',
    },
    {
      image: projectimg2,
      title: 'Insurance Management System',
      description:
        'Built a scalable Insurance Management System to optimize policy lifecycle management, claims processing, premium tracking, and automated renewals with structured user access control.',
    },
    {
      image: projectimg1,
      title: 'Business & Corporate Websites',
      description:
        'Designed and developed responsive static and dynamic business websites with modern UI/UX, SEO-friendly architecture, content management features, and performance optimization to enhance user engagement and strengthen digital presence.',
    },
    {
      image: projectimg2,
      title: 'SEISMIC TREMOR ALERT AND DOWNPOUR CAUTION',
      description:
        'The goal of this project is to identify seismic tremors and downpours so that we can issue real-time alert warnings when they may result in earthquakes and rain.',
    },
    {
      image: projectimg1,
      title: 'TRACKIT - Vehicle Tracking System',
      description:
        'An affordable vehicle tracking system for local area private buses using smartphone GPS. Tracks bus location based on time schedules without expensive GPS hardware.',
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
