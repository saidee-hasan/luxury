import React from 'react';
import RoofingImg from "../assets/Roofing/Roofing.png";
import Roofing1 from "../assets/Roofing/Roofing (1).png";
import Roofing2 from "../assets/Roofing/Roofing (2).png";
import Roofing3 from "../assets/Roofing/Roofing (3).png";
import Roofing4 from "../assets/Roofing/Roofing (4).png";
import Roofing5 from "../assets/Roofing/Roofing (5).png";
import Roofing6 from "../assets/Roofing/Roofing (6).png";

function Roofing() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat py-12"
      style={{ backgroundImage: `url(${RoofingImg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Roofing Image 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={Roofing1}
              alt="Roofing design 1"
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Roofing Image 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={Roofing2}
              alt="Roofing design 2"
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Roofing Image 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={Roofing3}
              alt="Roofing design 3"
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Roofing Image 4 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={Roofing4}
              alt="Roofing design 4"
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Roofing Image 5 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={Roofing5}
              alt="Roofing design 5"
              className="w-full h-64 object-cover"
            />
          </div>
          
          {/* Roofing Image 6 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={Roofing6}
              alt="Roofing design 6"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto justify-center items-center mt-20 text-center">
    <button className="bg-white text-gray-800  font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                View Full Gallery
              </button></div>
    </div>
  );
}

export default Roofing;