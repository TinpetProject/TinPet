import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dashboard from "../screen/Dashboard/Dashboard";

const DB = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="content-wrapper">
          <SideBar />
          <Dashboard />
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default DB;
