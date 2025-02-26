import React, { useEffect } from 'react'
import Navbar from './Navbar'
import useArticle from '../Store/Store'
import Loading from './Loading'
import {motion, spring} from 'framer-motion'


const Home = () => {
  const {articles, fetchArticle, loading, error}=useArticle()

  useEffect(()=>{
    fetchArticle()
  },[])

  return (
    <div>
      <div>
      <Navbar />
      </div>
       
        

        <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      {/* Loading & Error Handling */}
      {loading && <p className="text-gray-500"><Loading /></p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Articles Grid */}
      <div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 shadow-lg rounded-lg transition hover:shadow-xl"
          >
            <motion.img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded-md"
              whileHover={{scale:1.1}}
              transition={{duration:1, type:spring, stiffness:100}}
            />
            <h2 className="mt-4 text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
          </a>
        ))}
      </div>
    </div>
        
    </div>
  )
}

export default Home
   
