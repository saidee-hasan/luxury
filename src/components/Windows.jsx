import React from 'react'
import BackgroundImage from "../assets/Windows/backgroun.png"
import Img1 from "../assets/Windows/windows(1).png";
import Img2 from "../assets/Windows/windows(2).png";
import Img3 from "../assets/Windows/windows(3).png";
import Img4 from "../assets/Windows/windows(4).png";
import Img5 from "../assets/Windows/windows(5).png";
import Img6 from "../assets/Windows/windows(6).png";

function Windows() {
  return (
    <div 
      className="min-h-screen w-full  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}

    >
      <h1 className='text-center text-blue-800 text-5xl font-bold py-5'>Windows</h1>
        <div className="container mx-auto flex">
     <div className="grid grid-cols-5 gap-2  py-12 w-[700px]">
      <img
        src={Img1}
        alt=""
        className="  col-span-3 w-full h-58 object-cover"
      />

      <img
        src={Img2}
        alt=""
        className="w-full h-full object-cover col-span-1"
      />
      <img
        src={Img3}
        alt=""
        className="w-full h-full object-cover col-span-1"
      />
      <img
        src={Img4}
        alt=""
        className="w-full h-96 object-cover col-span-3"
      />
      <img
        src={Img5}
        alt=""
        className="w-full h-96 object-cover col-span-2"
      />
    </div>

    <div className=" gap-2  py-12">
      <img className='h-[630px]' src={Img6} alt="" />



    </div>
    
    
    
    
    </div>
    <div className="mx-auto justify-center items-center text-center">
    <button className="bg-white text-gray-800  font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                View Full Gallery
              </button></div>
    </div>
  )
}

export default Windows