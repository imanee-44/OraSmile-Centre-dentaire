import { motion } from 'framer-motion';

export const Logo = ({ className = "", width = 50, height = 50, lightMode = false, animated = true }) => {
  return (
    <div className={`logo-component ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <motion.img 
             src="/logo.png" 
             alt="Logo" 
             style={{ 
               width: width + 'px', 
               height: 'auto',
               filter: lightMode ? 'brightness(0) invert(1)' : 'none' 
             }}
             initial={animated ? { opacity: 0, scale: 0.8, rotate: -10 } : {}}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             whileHover={{ scale: 1.05 }}
      />
      
      <div className="logo-text-col" style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: width * 0.20 + 'px', 
            fontWeight: 600, 
            letterSpacing: '0.15em', 
            color: lightMode ? 'rgba(255,255,255,0.8)' : '#1e293b',
            textTransform: 'uppercase',
            lineHeight: 1
          }}>
            Centre Dentaire
          </span>
          <span style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: width * 0.40 + 'px', 
            fontWeight: 700, 
            color: '#bfa15f', // Always gold for the text if possible? Or white in footer?
                               // User wanted Gold/Black brand. In dark footer, Gold pops. 
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginTop: '2px'
          }}>
            OraSmile
          </span>
       </div>
    </div>
  );
};
