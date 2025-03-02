import React, {useState} from 'react'
import Navbar from './Navbar'
import { FiClock } from "react-icons/fi";
import { useNavigate} from 'react-router-dom';
import { FaFilm, FaMusic, FaGamepad, FaUserAlt, FaAward } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";


const About = () => {
    const [email, setEmail] = useState("")
    const [submit, setSubmit] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (email.trim() === "" || !email.includes("@")){
            alert("Please enter a vaild email address!")
            return;
        }
        setSubmit(true)
        setEmail("")
    }
    return (
    <div className='md:flex flex-col justify-between space-x-7 gap-30' >
        <Navbar />
        <div className=' md:flex flex-col mx-100 gap-10'>
            <div style={{ fontFamily: ' Roboto, sans-serif' }} className="flex items-center space-x-2 text-teal-600 text-1xl font-bold  bg-black w-fit p-3 rounded-tr-3xl rounded-bl-3xl">
                <span className='flex flex-row'>TIMEBL<FiClock className="text-white font-extrabold"/>G</span>
                
            </div>
            <div className='flex flex-col space-x-2 gap-10'>
                <h1 style={{ fontFamily: ' Montserrat, sans-serif' }} className="text-7xl">
                    Welcome to  
                    <span className='inline-flex flex-row text-teal-600 items-center ml-2 font-extrabold text-6xl'>
                        TIMEBL<FiClock className="text-black font-extrabold" /> 
                        <span className="mr-2">G</span> 
                    </span> <br />
                    Your Ultimate Source for Entertainment & News
                </h1>

                <p className='text-2xl text-gray-600'>"Breaking News, Sports Thrills, Business Insights, and the Best in Music & Movies <br /> All in One Place!"</p>

                <div className='flex flex-row justify-between items-center'>
                    <img src="https://img.freepik.com/premium-photo/cartoon-film-camera-white-background-3d-rendering_778569-6967.jpg?w=1380" alt="" className='bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl w-80'/>
                    <img src="https://img.freepik.com/free-vector/box-full-sport-equipments_1308-37207.jpg?t=st=1740575929~exp=1740579529~hmac=bcdc4ca21de26128707ca65a7467981b79da281298167264fa3eba3a391e4196&w=996" alt="" className='bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl w-80' />
                    <img src="https://img.freepik.com/free-vector/headphone-white-background_1308-21636.jpg?t=st=1740576496~exp=1740580096~hmac=26c4b8687a142ca4f7f434ee927c904cd989d2e8d2f2707c70c856145e5041fa&w=1060" alt="" className='bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl w-80' />
                </div>

                <button 
                  className='bg-teal-600 w-fit p-4 rounded-2xl text-1xl text-white font-extrabold transition hover:shadow-xl cursor-pointer'
                  onClick={()=>(navigate("/"))}
                >Explore Our Blog</button>
            </div>

        </div>
        <div className='bg-teal-600 w-full h-250 p-6'>
            <div className='flex flex-col mx-100 gap-20 relative top-20'>
                <p className='text-gray-300 text-2xl font-extrabold'>What We Do</p>
                <h1 className='text-amber-100 text-5xl font[Lato]'>At <span className='inline-flex flex-row text-white items-center ml-2 font-extrabold text-6xl'>
                TIMEBL<FiClock className="text-black font-extrabold" /> 
                <span className="mr-2">G</span> 
                </span>, we celebrate everything entertainment. Whether it's breaking Hollywood news, chart-topping music, esports, or binge-worthy TV 
               shows, we’ve got you covered!</h1>

                <div className='flex flex-col gap-7'>
                    <h2 className='text-gray-300 text-2xl font-extrabold'>🎶 Categories We Cover</h2>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-row gap-3 items-center font-bold text-lg">
                            <FaFilm className="text-red-700" /> Movies & TV Shows
                        </div>
                        <div className="flex flex-row gap-3 items-center font-bold text-lg">
                        <FaMusic className="text-blue-700" /> Music & Pop Culture
                        </div>
                        <div className="flex flex-row gap-3 items-center font-bold text-lg">
                        <FaGamepad className="text-amber-300" /> Gaming & Esports
                        </div>
                        <div className="flex flex-row gap-3 items-center font-bold text-lg">
                        <FaUserAlt className="text-amber-200" /> Celebrity Gossip & Interviews
                        </div>
                        <div className="flex flex-row gap-3 items-center font-bold text-lg">
                        <FaAward className="text-yellow-300" /> Festivals & Awards
                        </div>
                    </div>
                </div>    
            </div>          
        </div>

        <div className='flex flex-col mx-100 gap-20'>
            <h1 className='text-gray-700 text-2xl font-extrabold font-[Roboto]'> Meet the Team</h1>
            <div className='flex flex-col gap-5 font-[Roboto] '>
                <h2 className='text-2xl font-extrabold ' >Meet the Writer(s) Behind the Blog</h2>

                <p className='text-gray-500 text-xl'>Hi! I'm Kate, a passionate entertainment writer who lives for pop culture, movies, and music. <br /> Whether it's the latest Hollywood buzz, the hottest chart-topping hits, or the biggest gaming <br />  moments, I’m here to bring you exciting content, fresh insights, and in-depth reviews. <br /> Entertainment isn’t just my  passion—it’s my world!</p>
            </div>

            <div className='flex flex-col gap-5 font-[Roboto] '>
                <h2 className='text-2xl font-extrabold ' >Meet the tea(m) Behind the Blog</h2>

                <p className='text-gray-500 text-xl'>At 
                    <span className='inline-flex flex-row text-teal-600 items-center ml-2 font-extrabold text-6xl'>
                        TIMEBL<FiClock className="text-black font-extrabold" /> 
                        <span className="mr-2">G</span> 
                    </span>, we believe entertainment is more than just news—it’s <br /> an experience. Meet our team of dedicated writers, critics, and pop-culture enthusiasts who <br /> work tirelessly to bring you the latest updates in movies, music, gaming, and celebrity news. <br /> With diverse backgrounds and unique perspectives, we strive to create engaging, fun, and <br /> insightful content that keeps you coming back for more!</p>
            </div>
            
        </div>

        <div className='bg-teal-600 w-full h-130 p-6'>
            <div className='flex flex-col mx-100 gap-20 relative top-20'>
                <p className='text-gray-300 text-2xl font-extrabold'>Why Choose Us? </p>
            
                <div className='flex flex-col gap-7'>
                    <h2 className='text-gray-300 text-2xl font-extrabold'>💡 What Sets You Apart?</h2>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-row gap-3 items-center font-bold text-lg">
                           <p>We don’t just report the news—we give insightful reviews, fun analysis, and behind-the-scenes scoops.</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center font-bold text-lg">
                           <p>Our gaming and esports coverage is by gamers, for gamers 🎮.</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center font-bold text-lg">
                        <p>Exclusive interviews and deep dives into entertainment trends.</p>
                        </div>
                       
                    </div>
                </div>    
            </div>          
        </div>
        
        <div className='flex flex-col mx-100 gap-20'>
            <h1 className='text-gray-700 text-2xl font-extrabold font-[Roboto]'> How to Connect With Us</h1>
            <div className='flex flex-col gap-10 font-[Roboto] '>
                <h2 className='text-2xl font-extrabold ' >📩 Social Media & Contact Info</h2>

                <p className='text-gray-500 text-xl'>Stay updated! Follow us on social media or reach out for collaborations.</p>
                <div className='flex flex-row justify-between'>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 hover:text-pink-600 text-3xl transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-blue-400 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"  />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-red-600 hover:text-red-700 text-3xl transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-black hover:text-gray-800 text-3xl transition-transform transform hover:scale-110"/>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-600 hover:text-blue-700 text-3xl transition-transform transform hover:scale-110" />
                    </a>
                </div>

                <h1 className='text-2xl'> 📧 Email: <span className='text-gray-700 underline cursor-pointer text-lg'>timeblog21@gmail.com</span></h1>
            </div>

            <div className='flex flex-col gap-5 font-[Roboto] '>
                <h1 className='text-2xl font-extrabold ' >📌 Newsletter</h1>
                <h2 className="text-2xl font-semibold text-gray-800">📩 Subscribe to Our Newsletter</h2>

                <p className="text-gray-600 text-sm mt-2">
                    📝 Subscribe for weekly entertainment updates, exclusive content, and trending stories!
                </p>
                {submit ? (
                    <p className="text-green-600 font-medium mt-4">
                    ✅ Thank you for subscribing! Check your email for updates.
                    </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className='bg-teal-600 w-fit p-4 rounded-2xl text-1xl text-white font-extrabold transition hover:shadow-xl cursor-pointer'
                        >
                            🔘 Subscribe
                        </button>
                        </form>
                )}
            </div>

            <h1 className='text-gray-400 text-sm'>@Alvin Kelly✌️✌️</h1>

        </div>
    </div>
  )
}

export default About