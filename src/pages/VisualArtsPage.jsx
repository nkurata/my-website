import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import Slider from 'react-slick';
import '../styles/VisualArtsPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../constants/visprojects.js';

const VisualArtsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const filteredProjects = projects.filter((project) => {
    return selectedTag ? project.tags.includes(selectedTag) : true;
  });

  const settings = {
    dots: true,
    infinite: filteredProjects.length > 1,
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
          infinite: filteredProjects.length > 1,
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

  return (
      <div className={isDarkMode ? 'dark-mode' : ''}>
        <NavBar isDarkMode={isDarkMode} hidden={navHidden} />
        <div className="visual-arts-container">
          <h1 className="page-title">designedbynoe</h1>
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="tag-filter">Filter by Tag:</label>
              <select id="tag-filter" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
                <option value="">All Tags</option>
                {[...new Set(projects.flatMap((project) => project.tags))].map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
          <Slider {...settings}>
            {filteredProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="video-container">
                    <iframe
                        src={project.videoSrc}
                        width="100%"
                        height="200"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                  </div>
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
  );
};

export default VisualArtsPage;