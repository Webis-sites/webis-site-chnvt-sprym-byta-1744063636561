'use client';

import React from 'react';
import { FaBook, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  yearsOfExperience?: number;
  customTitle?: string;
  customDescription?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  yearsOfExperience = 25,
  customTitle,
  customDescription,
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="about-section bg-gradient-to-br from-white to-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Glass Header */}
        <div className="glassmorphism mb-16 p-8 rounded-2xl text-center max-w-4xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            {customTitle || "ברוכים הבאים לחנות הספרים שלנו"}
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg text-gray-600 leading-relaxed"
          >
            {customDescription || `${yearsOfExperience} שנות ניסיון בעולם הספרים, מחויבים למצוינות ושירות מקצועי`}
          </motion.p>
        </div>

        {/* Feature Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={fadeInUp} className="neumorphic-card">
            <div className="icon-container">
              <FaBook className="text-primary text-3xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">מבחר עשיר</h3>
            <p className="text-gray-600">אלפי כותרים מהארץ ומהעולם, בכל הז'אנרים והקטגוריות</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeInUp} className="neumorphic-card">
            <div className="icon-container">
              <FaAward className="text-primary text-3xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">איכות ללא פשרות</h3>
            <p className="text-gray-600">מחויבים לאיכות גבוהה בכל היבט של השירות שלנו</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeInUp} className="neumorphic-card">
            <div className="icon-container">
              <FaUsers className="text-primary text-3xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">צוות מומחים</h3>
            <p className="text-gray-600">צוות מקצועי ומנוסה שישמח לייעץ ולהמליץ</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeInUp} className="neumorphic-card">
            <div className="icon-container">
              <FaHandshake className="text-primary text-3xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">שירות אישי</h3>
            <p className="text-gray-600">חווית קנייה מותאמת אישית לצרכים הספציפיים שלך</p>
          </motion.div>
        </motion.div>

        {/* Corporate Section */}
        <div className="corporate-section mt-20 p-8 rounded-xl bg-white shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-2xl font-bold mb-4 text-gray-800"
              >
                המומחיות שלנו לשירותך
              </motion.h3>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-gray-600 mb-4 leading-relaxed"
              >
                אנו מאמינים שספרים הם יותר מסתם מילים על נייר - הם חוויות, רעיונות וידע שמחכים להתגלות.
              </motion.p>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-gray-600 leading-relaxed"
              >
                עם {yearsOfExperience} שנות ניסיון בענף, אנו מחויבים לספק לכם את השירות הטוב ביותר ואת הספרים האיכותיים ביותר.
              </motion.p>
            </div>
            <div className="book-image-container">
              <img 
                src="/images/bookstore.jpg" 
                alt="חנות הספרים שלנו" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;