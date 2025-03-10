// src/CommentComponent.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../Service/SupaBase';

const CommentComponent = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        fetchComments();
    }, [articleId]);

    const fetchComments = async () => {
        const { data, error } = await supabase
            .from('comments')
            .select('*, user_id')
            .eq('article_id', articleId)
            .order('created_at', { ascending: true });

        if (error) {
            console.error('Error fetching comments:', error);
        } else {
            setComments(data);
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
    
        const { data: { user } } = await supabase.auth.getUser(); // Correct way to extract the user
    
        if (!user) {
            console.error('User not found. Please log in.');
            return;
        }
    
        const { data, error } = await supabase
            .from('comments')
            .insert([
                { article_id: articleId, user_id: user.id, comment_text: commentText }
            ]);
    
        if (error) {
            console.error('Error adding comment:', error);
        } else {
            setCommentText('');
            fetchComments();
        }
    };
    

    return (
        <div>
            <h3>Comments</h3>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write a comment..."
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>User {comment.user_id}</strong>: {comment.comment_text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentComponent;




// import React, { useEffect, useState } from 'react';
// import { Fetch } from '../Hooks/Fetchcomment';

// const Comment = ({ articleId }) => { // ✅ Correct prop destructuring
//     const [comments, setComments] = useState([]);

//     if (!articleId) {
//         return <p>Error: Invalid article ID</p>;
//     }

//     useEffect(() => {
//         const getComments = async () => {
//             const data = await Fetch(articleId);
//             setComments(data || []); // ✅ Handle null response
//         };
//         getComments();
//     }, [articleId]);

//     return (
//         <div>
//             <h3>Comments</h3>
//             <div>
//                 {comments.length > 0 ? (
//                     comments.map((comment) => (
//                         <ul key={comment.id}>
//                             <li>{comment.content}</li>
//                         </ul>
//                     ))
//                 ) : (
//                     <p>No comments yet.</p> // ✅ Handle case where there are no comments
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Comment;
