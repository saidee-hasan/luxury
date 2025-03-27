import React, { useState, useEffect } from 'react';

export default function Calgary() {
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
    <div className="grid grid-cols-1 md:grid-cols-2  ">
      <div className="bg-blue-800 flex items-center justify-center md:pl-16 space-y-6">
        <div className="w-full max-w-[600px] space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl text-white font-bold">
            Calgary <br /> Luxury <br /> Windows and <br /> Exterior
          </h1>
          <p className="text-white text-base md:text-lg">
            Calgary Luxury Windows and Exterior
            At Calgary Luxury Windows and Exterior, we are passionate about transforming homes with our top-notch renovation services. Our team is dedicated to delivering exceptional craftsmanship and ensuring customer satisfaction every step of the way.
          </p>

          <div className="hidden lg:block">
            <a className="btn border-4 border-gray-300 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-100">
              Call Now 403-835-9350
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="group block overflow-hidden">
          <img
            src="https://static.wixstatic.com/media/9ab881a357ec4dc3ac4264a8ab8c6ea2.jpg/v1/fill/w_953,h_911,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ab881a357ec4dc3ac4264a8ab8c6ea2.jpg"
            alt="image"
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover transition duration-500 group-hover:scale-105"
            style={{
              transform: `scale(${scale})`,
              transition: 'transform 0.2s ease',
            }}
          />
        </div>
      </div>
    </div>
  );
}
