import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarBtn() {
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

  return (
    <div className="bg-blue-600 py-2 shadow-lg">
      <div className="container mx-auto flex justify-center px-4">
        <ul className="flex flex-wrap gap-2 justify-center items-center">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.to} 
                className={({ isActive }) => 
                  `flex gap-2 my-4 w-20 xs:gap-4 ${isActive ? "active-nav-item" : ""}`
                }
              >
                {({ isActive }) => (
                  <button
                    className={`w-full bg-gradient-to-b rounded-xl shadow-md shadow-black/70 
                    transition-all duration-100 active:translate-y-px cursor-pointer
                    ${
                      isActive
                        ? "from-[#01449d] to-[#01449d]"
                        : "from-sky-300 to-sky-600 hover:from-blue-800 hover:to-blue-900"
                    }`}
                  >
                    <div
                      className={`font-medium rounded-xl border-t h-12 group-active:border-t-black 
                      group-active:bg-yellow-500 group-active:shadow-inner pb-1 pt-0.5 px-4 relative
                      ${
                        isActive
                          ? "bg-[#01449d] bg-gradient-to-b from-[#01449d] to-[#01449d] text-white border-t-[#01449d]"
                          : "bg-gradient-to-b from-gray-100 to-gray-200 text-black border-t-sky-100 hover:bg-blue-800 hover:from-blue-800 hover:to-blue-900 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1 text-lg transition py-2">
                        <svg viewBox="0 0 24 24" height="20" width="20" className="translate-y-px">
                          <path
                            d="M6 5.912c0-.155.037-.307.107-.443c.23-.44.75-.599 1.163-.354l10.29 6.088c.14.083.255.206.332.355c.23.44.08.995-.332 1.239L7.27 18.885a.814.814 0 0 1-.415.115C6.383 19 6 18.592 6 18.089z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="text-base py-0.5">{item.name}</span>
                      </div>
                    </div>
                  </button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}