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
    <div className="bg-blue-700  py-2 shadow-lg">
      <div className="container mx-auto flex justify-center px-4">
        <ul className="flex flex-wrap gap-2 justify-center items-center">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-lg transition-all duration-300 font-medium 
                  ${
                    isActive
                      ? "bg-blue-600 text-white hover:bg-blue-500 hover:scale-105"
                      : "bg-white text-blue-900 shadow-lg scale-105"
                  }
                  flex items-center space-x-1 whitespace-nowrap`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}