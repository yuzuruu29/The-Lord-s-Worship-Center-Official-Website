import React from 'react';
import { motion } from 'framer-motion';
import { CrossIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <CrossIcon className="h-8 w-8 text-amber-600" />
          <span className="ml-3 text-2xl font-bold text-white">The Lord's Worship Center</span>
        </div>
        <p className="mb-6">"For where two or three gather in my name, there am I with them." - Matthew 18:20</p>
        
        <div className="mb-6">
          <motion.a 
            href="https://www.facebook.com/theLordsworshipcenter" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Follow us on Facebook"
            className="inline-block text-stone-300 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <FacebookIcon className="h-8 w-8" />
          </motion.a>
        </div>

        <div className="border-t border-stone-700 pt-6 mt-6">
          <p>&copy; {new Date().getFullYear()} The Lord's Worship Center (JCRF Bay). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;