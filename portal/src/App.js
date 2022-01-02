import { HomePage } from "./styled-component/style";
import Login from "./screen/Login";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Signup from "./screen/Signup";
import Matches from "./screen/Matches/Matches";
import Dashboard from "./screen/Dashboard/Dashboard";
import Messenger from "./screen/Messenger/Messenger";
import Layout from "./components/Layout/Layout";
import CompleteProfile from "./screen/CompleteProfile/CompleteProfile";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./screen/ForgotPassword";
import ResetPassword from "./screen/ResetPassword";
import { injectStyle } from "react-toastify/dist/inject-style";
import PetList from "./screen/PetList/PetList";
import Favorite from "./screen/Favorite/Favorite";
import Profile from "./screen/Profile";
import Gallery from "./screen/Profile/Gallery";

if (typeof window !== "undefined") {
  injectStyle();
}

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
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/reset-password/:resetToken">
            <ResetPassword />
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
            <Route exact path="/messenger/:chosenUserID">
              <Messenger userID={userID} socket={socket} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route path="/petlist">
              <PetList />
            </Route>
            <Route path="/favorite">
              <Favorite />
            </Route>
            <Route path="/*">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
        </Layout>
      )}
      <ToastContainer autoClose={3000} />
    </HomePage>
  );
}

export default App;
