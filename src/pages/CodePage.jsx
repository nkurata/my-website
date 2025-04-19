import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import Slider from 'react-slick';
import '../styles/CodePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { tech } from '../constants/tech.js';
import { projects } from '../constants/codeprojects.js';
// import { useLoader } from '../hooks/loader.js';
import useNavBarVisibility from '../hooks/navbar.js';
import useDarkMode from '../hooks/darkmode.js';

projects.sort((a, b) => new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0]));


const CodePage = () => {
  // const isLoading = useLoader();
  const isDarkMode = useDarkMode();
  const navHidden = useNavBarVisibility();
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
        },
      },
    ],
  };

  const filteredProjects = projects.filter((project) => {
    const skillMatch = selectedSkill ? project.skills.includes(selectedSkill) : true;
    const techMatch = selectedTech ? project.tech.includes(selectedTech) : true;
    return skillMatch && techMatch;
  });

  return (
      <div className={isDarkMode ? 'dark-mode' : ''}>
        <NavBar isDarkMode={isDarkMode} hidden={navHidden} />
        <div className="code-page-container">
          <h1 className="page-title">codedbynoe.</h1>
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="skill-filter">Filter by Skill:</label>
              <select id="skill-filter" value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)}>
                <option value="">All Skills</option>
                {[...new Set(projects.flatMap((project) => project.skills))].map((skill) => (
                    <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="tech-filter">Filter by Technology:</label>
              <select id="tech-filter" value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
                <option value="">All Technologies</option>
                {[...new Set(projects.flatMap((project) => project.tech))].map((tech) => (
                    <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
          </div>
          {filteredProjects.length > 1 ? (
              <Slider {...settings}>
                {filteredProjects.map((project, index) => (
                    <div key={index} className="card border rounded-lg p-4 shadow-lg">
                      <div className="card-content">
                        <h2 className="project-title text-blue-500 hover:underline">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <p className="project-date">
                          <strong>Date:</strong> {project.date}
                        </p>
                        <p className="project-context">
                          <strong>Context:</strong> {project.context}
                        </p>
                        <div className="project-skills">
                          {project.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="skill-name">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="project-tech">
                        {project.tech.map((techItem, techIndex) => (
                            <img key={techIndex} src={tech[techItem]} alt={techItem} className="tech-logo" />
                        ))}
                      </div>
                      <a
                          href={project.repoLink}
                          className="button"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        View on GitHub
                      </a>
                    </div>
                ))}
              </Slider>
          ) : (
              filteredProjects.map((project, index) => (
                  <div key={index} className="card border rounded-lg p-4 shadow-lg">
                    <div className="card-content">
                      <h2 className="project-title text-blue-500 hover:underline">{project.title}</h2>
                      <p className="project-description">{project.description}</p>
                      <p className="project-date">
                        <strong>Date:</strong> {project.date}
                      </p>
                      <p className="project-context">
                        <strong>Context:</strong> {project.context}
                      </p>
                      <div className="project-skills">
                        {project.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-name">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="project-tech">
                      {project.tech.map((techItem, techIndex) => (
                          <img key={techIndex} src={tech[techItem]} alt={techItem} className="tech-logo" />
                      ))}
                    </div>
                    <a
                        href={project.repoLink}
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
              ))
          )}
        </div>
      </div>
  );
};

export default CodePage;