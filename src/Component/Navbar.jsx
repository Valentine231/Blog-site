import React from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className="bg-teal-600 w-full h-20 py-2 px-4 flex items-center justify-between">
      <nav>
        <ul className="flex space-x-6 text-white">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className={({ isActive }) => isActive ? "font-bold" : ""}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Searchbar />
    </div>
  );
};

export default Navbar;
