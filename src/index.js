import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "moment/locale/pt-br";
import Start from "./Start";

ReactDOM.render(
    <Start/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a functionn
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
