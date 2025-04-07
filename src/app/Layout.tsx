import React from 'react';
import Head from 'next/head';
import { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import Header from '@/components/Header';

// Define fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo'
});

// Metadata for the site
export const metadata: Metadata = {
  title: {
    default: 'חנות ספרים ביתא | ספרים איכותיים במחירים נוחים',
    template: '%s | חנות ספרים ביתא'
  },
  description: 'חנות ספרים ביתא - המקום הטוב ביותר לקנות ספרים חדשים, ספרי עיון, ספרות ילדים ונוער',
  keywords: ['ספרים', 'חנות ספרים', 'ספרות', 'קריאה', 'ספרי עיון', 'ספרי ילדים'],
  authors: [{ name: 'חנות ספרים ביתא' }],
  creator: 'חנות ספרים ביתא',
  publisher: 'חנות ספרים ביתא',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://bookstore-beta.com',
    title: 'חנות ספרים ביתא | ספרים איכותיים במחירים נוחים',
    description: 'חנות ספרים ביתא - המקום הטוב ביותר לקנות ספרים חדשים, ספרי עיון, ספרות ילדים ונוער',
    siteName: 'חנות ספרים ביתא',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'חנות ספרים ביתא'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'חנות ספרים ביתא | ספרים איכותיים במחירים נוחים',
    description: 'חנות ספרים ביתא - המקום הטוב ביותר לקנות ספרים חדשים, ספרי עיון, ספרות ילדים ונוער',
    images: ['/images/og-image.jpg']
  }
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <div className="glass-container fixed inset-0 -z-10"></div>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
            <div className="neumorphic-container">
              {children}
            </div>
          </main>
          <footer className="py-6 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-sm border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
              <p className="text-secondary font-heebo">© {new Date().getFullYear()} חנות ספרים ביתא. כל הזכויות שמורות.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}