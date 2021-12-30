import React, { useState, useEffect, useCallback } from "react";
import { HomePage } from "../../styled-component/style";
import NavBar from "../NavBar/index";
import SideBar from "../SideBar";

const Layout = React.memo((props) => {
  return (
    <HomePage>
      <NavBar />
      <SideBar />
      {props.children}
    </HomePage>
  );
});

export default Layout;
