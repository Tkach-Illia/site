import React from 'react';
import './HeaderButton.css';

const HeaderButton = ({ text, onClick }) => {
    return (
        <button className="button" onClick={onClick}>{text}</button>
    );
};

export default HeaderButton;