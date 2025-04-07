'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiCalendar, FiCheck } from 'react-icons/fi';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const BookingSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="booking-section py-16 px-4 md:px-8 font-heebo" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-white/80 backdrop-blur-md z-0"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
              >
                הזמנת ספרים
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                מלא את הטופס כדי להזמין ספרים או לקבוע תור לייעוץ אישי בחנות הספרים שלנו
              </motion.p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message neumorphic-success p-8 rounded-xl text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3 text-green-600">
                    <FiCheck size={30} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">ההזמנה התקבלה בהצלחה!</h3>
                <p className="text-gray-600">ניצור איתך קשר בהקדם האפשרי.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם מלא</label>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <FiUser />
                    </div>
                    <input
                      id="name"
                      type="text"
                      className={`neumorphic-input w-full py-3 px-10 rounded-lg ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="הכנס את שמך המלא"
                      {...register('name', { required: 'שדה חובה' })}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">מספר טלפון</label>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <FiPhone />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      className={`neumorphic-input w-full py-3 px-10 rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="הכנס את מספר הטלפון שלך"
                      {...register('phone', { 
                        required: 'שדה חובה',
                        pattern: {
                          value: /^[0-9]{9,10}$/,
                          message: 'מספר טלפון לא תקין'
                        }
                      })}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">דוא"ל</label>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <FiMail />
                    </div>
                    <input
                      id="email"
                      type="email"
                      className={`neumorphic-input w-full py-3 px-10 rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="הכנס את כתובת הדוא״ל שלך"
                      {...register('email', { 
                        required: 'שדה חובה',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'כתובת דוא״ל לא תקינה'
                        }
                      })}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
                  <div className="relative">
                    <div className="absolute right-3 top-4 text-gray-500">
                      <FiMessageSquare />
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      className={`neumorphic-input w-full py-3 px-10 rounded-lg ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="הכנס את הודעתך או פרטי ההזמנה"
                      {...register('message', { required: 'שדה חובה' })}
                    ></textarea>
                  </div>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <div className="mt-8">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="neumorphic-button w-full py-4 px-6 rounded-lg bg-primary text-gray-800 font-bold text-lg flex items-center justify-center gap-2 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        מעבד...
                      </>
                    ) : (
                      <>
                        <FiCalendar />
                        קבע תור עכשיו
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;