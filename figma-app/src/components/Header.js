import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SINC Partners</div>
      <nav>
        <ul>
          <li>About</li>
          <li>SIP</li>
          <li>Studio</li>
          <li>SEEQ</li>
          <li>Platforms</li>
          <li>Initiatives</li>
          <li>More</li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button className="btn">SINC With Us</button>
        <button className="btn secondary">Apply to SIP 1.0</button>
      </div>
    </header>
  );
};

export default Header;
