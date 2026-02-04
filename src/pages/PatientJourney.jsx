import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, FileText, Activity, Smile, ArrowRight, Instagram } from 'lucide-react';
import './PatientJourney.css';
import case1Insta from '../assets/case1-insta.jpg';
import case2Insta from '../assets/case2-insta.jpg';
import case3Insta from '../assets/case3-insta.jpg';
import case4Insta from '../assets/case4-insta.jpg';
import case5Insta from '../assets/case5-insta.jpg';

export default function PatientJourney() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Calendar size={24} />,
      title: t('journey.steps.step1_title'),
      desc: t('journey.steps.step1_desc')
    },
    {
      icon: <FileText size={24} />,
      title: t('journey.steps.step2_title'),
      desc: t('journey.steps.step2_desc')
    },
    {
      icon: <Activity size={24} />,
      title: t('journey.steps.step3_title'),
      desc: t('journey.steps.step3_desc')
    },
    {
      icon: <Smile size={24} />,
      title: t('journey.steps.step4_title'),
      desc: t('journey.steps.step4_desc')
    }
  ];



  /* Instagram patient transformations */
  const galleryItems = [
    { id: 1, combined: case1Insta },
    { id: 2, combined: case2Insta },
    { id: 3, combined: case3Insta },
    { id: 4, combined: case4Insta },
    { id: 5, combined: case5Insta },
  ];

  return (
    <div className="journey-page">
      {/* Header */}
      <motion.header 
        className="journey-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h1 className="heading-xl">{t('journey.title')}</h1>
          <p className="lead-text" style={{ maxWidth: '700px', margin: '1rem auto' }}>
            {t('journey.subtitle')}
          </p>
        </div>
      </motion.header>

      {/* Steps Timeline */}
      <section className="container">
        <div className="text-center mb-5">
          <h2 className="heading-lg">{t('journey.steps.title')}</h2>
        </div>
        
        <div className="journey-steps">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="journey-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="step-indicator">
                <div className="step-number">{index + 1}</div>
              </div>
              <div className="step-content">
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-lg">{t('journey.gallery.title')}</h2>
            <p className="section-subtitle">{t('journey.gallery.subtitle')}</p>
          </div>

          <div className="gallery-grid">
            {/* Placeholder for when no images are present */}
            {galleryItems.length === 0 && (
              <div className="text-center p-5 text-gray-500 w-full" style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontStyle: 'italic' }}>
                  {t('journey.gallery.subtitle')} 
                  <br/>
                  (Photos coming soon...)
                </p>
              </div>
            )}
            
            {galleryItems.map((item, index) => (
              <motion.div 
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="comparison-container">
                  {item.combined ? (
                    <div className="combined-image">
                      <img src={item.combined} alt={`Transformation ${index + 1}`} />
                    </div>
                  ) : (
                    <>
                      <div className="before-image">
                        <span className="label-badge">Before</span>
                        <img src={item.before} alt="Before" />
                      </div>
                      <div className="after-image">
                        <span className="label-badge">After</span>
                        <img src={item.after} alt="After" />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="journey-cta text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="cta-card"
          >
            <Instagram size={48} className="instagram-icon mb-3" />
            <h2 className="heading-md mb-3">Voir plus de transformations</h2>
            <p className="mb-4">
              Suivez-nous sur Instagram pour découvrir nos derniers cas cliniques et transformations quotidiennes.
            </p>
            <a 
              href="https://www.instagram.com/dentiste.fadil/?utm_source=ig_web_button_share_sheet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg instagram-btn"
            >
              <Instagram size={20} style={{ marginRight: '10px' }} />
              Voir plus de transformations sur la page Instagram
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}