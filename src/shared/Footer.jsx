import React from 'react';
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-black text-white p-10 flex flex-wrap justify-between items-center">
        
        {/* Services Section */}
        <nav className='text-center mx-auto mb-6 sm:mb-0'>
          <h6 className="footer-title text-xl font-semibold mb-4">Services</h6>
          <a className="link link-hover text-lg mb-2 block">Branding</a>
          <a className="link link-hover text-lg mb-2 block">Design</a>
          <a className="link link-hover text-lg mb-2 block">Marketing</a>
          <a className="link link-hover text-lg mb-2 block">Advertisement</a>
        </nav>

        {/* Logo and Copyright Section */}
        <nav className='text-center mx-auto mb-6 sm:mb-0'>
          <img
            className="mx-auto mb-4"
            src="https://static.wixstatic.com/media/a4ed88_0960f579302e471da9bd3b4e54596fe9~mv2.png/v1/fill/w_303,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Calgary%20Luxurious%20Exteriors%20-%20logo%2C%20white%20and%20blue.png"
            alt="Logo"
            width="200"
          />
          <p className="text-lg">&copy; 2035 All Rights Reserved by</p>
          <p className="text-sm font-semibold">Calgary Luxury Windows & Exterior</p>
          <p className="text-sm">Designed by Nova Knights of Zenith</p>
        </nav>

        {/* Working Hours Section */}
        <nav className='text-center mx-auto'>
          <h6 className="footer-title text-xl font-semibold mb-4">Working Hours</h6>
          <div>
            <a className="link link-hover text-lg block mb-2">Mon - Fri: 8am - 8pm</a>
            <a className="link link-hover text-lg block mb-2">Saturday: 9am - 7pm</a>
            <a className="link link-hover text-lg block mb-2">Sunday: 9am - 8pm</a>
          </div>
        </nav>

      </footer>
    </div>
  );
}

export default Footer;
