import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const userData = {
    name: "joe",
    hobbies: [
        "reading", "playing", "listening"
    ]
 }
 ReactDOM.render(<App user={userData} />, document.getElementById('root'));
 
 registerServiceWorker(); // This function helps live reload of the module on the browser