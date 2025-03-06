import React from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className="bg-teal-600 w-full py-4 px-6">
      <nav className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-16">
        
        {/* Logo / Home Link */}
        <ul className="flex items-center">
          <li>
            <NavLink to="/" className="text-white text-lg font-semibold">
              Home
            </NavLink>
          </li>
        </ul>

        {/* Searchbar */}
        <div className="w-full md:w-auto">
          <Searchbar />
        </div>

      </nav>
    </div>
  );
};
  


export default Navbar;


