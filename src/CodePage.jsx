import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import Slider from 'react-slick'
import './CodePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const tech = {
  'C++': 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  'SFML': 'https://www.sfml-dev.org/download/goodies/sfml-icon-big.png',
  'Python': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  'Flutter': 'https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png',
  'Dart': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png',
  'Django': 'https://static.djangoproject.com/img/logos/django-logo-negative.png',
  'Docker': 'https://img.icons8.com/fluent/512/docker.png',
  'Ubuntu': 'https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png',
  'x86-64': 'https://icons.iconarchive.com/icons/icons8/android/512/Computer-Hardware-X86-icon.png',
  'Apple Silicon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/404px-Apple_logo_grey.svg.png',
  'Oh My Zsh': 'https://ohmyz.sh/assets/img/logo.svg',
  'Zsh': 'https://img.icons8.com/ios-filled/512/console.png',
  'Shell': 'https://img.icons8.com/ios/512/command-line.png',
  'SDL-2': 'https://www.libsdl.org/media/SDL_logo.png',
  'NCurses': 'https://cdn.changelog.com/uploads/icons/topics/Z3e/icon_large.png?v=63714708682',
  'C': 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
  'Unix': 'https://icons.veryicon.com/png/o/system/asset-management-system/unix.png',
  'ELF': 'https://cdn-icons-png.flaticon.com/512/28/28801.png',
  'Haskell': 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg',
  'GitHub': 'https://cdn.worldvectorlogo.com/logos/github-icon-2.svg',
  'GitHub Workflows': 'https://img.icons8.com/color/512/github-actions.png',
  'Bash': 'https://img.icons8.com/color/512/bash.png',
  'MakeFile': 'https://static-00.iconduck.com/assets.00/makefile-icon-2048x1831-10j9gh4v.png',
  'CMake': 'https://static-00.iconduck.com/assets.00/cmake-icon-2046x2048-9cd81awg.png',
  'HTML' : 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  'CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  'JavaScript' : 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'React': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'TailwindCSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
};

