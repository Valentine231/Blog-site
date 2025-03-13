import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside the sidebar
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-teal-600 w-full py-4 px-6 relative">
      <nav className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-teal-700 shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeMenu}
          >
            <FiX />
          </button>
          <ul className="flex flex-col items-start mt-16 space-y-4 px-6">
            <li>
              <NavLink
                to="/home"
                className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Background overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:space-x-6">
          <li>
            <NavLink
              to="/home"
              className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
