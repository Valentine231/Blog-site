

export const Fetch = async (articleID) => {
    const {data,error} = await Supabase
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
    const {data,error} = await Supabase.from('comment').insert([{
        articleID:articleID,
        userId:userId,
        content,
    }])

    if(error){
        console.error(error)
        return data
    }

}