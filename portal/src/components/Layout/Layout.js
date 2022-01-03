import React from "react";
import { useState  } from "react";
import Setting from "../../screen/Setting/Setting";
import NavBar from "../NavBar/index";
import SideBar from "../SideBar";


const Layout = React.memo((props) => {

  const [isShownSetting, setIsShownSetting] = useState(false);

  const showSetting = () =>{
    setIsShownSetting(true);
  }
  const hideSetting = () =>{
    setIsShownSetting(false);
  }
  
  return (
    <>
      <NavBar userID={props.userID} socket={props.socket} logOutHandler={props.logOutHandler} />
      <SideBar showSetting={showSetting} hideSetting={hideSetting} logOutHandler={props.logOutHandler} />
      {props.children}
      {isShownSetting && <Setting userID={props.userID} /> }
    </>
  );
});

export default Layout;
