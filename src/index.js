import React from 'react';
import './index.css';
import App from './App';
import RouterDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store/store";


RouterDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);