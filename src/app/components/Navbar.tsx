'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Wrench, Mail } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#home' },
    { name: 'About', icon: <User size={20} />, href: '#about' },
    { name: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
    { name: 'Skills', icon: <Wrench size={20} />, href: '#skills' },
    { name: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 glass-effect z-50 mx-4 md:mx-10 lg:mx-20 mt-4 rounded-2xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            <span className="text-pink-500">Developer & Designer.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 hover:text-purple-300 transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;