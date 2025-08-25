import React from 'react'; 
import './Header.css';

const Header = () => {
  return (
    <div className="hero-header-wrapper" id="home">
      <header className="header">
        <ul className="header__nav">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;


