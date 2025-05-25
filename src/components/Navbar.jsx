import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setShowNavbar(false); // hide
      } else {
        setShowNavbar(true); // show
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
      <div className="logo">
        <img src="https://cdn-icons-gif.flaticon.com/8362/8362321.gif" alt="logo" />
        <h1 className='textlogo'>IAZALI</h1>
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "bar rotate-bar1" : "bar"}></span>
        <span className={menuOpen ? "bar hide-bar" : "bar"}></span>
        <span className={menuOpen ? "bar rotate-bar2" : "bar"}></span>
      </div>
    </nav>
  );
};

export default Navbar;
