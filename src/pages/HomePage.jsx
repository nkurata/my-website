import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import '../styles/HomePage.css';
import { tools } from '../constants/tools.js';

const HomePage = () => {
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
        <div className="home-container">
          <div className="intro">
            <h1 className="intro-title">Hi 👋, I'm Noé Kurata</h1>
            <h3 className="intro-subtitle">
              <strong>Computer Science Student & Digital Designer</strong>
            </h3>
          </div>
          <div className="about flex">
            <div className="about-content flex-1">
              <h1 className="about-title">About Me</h1>
              <ul className="about-text">
                <li>I'm a Digital Designer passionate about technology and design.</li>
                <li>I'm currently learning C++ Game Development.</li>
                <li>And in my freetime learning Full-Stack Web Development.</li>
                <li>I desire to create impactful digital experiences.</li>
              </ul>
            </div>
            <div className="about-image">
              <img
                  src="https://avatars.githubusercontent.com/u/90001579?v=4"
                  className="headshot"
              />
            </div>
          </div>
          <div className="tools">
            <h1 className="tools-title">Tools I Use</h1>
            <div className="card-list">
              {tools.map(tool => (
                  <div key={tool.id} className="card-item">
                    <img src={tool.image} alt={tool.title} className="card-image" />
                    <p className="card-text">{tool.title}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;