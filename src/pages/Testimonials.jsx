import { Star, Quote, ExternalLink } from 'lucide-react';
import './Testimonials.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { t } = useTranslation();
  
  // Get reviews from translation files, fallback to empty array if not found
  const reviews = t('testimonials.reviews', { returnObjects: true }) || [];

  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="testimonials-page">
      <div className="container">
        <motion.header 
          className="testimonials-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials-subtitle">{t('testimonials.subtitle')}</span>
          <h1 className="heading-xl">{t('testimonials.title_start')}<span className="text-gradient">{t('testimonials.title_end')}</span></h1>
          <p className="lead-text">{t('testimonials.lead')}</p>
        </motion.header>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {Array.isArray(reviews) && reviews.map((review, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h3>{review.name}</h3>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="google-source"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>{t('testimonials.google_source')}</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.google.com/search?sca_esv=bc0dc4e10e87adcd&rlz=1C1CHZN_frMA1187MA1187&sxsrf=ANbL-n54FzkXr6R6RLb32qPLXz9hZSC8aw:1769467468155&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOe4Q2hBbFAF3kgr3woPv_HrTuasSAL0rYWdD1woq2E2aizGH7EV8tgiMOkb5JuNwW49ybm01sgbjpN0xBUNy8vsIHp_CRP_SUeP8zzNH0jZKvsnyfN1eCR-iCeTJiQdWNkRe27I%3D&q=Centre+Dentaire+OraSmile+-+Dr+Fadil+Reda+Reviews&sa=X&ved=2ahUKEwibuIX_o6qSAxX4U6QEHW-2CqwQ0bkNegQINhAF&biw=1280&bih=601&dpr=1.5&aic=0#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary google-cta"
          >
            {t('testimonials.google_cta')} <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;