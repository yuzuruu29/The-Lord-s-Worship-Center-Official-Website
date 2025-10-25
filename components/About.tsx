import React from 'react';
import { motion } from 'framer-motion';
import { image6_url } from './ImageData';

const About: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800">Our Mission</h2>
          <p className="text-stone-600 mt-2">To know Christ and to make Him known.</p>
          <div className="mt-4 w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <img 
              src={image6_url} 
              alt="Church community" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover" 
            />
          </motion.div>
          <motion.div 
            className="lg:w-1/2 text-lg text-stone-700 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <p>
              The Lord's Worship Center is a vibrant, family-oriented church dedicated to spreading the love and teachings of Jesus Christ. We believe in creating a welcoming space where people from all walks of life can come together to worship, learn, and grow in their faith.
            </p>
            <p>
              Our community is built on a foundation of love, support, and fellowship. We are committed to serving our local community and sharing the hope that we have in Christ through our various ministries and outreach programs.
            </p>
            <p>
              Whether you are new to the area, exploring faith for the first time, or looking for a church to call home, we invite you to join us.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;