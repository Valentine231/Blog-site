import { supabase } from "../Service/SupaBase";

export const Fetch = async (articleID) => {
    const {data,error} = await supabase
    .from ('comments')
    .select('*')
    .eq('article_ID', articleID)
    .order('created_at',  { ascending: true })

    if(error) {
        console.error(error)
        return data
    }
}


export const Addcomment = async (articleID,userId,content) =>{
    const {data,error} = await supabase.from('comment').insert([{
        articleID:articleID,
        userId:userId,
        content:content,
    }])

    if(error){
        console.error(error)
        return data
    }

}