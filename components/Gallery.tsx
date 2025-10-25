import React from 'react';
import { motion } from 'framer-motion';
import { 
  image1_url, 
  image2_url, 
  image3_url, 
  image4_url, 
  image5_url, 
  image6_url, 
  image7_url, 
  image8_url, 
  image9_url 
} from './ImageData';

const images = [
  { src: image1_url, alt: "Baptism Ceremony at The Lord's Worship Center", description: 'Baptism Ceremony' },
  { src: image2_url, alt: "Members receiving certificates at The Lord's Worship Center", description: 'Receiving Certificates' },
  { src: image3_url, alt: "Women's Ministry group photo at The Lord's Worship Center", description: 'Women\'s Ministry' },
  { src: image4_url, alt: "Children celebrating Christmas at The Lord's Worship Center", description: 'Christmas with the Children' },
  { src: image5_url, alt: "Family Christmas photo at The Lord's Worship Center", description: 'Family Christmas Photo' },
  { src: image6_url, alt: "The vibrant youth group of The Lord's Worship Center", description: 'Our Vibrant Youth Group' },
  { src: image7_url, alt: "Christmas gift exchange event at The Lord's Worship Center", description: 'Christmas Gift Exchange' },
  { src: image8_url, alt: "A family presentation during a service at The Lord's Worship Center", description: 'A Family Presentation' },
  { src: image9_url, alt: "Church outing and fellowship with The Lord's Worship Center members", description: 'Fellowship and Outing' },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 } },
};

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Gallery: React.FC = () => {
  return (
    <motion.section 
      id="gallery" 
      className="py-20 bg-stone-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800">Our Community in Action</h2>
          <p className="text-stone-600 mt-2">Moments of faith, fellowship, and joy.</p>
          <div className="mt-4 w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={sectionVariants}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg"
              variants={imageVariants}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <motion.div 
                className="absolute bottom-0 left-0 p-4 w-full"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              >
                <p className="text-white text-lg font-semibold">{image.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;