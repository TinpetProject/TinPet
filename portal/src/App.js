import { HomePage } from "./styled-component/style";
import Login from "./screen/Login";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Profiler } from "react";
import Signup from "./screen/Signup";
import Matches from "./screen/Matches/Matches";
import Dashboard from "./screen/Dashboard/Dashboard";
import Profile from "./screen/Profile/Profile";
import Messenger from "./screen/Messenger/Messenger";
import Layout from "./components/Layout/Layout";
import CompleteProfile from "./screen/CompleteProfile/CompleteProfile";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./screen/ForgotPassword";
import ResetPassword from "./screen/ResetPassword";
import { injectStyle } from "react-toastify/dist/inject-style";
import PetList from "./screen/PetList/PetList";
import Favorite from "./screen/Favorite/Favorite";
import Game from "./screen/Game/Game";
import Gallery from "./screen/Profile/Gallery";

if (typeof window !== "undefined") {
    injectStyle();
}

function App({ logInHandler, logOutHandler, userInfo, socket }) {
    const { userID, userAvatar } = userInfo;
    console.log("here", userInfo);
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
                            <Dashboard userID={userID}/>
                        </Route>
                        <Route exact path="/matches">
                            <Matches userID={userID} />
                        </Route>
                        <Route exact path="/messenger/:chosenUserID">
                            <Messenger userID={userID} socket={socket} userAvatar={userAvatar} />
                        </Route>
                        <Route exact path="/profile/:chosenUserID">
                            <Profile userID={userID} />
                        </Route>
                        <Route path="/petlist">
                            <PetList userID={userID} />
                        </Route>
                        <Route path="/favorite">
                            <Favorite userID={userID} />
                        </Route>
                        <Route path="/game">
                            <Game />
                        </Route>
                        <Route path="/*">
                            <Redirect to="/dashboard" />
                        </Route>
                    </Switch>
                </Layout>
            )}
            <ToastContainer autoClose={2500} />
        </HomePage>
    );
}

export default App;
