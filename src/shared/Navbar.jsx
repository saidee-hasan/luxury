import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import Logo from "../assets/logo.png";

export default function Navbar() {
  const items = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/products" },
    { name: "Tips", to: "/tips" },
    { name: "Gallery", to: "/gallery" },
    { name: "FAQs", to: "/faqs" },
    { name: "Reviews", to: "/reviews" },
    { name: "Contact", to: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-base-100 fixed w-full z-50">
      <div className="navbar shadow-sm container mx-auto flex justify-between items-center px-4 py-3">
        {/* Left Section - Logo & Mobile Menu */}
        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <div className="flex items-center ml-2">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
            <a className="text-sm text-blue-900 font-bold ml-2">daisyUI</a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2">
            {items.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to} // Use NavLink for navigation
                  className={({ isActive }) =>
                    `py-3 rounded-md shadow-md transition cursor-pointer 
                    ${isActive ? "bg-blue-800 text-white" : "bg-white hover:bg-blue-800 hover:text-white"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - CTA Button */}
        <div className="hidden lg:block">
          <a className="btn border-4 border-gray-300 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-100">
            Call Now 403-835-9350
          </a>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-100 p-4 rounded-lg shadow-md">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to} // Use NavLink for navigation
                  className={({ isActive }) =>
                    `w-full px-4 py-2 rounded-md shadow-md transition ${
                      isActive ? "bg-blue-600 text-white" : "bg-white hover:bg-blue-800 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
