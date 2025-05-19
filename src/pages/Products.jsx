import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "../components/ProductsCard";

// Sample data for random banners
const banners = [
  {
    _id: "1",
    image_url: "https://static.wixstatic.com/media/9ab881a357ec4dc3ac4264a8ab8c6ea2.jpg/v1/fill/w_1905,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ab881a357ec4dc3ac4264a8ab8c6ea2.jpg",
    title: "Explore the Beauty of Nature",
    description: "Discover breathtaking landscapes and stunning vistas."
  },
  {
    _id: "2",
    image_url: "https://static.wixstatic.com/media/11062b_5fcc14df163d4af68d395f4dcddf0aab~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_1905,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_5fcc14df163d4af68d395f4dcddf0aab~mv2_d_3872_2592_s_4_2.jpg",
    title: "Innovative Architectural Designs",
    description: "Experience the fusion of creativity and engineering."
  },
  {
    _id: "3",
    image_url: "https://source.unsplash.com/random/1200x600?technology",
    title: "Future of Technology",
    description: "Advancements shaping the digital age."
  },
  {
    _id: "4",
    image_url: "https://source.unsplash.com/random/1200x600?cars",
    title: "Luxury and Performance",
    description: "High-speed machines engineered for perfection."
  }
];

function Products() {
  return (
    <div className="relative">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={6000} // Change slide every 6s
        transitionTime={800} // Smooth transition
      >
        {banners.map((banner, index) => (
          <div key={banner._id} className="relative">
            {/* Background Image */}
            <img
              src={banner.image_url}
              alt={`Banner ${index + 1}`}
              className="w-full md:h-[600px] h-72 object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            
            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 sm:px-10 md:px-16 lg:px-20">
              {/* Title Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3
                }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
              >
                {banner.title}
              </motion.h1>

              {/* Description Animation */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.5
                }}
                className="mt-4 text-lg sm:text-xl md:text-2xl"
              >
                {banner.description}
              </motion.p>
            </div>
          </div>
        ))}
      </Carousel>
      <ProductCard/>
      
    </div>
  );
}

export default Products;
