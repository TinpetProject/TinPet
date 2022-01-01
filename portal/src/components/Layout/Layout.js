import React from "react";
import NavBar from "../NavBar/index";
import SideBar from "../SideBar";

const Layout = React.memo((props) => {
  return (
    <>
      <NavBar userID={props.userID} socket={props.socket} logOutHandler={props.logOutHandler} />
      <SideBar />
      {props.children}
    </>
  );
});

export default Layout;
