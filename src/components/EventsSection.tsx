'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiUser, FiChevronRight } from 'react-icons/fi';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  presenter: string;
  imageUrl: string;
}

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Simulate fetching events from an API
  useEffect(() => {
    // Mock data
    const mockEvents: Event[] = [
      {
        id: '1',
        title: 'מפגש עם הסופרת רותי שרף',
        date: '2023-12-15',
        time: '19:00',
        location: 'חנות ספרים ביתא, תל אביב',
        description: 'מפגש אינטימי עם הסופרת רותי שרף לרגל צאת ספרה החדש "בין השורות". המפגש יכלול קריאה מהספר, שיחה על תהליך הכתיבה וחתימה על עותקים.',
        presenter: 'רותי שרף',
        imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
      },
      {
        id: '2',
        title: 'מועדון קריאה: "הדרך לעצמאות"',
        date: '2023-12-20',
        time: '18:30',
        location: 'חנות ספרים ביתא, תל אביב',
        description: 'מפגש חודשי של מועדון הקריאה שלנו. הפעם נדון בספר "הדרך לעצמאות" מאת יובל נח הררי. המפגש פתוח לכל החברים במועדון.',
        presenter: 'ד"ר מיכל כהן',
        imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8',
      },
      {
        id: '3',
        title: 'סדנת כתיבה יוצרת לילדים',
        date: '2023-12-25',
        time: '16:00',
        location: 'חנות ספרים ביתא, תל אביב',
        description: 'סדנה מיוחדת לילדים בגילאי 8-12 שאוהבים לכתוב ולספר סיפורים. בהנחיית הסופר אלון גור, מחבר סדרת ספרי הילדים "הרפתקאות בממלכת הדמיון".',
        presenter: 'אלון גור',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
      },
    ];

    setEvents(mockEvents);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsRegistering(true);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the registration data to your backend
    console.log('Registration submitted:', { event: selectedEvent, ...registrationData });
    
    // Show success message and reset
    alert('ההרשמה התקבלה בהצלחה!');
    setIsRegistering(false);
    setRegistrationData({ name: '', email: '', phone: '' });
    setSelectedEvent(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
      }
    },
    hover: { 
      y: -5,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: { 
        duration: 0.3,
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2,
      }
    }
  };

  return (
    <section className="events-section py-16 px-4 md:px-8 bg-gradient-to-br from-primary-light to-white rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">אירועים קרובים</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            הצטרפו אלינו לאירועים מיוחדים בחנות - מפגשי סופרים, מועדוני קריאה, סדנאות כתיבה ועוד
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="glassmorphism-card rounded-xl overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-primary text-gray-800 px-3 py-1 rounded-full font-medium text-sm">
                  {formatDate(event.date)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FiClock className="ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="ml-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiUser className="ml-2" />
                    <span>{event.presenter}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => handleRegister(event)}
                    className="neumorphic-button flex items-center justify-center"
                  >
                    <span>הרשמה</span>
                    <FiChevronRight className="mr-1" />
                  </button>
                  
                  <button 
                    className="text-primary-dark font-medium hover:underline"
                    onClick={() => setSelectedEvent(event)}
                  >
                    פרטים נוספים
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && !isRegistering && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              className="glassmorphism-modal max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative">
                <button 
                  className="absolute top-4 left-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-white"
                  onClick={() => setSelectedEvent(null)}
                >
                  ✕
                </button>
                
                <img 
                  src={selectedEvent.imageUrl} 
                  alt={selectedEvent.title} 
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedEvent.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="ml-2" />
                      <span>{formatDate(selectedEvent.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiClock className="ml-2" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="ml-2" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiUser className="ml-2" />
                      <span>{selectedEvent.presenter}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {selectedEvent.description}
                  </p>
                  
                  <div className="flex justify-end">
                    <button 
                      onClick={() => setIsRegistering(true)}
                      className="neumorphic-button"
                    >
                      הרשמה לאירוע
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Registration Form Modal */}
      <AnimatePresence>
        {isRegistering && selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              className="glassmorphism-modal max-w-md w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">הרשמה לאירוע</h3>
                <h4 className="text-lg font-medium mb-4 text-gray-700">{selectedEvent.title}</h4>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium ml-1">תאריך:</span> 
                  {formatDate(selectedEvent.date)}
                </p>
                <p className="text-gray-600 mb-6">
                  <span className="font-medium ml-1">שעה:</span> 
                  {selectedEvent.time}
                </p>
                
                <form onSubmit={handleSubmitRegistration} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">שם מלא</label>
                    <input
                      type="text"
                      id="name"
                      value={registrationData.name}
                      onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
                      className="neumorphic-input w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">דוא"ל</label>
                    <input
                      type="email"
                      id="email"
                      value={registrationData.email}
                      onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                      className="neumorphic-input w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">טלפון</label>
                    <input
                      type="tel"
                      id="phone"
                      value={registrationData.phone}
                      onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                      className="neumorphic-input w-full"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setIsRegistering(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    >
                      ביטול
                    </button>
                    
                    <button
                      type="submit"
                      className="neumorphic-button"
                    >
                      שליחת הרשמה
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;