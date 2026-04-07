import React from 'react';
import './Header.css';
import HyperText from './HyperText';
import './HyperText.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-name">
          <HyperText 
            animateOnHover={true} 
            startOnView={true} 
            duration={1200}
          >
            Mohamed Adan
          </HyperText>
        </div>
        <p className="status">$ whoami: AI/ML Engineer</p>
      </div>
    </header>
  );
};

export default Header; 