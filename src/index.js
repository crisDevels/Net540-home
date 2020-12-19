import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from "./components/App.js";
import './globalStyles.css'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp ({
    apiKey: "AIzaSyBWWMe9eBgBnmcKXBKKkVCyV7ooCWJ4Vp4",
    authDomain: "joobbi-eb624.firebaseapp.com",
    projectId: "joobbi-eb624",
    storageBucket: "joobbi-eb624.appspot.com",
    messagingSenderId: "535390211207",
    appId: "1:535390211207:web:210ec0fdc3127aefa57c22",
    measurementId: "G-14JNQBCTXY"
  });

const container = document.getElementById("app");

ReactDOM.render(<App />, container);