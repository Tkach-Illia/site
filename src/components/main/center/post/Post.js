import React from "react";
import './Post.css'
import {Link} from "react-router-dom";

const Post = (props) => {
    return (
        <div className='post'>
            <Link to={`/post/${props.id}`}><h3 id={props.id}>{props.title}</h3></Link>
            {props.image && <img src={props.image} alt="Post Image" />}
            <p>Author: {props.author}</p>
            <p>Created: {props.createdAt}</p>
            <p>{props.text}</p>
        </div>
    );
};

export default Post;