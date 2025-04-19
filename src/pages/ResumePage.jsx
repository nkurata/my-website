import '../styles/ResumePage.css';
import Loader from '../components/Loader.jsx';
import NavBar from '../components/NavBar.jsx';
import { useState, useEffect } from 'react';
// import useLoader from '../hooks/loader.js';
import useNavBarVisibility from '../hooks/navbar.js';
import useDarkMode from '../hooks/darkmode.js';

export default function ResumpePage() {
  // const isLoading = useLoader();
  const isDarkMode = useDarkMode();
  const navHidden = useNavBarVisibility();
  const [hoveredCompany, setHoveredCompany] = useState(null);

  const handleMouseEnter = (company) => {
    setHoveredCompany(company);
  };

  const handleMouseLeave = () => {
    setHoveredCompany(null);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <NavBar isDarkMode={isDarkMode} hidden={navHidden} />
      <div className="pt-24 mx-4 sm:mx-10 md:mx-20 lg:mx-40 mt-10"> {}
        <div className="flex p-6 items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-left">
              Noé Kurata&nbsp;
            </h1>
            <p className="text-left">
              Developer | <a href="mailto:noe.kurata@epitech.eu" className="grey-link">noe.kurata@epitech.eu</a> | +33 7 81 98 09 01
            </p>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/90001579?v=4"
            className="headshot"
          />
        </div>
        <div className="flex pt-0 p-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1 text-left">About Me</h2>
            <p className="text-justify text-left">
              As a third-year student at EPITECH on the International Track, I'm currently studying a wide array of programming languages and technologies. My practical experience ranges from freelance web development and graphic production to internships in technical support, showcasing my versatility and ability to apply theoretical knowledge in real-world scenarios. Born and raised in France, I've attended both international and French public schools, helping me develop a strong foundation in both French and English. Additionally, I've spent a semester in Barcelona, enhancing my Spanish and honing my ability to quickly adapt to new environments. Furthermore, my travels across 26 countries has further refined these adaptive skills, enabling me to thrive in diverse cultural contexts. This combination of academic rigour, technical proficiency, and international exposure positions me uniquely to contribute to innovative projects, blending my technical skills with a creative and global mindset.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-stretch">
          <div className="w-full lg:w-1/3 p-6">
            <h2 className="text-2xl font-bold mb-1 text-left">Skills</h2>
            <ul className="list-disc list-inside text-left">
              <li>Languages: C, C++, Python, Haskell, PHP, SQL</li>
              <li>Web Languages: HTML, CSS, Javascript</li>
              <li>Frameworks: Laravel (Nova), React, Tailwind</li>
              <li>Operating Systems: Mac OS, Linux, Windows</li>
              <li>Adobe Suite: <a href="https://designedbynoe.wordpress.com/what-ive-been-doing/" className="grey-link underline">Visual Arts</a></li>
            </ul>
            <br />
            <h2 className="text-2xl font-bold mb-1 text-left">Strengths</h2>
            <ul className="list-disc list-inside text-left">
              <li>Time Management and organizational skills</li>
              <li>Ability to work independently and in teams</li>
              <li>Creativity and Innovation</li>
              <li>Attention to detail</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 p-6">
            <h3 className="text-2xl mb-1 font-bold">Experience</h3>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('ACT Responsible')}
              onMouseLeave={handleMouseLeave}
            >
              <h5 className="text-xl">
                <a href="https://www.act-responsible.org" className="underline">ACT Responsible</a>
              </h5>
              <h7 className="text-gray-400">Remote & France</h7>
              <p>Freelance Web development <br />Video & Graphic production</p>
              <p className="text-gray-400">Jun 2020 - Present</p>
              {hoveredCompany === 'ACT Responsible' && (
                <div className="hover-info border p-4 rounded-lg">
                  <p>ACT Responsible is a non-profit organization promoting responsible communication for sustainable development through various initiatives and campaigns.</p>
                </div>
              )}
            </div>
            <br />
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Adforum')}
              onMouseLeave={handleMouseLeave}
            >
              <h6 className="text-xl">
                <a href="https://www.adforum.com" className="underline">Adforum</a>
              </h6>
              <h8 className="text-gray-400">Paris 17e, France</h8>
              <p>Technical Support Intern</p>
              <p className="text-gray-400">Aug 2023 - Dec 2023</p>
              {hoveredCompany === 'Adforum' && (
                <div className="hover-info border p-4 rounded-lg shadow-lg">
                  <p>Adforum is a global advertising database and creative library, providing insights and resources for the advertising industry.</p>
                </div>
              )}
            </div>
            <br />
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Conceptory')}
              onMouseLeave={handleMouseLeave}
            >
              <h4 className="text-xl">
                <a href="https://www.conceptory.fr" className="underline">Conceptory</a>
              </h4>
              <h9 className="text-gray-400">Bagnolet, France</h9>
              <p>Graphic Designer</p>
              <p className="text-gray-400">Feb 2019</p>
              {hoveredCompany === 'Conceptory' && (
                <div className="hover-info border p-4 rounded-lg shadow-lg">
                  <p>Conceptory is a creative agency specializing in graphic design, branding, and digital marketing solutions.</p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-6">
            <h2 className="text-2xl font-bold mb-1">Education</h2>
            <h3 className="text-xl">
              <a href="https://www.epitech.eu" className="underline">EPITECH</a>
            </h3>
            <h7 className="text-gray-400">International Track</h7>
            <p>Masters Degree</p>
            <p className="text-gray-400">Sept 2022 - Present</p>
            <br />
            <h4 className="text-xl">Lycée Alain</h4>
            <h8 className="text-gray-400">Le Vésinet, France</h8>
            <p>French European Baccalaureate</p>
            <p className="text-gray-400">Sept 2019 - July 2022</p>
            <br />
            <h5 className="text-xl">Lycée International</h5>
            <h6 className="text-gray-400">St Germain-en-Laye, France</h6>
            <p>International Brevet (OIB)</p>
            <p className="text-gray-400">Sept 2010 - Jun 2019</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}