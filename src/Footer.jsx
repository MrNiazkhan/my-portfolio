import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>E Teck Viral</h2>
          <p>Empowering Creativity & Code. Let's build the future together!</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          </div>
        </div>
        
        <div className="auth-links">
    <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
  </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Niaz Ali — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
