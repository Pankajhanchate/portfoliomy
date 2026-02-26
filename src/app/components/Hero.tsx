'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

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
            className="text-align lg:text-left order-2 lg:order-1"
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
              <span className="block"> Experiences</span>
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

          {/* Right Column - Profile Card - REDUCED MAIN DIV SIZE, IMAGE SAME */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            {/* <div className="relative w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px]"> */}
            <div className="relative w-[264px] sm:w-[286px] md:w-[308px] lg:w-[330px]">
              {/* Animated Blobs - Adjusted for smaller container */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-7 -left-7 w-36 h-36 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
                // className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
              />
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
              />

              {/* Profile Card - Tighter padding but image same size */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center relative z-10"
              >
                {/* Profile Image - SAME SIZE as before */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-2 sm:mb-3 relative">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30">
                    <img 
                      src="/cv/Pankaj_pic3.png" 
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Name - Slightly smaller text to fit */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-center">{PERSONAL_INFO.name}</h3>
                
                {/* Title - Slightly smaller */}
                <p className="text-gray-300 text-center text-xs sm:text-sm mb-2 px-2">
                  {PERSONAL_INFO.title}
                </p>
                
                {/* Contact Info - More compact */}
                <div className="space-y-1 text-center w-full">
                  <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                    <span>📍</span>
                    <span className="truncate max-w-[130px]">{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                    <span>📧</span>
                    <span className="truncate max-w-[130px]">{PERSONAL_INFO.email}</span>
                  </div>
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