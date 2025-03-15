import React, { useEffect, useState } from "react";
import useArticle from "../Store/Store";


const Caterogies = () => {
    const { category, searchquery, fetchArticle } = useArticle();

    useEffect(() => {
        fetchArticle(category, searchquery);
      }, [category, searchquery]);
    
      const handleCategoryChange = (newCategory) => {
        fetchArticle(newCategory, searchquery);
      };


  return (
    <div>
         <div className="flex flex-col gap-2 justify-center md:flex-row justify-start w-full md:w-auto">
        {["general", "technology", "sports", "business", "entertainment"].map(
          (cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm md:text-base rounded-md cursor-pointer transition ${
                category === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          )
        )}
      </div>
    </div>
  )
}

export default Caterogies