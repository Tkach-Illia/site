import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostPage.css'
import {useSelector} from "react-redux";

function PostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState("");
    const userLogin = useSelector(state => state.userLogin)

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${postId}`)
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Server data:', data);
                setPost(data);
            });
    }, [postId]);

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/api/posts/${postId}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: userLogin, text: comment }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // оновити стан батьківського компонента
                // props.onCommentSubmit(data);
                // очистити поле введення коментаря
                console.log(data);
                setComment('');
            })
            .catch((error) => {
                console.error('There was an error submitting the comment', error);
            });
    };

    if (!post) {
        return <div className="post-case">Loading...</div>;
    }

    return (
        <div className="post-case">
            <h1>{post.post.title}</h1>
            {post.post.image && <img src={post.post.image} alt="Post Image" />}
            <p>Author: {post.post.author}</p>
            <p>Created: {new Date(post.post.createdAt).toDateString()}</p>
            <p>{post.post.text}</p>
            {userLogin &&
                <div className="comment-form">
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button onClick={handleCommentSubmit}>Send</button>
                </div>
            }
            <div className="comments-container">
                {post.comments.map((comment) => (
                    <div className="comment-container" key={comment._id}>
                        <p>{comment.author}</p>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostPage;