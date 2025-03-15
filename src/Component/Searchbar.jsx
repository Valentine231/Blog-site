import React, { useEffect, useState } from "react";
import useArticle from "../Store/Store";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const { category, searchquery, fetchArticle } = useArticle();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchArticle(category, searchquery);
  }, [category, searchquery]);

  // const handleCategoryChange = (newCategory) => {
  //   fetchArticle(newCategory, searchquery);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchArticle(category, searchTerm);
  };

  return (
    <div className="flex flex-col-1  md:flex-row items-center justify-center gap-4 p-4 w-full">
      {/* Category Filter */}
     

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="relative w-full max-w-md flex items-center"
      >
        <input
          type="text"
          placeholder="Search articles..."
          className="border border-gray-300 p-2 pl-4 pr-10 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
