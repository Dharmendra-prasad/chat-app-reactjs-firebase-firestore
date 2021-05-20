import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import { Provider } from 'react-redux';
import store from './store';


const firebaseConfig = {
  apiKey: "AIzaSyBiTv1ME3rpc4oIx3szHKJrBHLnwA8MXYM",
  authDomain: "chat-app-eb739.firebaseapp.com",
  projectId: "chat-app-eb739",
  storageBucket: "chat-app-eb739.appspot.com",
  messagingSenderId: "564946443399",
  appId: "1:564946443399:web:03ab6d68c784a5dfedec22",
  measurementId: "G-WQY11K1QFB"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store = { store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
