import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import featuredImg from "../assets/FullGallery/FullGallery.png";
import Img1 from "../assets/FullGallery/banner1.png";
import Img2 from "../assets/FullGallery/banner2.png";
import Img3 from "../assets/FullGallery/banner3.png";
import Img4 from "../assets/FullGallery/banner4.png";

function FullGallery() {
  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${featuredImg})` }}
      ></div>

      {/* Black Overlay with Opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Centered Content */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
        {/* Centered Carousel */}
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={5000}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <div>
                <img 
                  src={Img1} 
                  alt="Gallery Image 1" 
                  className="w-full h-[400px] object-cover" 
                />
              </div>
              <div>
                <img 
                  src={Img2} 
                  alt="Gallery Image 2" 
                  className="w-full h-[400px] object-cover" 
                />
              </div>
              <div>
                <img 
                  src={Img3} 
                  alt="Gallery Image 3" 
                  className="w-full h-[400px] object-cover" 
                />
              </div>
              <div>
                <img 
                  src={Img4} 
                  alt="Gallery Image 4" 
                  className="w-full h-[400px] object-cover" 
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullGallery;