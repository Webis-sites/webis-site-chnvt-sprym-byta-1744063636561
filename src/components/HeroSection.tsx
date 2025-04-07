'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaArrowLeft } from 'react-icons/fa';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick = () => {} }) => {
  return (
    <section className="hero-section w-full min-h-[80vh] bg-gradient-to-br from-primary-light to-primary flex items-center justify-center overflow-hidden relative rtl" dir="rtl">
      {/* Glass morphism decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-glass"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-glass"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between z-10">
        <motion.div 
          className="text-content md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            חנות ספרים מוביל בישראל
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-secondary/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="cta-button flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-primary font-bold rounded-lg text-lg shadow-neumorphic hover:shadow-neumorphic-hover active:shadow-neumorphic-pressed transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCtaClick}
            >
              קבע תור עכשיו
              <FaArrowLeft className="inline-block mr-2" />
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="image-container md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div 
              className="book-icon-container w-64 h-64 md:w-80 md:h-80 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-glass"
              whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
            >
              <FaBook className="text-secondary text-8xl md:text-9xl" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-full h-full bg-primary/30 backdrop-blur-sm rounded-2xl -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;