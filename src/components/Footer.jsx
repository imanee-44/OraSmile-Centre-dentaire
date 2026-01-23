import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react';
import './Footer.css';
import { Logo } from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="footer-logo-link" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>
            <Logo width={80} height={80} lightMode={true} animated={false} />
          </Link>
          <p className="footer-desc">
            Votre sourire, notre expertise. Dr Fadil Reda et son équipe vous accueillent dans un cadre moderne et chaleureux à Casablanca.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Liens Rapides</h3>
          <ul className="footer-links">
            <li><a href="https://www.linkedin.com/in/dr-reda-fadil-384b252b4" target="_blank" rel="noopener noreferrer">Dr Fadil Reda</a></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/journey">Parcours Patient</Link></li>
            <li><a href="tel:0522525461">Prendre Rendez-vous</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Soins Généraux</Link></li>
            <li><Link to="/services">Implantologie</Link></li>
            <li><Link to="/services">Orthodontie</Link></li>
            <li><Link to="/services">Esthétique du Sourire</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={20} />
              <span>Boulevard d'Anfa, Casablanca</span>
            </li>
            <li>
              <Phone size={20} />
              <a href="tel:0522525461" style={{ color: 'inherit' }}>0522525461</a>
            </li>
            <li>
              <Mail size={20} />
              <span>contact@orasmile.ma</span>
            </li>
            <li>
              <Clock size={20} />
              <span>Lun - Sam: 09:00 - 19:00</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Centre Dentaire OraSmile. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
