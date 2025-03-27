import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import ReviedBg from '../assets/testimonal.png';

const reviewsData = [
  {
    text: "Excellent service and top-notch quality!",
    name: "John Doe",
  },
  {
    text: "Highly recommend! A fantastic experience from start to finish.",
    name: "Jane Smith",
  },
  {
    text: "Amazing product, amazing support. Will definitely buy again!",
    name: "Samuel Lee",
  },
  {
    text: "Absolutely love the service! Everything was smooth and professional.",
    name: "Emily Clark",
  },
];

export default function Reviews() {
  return (
    <div
      className="relative w-full h-[50vh] sm:h-[400px] lg:h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${ReviedBg})`,
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full max-w-screen-xl px-4 sm:px-8 text-black">
          <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
          
          {/* Carousel Component */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev) => (
              hasPrev && (
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black  p-4 rounded-full shadow-md z-10 cursor-pointer text-3xl"
                  onClick={clickHandler}
                >
                  &lt;
                </button>
              )
            )}
            renderArrowNext={(clickHandler, hasNext) => (
              hasNext && (
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black  p-4 rounded-full shadow-md z-10 cursor-pointer text-3xl"
                  onClick={clickHandler}
                >
                  &gt;
                </button>
              )
            )}
          >
            {reviewsData.map((review, index) => (
              <div key={index}>
                <p className="text-xl">{`"${review.text}"`}</p>
                <p className="mt-2">{review.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
