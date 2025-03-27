import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion"; 
import Banner from "../assets/Banner/banner.png";
import Banner1 from "../assets/Banner/banner1.png";
import Banner2 from "../assets/Banner/banner2.png";
import Banner3 from "../assets/Banner/banner3.png";
import Banner4 from "../assets/Banner/banner4.png";

function BannerComponent() {
  // Using imported images for banners
  const fakeBanners = [
    {
      _id: "1",
      image_url: Banner,
      title: "Amazing Landscape View"
    },
    {
      _id: "2",
      image_url: Banner1,
      title: "Beautiful Nature Background"
    },
    {
      _id: "3",
      image_url: Banner2,
      title: "Urban City Lights"
    },
    {
      _id: "4",
      image_url: Banner3,
      title: "Stunning Mountain View"
    },
    {
      _id: "5",
      image_url: Banner4,
      title: "Tropical Beach Vibes"
    },
  ];

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // Set the fake banner data (with imported images)
    setBanners(fakeBanners);

    // If you were fetching data from an API:
    // axios
    //   .get("https://madrasha-server-steel.vercel.app/banner")
    //   .then((response) => {
    //     setBanners(response.data.data);
    //   })
    //   .catch((error) => {
    //     console.error("There was an error fetching the banners:", error);
    //   });
  }, []);

  return (
    <div className="relative">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={10000}
        transitionTime={600}
      >
        {banners.map((banner, index) => (
          <div key={banner._id} className="relative">
            <img
              src={banner.image_url}
              alt={`Banner ${index + 1}`}
              className="w-full md:h-[600px] h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-start text-white px-4 sm:px-6 md:px-8 lg:px-10">
              {/* Centered Animated Title */}
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2
                }}
                className="absolute top-[40%] -translate-y-1/2 text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl ml-40"
              >
                {banner.title || "Title Placeholder"}
              </motion.h1>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default BannerComponent;
