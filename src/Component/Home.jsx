import { useEffect, useState } from "react";

import {motion} from "framer-motion"
import useArticle from "../Store/Store";
import Comment from "./Comment";
import Commentform from "./Commentform";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";

const Home = () => {
    const { articles, fetchArticle, loading, error } = useArticle();
  

    // useEffect(() => {
    //     fetchArticle();

    //     // Fetch authenticated user
    //     const fetchUser = async () => {
    //         const { data: { user } } = await supabase.auth.getUser();
    //         setUser(user);
    //     };

    //     fetchUser();
    // }, []);

    return (
        
        <div>
        <Navbar />
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Latest News</h1>
          {loading && <Loading />}
          {error && <p className="text-red-500">{error}</p>}

          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" >
            {articles.map((article, index) => (
             <a
              key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 120 }} />
                <h2 className="mt-3 text-lg sm:text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{article.description}</p>
              </a>
               ))}
          
          </div>
          
{/*            
           {user?(
            <section>
            <Comment articleID={articles.Id} />
            <Commentform articleID={articles.Id} userId={user} />
        </section>
           ):(

           null 
           )      
          } */}
           
         

        </div>
        <Footer />
        </div>
        
    );
};

export default Home;
