import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { supabase } from "../Service/SupaBase";
import { FaPaperPlane } from "react-icons/fa";

const socket = io('http://localhost:8080'); // Ensure this matches your server URL

const Websocket = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const { data, error } = await supabase
                .from('messages') 
                .select('*')
                .order('created_at', { ascending: true });
    
            if (error) {
                console.error('Error fetching comments:', error);
            } else {
                setComments(data);
            }
        };
    
        fetchComments();
    
        // Corrected real-time subscription
        const channel = supabase
            .channel('realtime:messages') // Give a unique name for the channel
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'messages' },
                (payload) => {
                    setComments((prevComments) => [...prevComments, payload.new]);
                }
            )
            .subscribe();
    
        socket.on('connect', () => {
            console.log('Connected to server');
        });
    
        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
    
        socket.on('sendMessage', (data) => {
            setComments((prevComments) => [...prevComments, data]);
        });
    
        return () => {
            socket.off('sendMessage'); 
            supabase.removeChannel(channel); // Correct way to unsubscribe
        };
    }, []);

    const handleCommentSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        if (newComment.trim()) { // Check if the comment is not empty
            const commentData = { content: newComment, user_id: localStorage.getItem('id') };

            // Emit the comment to the server
            socket.emit('sendMessage', commentData);

            // Store the comment in Supabase
            const { data, error } = await supabase
                .from('messages') // Replace with your table name
                .insert([{ content: newComment, user_id: localStorage.getItem('id') }]);

            if (error) {
                console.error('Error inserting comment:', error);
            }

            setNewComment(''); // Clear the input field
        }
    };

    return (
        <div className='mt-10 '>
            <h3>Comments</h3>
            <form onSubmit={handleCommentSubmit} className='flex flex-row'>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    required
                    className='border border-gray-300 p-2 rounded-lg w-1/2 mt-2'
                />
                <button type="submit" >
                <FaPaperPlane size={25} color='blue' />
                </button>
            </form>
            <ul>
                {comments.map((data, index) => (
                    <li key={index}>{data.content} - {data.user_id}</li>
                ))}
            </ul>
        </div>
    );
}

export default Websocket;