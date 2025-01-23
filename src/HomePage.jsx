import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import './HomePage.css';

const tools = [
  { id: 1, title: 'VS Code', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
  { id: 2, title: 'JetBrains', image: 'https://resources.jetbrains.com/storage/products/company/brand/logos/Toolbox_icon.png' },
  { id: 3, title: 'Git', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  { id: 4, title: 'GitHub', image: 'https://cdn.worldvectorlogo.com/logos/github-icon-2.svg' },
  { id: 5, title: 'Docker', image: 'https://img.icons8.com/fluent/512/docker.png' },
  { id: 6, title: 'Linux', image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg' },
  { id: 9, title: 'WSL 2', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Windows_Subsystem_for_Linux_logo.png' },
  { id: 10, title: 'DBngin', image: 'https://dbngin.com/resources/images/logo.png' },
  { id: 7, title: 'Figma', image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { id: 8, title: 'Adobe Creative Cloud', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/2101px-Adobe_Creative_Cloud_rainbow_icon.svg.png'},
  { id: 11, title: 'Procreate', image: 'https://assets.procreate.art/img/procreate-icon-search-display.png' },
  { id: 12, title: 'Notion', image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
];

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