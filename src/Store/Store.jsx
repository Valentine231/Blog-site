import { create } from "zustand";
import axios from "axios";


const API_KEY="7d99846d71909cece46984e3b3e5414d"
const BASE_URL = "https://gnews.io/api/v4/top-headlines";


const useArticle = create((set)=>({
    articles:[],
    loading:false,
    error:null,
    category: "general",        
    searchquery: "",

    fetchArticle: async (category = "general", query = "") =>{
        set({loading:true,error:null})

        let API_URL = `${BASE_URL}?token=${API_KEY}&lang=en&category=${category}`;
        if (query) API_URL += `&q=${encodeURIComponent(query)}`;

        try{
       const response = await axios.get(API_URL)
     
       const data = await response.data
       set({ articles: data.articles || [], loading: false, category, searchquery: query });

        } catch(error){
            set({error:"failed to fetch article", loading:false})
            console.error(error)
        }

    }
    

    
}))

export default useArticle
