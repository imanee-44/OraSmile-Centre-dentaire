import { ArrowRight, CheckCircle, Shield, Smile, Star, Sparkles, Activity, Heart, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-text animate-fade-in">
            <span className="hero-badge">Centre Dentaire OraSmile</span>
            <h1 className="heading-xl">
              Votre plus beau sourire commence <span className="text-gradient">ici</span>.
            </h1>
            <p className="hero-desc">
              Allier expertise médicale, technologie de pointe et approche humaine pour des soins dentaires d'excellence à Casablanca.
            </p>
            <div className="hero-btns">
              <a href="tel:0522525461" className="btn btn-primary">
                Prendre Rendez-vous <ArrowRight size={20} />
              </a>
              <Link to="/services" className="btn btn-outline">
                Nos Services
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-icon"><Star size={16} fill="currentColor" /></div>
                <span>4.9/5 satisfaction patients</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon"><Shield size={16} /></div>
                <span>Protocoles stérilisation stricts</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              {/* Replace with actual image later */}
              <div className="visual-circle"></div>
              <div className="visual-card floating-card-1">
                <Smile className="card-icon" />
                <div>
                  <strong>Confort garanti</strong>
                  <span>Approche douce</span>
                </div>
              </div>
              <div className="visual-card floating-card-2">
                <Star className="card-icon" />
                <div>
                  <strong>Dr Fadil Reda</strong>
                  <span>Expert qualifié</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-shape"></div>
      </section>

      {/* Intro Dr Section */}
      <section className="section bg-light">
        <div className="container split-section">
          <div className="split-image">
            <div className="image-frame">Photo Docteur</div>
          </div>
          <div className="split-content">
            <h2 className="heading-lg">Dr Fadil Reda, votre partenaire santé</h2>
            <p className="lead-text">
              "Mon objectif est de réconcilier mes patients avec les soins dentaires en leur offrant une expérience basée sur l'écoute, le confort et l'excellence."
            </p>
            <p className="body-text">
              Diplômé des plus grandes universités et constamment formé aux dernières techniques, Dr Fadil Reda met son savoir-faire au service de votre sourire. Que ce soit pour des soins esthétiques, de l'implantologie ou de l'orthodontie, chaque traitement est personnalisé.
            </p>
            <a href="https://www.linkedin.com/in/dr-reda-fadil-384b252b4" target="_blank" rel="noopener noreferrer" className="btn btn-outline">En savoir plus</a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="heading-lg">Nos Expertises</h2>
            <p className="section-subtitle">Des soins complets pour toute la famille</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Sparkles size={40} strokeWidth={1.5} /></div>
              <h3>Esthétique du Sourire</h3>
              <p>Facettes, blanchiment et smile design pour un sourire éclatant.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Activity size={40} strokeWidth={1.5} /></div>
              <h3>Implantologie</h3>
              <p>Solutions durables pour remplacer vos dents manquantes.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Shield size={40} strokeWidth={1.5} /></div>
              <h3>Orthodontie</h3>
              <p>Aligneurs invisibles et orthodontie moderne pour adultes et enfants.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Stethoscope size={40} strokeWidth={1.5} /></div>
              <h3>Soins Généraux</h3>
              <p>Prévention, détartrage et soins conservateurs de haute qualité.</p>
            </div>
          </div>
          <div className="text-center mt-2">
            <Link to="/services" className="btn btn-primary">Voir tous les services</Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <h2 className="heading-lg text-white">Pourquoi choisir OraSmile ?</h2>
              <ul className="benefits-list">
                <li><CheckCircle className="check-icon" /> <span>Technologie de pointe (Scanner 3D, Laser)</span></li>
                <li><CheckCircle className="check-icon" /> <span>Douceur et gestion de la douleur</span></li>
                <li><CheckCircle className="check-icon" /> <span>Transparence des tarifs et devis</span></li>
                <li><CheckCircle className="check-icon" /> <span>Hygiène et stérilisation irréprochables</span></li>
              </ul>
            </div>
            <div className="split-image-text">
              <div className="stat-box">
                <span className="stat-number">15+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section text-center">
        <div className="container">
          <h2 className="heading-lg">Prêt à révéler votre sourire ?</h2>
          <p className="cta-subtitle">Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée.</p>
          <div className="cta-buttons center">
            <a href="tel:0522525461" className="btn btn-primary">Prendre Rendez-vous</a>
            <a href="tel:0522525461" className="btn btn-outline">Nous appeler</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
