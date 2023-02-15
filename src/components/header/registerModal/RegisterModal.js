import React, { useState } from 'react';
import './RegisterModal.css'
import HeaderButton from "../button/HeaderButton";
import {useDispatch, useSelector} from "react-redux";

function RegisterModal({text,setVisible}) {
    const dispatch = useDispatch();
    const isRefresh = useSelector(state => state.isRefresh)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(text === "Login"){
            fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: username, password: password})
            })
                .then((res) => res.json())
                .then((data) => {
                    setError(data.error);
                    if(!data.error){
                        setVisible(false);
                        dispatch({ type: "set_userLogin", data: {name: username, status: data.status}});
                        dispatch({ type: "set_isRefresh", data: !isRefresh});
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }else{
            fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: username, password: password, status: 0})
            })
                .then((res) => res.json())
                .then((data) => {
                    setError(data.error);
                    if(!data.error){
                        setVisible(false);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }

    };

    return (
        <div className="black-box" onClick={() => setVisible(false)}>
            <div className="modal"onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <h2>{text}</h2>
                    {error && <label htmlFor="username">{error}</label>}
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <HeaderButton text={text} type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default RegisterModal;
