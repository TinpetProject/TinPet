import { HomePage, ContentWrapper, Content } from "./styled-component/style";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./screen/Dashboard/Dashboard";
import Login from "./screen/Login";

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import React from "react";
import Signup from "./screen/Signup";

import InputPost from "./screen/Profile/InputPost";
import ProfileHead from "./screen/Profile/ProfileHead";
import Pictures from "./screen/Profile/Picture";
import AboutPet from "./screen/Profile/AboutPet";
import Post from "./screen/Profile/Post";
import Matches from "./screen/Matches/Matches";
function App() {
    const [user, setUser] = React.useState({});

    const getUserInfo = (token) => {
        console.log(jwt_decode(token));
    };
    return (
        <>
            <HomePage>
                <Switch>
                    <Route exact path="/login">
                        <Login getUserInfo={getUserInfo} />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/matches">
                        <Matches />
                    </Route>
                    <Redirect from="/" to="/login" />
                </Switch>
            </HomePage>
        </>
    );
}

export default App;
