import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} DATORS Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;