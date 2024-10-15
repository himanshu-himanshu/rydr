import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { title: "Home", active: true },
    { title: "Drivers", active: false },
    { title: "Riders", active: false },
    { title: "About", active: false },
    { title: "Contact", active: false },
  ];
  return (
    <nav className="px-12 py-2 shadow-sm">
      <div className="flex flex-row justify-between items-center px-4">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
        <div className="hidden lg:flex flex-row text-gray-600 text-sm font-bold space-x-12 uppercase font-Montserrat">
          {navLinks.map((link) => (
            <a
              href="#"
              className={`font-normal duration-200 ${
                link.active ? "bg-[#47BDDE]/20" : ""
              } text-gray-700 hover:bg-[#47BDDE]/20 hover:text-gray-900 rounded-lg p-2`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
