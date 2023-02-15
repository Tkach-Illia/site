import React, { useState } from 'react';
import './ModalForm.css';
import {useDispatch, useSelector} from "react-redux";

const ModalForm = ({setVisible}) => {
    const userLogin = useSelector(state => state.userLogin)
    const dispatch = useDispatch();
    const isRefresh = useSelector(state => state.isRefresh)
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            title: title,
            author: userLogin,
            text: text,
            image: "https://picsum.photos/200"
        };
        fetch('http://localhost:5000/api/postList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.errors){
                    setError("Invalid post");
                }else {
                    dispatch({type: "set_isRefresh", data: !isRefresh});
                    handleRectClick();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleRectClick = () => {
        setVisible(false);
    };


    return (
        <div className="black-rect" onClick={handleRectClick}>
            <form onSubmit={handleSubmit} className="modal-form" onClick={(e) => e.stopPropagation()}>
                {error && <h4>{error}</h4>}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="modal-form__input"
                />
                <textarea
                    placeholder="Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="modal-form__textarea"
                />
                <button type="submit" className="modal-form__button">
                    Create post
                </button>
            </form>
        </div>
    );
};

export default ModalForm;
