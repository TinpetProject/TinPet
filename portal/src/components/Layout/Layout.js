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
<<<<<<< HEAD
      <SideBar showSetting={showSetting} hideSetting={hideSetting} />
=======
      <SideBar logOutHandler={props.logOutHandler} />
>>>>>>> 6e7987f2953d2de08343c86d133f78808053b971
      {props.children}
      {isShownSetting && <Setting userID={props.userID} /> }
    </>
  );
});

export default Layout;
