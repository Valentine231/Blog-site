import { useState, useEffect } from "react";
import { supabase } from "../Service/SupaBase" // Ensure Supabase is set up correctly

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comment ")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching comments:", error);
      else setComments(data);
    };

    fetchComments();
  }, []);

  const addComment = async () => {
    if (!newComment.trim() || !userName.trim()) return;

    const { error } = await supabase
      .from("comment")
      .insert([{ user_name: userName, content: newComment }]);

    if (error) console.error("Error adding comment:", error);
    else {
      setNewComment("");
      setUserName("");
      window.location.reload(); // Refresh comments
    }
  };

  return (
    <div className="p-4 border rounded-md shadow">
      <h3 className="text-lg font-bold mb-2">Comments</h3>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={addComment} className="bg-blue-500 text-white p-2 rounded ml-2">
          Submit
        </button>
      </div>

      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="border p-2 mb-2 rounded">
            <strong>{comment.user_name}</strong>: {comment.content}
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default Comments;
