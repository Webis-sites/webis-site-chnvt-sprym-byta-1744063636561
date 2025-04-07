import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

interface NavigationLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const FooterSection: React.FC = () => {
  const { t } = useTranslation('common');
  
  const currentYear = new Date().getFullYear();
  
  const navigationLinks: NavigationLink[] = [
    { label: 'דף הבית', href: '/' },
    { label: 'ספרים חדשים', href: '/new-books' },
    { label: 'מבצעים', href: '/sales' },
    { label: 'קטגוריות', href: '/categories' },
    { label: 'אודות', href: '/about' },
    { label: 'צור קשר', href: '/contact' },
  ];
  
  const secondaryLinks: NavigationLink[] = [
    { label: 'תנאי שימוש', href: '/terms' },
    { label: 'מדיניות פרטיות', href: '/privacy' },
    { label: 'החזרות וזיכויים', href: '/returns' },
    { label: 'שאלות נפוצות', href: '/faq' },
  ];
  
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'פייסבוק' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'טוויטר' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'אינסטגרם' },
  ];
  
  const contactInfo = [
    { icon: <FaPhone />, text: '03-1234567', href: 'tel:+97231234567' },
    { icon: <FaEnvelope />, text: 'info@hebrewbooks.co.il', href: 'mailto:info@hebrewbooks.co.il' },
    { icon: <FaMapMarkerAlt />, text: 'רחוב הספרים 42, תל אביב', href: 'https://maps.google.com/?q=תל+אביב+רחוב+הספרים+42' },
  ];

  return (
    <footer className="bg-primary text-secondary font-sans rtl" dir="rtl">
      {/* Glass effect top section */}
      <div className="glass-panel relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About section */}
            <div className="neumorphic-panel p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 border-b border-secondary/20 pb-2">חנות ספרים ביתא</h3>
              <p className="mb-4 text-secondary/90">
                חנות הספרים המובילה בישראל, מציעה מגוון רחב של ספרים בכל הקטגוריות. אצלנו תמצאו את הספרים החדשים והמבוקשים ביותר.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="social-button flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="neumorphic-panel p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 border-b border-secondary/20 pb-2">ניווט מהיר</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-secondary/90 hover:text-secondary transition duration-300 block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary Links */}
            <div className="neumorphic-panel p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 border-b border-secondary/20 pb-2">מידע נוסף</h3>
              <ul className="space-y-2">
                {secondaryLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-secondary/90 hover:text-secondary transition duration-300 block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="neumorphic-panel p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 border-b border-secondary/20 pb-2">צור קשר</h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <a 
                      href={item.href} 
                      className="flex items-center text-secondary/90 hover:text-secondary transition duration-300"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="ml-2">{item.icon}</span>
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">שעות פעילות</h4>
                <p className="text-secondary/90">ימים א'-ה': 09:00-21:00</p>
                <p className="text-secondary/90">יום ו': 09:00-14:00</p>
                <p className="text-secondary/90">שבת: סגור</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="py-4 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary/80 text-sm text-center md:text-right">
              © {currentYear} חנות ספרים ביתא. כל הזכויות שמורות.
            </p>
            <div className="mt-2 md:mt-0">
              <p className="text-secondary/80 text-sm">
                עוצב ופותח על ידי צוות חנות ספרים ביתא
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;