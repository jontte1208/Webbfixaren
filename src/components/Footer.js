import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-accent to-purple-accent bg-clip-text text-transparent">
              Webbfixaren
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Snygga hemsidor för småföretag
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* Facebook */}
            <motion.a
              href="@https://www.facebook.com/profile.php?id=61576844293135"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-blue-accent transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
                    <p className="text-gray-400 text-sm">
          © 2025 Webbfixaren. Alla rättigheter förbehållna.
        </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">
              Byggd med kärlek för svenska småföretag
            </p>
            
            {/* Quick Links */}
            <div className="flex justify-center space-x-6 text-sm">
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-accent transition-colors duration-300"
              >
                Kontakt
              </motion.button>
              <span className="text-gray-600">•</span>
              <motion.a
                href="mailto:support@webbfixaren.se"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-accent transition-colors duration-300"
              >
                support@webbfixaren.se
              </motion.a>
              <span className="text-gray-600">•</span>
              <motion.a
                href="tel:0730862191"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-accent transition-colors duration-300"
              >
                0730862191
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
          backgroundColor: "rgba(59, 130, 246, 0.9)"
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-blue-accent text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Scrolla till toppen"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer; 