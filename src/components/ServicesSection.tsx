'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaShippingFast, FaUserEdit, FaBookReader } from 'react-icons/fa';
import { MdEventAvailable, MdSchool } from 'react-icons/md';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, benefits }) => {
  return (
    <motion.div
      className="service-card bg-white rounded-xl p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="glass-icon-container mb-4 p-4 rounded-lg self-start">
        <div className="text-3xl text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mt-auto">
        <h4 className="font-semibold mb-2 text-primary">יתרונות:</h4>
        <ul className="text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center mb-1">
              <span className="ml-2 text-primary">•</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <FaBook />,
      title: "הוצאה לאור",
      description: "שירותי הוצאה לאור מקצועיים לסופרים מתחילים ומנוסים כאחד.",
      benefits: [
        "ליווי אישי לאורך כל התהליך",
        "עיצוב כריכה מקצועי",
        "עריכה לשונית ברמה גבוהה"
      ]
    },
    {
      icon: <FaUserEdit />,
      title: "עריכה ספרותית",
      description: "שירותי עריכה מקצועיים להפיכת הטקסט שלך ליצירה ספרותית מלוטשת.",
      benefits: [
        "עריכה תוכנית ומבנית",
        "עריכה לשונית וסגנונית",
        "משוב מפורט והכוונה"
      ]
    },
    {
      icon: <MdEventAvailable />,
      title: "אירועי השקה",
      description: "ארגון אירועי השקת ספרים מרשימים שיציגו את הספר שלך בצורה הטובה ביותר.",
      benefits: [
        "תכנון והפקת האירוע",
        "יחסי ציבור וקידום",
        "תיעוד מקצועי של האירוע"
      ]
    },
    {
      icon: <FaShippingFast />,
      title: "הפצה ושיווק",
      description: "שירותי הפצה ושיווק לספרים בחנויות פיזיות ובפלטפורמות דיגיטליות.",
      benefits: [
        "הפצה ארצית בחנויות ספרים",
        "שיווק דיגיטלי ממוקד",
        "ניהול מכירות באמזון ובפלטפורמות נוספות"
      ]
    },
    {
      icon: <MdSchool />,
      title: "סדנאות כתיבה",
      description: "סדנאות כתיבה יצירתית בהנחיית סופרים ועורכים מנוסים.",
      benefits: [
        "קבוצות קטנות ויחס אישי",
        "טכניקות כתיבה מתקדמות",
        "משוב מקצועי על יצירותיך"
      ]
    },
    {
      icon: <FaBookReader />,
      title: "ייעוץ ספרותי",
      description: "ייעוץ אישי לסופרים בכל שלבי היצירה והפרסום.",
      benefits: [
        "פגישות ייעוץ אישיות",
        "בניית תוכנית עבודה",
        "הכוונה מקצועית לפרסום"
      ]
    }
  ];

  return (
    <section className="services-section py-16 px-4 bg-secondary" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            חנות הספרים ביתא מציעה מגוון שירותים מקצועיים לסופרים, מוציאים לאור וחובבי ספרות.
            צוות המומחים שלנו כאן כדי לעזור לך להגשים את החלום הספרותי שלך.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button 
            className="neumorphic-button bg-primary text-gray-800 font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            לפרטים נוספים
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;