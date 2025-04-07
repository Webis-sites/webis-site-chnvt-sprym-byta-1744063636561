'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
  image?: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  autoPlayInterval?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "רחל לוי",
    rating: 5,
    quote: "חנות הספרים הזו היא אוצר אמיתי! מצאתי כאן ספרים נדירים שחיפשתי במשך שנים. השירות מעולה והצוות תמיד מוכן לעזור.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "דוד כהן",
    rating: 4,
    quote: "אני קונה ספרים כאן באופן קבוע. המבחר עצום והמחירים הוגנים. תמיד נעים לבקר בחנות הזו.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "מיכל גולן",
    rating: 5,
    quote: "הזמנתי ספרים דרך האתר וקיבלתי אותם תוך יומיים. האריזה הייתה מושלמת והספרים הגיעו במצב חדש לגמרי. ממליצה בחום!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "יוסי אברהם",
    rating: 5,
    quote: "אני מעריך מאוד את הידע המקצועי של הצוות. תמיד יודעים להמליץ על ספרים מעניינים בדיוק לפי הטעם שלי.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "שרה ברקוביץ",
    rating: 4,
    quote: "חנות הספרים הטובה ביותר בעיר! אווירה נעימה, מבחר עשיר וצוות אדיב. מקום מושלם לכל חובבי הספרות.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = defaultTestimonials,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to handle dot navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Setup autoplay
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, autoPlayInterval]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar 
        key={index} 
        className={`inline-block ${index < rating ? 'text-primary' : 'text-gray-300'}`} 
        aria-hidden={true}
      />
    ));
  };

  return (
    <section 
      className="testimonials-section py-16 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden"
      dir="rtl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">מה הלקוחות שלנו אומרים</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative glassmorphic-container p-6 md:p-10 rounded-2xl max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-neumorphic"></div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                  {testimonials[currentIndex].image && (
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 shadow-neumorphic-inset">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 text-center md:text-right">
                    <div className="mb-4 text-xl">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    <div className="relative">
                      <FaQuoteRight className="absolute -top-4 -right-2 text-primary opacity-20 text-4xl" />
                      <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
                        {testimonials[currentIndex].quote}
                      </p>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevSlide}
                className="nav-button shadow-neumorphic hover:shadow-neumorphic-pressed active:shadow-neumorphic-pressed transition-all duration-300"
                aria-label="הקודם"
              >
                <FaChevronRight className="text-gray-700" />
              </button>
              
              {/* Dots Navigation */}
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-primary w-6 shadow-neumorphic-inset' 
                        : 'bg-gray-300 shadow-neumorphic'
                    }`}
                    aria-label={`עבור לביקורת ${index + 1}`}
                    aria-current={currentIndex === index ? 'true' : 'false'}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="nav-button shadow-neumorphic hover:shadow-neumorphic-pressed active:shadow-neumorphic-pressed transition-all duration-300"
                aria-label="הבא"
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;