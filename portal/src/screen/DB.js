import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Dashboard from "../screen/Dashboard/Dashboard";

const DB = () => {
    return (
        <>
            <NavBar />
            <SideBar />
            <div className="main">
                <Dashboard />
            </div>{" "}
        </>
    );
};

export default DB;
