import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1,message: "How are you?", likesCount: 0},
  {id: 2,message: " my first postIts", likesCount: 12},
  {id: 3,message: "I did it!", likesCount: 33},
]

let  msg = [
  {id: 1,message: "Hello"},
  {id: 2,message: "Hola"},
  {id: 3,message: "Ni Hao"},
  {id: 4,message: "Guten Tak"},
  {id: 5,message: "Why Tak"}
]

let dialogsData = [
  {id: 1, name: "Alina"},
  {id: 2, name: "Dima"},
  {id: 3, name: "Rwx"},
  {id: 4, name: "Max"},
  {id: 5, name: "Andrew"},
  {id: 6, name: "Ailvia"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} msg = {msg} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
