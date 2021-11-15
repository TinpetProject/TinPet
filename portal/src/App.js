import { HomePage } from "./styled-component/style";
import Login from "./screen/Login";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import React, { useState, useRef } from "react";
import Signup from "./screen/Signup";
import Profile from "./screen/Profile";
import Matches from "./screen/Matches/Matches";
import openSocket from "socket.io-client";

function App() {
  const [userID, setUserID] = useState();

  const getUserInfo = (userInfo) => {
    setUserID(userInfo.userID);
  };
  const socket = useRef();
  socket.current = openSocket("http://localhost:8888");

    const getUserInfo = (token) => {
        console.log(jwt_decode(token));
    };

  return (
    <>
      <HomePage>
        <Switch>
          <Route exact path="/login">
            <Login getUserInfo={getUserInfo} socket={socket.current} />
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
          <Route exact path="/messenger">
            <Messenger userID={userID} socket={socket.current} />
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </HomePage>
    </>
  );
}

export default App;