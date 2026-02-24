'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Users, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "50+", icon: <Target /> },
    { label: "Happy Clients", value: "30+", icon: <Users /> },
    { label: "Years Experience", value: "3+", icon: <Clock /> },
    { label: "Awards Won", value: "12", icon: <Award /> },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                {/* Replace with your photo */}
                <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <span className="text-6xl">👨‍🎨</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-4 text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6">
              Hello! I’m a passionate Web Developer & UI/UX Designer with over 3 years 
              of experience crafting modern, user-centered digital experiences. 
              I specialize in designing intuitive interfaces and developing responsive, 
              high-performance websites using Figma, HTML, CSS, WordPress, and Webflow. 
              My approach combines creative problem-solving with clean, scalable development
               to deliver solutions that align with both user needs and business goals.
            </p>
            
            <p className="text-gray-300 text-lg mb-8">
              My design philosophy centers around empathy and understanding user needs. 
              I believe great design happens at the intersection of aesthetics and 
              functionality.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                  <span className="text-green-400">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">User-Centered Approach</h4>
                  <p className="text-gray-300">Every decision starts with the user</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                  <span className="text-blue-400">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Pixel-Perfect Designs</h4>
                  <p className="text-gray-300">Attention to detail in every element</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                  <span className="text-purple-400">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Collaborative Mindset</h4>
                  <p className="text-gray-300">Work seamlessly with developers & stakeholders</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;