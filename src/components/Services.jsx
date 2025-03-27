import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Roofing",
    image:
      "https://static.wixstatic.com/media/9ab881a357ec4dc3ac4264a8ab8c6ea2.jpg/v1/fill/w_864,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ab881a357ec4dc3ac4264a8ab8c6ea2.jpg",
    buttonText: "View our roofing expertise",
  },
  {
    title: "Siding",
    image:
      "https://static.wixstatic.com/media/a4ed88_fb431f1ca25f48e89a50a576897582ba~mv2.jpg/v1/fill/w_866,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4ed88_fb431f1ca25f48e89a50a576897582ba~mv2.jpg",
    buttonText: "See our exterior finishes",
  },
  {
    title: "Siding",
    image:
      "https://static.wixstatic.com/media/3a5c0214d9384d24a6b55685b65eb68e.jpg/v1/fill/w_864,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3a5c0214d9384d24a6b55685b65eb68e.jpg",
    buttonText: "See our exterior finishes",
  },
  {
    title: "Siding",
    image:
      "https://static.wixstatic.com/media/3a5c0214d9384d24a6b55685b65eb68e.jpg/v1/fill/w_864,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3a5c0214d9384d24a6b55685b65eb68e.jpg",
    buttonText: "See our exterior finishes",
  },
];

export default function Services() {
  return (
    <div className="relative w-full h-full">
       
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://video.wixstatic.com/video/11062b_7e61ffd6dbb040ee8b0e4dc604e8fd4e/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>
    
      <h1 className="text-center text-4xl z-40 relative mt-5 font-bold">
      Our Renovation Services</h1>
      {/* Content Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-20 z-10">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Image Animation */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[300px] object-cover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />

            {/* Text Container */}
            <div className="p-6 text-center relative">
              {/* Title Animation (Moving Upwards) */}
              <motion.h2
                className="text-2xl font-semibold"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -20, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {service.title}
              </motion.h2>

              {/* Button Animation */}
              <motion.button
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {service.buttonText}
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
