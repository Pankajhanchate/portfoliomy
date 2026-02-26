'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Wrench, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const MobileBottomNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide bottom nav based on scroll direction
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      
      // Show scroll to top button after scrolling down
      setShowScrollTop(currentScrollY > 300);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { icon: <Home size={20} />, href: '#home', label: 'Home' },
    { icon: <User size={20} />, href: '#about', label: 'About' },
    { icon: <Briefcase size={20} />, href: '#projects', label: 'Work' },
    { icon: <Wrench size={20} />, href: '#skills', label: 'Skills' },
    { icon: <Mail size={20} />, href: '#contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          >
            <div className="glass-effect border-t border-white/10 px-2 py-1">
              <div className="flex justify-around items-center">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex flex-col items-center p-2 text-gray-400 hover:text-white transition-colors active:text-purple-400"
                  >
                    {item.icon}
                    <span className="text-[10px] mt-1">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg md:bottom-8"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileBottomNav;