import React from "react";
import featuredImg from "../assets/us.png";

function Featured() {
  return (
    <div className="">
    <div className="relative w-full h-[500px] container mx-auto">
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
        <div className="text-white text-center md:text-left px-6 py-10 max-w-screen-xl mx-auto">
          <br />
          <div className="md:flex justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Image Section */}
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
              <h1 className="text-6xl font-bold  text-center font-semibold text-white">Why Choose Us</h1>
              <p className="mt-4 text-lg text-center text-white">
                At Calgary Luxury Windows & Exteriors, we deliver exceptional quality and service that exceeds expectations. Our exp to make your home elegant  and latest technologies, we guarantee durability and style. Choose us for unparalleled craftsmanship that enhances your living space.
              </p>
              <div className="flex justify-center items-center mx-auto">
  <button className="mt-6 px-6 py-3 text-white rounded-lg transition-all transform hover:scale-105">
    <a className="btn border-4 border-gray-300 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-100">
     Learn More
    </a>
  </button>
</div>

            </div>
          </div>
        </div>
      </div>




    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3  text-center">
  {/* 20 year Workmanship Warranty */}
  <div className="bg-black text-white text-4xl py-8 px-4 shadow-lg h-[300px] flex items-center justify-center">
    <h4>20 year <br /> Workmanship <br /> Warranty</h4>
  </div>

  {/* 10-30 year Manufacture Warranty */}
  <div className="bg-blue-800 text-white text-4xl py-8 px-4 shadow-lg h-[300px] flex items-center justify-center">
    <h4>10-30 year <br /> Manufacture Warranty</h4>
  </div>

  {/* Customer Satisfaction Guarantee */}
  <div className="bg-white text-black text-4xl py-8 px-4 shadow-lg h-[300px] flex items-center justify-center">
    <h4>Customer Satisfaction <br /> Guarantee</h4>
  </div>
</div>

    </div>
  );
}

export default Featured;
