import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar.jsx';
import Slider from 'react-slick';
import '../styles/VisualArtsPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../constants/visprojects.js';
// import { useLoader } from '../hooks/loader.js';
import useNavBarVisibility from '../hooks/navbar.js';
import useDarkMode from '../hooks/darkmode.js';

const VisualArtsPage = () => {
  // const isLoading = useLoader();
  const isDarkMode = useDarkMode();
  const navHidden = useNavBarVisibility();
  const [selectedTag, setSelectedTag] = useState('');
  const sliderRef = useRef(null);
  const lastSwipeTime = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      const horizontal = Math.abs(e.deltaX);
      const vertical = Math.abs(e.deltaY);
      if (horizontal <= vertical || horizontal < 10) return;

      const now = Date.now();
      if (now - lastSwipeTime.current < 250) return;
      lastSwipeTime.current = now;

      e.preventDefault();
      if (e.deltaX > 0) {
        sliderRef.current?.slickNext();
      } else {
        sliderRef.current?.slickPrev();
      }
    };

    const container = document.querySelector('.visual-arts-container');
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    return selectedTag ? project.tags.includes(selectedTag) : true;
  });

  return (
      <div className={isDarkMode ? 'dark-mode' : ''}>
        <NavBar isDarkMode={isDarkMode} hidden={navHidden} />
        <div className="visual-arts-container">
          <h1 className="page-title">designedbynoe.</h1>
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
          <Slider ref={sliderRef} {...settings}>
            {filteredProjects.map((project, index) => (
                <div key={index} className="card border rounded-lg p-4 shadow-lg">
                  <div className="relative pb-[100%] h-0 overflow-hidden max-w-full bg-black">
                    <iframe
                        src={project.videoSrc}
                        className="absolute top-0 left-0 w-full h-full"
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