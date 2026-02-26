'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import Image from 'next/image';

const Hero = () => {
  // Function to handle CV download/view
  const handleViewCV = () => {
    const cvUrl = '/cv/PANKAJ 2026 CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 rounded-full glass-effect mx-auto lg:mx-0"
            >
              <Sparkles className="text-yellow-400" size={18} />
              <span className="text-xs sm:text-sm">{PERSONAL_INFO.title}</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="block">Creating</span>
              <span className="gradient-text">Beautiful</span>
              <span className="block">Digital Experiences</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              {PERSONAL_INFO.about}
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 sm:p-3 glass-effect rounded-full text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewCV}
                className="px-6 sm:px-8 py-2.5 sm:py-3 glass-effect rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                <FileText size={18} />
                <span>View My CV</span>
                <Download size={16} className="opacity-70" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
              {/* Animated Blobs */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-0 left-0 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              />
              
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute bottom-0 right-0 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
              />

              {/* Profile Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="absolute inset-0 glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center mx-4 sm:mx-0"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-3 sm:mb-4 lg:mb-6 relative">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30">
                    <img 
                      src="/cv/Pankaj_pic3.png" 
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-center">{PERSONAL_INFO.name}</h3>
                <p className="text-gray-300 text-center text-xs sm:text-sm md:text-base mb-2 sm:mb-3 lg:mb-4 px-2">
                  {PERSONAL_INFO.title}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-1 sm:space-y-2 text-center w-full">
                  <p className="text-xs sm:text-sm text-gray-400 truncate">📍 {PERSONAL_INFO.location}</p>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">📧 {PERSONAL_INFO.email}</p>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">📱 {PERSONAL_INFO.phone}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;