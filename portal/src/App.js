import { HomePage } from "./styled-component/style";

import Login from "./screen/Login";
import DB from "./screen/DB";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import React from "react";
import Signup from "./screen/Signup";
import Profile from "./screen/Profile";

function App() {
    const [user, setUser] = React.useState({});

    const getUserInfo = (token) => {
        console.log(jwt_decode(token));
    };
    return ( <
        HomePage >
        <
        Switch >
        <
        Route exact path = "/login" >
        <
        Login getUserInfo = { getUserInfo }
        />{" "} <
        /Route>{" "} <
        Route exact path = "/signup" >
        F <
        Signup / >
        <
        /Route>{" "} <
        Route exact path = "/dashboard" >
        <
        DB / >
        <
        /Route>{" "} <
        Route exact path = "/profile" >
        <
        Profile / >
        <
        /Route>{" "} <
        Redirect from = "/"
        to = "/login" / >
        <
        /Switch>{" "} <
        /HomePage>
    );
}

export default App;