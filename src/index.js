import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2x2-Bj-FhzSW1OIBf9o69L370Qy2dqFQ",
  authDomain: "usability-tree-testing.firebaseapp.com",
  databaseURL: "https://usability-tree-testing.firebaseio.com",
  projectId: "usability-tree-testing",
  storageBucket: "usability-tree-testing.appspot.com",
  messagingSenderId: "304074409124",
  appId: "1:304074409124:web:7461ea2f222bed1b069231",
  measurementId: "G-4VPJY6XZ9M"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router id="main-app">
    <App />
  </Router>,
  document.getElementById("root")
);
