'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

const Hero = () => {
  // Function to handle CV download/view
  const handleViewCV = () => {
    // Your CV file should be in: public/cv/your-cv.pdf
    const cvUrl = '/cv/PANKAJ 2026 CV.pdf'; // Change 'your-cv.pdf' to your actual filename
    
    // Open CV in new tab
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-20 pt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full glass-effect"
            >
              <Sparkles className="text-yellow-400" size={20} />
              <span className="text-sm">{PERSONAL_INFO.title}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">Creating</span>
              <span className="gradient-text">Beautiful</span>
              <span className="block">Digital Experiences</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              {PERSONAL_INFO.about}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.2 }}
                  className="p-2 glass-effect rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>

            {/* Buttons Section - Updated with CV Button */}
            <div className="flex flex-wrap gap-4">
              {/* View My Work Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold flex items-center space-x-2"
                onClick={() => {
                  // Scroll to projects section
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </motion.button>
              
              {/* NEW: View My CV Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewCV}
                className="px-8 py-3 glass-effect rounded-full font-semibold flex items-center space-x-2 hover:bg-white/10 transition-colors"
              >
                <FileText size={20} />
                <span>View My CV</span>
                <Download size={16} className="opacity-70" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Profile Card */}
            <motion.div
              whileHover={{ rotateY: 10, rotateX: 5 }}
              className="glass-effect rounded-3xl p-8 flex flex-col items-center justify-center"
            >
              <div className="w-48 h-48 mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  {/* <span className="text-4xl">✨</span> */}
                  <img src="/cv/Pankaj_pic3.png" alt="" 
                  height={1000}
                  width={500}
                  className="rounded-full object-cover transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-1500 hover:to-pink-1500"
/>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{PERSONAL_INFO.name}</h3>
              <p className="text-gray-300 text-center mb-4">
                {PERSONAL_INFO.title}
              </p>
              
              {/* Contact Info from constants */}
              <div className="space-y-2 text-center">
                <p className="text-sm text-gray-400">📍 {PERSONAL_INFO.location}</p>
                <p className="text-sm text-gray-400">📧 {PERSONAL_INFO.email}</p>
                <p className="text-sm text-gray-400">📱 {PERSONAL_INFO.phone}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;