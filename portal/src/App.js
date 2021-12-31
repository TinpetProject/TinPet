import { HomePage } from "./styled-component/style";
import Login from "./screen/Login";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Signup from "./screen/Signup";
import Profile from "./screen/Profile";
import Matches from "./screen/Matches/Matches";
import Dashboard from "./screen/Dashboard/Dashboard";
import Messenger from "./screen/Messenger/Messenger";
import Layout from "./components/Layout/Layout";
import CompleteProfile from "./screen/CompleteProfile/CompleteProfile";

function App({ logInHandler, logOutHandler, userID, socket }) {
  return (
    <HomePage>
      {userID || (
        <Switch>
          <Route exact path="/login">
            <Login logInHandler={logInHandler} socket={socket} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/complete-profile">
            <CompleteProfile />
          </Route>
        </Switch>
      )}
      {userID && (
        <Layout logOutHandler={logOutHandler} userID={userID} socket={socket}>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/matches">
              <Matches />
            </Route>
            <Route exact path="/messenger">
              <Messenger userID={userID} socket={socket} />
            </Route>
            <Route path="/*">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
        </Layout>
      )}
    </HomePage>
  );
}

export default App;
