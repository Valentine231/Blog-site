import React, {  useEffect, useState } from 'react'
import useArticle from '../Store/Store'

const Searchbar = () => {
    const{category, searchquery, fetchArticle} = useArticle()
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetchArticle(category, searchquery)
    }, [category, searchquery])

    const handleCategoryChange=(newcategories)=>{
        fetchArticle(newcategories, searchquery)
    }


    const handleSearch = (e) => {
        e.preventDefault()
        fetchArticle(category, searchTerm)
    }
  return (
   <>
   {/* Category Filter */}
   <div className="mb-4 flex gap-2">
   {["general", "technology", "sports", "business", "entertainment"].map((cat) => (
     <button
       key={cat}
       className={`px-4 py-2 rounded-md ${
         category === cat ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
       }`}
       onClick={() => handleCategoryChange(cat)}
     >
       {cat.charAt(0).toUpperCase() + cat.slice(1)}
     </button>
   ))}
   </div>

   {/* Search Bar */}
   <form onSubmit={handleSearch} className="mb-6 flex gap-2">
     <input
       type="text"
       placeholder="Search articles..."
       className="border p-2 w-full rounded-md"
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
     />
     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
       Search
     </button>
   </form>
   </>
  
  )
}

export default Searchbar