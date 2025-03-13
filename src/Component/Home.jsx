import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useArticle from "../Store/Store";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";
import Websocket from "./Websocket";
import Searchbar from "./Searchbar";

const Home = () => {
    const { articles, fetchArticle, loading, error } = useArticle();

    return (
        <div>
            <Navbar />

            <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <Searchbar />
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Latest News</h1>
                {loading && <Loading />}
                {error && <p className="text-red-500">{error}</p>}


                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <motion.img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-40 sm:h-48 object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                            />
                            <div className="p-4">
                                <h2 className="text-lg sm:text-xl font-semibold">{article.title}</h2>
                                <p className="text-gray-600 text-sm sm:text-base">{article.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <Websocket />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
