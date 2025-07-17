import React, { useState } from 'react';
import Logo from '../src/Assets/logo.png'

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <header className="header">
      <nav className="nav bd-grid">
        <a className="nav__logo">
          <img src={Logo} alt='logo' />
        </a>
        <div className={`nav__menu ${isMenuActive ? 'active' : ''}`} id="nav-menu">
          <button className="nav__close" onClick={toggleMenu}>&times;</button>
          <ul className="nav__list">
            <li><a href="#home" className="nav__link">Home</a></li>
            <li><a href="#services" className="nav__link">Services</a></li>
            <li><a href="#about" className="nav__link">About</a></li>
            <li><a href="#gallery" className="nav__link">Gallery</a></li>
            <li><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;