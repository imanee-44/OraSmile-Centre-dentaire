import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Clock, Mail } from 'lucide-react';
import './Footer.css';
import { Logo } from './Logo';
import { useTranslation } from 'react-i18next';

const Footer = ({ onBookClick }) => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="footer-logo-link" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>
            <Logo width={80} height={80} lightMode={true} animated={false} />
          </Link>
          <p className="footer-desc">
            {t('footer.desc')}
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/people/Dr-Fadil-Reda/61584153736684/" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.instagram.com/dentiste.fadil/?utm_source=ig_web_button_share_sheet" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.linkedin.com/in/dr-reda-fadil-384b252b4" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>{t('footer.quick_links')}</h3>
          <ul className="footer-links">
            <li><Link to="/">{t('navbar.home')}</Link></li>
            <li><Link to="/services">{t('navbar.services')}</Link></li>
            <li><Link to="/journey">{t('navbar.journey')}</Link></li>
            <li><button onClick={onBookClick} className="footer-btn-link">{t('navbar.book_appointment')}</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>{t('footer.services')}</h3>
          <ul className="footer-links">
            <li><Link to="/services#esthetique">{t('navbar.esthetic')}</Link></li>
            <li><Link to="/services#implants">{t('navbar.implants')}</Link></li>
            <li><Link to="/services#chirurgie">{t('navbar.surgery')}</Link></li>
            <li><Link to="/services#facettes">{t('navbar.veneers')}</Link></li>
            <li><Link to="/services#invisalign">{t('navbar.invisalign')}</Link></li>
            <li><Link to="/services#soins">{t('navbar.care')}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>{t('footer.contact')}</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={20} />
              <span> {t('footer.address')}</span>
            </li>
            <li>
              <Phone size={20} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="tel:0522525461" style={{ color: 'inherit' }}>0522525461</a>
                <a href="tel:0637372552" style={{ color: 'inherit' }}>0637372552</a>
              </div>
            </li>
            <li>
              <Clock size={20} />
              <span style={{ whiteSpace: 'pre-line' }}>
                <strong>{t('footer.opening_hours_title')}:</strong><br />
                {t('footer.opening_hours')}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
