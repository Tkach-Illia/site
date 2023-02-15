import React from 'react';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <h2 className="aboutme-title">Про мене</h2>
            <img className="aboutme-image" src="https://abrakadabra.fun/uploads/posts/2021-12/1639309624_1-abrakadabra-fun-p-sauron-oboi-1.jpg"/>
            <p className="aboutme-description">Привіт, я Саурон. Я є найбільшим з злочинців у Середзем'ї. Я створив кілька кілець влади, щоб здобути безкінечну владу над всіма народами. Я також контролюю армію орків, щоб боротися проти людей, ельфів і гномів.</p>
            <p className="aboutme-description">Я живу в Мордорі, великому темному замку з печерами, де зберігаються мої зброї і величезні скарби. Я маю багато привілеїв та влади, але одного разу якщо мені вдасться здобути останнє Кільце Влади, то я зможу повернутися до світу і підкорити всіх і кожного.</p>
            <p className="aboutme-description">Я люблю жар, світло, вогонь, але ненавиджу воду, ліси та світло, які могли б стати для мене смертельними.</p>
        </div>
    );
};

export default AboutMe;