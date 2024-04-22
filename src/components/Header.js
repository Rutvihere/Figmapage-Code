import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="work-text">
          <span>Work</span> <span>Smarter,</span> <span>Faster-</span>
        </div>
        <p className="description">Nunito connect everyone in the design process so<br />teams can deliver better products, faster</p>
      </div>
      <Link to="/signup" className="cta-button">Try it for free</Link>
      <div className="image-container">
        <img src="p1.jpg" alt="Image1" className="header-image" />
      </div>
      <div className="img-container">
        <img src="p2.jpg" alt="Image2" className="header-image" />
      </div>
    </div>
  );
};

export default Header;
