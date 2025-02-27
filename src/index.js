import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from "./chapter_04/Clock";

import CommentList from './chapter_05/CommentList';

// const container = ReactDOM.createRoot(document.getElementById('root'));
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <Library />
//  </React.StrictMode>
//);

//setInterval(() => {
//    root.render(
//        <React.StrictMode>
//            <Clock />
//        </React.StrictMode>
//    );
//}, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CommentList />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
