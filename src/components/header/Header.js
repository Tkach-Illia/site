import React, {useState} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import RegisterModal from "./registerModal/RegisterModal";
import HeaderButton from "./button/HeaderButton";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const userLogin = useSelector(state => state.userLogin)
    const [visibleSignUp, setVisibleSignUp] = useState(false);
    const [visibleLogin, setVisibleLogin] = useState(false);

    return (
        <header className="header">
            <h1 className="header-title">Sauron</h1>

            <nav className="header-nav">
                <Link to="/" className="header-link">Home</Link>
                <Link to="/gallery" className="header-link">Gallery</Link>
                <Link to="/about" className="header-link">About me</Link>
            </nav>
            {!userLogin && <div className="header-buttons">
                <HeaderButton text="Sign Up" onClick={() => setVisibleSignUp(true)}/>
                <HeaderButton text="Login" onClick={() => setVisibleLogin(true)}/>
            </div>}
            {userLogin && <p>{userLogin}</p>}
            {visibleSignUp && <RegisterModal text="Sign Up" setVisible={setVisibleSignUp}/>}
            {visibleLogin && <RegisterModal text="Login" setVisible={setVisibleLogin}/>}
        </header>
    );
};

export default Header;