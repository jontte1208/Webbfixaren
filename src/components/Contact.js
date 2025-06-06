import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS konfiguration
    const serviceID = 'service_0wqj8vi'; // Din Service ID
    const templateID = 'template_ipqkcp1'; // Din Template ID  
    const publicKey = 'zQcG9w-AYEDfMwuyv'; // Din Public Key
    
    // Skicka e-mail via EmailJS
    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'support@webbfixaren.se', // Din e-mail adress
      },
      publicKey
    )
    .then((response) => {
      console.log('E-mail skickat!', response.status, response.text);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    })
    .catch((error) => {
      console.log('Fel vid skickande:', error);
      alert('Något gick fel. Försök igen eller ring direkt på 0730862191');
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 bg-gradient-to-r from-blue-accent to-purple-accent bg-clip-text text-transparent">
              Låt oss prata
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Redo att ta nästa steg? Berätta om ditt projekt så återkommer jag med ett skräddarsytt förslag.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-accent p-8 rounded-xl shadow-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Få din kostnadsfria offert
                </h3>
                
                {!isSubmitted ? (
                  <form 
                    action="https://formspree.io/f/DIN_FORMSPREE_ID" 
                    method="POST"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Namn *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-accent transition-all duration-300"
                        placeholder="Ditt fullständiga namn"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-postadress *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-accent transition-all duration-300"
                        placeholder="din@email.se"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Företagsnamn
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-accent transition-all duration-300"
                        placeholder="Ditt företags namn"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Meddelande *
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)" }}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-accent transition-all duration-300 resize-none"
                        placeholder="Berätta om ditt projekt, vilken typ av hemsida du behöver och eventuella önskemål..."
                      />
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-accent to-purple-accent text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Skicka meddelande
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="w-16 h-16 mx-auto mb-6 text-green-500"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-2">Tack för ditt meddelande!</h4>
                    <p className="text-gray-400">Jag återkommer inom 24 timmar.</p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Varför välja Webbfixaren?
                </h3>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <div className="text-blue-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Kostnadsfri konsultation och offert</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <div className="text-blue-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Snabb leverans - oftast inom 2-4 veckor</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <div className="text-blue-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span>Personlig service hela vägen</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <div className="text-blue-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Support och underhåll efter lansering</span>
                  </motion.div>
                </div>
              </div>

              <div className="bg-dark-accent p-6 rounded-xl border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Vanliga frågor?</h4>
                <p className="text-gray-400 mb-4">
                  Undrar du över pris, process eller vad som ingår? 
                  Inga konstigheter - bara skriv eller ring så svarar jag på allt.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>📧 support@webbfixaren.se</div>
                  <div>📱 0730862191</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 