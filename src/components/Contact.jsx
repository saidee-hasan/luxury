import React from 'react';
import ContactImg from "../assets/contact.png";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out with correct information for a prompt response
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Content Grid - 50/50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Image */}
          <div className="hidden lg:block h-full">
            <img 
              src={ContactImg} 
              alt="Contact illustration" 
              className="w-full h-full max-h-[600px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6">We'll respond within 24 hours</p>

            <form className="space-y-5">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Service <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="windows">Windows</option>
                    <option value="doors">Doors</option>
                    <option value="roofing">Roofing</option>
                    <option value="siding">Siding</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              {/* Company Information Section */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Company Information</h2>
              
              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <div className="flex">
                    <select 
                      className="px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <input 
                      type="tel" 
                      className="flex-1 px-4 py-3 border-t border-r border-b border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  File upload (if applicable)
                </label>
                <div className="flex items-center gap-3">
                  <label className="px-4 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg cursor-pointer transition">
                    <span>Choose File</span>
                    <input type="file" className="hidden" />
                  </label>
                  <span className="text-sm text-gray-500">No file chosen</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-md"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>



      <div className="
      ">
        <h1 className='text-7xl  font-bold text-center'> <span className='text-blue-800'>Areas</span> We Service</h1>

<br />
        <div className="text-center">
            <p>Calgary
Airdrie

Chestermere
<br />
De Winton
Bearspaw
+ Surrounding Areas</p>


        </div>




      </div>
    </div>
  );
}

export default Contact;