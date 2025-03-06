import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo / Branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-white">Newtime blog</h2>
          <p className="text-sm text-gray-400">Stay updated with the latest trends.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
          <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaFacebookF size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} newtimeblog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
