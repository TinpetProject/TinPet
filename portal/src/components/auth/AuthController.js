import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwt from "jwt-decode";

function AuthController(props) {
  const browserHistory = useHistory();
  const [userID, setUserID] = useState("");
  const renewToken = async (token) => {
    const respone = await fetch(`http://localhost:8888/auth/renew-token`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const isTokenExpired = !respone.ok;
    return isTokenExpired ? null : (await respone.json()).data;
  };

  const tokenInvalidHandler = () => {
    localStorage.removeItem("token");
    setUserID("");
    if (browserHistory.location.pathname !== "/login") {
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
    };
    checkAndRenewToken();
  }, []);

  const AppComponent = { ...props.children, props: { userID, setUserID } };
  return <>{AppComponent}</>;
}

export default AuthController;
