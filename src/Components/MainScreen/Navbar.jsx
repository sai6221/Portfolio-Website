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
          <a href="#" className="navbar-item">
            Home
          </a>

          <a href="#features" className="navbar-item">
            Features
          </a>

          <a href="#stats" className="navbar-item">
            Stats
          </a>

          <a href="#" className="navbar-item">
            Docs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
