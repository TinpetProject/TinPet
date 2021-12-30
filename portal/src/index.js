import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import AuthController from "./components/AuthController/AuthController";

axios.defaults.baseURL = "http://localhost:8888"; 
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthController>
        <App />
      </AuthController>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
