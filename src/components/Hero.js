import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-accent"></div>
      
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" role="img" aria-label="Dekorativ bakgrundsgrafik">
          <path
            d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <header>
          {/* Company Name with Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold font-poppins mb-6 bg-gradient-to-r from-blue-accent to-purple-accent bg-clip-text text-transparent"
          >
            Webbfixaren
          </motion.h1>

          {/* Main Heading - What we do */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-medium font-inter mb-8 text-gray-300"
          >
            Professionella Hemsidor för Småföretag i Sverige
          </motion.h2>
        </header>

        {/* Value Proposition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Snygga, snabba och SEO-optimerade hemsidor för frisörer, restauranger, hantverkare och butiker – utan krångel.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8 text-sm md:text-base">
            <div className="bg-dark-accent bg-opacity-50 rounded-lg p-4 border border-gray-700">
              <div className="text-blue-accent font-semibold mb-1">✅ Kostnadsfri Konsultation</div>
              <div className="text-gray-400">Ingen risk - bara möjligheter</div>
            </div>
            <div className="bg-dark-accent bg-opacity-50 rounded-lg p-4 border border-gray-700">
              <div className="text-purple-accent font-semibold mb-1">⚡ 2-4 Veckors Leverans</div>
              <div className="text-gray-400">Snabb lansering av din hemsida</div>
            </div>
            <div className="bg-dark-accent bg-opacity-50 rounded-lg p-4 border border-gray-700">
              <div className="text-blue-accent font-semibold mb-1">🎯 100% Personlig Service</div>
              <div className="text-gray-400">Du pratar direkt med utvecklaren</div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-accent to-purple-accent text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-accent focus:ring-opacity-50"
            aria-label="Få kostnadsfri offert för din företagshemsida"
          >
            Få Kostnadsfri Offert
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Svar inom 24 timmar • Ingen förpliktelse
          </p>
        </motion.section>

        {/* Floating Elements - Decorative */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-16 h-16 bg-blue-accent opacity-20 rounded-full blur-sm hidden md:block"
          aria-hidden="true"
        />
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-16 w-12 h-12 bg-purple-accent opacity-20 rounded-full blur-sm hidden md:block"
          aria-hidden="true"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-label="Scrolla ner för att se mer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          role="button"
          tabIndex="0"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero; 