const projects = [
  {
    title: "Personal Portfolio",
    description: "This very website your on! A personal portfolio website showcasing my projects and skills.",
    skills: ["Web Development", "UI Design"],
    tech: ["React", "TailwindCSS", "JavaScript"],
    repoLink: 'https://github.com/nkurata/my-website',
    date: "Jan 2025",
  },
  {
    title: 'R-Type',
    description: 'A multiplayer space 2D shooter game with a client-server architecture & modular game engine.',
    skills: ['Networking', 'Game Development', 'Dynamic Libraries'],
    tech: ['C++', 'SFML', 'CMake'],
    repoLink: 'https://github.com/LucaMartinet7/R-Type',
    date: 'Nov 2024 - Jan 2025',
    context: 'Epitech Project',
  },
  {
    title: 'Neural Network',
    description: 'A neural network that predicts the outcome of a game.',
    skills: ['Machine Learning', 'Neural Networks'],
    tech: ['Python', 'MakeFile'],
    repoLink: 'https://github.com/LucaMartinet7/Neural-Network',
    date: 'Nov 2024 - Dec 2024',
    context: 'Epitech Project',
  },
  {
    title: 'AREA (Action Reaction)',
    description: 'A web application that allows users to automate tasks between different services.',
    skills : ['Web Development', 'APIs', 'Database Management', 'UI Design'],
    tech: ['Flutter', 'Dart', 'Django', 'Python'],
    repoLink: 'https://github.com/LucaMartinet7/Area-Tek3',
    date: 'Oct 2024 - Nov 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Maze Game',
    description: 'A Python-based maze game using the turtle module.',
    skills: ['Game Development'],
    tech: ['Python'],
    repoLink: 'https://github.com/nkurata/MazeGame',
    date: 'Dec 2021',
    context: 'Personal Project',
  },
  {
    title: 'Ubuntu x86-64 Container',
    description: 'Docker container running Ubuntu on x86-64 architecture.',
    skills : ['Container', 'Linux', 'Architecture'],
    tech: ['Docker', 'Ubuntu', 'x86-64', 'Apple Silicon'],
    repoLink: 'https://github.com/nkurata/UbuntuContainer',
    date: 'Jan 2024',
    context: 'Personal Project',
  },
  {
    title: 'Minimal-OS',
    description: 'Minimalist prompt with Git status indicators.',
    skills: ['Shell Scripting'],
    tech: ['Oh My Zsh', 'Zsh', 'Shell'],
    repoLink: 'https://github.com/nkurata/zsh-theme',
    date: 'Jan 2023',
    context: 'Personal Project',
  },
  {
    title: 'Dynamic Game Engine',
    description: 'Play games with different graphic libraries at runtime.',
    skills: ['Game Development', 'Dynamic Libraries'],
    tech: ['C++', 'SFML', 'SDL-2', 'NCurses', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Arcarde',
    date: 'Mar 2024 - Apr 2024',
    context: 'Epitech Project',
  },
  {
    title: 'System Call Tracing Tool',
    description: 'Tracks and displays system calls made by a program.',
    skills : ['System Calls', 'Tracing', 'Operation Systems', 'Debugging'],
    tech: ['C', 'Unix', 'x86-64', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/System-Call-Tracing-Tool',
    date: 'Mar 2024 - Apr 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Binary File Analyzer',
    description: 'Recreates nm and objdump Unix tools.',
    skills: ['Binary Files', 'Parsing', 'Operation Systems'],
    tech: ['C', 'ELF', 'Unix', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Binary-File-Analyzer-and-Displayer.git',
    date: 'Feb 2024 - Mar 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Circuit Simulator',
    description: 'Build a circuit simulator to understand digital circuits.',
    skills : ['Circuits', 'Logic Gates'],
    tech: ['C++', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Circuit-Simulator',
    date: 'Feb 2024 - Mar 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Image Compressor',
    description: 'Reduces image file sizes with efficient algorithms.',
    skills: ['Compression', 'Image Processing'],
    tech: ['Haskell', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Image-Compressor',
    date: 'Feb 2024 - Mar 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Portfolio Page',
    description: 'A landing page used as a Link page for an Artist.',
    skills: ['Web Development', 'UI Design'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/nkurata/WebisteCK',
    date: 'Mar 2024',
    context: 'Personal Project',
  },
  {
    title: 'File Transfer Protocol',
    description: 'Simplified FTP server and client.',
    skills: ['Networking', 'File Transfer'],
    tech: ['C', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/File-Transfer-Protocol.git',
    date: 'Jan 2024 - Feb 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Mini Lib C',
    description: 'Recreation of C Library in Assembly.',
    skills: ['Library', 'System Calls'],
    tech: ['x86 Assembly', 'C', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Mini-Lib-C.git',
    date: 'Jan 2024 - Feb 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Makefile Generator',
    description: 'Automated Makefile generator.',
    skills: ['Automation', 'Scripting'],
    tech: ['Bash', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Automated-Makefile-Generator.git',
    date: 'Jul 2023',
    context: 'Epitech Project',
  },
  {
    title: 'AI-Pathfinding Simulation',
    description: 'Autonomous vehicle navigates through a virtual environment.',
    skills: ['AI', 'Pathfinding'],
    tech: ['Python', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/AI-Powered-Pathfinding-Simulation.git',
    date: 'Apr 2023 - May 2023',
    context: 'Epitech Project',
  },
  {
    title: 'DevOps Tool',
    description: 'Streamlines deployment and CI.',
    skills: ['DevOps', 'CI/CD', 'Automation'],
    tech: ['GitHub', 'C', 'MakeFile', 'GitHub Workflows', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Chocolatin_CI',
    date: 'Mar 2023 - Apr 2023',
    context: 'Epitech Project',
  },
  {
    title: 'Square Finder',
    description: 'Finds the largest square on a 2D map.',
    skills: ['Algorithm Optimization', 'File Handling'],
    tech: ['C', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Largest-Square-Finder-on-2D-Map-BSQ.git',
    date: 'Oct 2022 - Dec 2022',
    context: 'Epitech Project',
  },
  {
    title: 'My RPG',
    description: '2D RPG game engine.',
    skills: ['Game Development', 'UI Design'],
    tech: ['C', 'SFML', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/My-RPG.git',
    date: 'Mar 2023 - Apr 2023',
    context: 'Epitech Project',
  },
  {
    title: 'My Paint',
    description: 'Simple drawing application.',
    skills: ['UI Design', 'Graphics', 'MakeFile'],
    tech: ['C', 'SFML'],
    repoLink: 'https://github.com/nkurata/My-Paint.git',
    date: 'Feb 2023 - Mar 2023',
    context: 'Epitech Project',
  },
  {
    title: 'Minishell',
    description: 'Minimalistic shell with command execution.',
    skills: ['Shell Scripting', 'System Calls'],
    tech: ['C','Unix', 'Shell', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/MiniShell.git',
    date: 'Feb 2023 - Apr 2023',
    context: 'Epitech Project',
  },
  {
    title: 'My Sokoban',
    description: 'Classic Sokoban puzzle game.',
    skills: ['Game Logic', 'Terminal Graphics'],
    tech: ['C', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/My-Sokoban.git',
    date: 'Nov 2022 - Dec 2022',
    context: 'Epitech Project',
  },
  {
    title: 'Dante\'s Star',
    description: 'Generates and solves mazes.',
    skills: ['Algorithm Design', 'Maze Generation'],
    tech: ['C', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Dante-s-Star.git',
    date: 'Jan 2023 - Mar 2023',
    context: 'Epitech Project',
  },
  {
    title: 'My Printf',
    description: 'Recreates the printf function in C.',
    skills: ['System Calls', 'String Manipulation', 'Output Handling'],
    tech: ['C', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/My-Printf.git',
    date: 'Oct 2022 - Nov 2022',
    context: 'Epitech Project',
  }
];

projects.sort((a, b) => new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0]));

const CodePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

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