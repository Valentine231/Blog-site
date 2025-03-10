import React, { useState } from 'react';
import Navbar from './Navbar';
import { FiClock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { FaFilm, FaMusic, FaGamepad, FaUserAlt, FaAward, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaFacebook } from 'react-icons/fa';

const About = () => {
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === "" || !email.includes("@")) {
            alert("Please enter a valid email address!");
            return;
        }
        setSubmit(true);
        setEmail("");
    };

    return (
        <div className='flex flex-col space-y-10'>
            <Navbar />
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
                    <img src='https://img.freepik.com/free-vector/box-full-sport-equipments_1308-37207.jpg' className='w-full rounded-lg shadow-lg' alt='Sports' />
                    <img src='https://img.freepik.com/free-vector/headphone-white-background_1308-21636.jpg' className='w-full rounded-lg shadow-lg' alt='Music' />
                </div>
                <div className='text-center mt-10'>
                    <button 
                        className='bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl'
                        onClick={() => navigate("/")}
                    >
                        Explore Our Blog
                    </button>
                </div>
            </div>

            {/* Categories Section */}
            <div className='bg-teal-600 py-10 px-6 text-white'>
                <div className='container mx-auto'>
                    <h2 className='text-3xl font-bold'>🎶 Categories We Cover</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                        <div className='flex items-center gap-3'><FaFilm className='text-red-500' /> Movies & TV Shows</div>
                        <div className='flex items-center gap-3'><FaMusic className='text-blue-500' /> Music & Pop Culture</div>
                        <div className='flex items-center gap-3'><FaGamepad className='text-yellow-500' /> Gaming & Esports</div>
                        <div className='flex items-center gap-3'><FaUserAlt className='text-amber-300' /> Celebrity Gossip</div>
                        <div className='flex items-center gap-3'><FaAward className='text-yellow-400' /> Festivals & Awards</div>
                    </div>
                </div>
            </div>

            {/* Newsletter Subscription */}
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-gray-700 text-center'>📩 Subscribe to Our Newsletter</h2>
                <p className='text-gray-600 text-center mt-2'>Stay updated with the latest entertainment news, exclusive content, and trending stories!</p>
                {submit ? (
                    <p className='text-green-600 text-center font-medium mt-4'>✅ Thank you for subscribing! Check your email for updates.</p>
                ) : (
                    <form onSubmit={handleSubmit} className='mt-4 flex flex-col md:flex-row items-center gap-3'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full md:w-1/2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            required
                        />
                        <button
                            type='submit'
                            className='bg-teal-600 text-white px-6 py-2 rounded-md hover:shadow-lg'
                        >
                            🔘 Subscribe
                        </button>
                    </form>
                )}
            </div>

            {/* Social Media Links */}
            <div className='flex justify-center space-x-5 mt-10'>
                <a href='https://instagram.com'><FaInstagram className='text-3xl text-pink-500 hover:text-pink-600' /></a>
                <a href='https://twitter.com'><FaTwitter className='text-3xl text-blue-400 hover:text-blue-500' /></a>
                <a href='https://youtube.com'><FaYoutube className='text-3xl text-red-600 hover:text-red-700' /></a>
                <a href='https://tiktok.com'><FaTiktok className='text-3xl text-black hover:text-gray-800' /></a>
                <a href='https://facebook.com'><FaFacebook className='text-3xl text-blue-600 hover:text-blue-700' /></a>
            </div>

            <p className='text-center text-gray-400 text-sm mt-6'>@Alvin Kelly✌️✌️</p>
        </div>
    );
};

export default About;
