import React, { useState } from 'react';
import { Addcomment } from '../Hooks/Fetchcomment';

const Commentform = ({ articleId, userId, refreshComments }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) return; // ✅ Prevent empty comments

        await Addcomment(articleId, userId, content);
        setContent('');
        refreshComments(); // ✅ Refresh comments after submission
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Add a comment" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Commentform;
