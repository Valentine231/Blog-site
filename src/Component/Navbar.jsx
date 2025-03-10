import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import Searchbar from './Searchbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-teal-600 w-full py-4 px-6">
      <nav className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <ul className={`flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:relative bg-teal-600 md:bg-transparent w-full md:w-auto top-16 left-0 px-6 md:px-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
          <li>
            <NavLink to="/home" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
          </li>
        </ul>

        {/* Search Button for Mobile */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <FiSearch />
        </button>

        {/* Searchbar (Visible on mobile when toggled) */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 w-full px-6 bg-teal-600 md:hidden">
            <Searchbar />
          </div>
        )}

        {/* Searchbar (Visible on larger screens) */}
        <div className="hidden md:block">
          <Searchbar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
