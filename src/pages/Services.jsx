import { Sparkles, Activity, Stethoscope, Smile, Shield, Heart } from 'lucide-react';
import './Services.css';
import estheticImg from '../assets/esthetic.png';
import implantImg from '../assets/implant.png';
import surgeryImg from '../assets/surgery.png';
import facettesImg from '../assets/facettes.png';
import invisalignImg from '../assets/invisalign.png';
import soinsImg from '../assets/soins.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useTranslation();

  const servicesList = [
    {
      id: "esthetique",
      title: t('services.list.esthetic_title'),
      description: t('services.list.esthetic_desc'),
      icon: <Sparkles size={40} strokeWidth={1.5} />,
      image: estheticImg
    },
    {
      id: "implants",
      title: t('services.list.implant_title'),
      description: t('services.list.implant_desc'),
      icon: <Activity size={40} strokeWidth={1.5} />,
      image: implantImg
    },
    {
      id: "chirurgie",
      title: t('services.list.surgery_title'),
      description: t('services.list.surgery_desc'),
      icon: <Stethoscope size={40} strokeWidth={1.5} />,
      image: surgeryImg
    },
    {
      id: "facettes",
      title: t('services.list.veneers_title'),
      description: t('services.list.veneers_desc'),
      icon: <Smile size={40} strokeWidth={1.5} />,
      image: facettesImg
    },
    {
      id: "invisalign",
      title: t('services.list.invisalign_title'),
      description: t('services.list.invisalign_desc'),
      icon: <Shield size={40} strokeWidth={1.5} />,
      image: invisalignImg
    },
    {
      id: "soins",
      title: t('services.list.care_title'),
      description: t('services.list.care_desc'),
      icon: <Heart size={40} strokeWidth={1.5} />,
      image: soinsImg
    }
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="services-page">
      <div className="container">
        <motion.header 
          className="services-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">{t('home.expertises.subtitle')}</span>
          <h1 className="heading-xl">{t('services.title_start')}<span className="text-gradient">{t('services.title_end')}</span></h1>
          <p className="lead-text">
            {t('services.subtitle')}
          </p>
        </motion.header>

        <motion.div 
          className="services-detailed-grid"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index} 
              id={service.id}
              className="service-detail-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="service-image-container">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="service-image" />
                ) : (
                  <div className="service-image-placeholder"></div>
                )}
                <div className="placeholder-overlay">
                  <div className="service-icon">{service.icon}</div>
                </div>
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}