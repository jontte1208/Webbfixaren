import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 bg-gradient-to-r from-blue-accent to-purple-accent bg-clip-text text-transparent">
                Om Webbverket
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Jag heter Jonathan och driver Webbverket. Jag hjälper småföretag att växa online med 
                  snygga, snabba och lättskötta hemsidor – utan stress eller tekniskt krångel.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Som småföretagare vet jag hur viktigt det är att fokusera på sitt kärnområde. 
                  Därför tar jag hand om den tekniska biten så att du kan koncentrera dig på 
                  det du gör bäst – att driva ditt företag.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Varje hemsida jag bygger är skräddarsydd efter dina behov och din bransch. 
                  Oavsett om du driver en frisörsalong, restaurang, hantverksföretag eller butik 
                  – jag ser till att din digitala närvaro speglar kvaliteten på din verksamhet.
                </motion.p>
              </div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-accent mb-2">Modern</div>
                  <div className="text-gray-400">Teknik & Design</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-accent mb-2">Fräsch</div>
                  <div className="text-gray-400">Approach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-accent mb-2">100%</div>
                  <div className="text-gray-400">Personlig service</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Process Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Process Steps */}
                <div className="space-y-8">
                  {/* Step 1: Idé */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 bg-dark-accent p-4 rounded-xl border border-gray-700"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-12 h-12 bg-gradient-to-r from-blue-accent to-purple-accent rounded-full flex items-center justify-center text-white font-bold"
                    >
                      1
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold">Idé & Planering</h4>
                      <p className="text-gray-400 text-sm">Vi diskuterar dina mål och behov</p>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-blue-accent"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>

                  {/* Step 2: Design */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 bg-dark-accent p-4 rounded-xl border border-gray-700"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="w-12 h-12 bg-gradient-to-r from-purple-accent to-blue-accent rounded-full flex items-center justify-center text-white font-bold"
                    >
                      2
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold">Design & Utveckling</h4>
                      <p className="text-gray-400 text-sm">Jag skapar din unika hemsida</p>
                    </div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-purple-accent"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="flex justify-center"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>

                  {/* Step 3: Lansering */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 bg-dark-accent p-4 rounded-xl border border-gray-700"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-accent rounded-full flex items-center justify-center text-white font-bold"
                    >
                      3
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold">Lansering & Support</h4>
                      <p className="text-gray-400 text-sm">Din hemsida går live + support</p>
                    </div>
                    <motion.div
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-green-500"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>


              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="mt-8 bg-dark-accent p-6 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-2 left-8 w-4 h-4 bg-dark-accent border-l border-t border-gray-700 transform rotate-45"></div>
                <p className="text-gray-300 italic text-center">
                  "Min passion är att hjälpa småföretag att lyckas online. 
                  En professionell hemsida ska inte vara komplex eller dyr – 
                  det ska bara fungera."
                </p>
                <p className="text-blue-accent font-semibold text-center mt-4">
                  - Jonathan, Grundare av Webbverket
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 