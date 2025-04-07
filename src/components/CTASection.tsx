'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = 'הספרייה שלך מחכה לך',
  description = 'גלה עולמות חדשים דרך ספרים. קבע תור אישי עם יועץ הספרות שלנו ונתאים לך את הספרים המושלמים.',
  buttonText = 'קבע תור עכשיו',
  backgroundImage = '/books-background.jpg',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section dir="rtl" className="w-full py-16 md:py-24 relative overflow-hidden font-heebo">
      {/* Background with glassmorphism effect */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-primary/30 to-white/70 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-neumorphic">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="px-8 py-4 bg-primary text-gray-800 font-bold rounded-full text-lg transition-all duration-300 shadow-neumorphic-button hover:shadow-neumorphic-button-hover focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(245, 217, 107, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  aria-label={buttonText}
                >
                  {buttonText}
                  <motion.span
                    className="inline-block mr-2"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ←
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;