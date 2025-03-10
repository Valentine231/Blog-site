import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Header */}
      <header className="w-full p-4 bg-teal-400 shadow-md flex justify-between items-center text-white">
        <div className="text-2xl font-bold">TimeBl⏲g</div>
        <Link to="/login" className="hover:underline">Sign In</Link>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-teal-400 mb-4">Welcome to Our Platform</h1>
        <p className="text-gray-700 max-w-md px-4">
          Discover amazing features and enhance your experience with us.
        </p>
        <Link to="/login" className="mt-6">
          <button 
            className="px-6 py-2 bg-teal-400 text-white rounded-lg shadow-md hover:bg-teal-500 transition">
            Get Started
          </button>
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;