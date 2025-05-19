import React from "react";
import { motion } from "framer-motion";
import featuredImg from "../assets/us.png";
import Icon from "../assets/Icon/icon.png"

function Featured() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const warrantyItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-[650px] container mx-auto">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${featuredImg})`,
          }}
        ></div>

        {/* Black Overlay with Opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative w-full h-full flex justify-center items-center px-4 sm:px-8">
          <motion.div
            className="text-white text-center md:text-left px-6 py-10 max-w-screen-xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <br />
            <div className="md:flex justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              {/* Text Section */}
              <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-center font-semibold text-white"
                  variants={titleVariants}
                >
                  Why Choose Us
                </motion.h1>
                <motion.p
                  className="mt-4 text-lg text-center text-white"
                  variants={itemVariants}
                >
                  At Calgary Luxury Windows & Exteriors, we deliver exceptional
                  quality and service that exceeds expectations. Our expertise
                  makes your home elegant with the latest technologies,
                  guaranteeing durability and style. Choose us for unparalleled
                  craftsmanship that enhances your living space.
                </motion.p>
                <div className="flex justify-center items-center mx-auto">
                  <motion.button
                    className="mt-6  w-56"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <a className=" border-2 rounded-full px-6 py-2  transition-colors duration-300 relative overflow-hidden">
                      <span className="relative z-10">Learn More</span>
                      <motion.span
                        className="absolute inset-0  origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </a>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Warranty Grid Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* 20 year Workmanship Warranty */}
        <motion.div
  className="bg-black text-white text-2xl sm:text-4xl py-8 px-4 shadow-lg h-[300px] flex flex-col items-center justify-center"
  variants={warrantyItemVariants}
>
  {/* Icon with animation */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="mb-6"
  >
    <img 
      src={Icon} 
      alt="Warranty Icon" 
      className="w-8 object-contain"
    />
  </motion.div>
  
  {/* Text with animation */}
  <motion.h4
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="text-center"
  >
    20 year <br /> Workmanship <br /> Warranty
  </motion.h4>
</motion.div>
        {/* 20 year Workmanship Warranty */}
        <motion.div
  className="bg-blue-800 text-white text-2xl sm:text-4xl py-8 px-4 shadow-lg h-[300px] flex flex-col items-center justify-center"
  variants={warrantyItemVariants}
>
  {/* Icon with animation */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="mb-6"
  >
    <img 
      src={Icon} 
      alt="Warranty Icon" 
      className="w-8 object-contain"
    />
  </motion.div>
  
  {/* Text with animation */}
  <motion.h4
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="text-center"
  >
      10-30 year <br /> Manufacture Warranty
  </motion.h4>
</motion.div>
        {/* 20 year Workmanship Warranty */}
        <motion.div
  className="bg-white text-black text-2xl sm:text-4xl py-8 px-4 shadow-lg h-[300px] flex flex-col items-center justify-center"
  variants={warrantyItemVariants}
>
  {/* Icon with animation */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="mb-6"
  >
    <img 
      src={Icon} 
      alt="Warranty Icon" 
      className="w-8 object-contain"
    />
  </motion.div>
  
  {/* Text with animation */}
  <motion.h4
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="text-center"
  >
   Customer Satisfaction <br /> Guarantee
  </motion.h4>
</motion.div>

      

       
      </motion.div>
    </div>
  );
}

export default Featured;