import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, Send, Calendar, User, ClipboardList } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState('choice'); // 'choice' or 'form'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    t('navbar.esthetic'),
    t('navbar.implants'),
    t('navbar.surgery'),
    t('navbar.veneers'),
    t('navbar.invisalign'),
    t('navbar.care')
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "212522525461"; // Or the mobile number 212637372552
    const message = `Bonjour Dr. Fadil, je souhaite prendre un rendez-vous.\n\n*Nom:* ${formData.name}\n*Téléphone:* ${formData.phone}\n*Soin:* ${formData.service}\n*Date souhaitée:* ${formData.date}\n*Note:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212637372552?text=${encodedMessage}`, '_blank');
    onClose();
  };

  const resetAndClose = () => {
    setStep('choice');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={resetAndClose}>
        <motion.div 
          className="modal-content" 
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
        >
          <button className="modal-close" onClick={resetAndClose}>
            <X size={24} />
          </button>

          {step === 'choice' ? (
            <div className="booking-choice">
              <h2 className="heading-md">{t('home.cta.title')}</h2>
              <p className="mb-4">{t('home.cta.subtitle')}</p>
              
              <div className="choice-grid">
                <button className="choice-card" onClick={() => setStep('form')}>
                  <div className="choice-icon primary">
                    <MessageSquare size={32} />
                  </div>
                  <h3>Prendre RDV via WhatsApp</h3>
                  <p>Remplissez un court formulaire pour nous envoyer une demande structurée.</p>
                  <span className="choice-badge">Recommandé</span>
                </button>

                <a href="tel:0522525461" className="choice-card">
                  <div className="choice-icon secondary">
                    <Phone size={32} />
                  </div>
                  <h3>Appeler directement</h3>
                  <p>Contactez notre secrétariat par téléphone pour un rendez-vous immédiat.</p>
                </a>
              </div>
            </div>
          ) : (
            <div className="booking-form-container">
              <button className="back-btn" onClick={() => setStep('choice')}>
                ← Retour aux options
              </button>
              <h2 className="heading-md mb-3">Formulaire de rendez-vous</h2>
              
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label><User size={18} /> Nom Complet</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Votre nom" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label><Phone size={18} /> Téléphone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="Ex: 06 12 34 56 78" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label><ClipboardList size={18} /> Type de Soin</label>
                  <select 
                    name="service" 
                    required 
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label><Calendar size={18} /> Date souhaitée</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Message / Remarques</label>
                  <textarea 
                    name="message" 
                    rows="3" 
                    placeholder="Détails supplémentaires..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <Send size={18} style={{ marginRight: '10px' }} />
                  Envoyer sur WhatsApp
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
