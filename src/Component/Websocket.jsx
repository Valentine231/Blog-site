import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8080'); // Ensure this matches your server URL

const Websocket = () => {
    const [comment, setComment] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        // Listen for new comments from the server
        socket.on('sendMessage', (data) => {
            setComment((prevComments) => [...prevComments, data.text]); // Update the comment state
        });

        return () => {
            socket.off('sendMessage'); // Clean up the listener on unmount
        };
    }, []);

    const handleCommentSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (newComment.trim()) { // Check if the message is not empty
            socket.emit('sendMessage', { text: newComment, user: localStorage.getItem('userName') });
            setNewComment(''); // Clear the input field
        }
    };

    return (
        <div>
            <h3>Comments</h3>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {comment.map((data, index) => (
                    <li key={index}>{data}</li>
                ))}
            </ul>
        </div>
    );
}

export default Websocket;