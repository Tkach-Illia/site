import React, {useEffect} from 'react';
import './Center.css'
import Post from "./post/Post";
import store from "../../../store/store";
import {useDispatch, useSelector} from "react-redux";

const Center = () => {
    const dispatch = useDispatch();
    const postList = useSelector(state => state.postList)
    const isRefresh = useSelector(state => state.isRefresh)

    useEffect(() => {
        fetch(`http://localhost:5000/api/postList`)
            .then(res => res.json())
            .then(data => dispatch({ type: "set_postList", data: data}));
        console.log("isRefresh")
    }, [isRefresh]);

    return (
        <main className="center">
            {postList.map((item, index) => (
                <Post
                    id = {item._id}
                    title={item.title}
                    author={item.author}
                    createdAt={new Date(item.createdAt).toDateString()}
                    text={item.text}
                    image={item.image}
                />
            ))}
        </main>
    );
};


export default Center;