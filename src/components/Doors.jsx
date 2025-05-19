import React from 'react';
import DoorBa from "../assets/Doors/doors.png";
import Door1 from "../assets/Doors/doors (1).png";
import Door2 from "../assets/Doors/doors (2).png";
import Door3 from "../assets/Doors/doors (3).png";
import Door4 from "../assets/Doors/doors (4).png";

export default function Doors() {
  return (
    <div 
        className="min-h-screen w-full  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${DoorBa})` }}
  
      >
      <div className="grid grid-cols-3 gap-4 w-full max-w-4xl mx-auto px-2 py-20">
                
        {/* Middle column - two stacked images */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="h-[290px]"> {/* Fixed 400px height */}
            <img
              src={Door2}
              alt="Classic door design"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[290px]"> {/* Fixed 400px height */}
            <img
              src={Door3}
              alt="Contemporary door design"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Left column - single tall image */}
        <div className="col-span-1 h-600px]"> {/* Double height for main image */}
          <img
            src={Door1}
            alt="Modern door design"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        
        {/* Right column - single tall image */}
        <div className="col-span-1 h-[600px]"> {/* Double height for main image */}
          <img
            src={Door4}
            alt="Luxury door design"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

   <div className="mx-auto justify-center items-center text-center">
    <button className="bg-white text-gray-800  font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                View Full Gallery
              </button></div>
    </div>
  );
}