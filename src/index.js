import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAj9F-QeoWJ_SUPEoYaNUK1OMUHh49D0X4",
  authDomain: "ecomerce-locasta.firebaseapp.com",
  projectId: "ecomerce-locasta",
  storageBucket: "ecomerce-locasta.appspot.com",
  messagingSenderId: "914726068501",
  appId: "1:914726068501:web:43f494374b865e7c2b891c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
