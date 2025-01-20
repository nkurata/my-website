import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ isDarkMode, hidden }) => {
  const { pathname } = useLocation();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Coding Projects', path: '/code' },
    { label: 'Visual Projects', path: '/visual-arts' },
    { label: 'My Resume', path: '/resume' },
  ];

  return (

      <nav
        className={`fixed top-0 left-0 w-full flex justify-between py-10 items-center bg-transparent transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`} >
      <div className="flex items-center ml-4">
        <Link to="/">
          <img
            src={isDarkMode ? 'assets/logo_white.png' : 'assets/logo_dark.png'}
            className="logo h-24 text-white hover:text-blue-400"
          />
        </Link>
        <ul className="icondiv">
          <li>
            <a
              href="https://www.linkedin.com/in/noekurata/"
              className={`ml-2 hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              <i className={`icon fab fa-linkedin fa-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:text-blue-400`}></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/nkurata" className={`ml-2 hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <i className={`icon fab fa-github fa-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:text-blue-400`}></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/designedbynoe/" className={`ml-2 hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <i className={`icon fab fa-instagram fa-lg ${isDarkMode ? 'text-white' : 'text-black'} hover:text-blue-400`}></i>
            </a>
          </li>
        </ul>
      </div>
      <ul className="navbar-links">
        {links.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`font-semibold ${
                pathname === item.path
                  ? 'text-blue-400 opacity-100'
                  : 'text-blue-400 opacity-50'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
