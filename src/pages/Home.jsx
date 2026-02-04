import { ArrowRight, CheckCircle, Shield, Smile, Star, Sparkles, Activity, Heart, Stethoscope, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import clinicImage from '../assets/clinic-reception.png';
import doctorImage from '../assets/dr-fadil.jpg';
import dentalOffice from '../assets/dental-office.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = ({ onBookClick }) => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content container">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">{t('home.hero.badge')}</span>
            <h1 className="heading-xl">
              {t('home.hero.title_start')}<span className="text-gradient">{t('home.hero.title_end')}</span>.
            </h1>
            <p className="hero-desc">
              {t('home.hero.subtitle')}
            </p>
            <div className="hero-btns">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookClick}
                className="btn btn-primary"
              > 
                {t('home.hero.cta_appointment')} <ArrowRight size={20} />
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/services" className="btn btn-outline">
                  {t('home.hero.cta_services')}
                </Link>
              </motion.div>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-icon"><Star size={16} fill="currentColor" /></div>
                <span>{t('home.hero.trust_satisfaction')}</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon"><Shield size={16} /></div>
                <span>{t('home.hero.trust_protocols')}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="hero-image-container">
              <img src={clinicImage} alt="Clinic Reception" className="hero-main-image" />
              <div className="visual-circle"></div>
              <motion.div 
                className="visual-card floating-card-1"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Smile className="card-icon" />
                <div>
                  <strong>{t('home.hero.card_comfort')}</strong>
                  <span>{t('home.hero.card_soft')}</span>
                </div>
              </motion.div>
              <motion.div 
                className="visual-card floating-card-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Star className="card-icon" />
                <div>
                  <strong>{t('home.hero.card_doctor')}</strong>
                  <span>{t('home.hero.card_expert')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="hero-bg-shape"></div>
      </section>

      {/* Intro Dr Section */}
      <section className="section bg-light overflow-hidden">
        <div className="container split-section">
          <motion.div 
            className="split-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="doctor-image-frame">
              <img src={doctorImage} alt="Dr Fadil Reda" className="doctor-image" />
              <div className="doctor-badge">
                <span>{t('home.doctor.badge')}</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="split-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg">{t('home.doctor.title')}</h2>
            <p className="lead-text">
              {t('home.doctor.quote')}
            </p>
            <p className="body-text">
              {t('home.doctor.description')}
            </p>
            <Link to="https://www.linkedin.com/in/dr-reda-fadil-384b252b4" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{t('home.doctor.learn_more')}</Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            {...fadeIn}
          >
            <h2 className="heading-lg">{t('home.expertises.title')}</h2>
            <p className="section-subtitle">{t('home.expertises.subtitle')}</p>
          </motion.div>
          
          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: <Sparkles size={40} />, title: t('home.expertises.item_esthetic'), desc: t('home.expertises.desc_esthetic') },
              { icon: <Activity size={40} />, title: t('home.expertises.item_implant'), desc: t('home.expertises.desc_implant') },
              { icon: <Stethoscope size={40} />, title: t('home.expertises.item_surgery'), desc: t('home.expertises.desc_surgery') },
              { icon: <Smile size={40} />, title: t('home.expertises.item_veneers'), desc: t('home.expertises.desc_veneers') },
              { icon: <Shield size={40} />, title: t('home.expertises.item_invisalign'), desc: t('home.expertises.desc_invisalign') },
              { icon: <Zap size={40} />, title: t('home.expertises.item_whitening'), desc: t('home.expertises.desc_whitening') },
              { icon: <Heart size={40} />, title: t('home.expertises.item_care'), desc: t('home.expertises.desc_care') },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="service-card"
                variants={fadeIn}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-2"
            {...fadeIn}
          >
            <Link to="/services" className="btn btn-primary">{t('home.expertises.view_all')}</Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section bg-primary text-white overflow-hidden">
        <div className="container">
          <div className="split-section">
            <motion.div 
              className="split-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg text-white">{t('home.why_us.title')}</h2>
              <ul className="benefits-list">
                {[1, 2, 3, 4].map((i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle className="check-icon" /> <span>{t(`home.why_us.benefit_${i}`)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="split-image-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="office-image-container">
                <img src={dentalOffice} alt="Équipement Dentaire" className="office-image" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section text-center">
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">{t('home.cta.title')}</h2>
          <p className="cta-subtitle">{t('home.cta.subtitle')}</p>
          <div className="cta-buttons center">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              onClick={onBookClick} 
              className="btn btn-primary"
            >
              {t('home.cta.appointment')}
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              href="tel:0522525461" 
              className="btn btn-outline"
            >
              {t('home.cta.call')}
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
