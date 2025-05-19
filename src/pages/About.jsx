import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY < 0) {
        setScale((prevScale) => Math.min(prevScale + 0.1, 2)); // Zoom in
      } else {
        setScale((prevScale) => Math.max(prevScale - 0.1, 1)); // Zoom out
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        {/* About Us Section */}
        <section className="mb-16">
        <div className="text-center w-full">
  <motion.h1
    className="text-7xl font-bold mx-auto mb-6 inline-block"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{
      background: "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }}
  >
    ABOUT US
  </motion.h1>
</div>
          <motion.div
            className="space-y-4 text-gray-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p>
              At Colgate Luxury Windows and Exotics, we are dedicated to consulting our start-
           
              travel our work.
            </p>
            <p>
              Your team has two or more wireless users, one free generator &
              services and guiding capabilities from active hubs.
            </p>
          </motion.div>
        </section>

        {/* Contact Us CTA */}
        <section className="mb-16 text-center">
          <motion.button
            className="text-white px-8 py-3 rounded-full transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <a href='/contact' className="btn border-4 w-56 border-gray-300 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-100 hidden lg:inline-flex">
              Contact Us
            </a>
          </motion.button>
        </section>
      </div>

      {/* Renovation Process */}
      <section>
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Our Renovation Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="process-step p-6 text-center text-white bg-black h-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="step-number mb-4 text-2xl font-bold">STEP 1</div>
            <h3 className="text-xl font-semibold">Consultation</h3>
          </motion.div>

          <motion.div
            className="process-step p-6 text-center text-black bg-white h-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="step-number mb-4 text-2xl font-bold">STEP 2</div>
            <h3 className="text-xl font-semibold">Design & Planning</h3>
          </motion.div>

          <motion.div
            className="process-step p-6 text-center text-black bg-white h-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="step-number mb-4 text-2xl font-bold">STEP 3</div>
            <h3 className="text-xl font-semibold">Execution</h3>
          </motion.div>

          <motion.div
            className="process-step p-6 text-center text-white bg-blue-800 h-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <div className="step-number mb-4 text-2xl font-bold">STEP 4</div>
            <h3 className="text-xl font-semibold">Completion & Review</h3>
          </motion.div>
        </div>
      </section>

      {/* Image with Text Overlay */}
      <div className="group block overflow-hidden relative">
        <motion.img
          src="https://static.wixstatic.com/media/11062b_afa48ab6ade4434c882e28c65f76a373~mv2.jpg/v1/fill/w_1905,h_911,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_afa48ab6ade4434c882e28c65f76a373~mv2.jpg"
          alt="image"
          className="w-full h-[300px]  sm:h-[400px] md:h-[600px] object-cover opacity-35 transition duration-500 group-hover:scale-105"
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.2s ease',
          }}
          initial={{ opacity: 0 }} // Initial opacity set to 0 (hidden)
          animate={{ opacity: 1 }} // Animate opacity to 1 (fully visible)
          transition={{ delay: 1.8, duration: 1 }} // Delay the animation for smooth transition
        />
        <motion.div
          className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <div className="space-y-4 w-[700px]">
            <h1 className="text-5xl font-bold leading-tight text-black ">Our Satisfaction Guarantee</h1>
            <p className="text-xl text-gray-900">
              At Calgary Luxury Windows and Exterior, we prioritize delivering exceptional service to our clients. Our commitment to quality and satisfaction drives everything we do. We ensure that every project is executed to the highest standards, reflecting dedication to excellence. Your trust is invaluable to us, and we guarantee a seamless and satisfying experience throughout the entire process.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
