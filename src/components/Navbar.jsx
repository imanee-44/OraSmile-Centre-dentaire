import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages, ArrowRight } from 'lucide-react';
import './Navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Logo } from './Logo';

const Navbar = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const { t, i18n } = useTranslation();
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLang(false);
    setIsOpen(false);
  };

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
           <Logo width={65} height={65} animated={true} />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('navbar.home')}</Link>
          <div className="nav-item-dropdown">
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              {t('navbar.services')}
            </Link>
            <div className="dropdown-menu">
              <Link to="/services#esthetique">{t('navbar.esthetic')}</Link>
              <Link to="/services#implants">{t('navbar.implants')}</Link>
              <Link to="/services#chirurgie">{t('navbar.surgery')}</Link>
              <Link to="/services#facettes">{t('navbar.veneers')}</Link>
              <Link to="/services#invisalign">{t('navbar.invisalign')}</Link>
              <Link to="/services#soins">{t('navbar.care')}</Link>
            </div>
          </div>
          <Link to="/journey" className={location.pathname === '/journey' ? 'active' : ''}>{t('navbar.journey')}</Link>
          <Link to="/testimonials" className={location.pathname === '/testimonials' ? 'active' : ''}>{t('navbar.testimonials')}</Link>
          
          <motion.button 
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              onBookClick();
            }} 
            className="btn btn-primary"
          >
            {t('navbar.book_appointment')}
            <ArrowRight size={18} />
          </motion.button>

          <div className="lang-selector-container">
            <button className="lang-btn" onClick={() => setShowLang(!showLang)}>
              <Languages size={18} />
              <span>{currentLang.code.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {showLang && (
                <motion.div 
                  className="lang-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {languages.map((lang) => (
                    <button 
                      key={lang.code} 
                      onClick={() => changeLanguage(lang.code)}
                      className={i18n.language === lang.code ? 'active' : ''}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-actions">
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X /> : <Menu />}
          </button>
          
           <div className="lang-selector-container mobile-only">
            <button className="lang-btn" onClick={() => setShowLang(!showLang)}>
              <Languages size={18} />
              <span>{currentLang.code.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {showLang && (
                <motion.div 
                  className="lang-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {languages.map((lang) => (
                    <button 
                      key={lang.code} 
                      onClick={() => changeLanguage(lang.code)}
                      className={i18n.language === lang.code ? 'active' : ''}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-links">
            <Link to="/">{t('navbar.home')}</Link>
            <Link to="/services">{t('navbar.services')}</Link>
            <Link to="/journey">{t('navbar.journey')}</Link>
            <Link to="/testimonials">{t('navbar.testimonials')}</Link>
            <motion.button 
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                onBookClick();
                setIsOpen(false);
              }} 
              className="btn btn-primary" 
              style={{ width: '100%' }}
            >
              {t('navbar.book_appointment')}
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
