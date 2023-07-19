import React, { useState } from 'react';
import '/src/css/Navbar.css';
import '/src/css/bulma.min.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
    setButtonClicked(!buttonClicked);
  };

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <span className="navName">Saieswar Reddy Vaka</span>
        </a>

        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''} ${buttonClicked ? 'clicked' : ''}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={toggleNavbar}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <a href="#skillsContainer" className="navbar-item">
            Skills
          </a>
          <a href="#experienceContainer" className="navbar-item">
            Experience
          </a>

          <a href="#projectsContainer" className="navbar-item">
            Projects
          </a>
          <a href="#resumeContainer" className="navbar-item">
            Resume
          </a>

          <a href="#contactContainer" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
