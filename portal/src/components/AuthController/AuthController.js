import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwt from "jwt-decode";
import openSocket from "socket.io-client";
import axios from "axios";

function AuthController(props) {
  const browserHistory = useHistory();
  const [userID, setUserID] = useState("");
  const [socket, setSocket] = useState();

  useEffect(() => {
    if (userID) {
      const newSocket = openSocket("http://localhost:8888");
      newSocket.emit("login", { socketID: newSocket.id, userID });
      setSocket(newSocket);
    }
  }, [userID]);

  const renewToken = async (token) => {
    const response = await fetch(`http://localhost:8888/auth/renew-token`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const isTokenExpired = !response.ok;
    return isTokenExpired ? null : (await response.json()).data;
  };

  const tokenInvalidHandler = () => {
    localStorage.removeItem("token");
    setUserID("");

    const currentURL = browserHistory.location.pathname;
    if (
      currentURL !== "/login" &&
      currentURL !== "/signup" &&
      currentURL !== "/complete-profile" &&
      currentURL !== "/forgotpassword" &&
      currentURL.split("/")[1] !== "reset-password"
    ) {
      browserHistory.push("/login");
      return alert("Your session ended, please login to continue");
    }
  };

  useEffect(() => {
    const checkAndRenewToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) return tokenInvalidHandler();

      const newToken = await renewToken(token);
      if (!newToken) return tokenInvalidHandler();

      localStorage.setItem("token", newToken);
      const decodedData = jwt(newToken);
      setUserID(decodedData.userID);
      axios.defaults.baseURL = "http://localhost:8888";
      axios.defaults.headers.common["Authorization"] = "Bearer " + newToken;
    };
    checkAndRenewToken();
  }, []);

  const logInHandler = (userID) => {
    return setUserID(userID);
  };

  const logOutHandler = () => {
    socket.emit("logout", { userID });
    setUserID("");
    setSocket("");
    localStorage.removeItem("token");
    browserHistory.push("/login");
  };

  const AppComponent = {
    ...props.children,
    props: { userID, socket, logInHandler, logOutHandler },
  };
  return <>{AppComponent}</>;
}

export default AuthController;
