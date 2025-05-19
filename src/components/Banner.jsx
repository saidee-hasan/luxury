import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Banner from "../assets/Banner/banner.png";
import Banner1 from "../assets/Banner/banner1.png";
import Banner2 from "../assets/Banner/banner2.png";
import Banner3 from "../assets/Banner/banner3.png";
import Banner4 from "../assets/Banner/banner4.png";

function BannerComponent() {
  const fakeBanners = [
    {
      _id: "1",
      image_url: Banner,
      title: "Amazing Landscape View",
      description: "Discover breathtaking views that will inspire your next adventure",
      buttonText: "Learn More"
    },
    {
      _id: "2",
      image_url: Banner1,
      title: "Beautiful Nature Background",
      description: "Immerse yourself in the serenity of untouched nature",
      buttonText: "Learn More"
    },
    {
      _id: "3",
      image_url: Banner2,
      title: "Urban City Lights",
      description: "Experience the vibrant energy of city life after dark",
      buttonText: "Learn More"
    },
    {
      _id: "4",
      image_url: Banner3,
      title: "Stunning Mountain View",
      description: "Find peace in the majestic beauty of mountain ranges",
      buttonText: "Learn More"
    },
    {
      _id: "5",
      image_url: Banner4,
      title: "Tropical Beach Vibes",
      description: "Relax and unwind on pristine sandy beaches",
      buttonText: "Learn More"
    },
  ];

  const [banners, setBanners] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setBanners(fakeBanners);
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        className="w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner._id}>
            <div className="relative">
              <img
                src={banner.image_url}
                alt={`Banner ${index + 1}`}
                className="w-full md:h-[750px] h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text Animation */}
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 sm:px-10 md:px-16 lg:px-24">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="md:max-w-3xl ml-4 md:ml-20"
                >
                  <motion.h1
                    key={activeIndex + "-title"}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                  >
                    {banner.title}
                  </motion.h1>

                  <motion.p
                    key={activeIndex + "-desc"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl md:text-2xl mb-10"
                  >
                    {banner.description}
                  </motion.p>

                  <motion.button
                    key={activeIndex + "-btn"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="border-2 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-lg"
                  >
                    {banner.buttonText}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div ref={prevRef} className="swiper-button-prev text-black absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
        <FaChevronLeft size={30} />
      </div>
      <div ref={nextRef} className="swiper-button-next text-black absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
        <FaChevronRight size={30} />
      </div>

      {/* Adding some custom styling for the navigation buttons */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: black; /* Ensure the icons are black */
          background: none; /* Remove any default background */
          border: none;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          display: none; /* Hide default text icons */
        }
      `}</style>
    </div>
  );
}

export default BannerComponent;
