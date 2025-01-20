import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import './VisualArtsPage.css';

const VisualArtsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

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

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <NavBar isDarkMode={isDarkMode} hidden={navHidden} />
      <div className="visual-arts-container">
        <h1 className="page-title">designedbynoe</h1>
        <div className="projects-grid">
          <div className="project-card">
            <div className="video-container">
              <iframe
                src="https://www.instagram.com/reel/CrejSe3ohCE/embed"
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
            <h2 className="project-title">Lunatique - 42zin</h2>
            <p className="project-description">Song Cover & Teaser Video for 'Lunatique' by 42zin.</p>
          </div>
          <div className="project-card">
            <div className="video-container">
              <iframe
                src="https://www.instagram.com/reel/CptObLkIeVj/embed"
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
            <h2 className="project-title">Prothèse De Vie by 42zin</h2>
            <p className="project-description">Teaser Video for 'PDV' by 42zin.</p>
          </div>
          <div className="project-card">
            <div className="video-container">
              <iframe
                src="https://www.instagram.com/reel/Crejv_DoXe2/embed"
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
            <h2 className="project-title">Insomnie (Mixtape Vol.1) by Boylee</h2>
            <p className="project-description">Teaser Video for 'Insomnie (Mixtape Vol.1)' by Boylee & Various Artists.</p>
          </div>
          <div className="project-card">
            <div className="video-container">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/bYm6AhUjdPY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="project-title">ACT in Cannes 2024</h2>
            <p className="project-description">Wrap up of the Cannes Festival.</p>
          </div>
          <div className="project-card">
            <div className="video-container">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/giSc_o4U2Zs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="project-title">ACT Care Awards 2023</h2>
            <p className="project-description">Care Awards (ACT Responsible) Ceremony highlights</p>
          </div>
          <div className="project-card">
            <div className="video-container">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/giSc_o4U2Zs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="project-title">ACT in Cannes 2023</h2>
            <p className="project-description">Wrap up of the Cannes Festival.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualArtsPage;