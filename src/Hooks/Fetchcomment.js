import { supabase } from "../Service/SupaBase";

// Fetch comments for a specific article
export const Fetch = async (articleID) => {
    if (!articleID) {
        console.error("Error: articleID is undefined.");
        return [];
    }

    const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq("article_id", "550e8400-e29b-41d4-a716-446655440000")
        .order('created_at', { ascending: true });

    if (error) {
        console.error("Error fetching comments:", error);
        return [];
    }

    return data;
};


// Add a new comment
export const Addcomment = async (articleID, userId, content) => {
    const { data, error } = await supabase
    .from('comments')
    .insert([
      {
        article_id: "a-valid-uuid-here",
        user_id: "a-valid-uuid-here",
        content: "This is a test comment!",
      }
    ]);

    if (error) {
        console.error("Error adding comment:", error);
        return null; // Return null to indicate failure
    }

    return data; // Return inserted comment
};
