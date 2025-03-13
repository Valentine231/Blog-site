import React from "react";
import { Link } from "react-router-dom";
import { FiClock } from 'react-icons/fi';

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
       
        <div className='container mx-auto px-4'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold'>
                        Welcome to 
                        <span className='text-teal-600 inline-flex items-center ml-2'>
                            TIMEBL<FiClock className='text-black' />G
                        </span>
                    </h1>
                    <p className='text-lg text-gray-600 mt-4'>
                        "Breaking News, Sports Thrills, Business Insights, and the Best in Music & Movies – All in One Place!"
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                    <img src='https://img.freepik.com/premium-photo/cartoon-film-camera-white-background-3d-rendering_778569-6967.jpg' className='w-full rounded-lg shadow-lg' alt='Movies' />
                    <img src='https://img.freepik.com/free-vector/box-full-sport-equipments_1308-37207.jpg' className='w-object-cover rounded-lg shadow-lg' alt='Sports' />
                    <img src='https://img.freepik.com/free-vector/headphone-white-background_1308-21636.jpg' className='w-full rounded-lg shadow-lg' alt='Music' />
                </div>
                <div className='text-center mt-10'>
                <Link to="/login" className="mt-6">
                    <button 
                        className='bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl'
                        
                    >
                        Explore Our Blog
                    </button>
                    </Link>
                </div>
            </div>
      </main>
    </div>
  );
};

export default LandingPage;