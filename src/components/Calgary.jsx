import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Calgary() {
  const [scrollY, setScrollY] = useState(0);
  const [smoothScrollY, setSmoothScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Listen to the scroll event to get the scrollY value
  useEffect(() => {
    let animationFrameId;
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance
      animationFrameId = window.requestAnimationFrame(() => {
        setSmoothScrollY((prev) => prev + (window.scrollY - prev) * 0.1);
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Zoom and Parallax settings with limits
  const zoomFactor = Math.min(1 + scrollY * 0.001, 1.2); // Limit max zoom to 1.2x
  const parallaxEffect = smoothScrollY * 0.2;

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.6 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.8 }
    },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[600px] overflow-hidden">
      {/* Left Section */}
      <div 
        className="bg-blue-800 flex  justify-center md:justify-start md:pl-16 p-4"

      
      >
        <div className="max-w-md space-y-6 text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl text-white font-bold"
            variants={titleVariants}
          >
            Calgary <br /> Luxury <br /> Windows and <br /> Exterior
          </motion.h1>
          
          <motion.p 
            className="text-white text-base md:text-lg"
            variants={textVariants}
          >
            At Calgary Luxury Windows and Exterior, we are passionate about transforming homes with our top-notch renovation services. Our team is dedicated to delivering exceptional craftsmanship and ensuring customer satisfaction every step of the way.
          </motion.p>

          <motion.div 
            className="hidden lg:block"
            variants={buttonVariants}
          >
            <motion.a 
              href="/about"
              className="relative inline-block border-2 w-48 border-gray-300 rounded-full px-6 py-2 text-white font-medium"
              whileHover="hover"
              whileTap="tap"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className={`relative z-10 pl-8 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-white'}`}>
                About Us
              </span>
              {/* Animated background */}
              <span 
                className={`absolute inset-0 bg-blue-400 rounded-full transform origin-left transition-all duration-500 ease-in-out ${
                  isHovered ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Right Section with Parallax and Zoom Effects */}
      <div className="relative">
        <div className="group block overflow-hidden h-full">
          <motion.img
            src="https://static.wixstatic.com/media/9ab881a357ec4dc3ac4264a8ab8c6ea2.jpg/v1/fill/w_953,h_911,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ab881a357ec4dc3ac4264a8ab8c6ea2.jpg"
            alt="Luxury windows and exterior"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${parallaxEffect}px) scale(${zoomFactor})`,
              transformOrigin: 'center center',
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}