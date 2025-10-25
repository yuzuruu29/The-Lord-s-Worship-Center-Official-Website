import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, LocationMarkerIcon, MailIcon } from './icons';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <motion.div 
    className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center"
    whileHover={{ scale: 1.05, shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="text-amber-700 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-stone-800 mb-2">{title}</h3>
    <div className="text-stone-600">{children}</div>
  </motion.div>
);

const VisitUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section 
      id="visit" 
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800">Join Us for Worship</h2>
          <p className="text-stone-600 mt-2">We would love to have you with us.</p>
          <div className="mt-4 w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <InfoCard icon={<ClockIcon className="h-12 w-12" />} title="Service Times">
              <p className="font-semibold">Sunday Worship Service</p>
              <p>10:00 AM - 12:00 PM</p>
              <p className="mt-2 font-semibold">Mid-week Prayer</p>
              <p>Wednesday, 7:00 PM</p>
            </InfoCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <InfoCard icon={<LocationMarkerIcon className="h-12 w-12" />} title="Our Location">
              <p>57JH+7JF, Jose Rizal Ave,</p>
              <p>Bay, Laguna</p>
              <p className="mt-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=57JH%2B7JF%2C+Jose+Rizal+Ave%2C+Bay%2C+Laguna" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-700 hover:text-amber-800 font-semibold"
                >
                  Get Directions
                </a>
              </p>
            </InfoCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <InfoCard icon={<MailIcon className="h-12 w-12" />} title="Get In Touch">
              <p>Have questions or need prayer?</p>
              <p>We're here for you.</p>
              <p className="mt-4">
                <a href="mailto:tlwcworshipcenter@gmail.com" className="text-amber-700 hover:text-amber-800 font-semibold">tlwcworshipcenter@gmail.com</a>
              </p>
            </InfoCard>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisitUs;