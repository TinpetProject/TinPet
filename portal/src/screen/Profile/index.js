import React from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { ContentWrapper, Content } from "./style";
import ProfileHead from "./ProfileHead";
import InputPost from "./InputPost";
import Post from "./Post";
import Pictures from "./Picture";
import AboutPet from "./AboutPet";

const Profile = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="main">
        <ProfileHead />
        <InputPost />
        <Post />
        <Pictures />
        <AboutPet />
      </div>
      
    </>
  );
};

export default Profile;
