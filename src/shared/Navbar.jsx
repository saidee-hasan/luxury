import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import BBB from"../assets/Better Business Bureau.png"

export default function Navbar() {
  const location = useLocation();
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
    <div className="bg-base-100 fixed w-full z-50">
      <div className="navbar container mx-auto shadow-sm">
        {/* Mobile Menu and Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {items.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `w-full px-4 py-2 rounded-md cursor-pointer ${
                        isActive
                          ? "bg-blue-800 text-white"
                          : "hover:bg-blue-100 "
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <NavLink to="/" className=" cursor-pointer">
  <div className="inline-flex items-center">
    <img src={Logo} alt="Logo" className="h-12 w-auto inline-block" />

  </div>
</NavLink>
        </div>
{/* Desktop Menu */}
<div className="navbar-center hidden lg:flex">
  <ul className="menu-horizontal space-x-2">
    {items.map((item, index) => {
      const isActive = location.pathname === item.to;
      return (
        <li key={index}>
          <div className="flex gap-2 my-4 w-20 xs:gap-4">
            <NavLink to={item.to} className="w-full cursor-pointer">
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
                    <svg viewBox="0 0 24 24" data-icon="fe:play" height="20" width="20" className="translate-y-px">
                      <symbol id="ai:fe:play">
                        <path
                          d="M6 5.912c0-.155.037-.307.107-.443c.23-.44.75-.599 1.163-.354l10.29 6.088c.14.083.255.206.332.355c.23.44.08.995-.332 1.239L7.27 18.885a.814.814 0 0 1-.415.115C6.383 19 6 18.592 6 18.089z"
                          fill="currentColor"
                        ></path>
                      </symbol>
                      <use xlinkHref="#ai:fe:play"></use>
                    </svg>
                    <span className="text-base py-0.5">{item.name}</span>
                  </div>
                </div>
              </button>
            </NavLink>
          </div>
        </li>
      );
    })}
  </ul>
</div>

        {/* CTA Button */}
        <div className="navbar-end">
        <a 
  href="https://www.bbb.org/ca/ab/calgary/profile/window-door-installation/calgary-luxury-windows-exteriors-ltd-0017-138973" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img src={BBB} alt="Better Business Bureau rating" />
</a>
          <a className="btn border-2 border-blue-300 rounded-full px-6 py-1 text-gray-700 hover:bg-blue-700 hover:text-white hover:opacity-55 hidden lg:inline-flex cursor-pointer">
            Call Now 403-835-9350
          </a>
        </div>
      </div>
    </div>
  );
}