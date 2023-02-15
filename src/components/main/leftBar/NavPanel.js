import React, { useState, useEffect } from 'react';
import './NavPaner.css'
import {useSelector} from "react-redux";

const NavPanel = () => {
    const postList = useSelector(state => state.postList)

    return (
            <nav className="NavPanel">
                <ul>
                    {postList.map((post,index) => (
                        <li key={index}>
                            <a href={`#${index}`}>{post.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
    );
};

export default NavPanel;