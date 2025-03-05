import React, { useEffect, useState } from 'react';
import useArticle from '../Store/Store';

const Searchbar = () => {
  const { category, searchquery, fetchArticle } = useArticle();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchArticle(category, searchquery);
  }, [category, searchquery]);

  const handleCategoryChange = (newCategory) => {
    fetchArticle(newCategory, searchquery);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchArticle(category, searchTerm);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center p-4">

      {/* Category Filter */}
      <div className="mb-4 flex gap-2 overflow-x-auto whitespace-nowrap">
        {["general", "technology", "sports", "business", "entertainment"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md pointer-cusor transition ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search articles..."
          className="border p-2 w-full sm:w-40 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>
      
    </div>
  );
};

export default Searchbar;
