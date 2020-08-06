import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from "./components/App.js";
import './globalStyles.css'

firebase.initializeApp({
    apiKey: "AIzaSyD760R1VIFalJFSiPDqfyNXJYIkhkIvTNA",
    authDomain: "net540.firebaseapp.com",
    databaseURL: "https://net540.firebaseio.com",
    projectId: "net540",
    storageBucket: "net540.appspot.com",
    messagingSenderId: "699878447258",
    appId: "1:699878447258:web:9c418311c5829cadb2e723",
    measurementId: "G-C4C8MC63WF"
});

const container = document.getElementById("app");

ReactDOM.render(<App />, container);