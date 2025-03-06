import React, { useEffect } from 'react';
import Navbar from './Navbar';
import useArticle from '../Store/Store';
import Loading from './Loading';
import { motion, spring } from 'framer-motion';
import Footer from './Footer';

const Home = () => {
  const { articles, fetchArticle, loading, error } = useArticle();

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Latest News</h1>

        {/* Loading & Error Handling */}
        {loading && <p className="text-gray-500"><Loading /></p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                className="w-full h-40 sm:h-48 object-cover rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, type: spring, stiffness: 120 }}
              />
              <h2 className="mt-3 text-lg sm:text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{article.description}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
