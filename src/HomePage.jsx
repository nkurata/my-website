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

const techno = [
  { id: 1, title: 'C', image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
  { id: 2, title: 'C++', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { id: 3, title: 'C#', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' },
  { id: 4, title: 'Assembly', image: 'https://static-00.iconduck.com/assets.00/assembly-icon-2048x2048-wspx42mf.png' },
  { id: 5, title: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { id: 6, title: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { id: 7, title: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { id: 8, title: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { id: 9, title: 'Haskell', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg' },
  { id: 10, title: 'PHP', image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
  { id: 11, title: 'SQL', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png' },
  { id: 12, title: 'MySQL', image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
  { id: 13, title: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { id: 14, title: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { id: 15, title: 'Flutter', image: 'https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png' },
  { id: 16, title: 'TailwindCSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { id: 17, title: 'Laravel', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { id: 18, title: '.NET', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg' },
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
        <div className="tools">
          <h1 className="tools-title">Tool I Use</h1>
          <div className="card-list">
            {tools.map(tool => (
              <div key={tool.id} className="card-item">
                <img src={tool.image} alt={tool.title} className="card-image" />
                <p className="card-text">{tool.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="techno">
          <h1 className="techno-title">Technologies I've learnt</h1>
          <div className="card-list">
            {techno.map(tech => (
              <div key={tech.id} className="card-item">
                <img src={tech.image} alt={tech.title} className="card-image" />
                <p className="card-text">{tech.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;