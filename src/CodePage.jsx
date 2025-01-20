import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import './CodePage.css';

const projects = [
  {
    title: 'R-Type',
    description: 'A multiplayer space 2D shooter game with a client-server architecture & modular game engine.',
    skills: ['C++', 'SFML', 'Networking', 'Game Development'],
    repoLink: 'https://github.com/LucaMartinet7/R-Type',
    date: 'Nov 2024 - Jan 2025',
    context: 'Epitech Project',
  },
  {
    title: 'Neural Network',
    description: 'A neural network that predicts the outcome of a game.',
    skills: ['Python', 'Machine Learning', 'Neural Networks'],
    repoLink: 'https://github.com/LucaMartinet7/Neural-Network',
    date: 'Nov 2024 - Dec 2024',
    context: 'Epitech Project',
  },
  {
    title: 'AREA (Action Reaction)',
    description: 'A web application that allows users to automate tasks between different services.',
    skills: ['Flutter', 'Dart', 'Django', 'Python', 'APIs'],
    repoLink: 'https://github.com/LucaMartinet7/Area-Tek3',
    date: 'Oct 2024 - Nov 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Maze Game',
    description: 'A Python-based maze game using the turtle module.',
    skills: ['Python', 'Turtle Graphics', 'Game Development'],
    repoLink: 'https://github.com/nkurata/MazeGame',
    date: 'Dec 2021',
    context: 'Personal Project',
  },
  {
    title: 'Ubuntu x86-64 Container',
    description: 'Docker container running Ubuntu on x86-64 architecture.',
    skills: ['Docker', 'Ubuntu', 'x86-64', 'Apple Silicon', 'Arm'],
    repoLink: 'https://github.com/nkurata/UbuntuContainer',
    date: 'Jan 2024',
    context: 'Personal Project',
  },
  {
    title: 'Minimal-OS',
    description: 'Minimalist prompt with Git status indicators.',
    skills: ['Oh My Zsh', 'Zsh', 'Shell'],
    repoLink: 'https://github.com/nkurata/zsh-theme',
    date: 'Jan 2023',
    context: 'Personal Project',
  },
  {
    title: 'Dynamic Game Engine',
    description: 'Play games with different graphic libraries at runtime.',
    skills: ['C++', 'SFML', 'SDL-2', 'NCurses'],
    repoLink: 'https://github.com/nkurata/Arcarde',
    date: 'Mar 2024 - Apr 2024',
    context: 'Epitech Project',
  },
  {
    title: 'System Call Tracing Tool',
    description: 'Tracks and displays system calls made by a program.',
    skills: ['C', 'Operation Systems', 'Unix'],
    repoLink: 'https://github.com/nkurata/System-Call-Tracing-Tool',
    date: 'Mar 2024 - Apr 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Binary File Analyzer',
    description: 'Recreates nm and objdump Unix tools.',
    skills: ['C', 'ELF', 'Operation Systems', 'Unix', 'Parsing'],
    repoLink: 'https://github.com/nkurata/Binary-File-Analyzer-and-Displayer.git',
    date: 'Feb 2024 - Mar 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Circuit Simulator',
    description: 'Build a circuit simulator to understand digital circuits.',
    skills: ['C++', 'Logic Gates', 'Circuits'],
    repoLink: 'https://github.com/nkurata/Circuit-Simulator',
    date: 'Feb 2024 - Mar 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Image Compressor',
    description: 'Reduces image file sizes with efficient algorithms.',
    skills: ['Haskell', 'Compression', 'SDL-2', 'NCurses'],
    repoLink: 'https://github.com/nkurata/Image-Compressor',
    date: 'Feb 2024 - Mar 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Portfolio Page',
    description: 'A portfolio landing page.',
    skills: ['C++', 'SFML', 'SDL-2', 'NCurses'],
    repoLink: 'https://github.com/nkurata/WebisteCK',
    date: 'Mar 2024',
    context: 'Personal Project',
  },
  {
    title: 'File Transfer Protocol',
    description: 'Simplified FTP server and client.',
    skills: ['Networking', 'File Transfer', 'C'],
    repoLink: 'https://github.com/nkurata/File-Transfer-Protocol.git',
    date: 'Jan 2024 - Feb 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Mini Lib C',
    description: 'Recreation of C Library in Assembly.',
    skills: ['x86 Assembly', 'C', 'Library'],
    repoLink: 'https://github.com/nkurata/Mini-Lib-C.git',
    date: 'Jan 2024 - Feb 2024',
    context: 'Epitech Project',
  },
  {
    title: 'Makefile Generator',
    description: 'Automated Makefile generator.',
    skills: ['Bash', 'MakeFile'],
    repoLink: 'https://github.com/nkurata/Automated-Makefile-Generator.git',
    date: 'Jul 2023',
    context: 'Epitech Project',
  },
  {
    title: 'AI-Pathfinding Simulation',
    description: 'Autonomous vehicle navigates through a virtual environment.',
    skills: ['AI', 'Python', 'Pathfinding'],
    repoLink: 'https://github.com/nkurata/AI-Powered-Pathfinding-Simulation.git',
    date: 'Apr 2023 - May 2023',
    context: 'Epitech Project',
  },
  {
    title: 'DevOps Tool',
    description: 'Streamlines deployment and CI.',
    skills: ['Automation', 'GitHub', 'GitHub Workflows'],
    repoLink: 'https://github.com/nkurata/Chocolatin_CI',
    date: 'Mar 2023 - Apr 2023',
    context: 'Epitech Project',
  },
  {
    title: 'Square Finder',
    description: 'Finds the largest square on a 2D map.',
    skills: ['C Programming', 'Algorithm Optimization', 'File Handling'],
    repoLink: 'https://github.com/nkurata/Largest-Square-Finder-on-2D-Map-BSQ.git',
    date: 'Oct 2022 - Dec 2022',
    context: 'Epitech Project',
  },
  {
    title: 'My RPG',
    description: '2D RPG game engine.',
    skills: ['C Programming', 'Game Development', 'SFML Library'],
    repoLink: 'https://github.com/nkurata/My-RPG.git',
    date: 'Mar 2023 - Apr 2023',
    context: 'Epitech Project',
  },
  {
    title: 'My Paint',
    description: 'Simple drawing application.',
    skills: ['C Programming', 'UI Design', 'Graphics Handling'],
    repoLink: 'https://github.com/nkurata/My-Paint.git',
    date: 'Feb 2023 - Mar 2023',
    context: 'Epitech Project',
  },
  {
    title: 'Minishell',
    description: 'Minimalistic shell with command execution.',
    skills: ['C Programming', 'System Calls', 'Shell Scripting'],
    repoLink: 'https://github.com/nkurata/MiniShell.git',
    date: 'Feb 2023 - Apr 2023',
    context: 'Epitech Project',
  },
  {
    title: 'My Sokoban',
    description: 'Classic Sokoban puzzle game.',
    skills: ['C Programming', 'Game Logic', 'Terminal-based Graphics'],
    repoLink: 'https://github.com/nkurata/My-Sokoban.git',
    date: 'Nov 2022 - Dec 2022',
    context: 'Epitech Project',
  },
  {
    title: 'Dante\'s Star',
    description: 'Generates and solves mazes.',
    skills: ['C Programming', 'Algorithm Design', 'Maze Generation'],
    repoLink: 'https://github.com/nkurata/Dante-s-Star.git',
    date: 'Jan 2023 - Mar 2023',
    context: 'Epitech Project',
  },
  {
    title: 'My Printf',
    description: 'Recreates the printf function in C.',
    skills: ['C Programming', 'String Formatting', 'Output Handling'],
    repoLink: 'https://github.com/nkurata/My-Printf.git',
    date: 'Oct 2022 - Nov 2022',
    context: 'Epitech Project',
  }
];

projects.sort((a, b) => new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0]));


const CodePage = () => {
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
      <div className="code-page-container">
        <h1 className="page-title">codedbynoe.</h1>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card border rounded-lg p-4 shadow-lg">
              <div className="card-content">
                <h2 className="project-title text-blue-500 hover:underline">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-skills card-text-padding">
                  <strong>Skills:</strong> {project.skills.join(', ')}
                </p>
                <p className="project-date">
                  <strong>Date:</strong> {project.date}
                </p>
                <p className="project-context">
                  <strong>Context:</strong> {project.context}
                </p>
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
        </div>
      </div>
    </div>
  );
};

export default CodePage;