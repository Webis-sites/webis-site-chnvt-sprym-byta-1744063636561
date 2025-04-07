'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineShoppingCart, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navItems: NavItem[] = [
    { label: 'דף הבית', href: '/' },
    { label: 'ספרים', href: '/books' },
    { label: 'קטגוריות', href: '/categories' },
    { label: 'מבצעים', href: '/sales' },
    { label: 'אודות', href: '/about' },
    { label: 'צור קשר', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-neumorph' 
          : 'bg-white/95'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">חנות ספרים ביתא</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 mx-1 text-gray-700 hover:text-primary transition-colors rounded-lg group"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100"
                  initial={false}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 space-x-reverse">
            <button 
              aria-label="חיפוש"
              className="p-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            >
              <HiOutlineSearch className="w-5 h-5" />
            </button>
            <button 
              aria-label="סל קניות"
              className="p-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100 relative"
            >
              <HiOutlineShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
            <button 
              aria-label="החשבון שלי"
              className="p-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            >
              <HiOutlineUser className="w-5 h-5" />
            </button>
            <motion.button
              className="glass-button px-5 py-2 rounded-lg text-sm font-medium bg-primary text-white shadow-neumorph-primary hover:shadow-neumorph-primary-hover transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              קבע תור עכשיו
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isMenuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/90 backdrop-blur-md md:hidden overflow-y-auto pt-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-3 text-lg text-gray-700 hover:text-primary rounded-lg hover:bg-gray-100/50 transition-colors"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-3 mt-6">
                  <div className="flex justify-between">
                    <button 
                      aria-label="חיפוש"
                      className="flex-1 p-3 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100/50 flex items-center justify-center"
                    >
                      <HiOutlineSearch className="w-6 h-6" />
                      <span className="mr-2">חיפוש</span>
                    </button>
                    <button 
                      aria-label="סל קניות"
                      className="flex-1 p-3 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100/50 flex items-center justify-center relative"
                    >
                      <HiOutlineShoppingCart className="w-6 h-6" />
                      <span className="mr-2">סל קניות</span>
                      <span className="absolute top-2 right-16 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
                    </button>
                  </div>
                  <button 
                    aria-label="החשבון שלי"
                    className="p-3 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100/50 flex items-center justify-center"
                  >
                    <HiOutlineUser className="w-6 h-6" />
                    <span className="mr-2">החשבון שלי</span>
                  </button>
                  <motion.button
                    className="glass-button w-full p-4 rounded-lg text-base font-medium bg-primary text-white shadow-neumorph-primary hover:shadow-neumorph-primary-hover transition-all duration-300 mt-4"
                    whileTap={{ scale: 0.95 }}
                  >
                    קבע תור עכשיו
                  </motion.button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;