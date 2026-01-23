import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';
import { motion } from 'framer-motion';

import { Logo } from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
           <Logo width={65} height={65} animated={true} />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
          <a href="https://www.linkedin.com/in/dr-reda-fadil-384b252b4" target="_blank" rel="noopener noreferrer">Dr Fadil Reda</a>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/journey" className={location.pathname === '/journey' ? 'active' : ''}>Parcours</Link>
          <Link to="/testimonials" className={location.pathname === '/testimonials' ? 'active' : ''}>Témoignages</Link>
          <a href="tel:0522525461" className="btn btn-primary btn-sm">
            <Phone size={16} />
            Prendre RDV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-links">
            <Link to="/">Accueil</Link>
            <a href="https://www.linkedin.com/in/dr-reda-fadil-384b252b4" target="_blank" rel="noopener noreferrer">Dr Fadil Reda</a>
            <Link to="/services">Services</Link>
            <Link to="/journey">Parcours Patient</Link>
            <Link to="/testimonials">Témoignages</Link>
            <a href="tel:0522525461" className="btn btn-primary">Prendre RDV</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
