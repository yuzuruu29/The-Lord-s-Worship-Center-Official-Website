import React from 'react';
import { motion } from 'framer-motion';
import { logo_banner_url } from './ImageData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-stone-100 py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src={logo_banner_url} 
            alt="The Lord's Worship Center Banner" 
            className="max-w-full h-auto mx-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;