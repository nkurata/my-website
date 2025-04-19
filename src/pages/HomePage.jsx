import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import '../styles/HomePage.css';
import { tools } from '../constants/tools.js';
// import { useLoader } from '../hooks/loader.js';
import useNavBarVisibility from '../hooks/navbar.js';
import useDarkMode from '../hooks/darkmode.js';

const HomePage = () => {
  // const isLoading = useLoader();
  const isDarkMode = useDarkMode();
  const navHidden = useNavBarVisibility();

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