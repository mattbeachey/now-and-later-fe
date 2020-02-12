import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from "axios";

// Health Check 
axios.get("https://now-and-later-backend.herokuapp.com/ping").then(() => {
    console.log("should be working")
}).catch(()=> {
    console.log("what happened")
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
