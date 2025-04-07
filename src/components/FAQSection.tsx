'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "איך אני יכול להזמין ספרים מהחנות?",
      answer: "ניתן להזמין ספרים דרך האתר שלנו, בטלפון, או בביקור בחנות הפיזית שלנו. לאחר ביצוע ההזמנה, תקבלו אישור במייל עם פרטי ההזמנה ומועד משלוח משוער."
    },
    {
      id: 2,
      question: "מהי מדיניות ההחזרות והזיכויים?",
      answer: "ניתן להחזיר מוצרים תוך 14 יום מיום הרכישה, כל עוד הם במצב חדש ובאריזה המקורית. זיכוי יינתן בהתאם לאמצעי התשלום המקורי. ספרים דיגיטליים אינם ניתנים להחזרה לאחר ההורדה."
    },
    {
      id: 3,
      question: "האם יש אפשרות למשלוח לכל הארץ?",
      answer: "כן, אנו מספקים שירותי משלוח לכל רחבי הארץ. משלוחים בתוך העיר מגיעים תוך 1-2 ימי עסקים, ולשאר חלקי הארץ תוך 2-4 ימי עסקים. קיימת אפשרות למשלוח מהיר בתוספת תשלום."
    },
    {
      id: 4,
      question: "האם ניתן להזמין ספרים שאינם במלאי?",
      answer: "בהחלט! אנו יכולים להזמין עבורכם ספרים שאינם במלאי. זמן האספקה תלוי בזמינות הספר אצל הספקים שלנו ויכול לנוע בין שבוע לשלושה שבועות. תקבלו עדכון ברגע שהספר יגיע לחנות."
    },
    {
      id: 5,
      question: "האם קיימות הנחות למנויים או לקוחות קבועים?",
      answer: "כן, אנו מציעים תכנית נאמנות ללקוחות קבועים. לאחר הצטרפות לתכנית, תוכלו ליהנות מהנחות קבועות, מבצעים מיוחדים, והזמנה מוקדמת של ספרים חדשים. פרטים נוספים ניתן לקבל בחנות או באזור האישי באתר."
    },
    {
      id: 6,
      question: "האם החנות מארגנת אירועי השקת ספרים ומפגשים עם סופרים?",
      answer: "בהחלט! אנו מקיימים אירועי השקה, מפגשי קוראים וסופרים, וסדנאות כתיבה באופן קבוע. לוח האירועים המעודכן מופיע באתר ובדף הפייסבוק שלנו. מוזמנים להירשם לניוזלטר כדי לקבל עדכונים שוטפים."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section rtl-container py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">שאלות נפוצות</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">התשובות לשאלות הנפוצות ביותר על חנות הספרים שלנו</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className="faq-item bg-white rounded-xl overflow-hidden glassmorphism"
            >
              <button
                className={`w-full text-right p-5 flex justify-between items-center transition-all duration-300 focus:outline-none neumorphic-button ${
                  activeIndex === faq.id ? 'active-neumorphic' : ''
                }`}
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={activeIndex === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                <span className="text-primary transition-transform duration-300">
                  {activeIndex === faq.id ? (
                    <FiMinus className="text-xl" />
                  ) : (
                    <FiPlus className="text-xl" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">לא מצאתם את התשובה שחיפשתם?</p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-primary text-gray-800 font-medium rounded-lg transition-all duration-300 hover:shadow-lg neumorphic-button"
          >
            צרו קשר
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;