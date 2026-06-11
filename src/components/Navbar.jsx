import { useState, useEffect } from 'react';
import { LOGO_SRC } from '../assets/logoData';

export default function Navbar({ onOpenPartner }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none' }}>
        <a href="#home" className="nav-brand">
          <img src={LOGO_SRC} alt="CAIH Logo" className="nav-logo" />
          <div className="nav-name">CAIH <span>Centre for Achieving Integrated Healthcare</span></div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#programmes">Programmes</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); onOpenPartner(); }}>Partner With Us</a></li>
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={handleNavClick}>About</a>
        <a href="#programmes" onClick={handleNavClick}>Programmes</a>
        <a href="#research" onClick={handleNavClick}>Research</a>
        <a href="#impact" onClick={handleNavClick}>Impact</a>
        <a href="#contact" onClick={handleNavClick}>Contact</a>
        <a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); onOpenPartner(); handleNavClick(); }}>Partner With Us</a>
      </div>
    </>
  );
}
