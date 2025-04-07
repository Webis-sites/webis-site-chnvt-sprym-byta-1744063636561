'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star } from 'react-feather';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  rating: number;
  price: number;
}

interface BookRecommendationsSectionProps {
  title?: string;
  subtitle?: string;
  books?: Book[];
}

const defaultBooks: Book[] = [
  {
    id: '1',
    title: 'אומנות המלחמה',
    author: 'סון טסו',
    description: 'ספר קלאסי על אסטרטגיה צבאית ותבונה טקטית שנכתב לפני מאות שנים',
    coverImage: '/images/book1.jpg',
    rating: 4.8,
    price: 89.90
  },
  {
    id: '2',
    title: 'שר הטבעות',
    author: 'ג׳.ר.ר. טולקין',
    description: 'אפוס פנטזיה מופתי המתאר את מסעו של פרודו לאבד את טבעת הכוח',
    coverImage: '/images/book2.jpg',
    rating: 4.9,
    price: 129.90
  },
  {
    id: '3',
    title: 'להיות אדם',
    author: 'יובל נוח הררי',
    description: 'מבט מעמיק על ההיסטוריה האנושית והכיוון אליו מתפתחת האנושות',
    coverImage: '/images/book3.jpg',
    rating: 4.7,
    price: 98.00
  },
  {
    id: '4',
    title: 'אלף לילה ולילה',
    author: 'עממי',
    description: 'אוסף סיפורים קלאסיים מהמזרח התיכון שהשפיעו על תרבויות רבות',
    coverImage: '/images/book4.jpg',
    rating: 4.6,
    price: 75.50
  },
  {
    id: '5',
    title: 'מאה שנים של בדידות',
    author: 'גבריאל גרסיה מארקס',
    description: 'יצירת מופת של ריאליזם קסום המתארת שבעה דורות של משפחה קולומביאנית',
    coverImage: '/images/book5.jpg',
    rating: 4.8,
    price: 88.00
  },
  {
    id: '6',
    title: 'קיצור תולדות האנושות',
    author: 'יובל נוח הררי',
    description: 'סקירה מרתקת של התפתחות המין האנושי מראשיתו ועד ימינו',
    coverImage: '/images/book6.jpg',
    rating: 4.9,
    price: 94.90
  }
];

const BookRecommendationsSection: React.FC<BookRecommendationsSectionProps> = ({
  title = "המלצות הספרים שלנו",
  subtitle = "הספרים הנבחרים שלנו לחודש זה",
  books = defaultBooks
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBooks, setVisibleBooks] = useState<Book[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [booksPerView, setBooksPerView] = useState(3);

  // Determine books per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBooksPerView(1);
      } else if (window.innerWidth < 1024) {
        setBooksPerView(2);
      } else {
        setBooksPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update visible books when currentIndex or booksPerView changes
  useEffect(() => {
    setVisibleBooks(books.slice(currentIndex, currentIndex + booksPerView));
  }, [currentIndex, booksPerView, books]);

  const nextSlide = () => {
    if (currentIndex + booksPerView < books.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.max(0, books.length - booksPerView));
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < Math.floor(rating) 
            ? 'text-primary fill-primary' 
            : i < rating 
              ? 'text-primary fill-primary opacity-50' 
              : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="book-recommendations-section py-16 px-4 md:px-8 bg-secondary/40 backdrop-blur-md rtl">
      <div className="container mx-auto glass-container p-8 rounded-2xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <motion.div 
            className="carousel-container overflow-hidden"
            ref={carouselRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex gap-6 transition-all duration-500 ease-in-out"
              animate={{ x: `calc(-${currentIndex * (100 / booksPerView)}%)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {books.map((book) => (
                <motion.div 
                  key={book.id}
                  className="book-card neumorphic-card min-w-[calc(100%/var(--books-per-view))] p-6 rounded-xl flex flex-col h-full"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{
                    '--books-per-view': booksPerView
                  } as React.CSSProperties}
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 book-image-container">
                      <Image 
                        src={book.coverImage} 
                        alt={book.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{book.title}</h3>
                    <p className="text-gray-600 mb-2">{book.author}</p>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-3">{book.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center">
                        {renderStars(book.rating)}
                        <span className="text-sm text-gray-600 mr-1">{book.rating}</span>
                      </div>
                      <div className="text-primary font-bold">₪{book.price.toFixed(2)}</div>
                    </div>
                  </div>
                  <motion.button 
                    className="w-full mt-4 py-2 px-4 bg-primary text-gray-800 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    הוסף לסל
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-primary transition-colors neumorphic-button"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="הספר הקודם"
          >
            <ChevronRight size={24} />
          </motion.button>
          
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-primary transition-colors neumorphic-button"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="הספר הבא"
          >
            <ChevronLeft size={24} />
          </motion.button>
        </div>

        <div className="flex justify-center mt-8 gap-1">
          {Array.from({ length: Math.ceil(books.length / booksPerView) }).map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === Math.floor(currentIndex / booksPerView) 
                  ? 'bg-primary' 
                  : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index * booksPerView)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`עבור לסט ספרים ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookRecommendationsSection;