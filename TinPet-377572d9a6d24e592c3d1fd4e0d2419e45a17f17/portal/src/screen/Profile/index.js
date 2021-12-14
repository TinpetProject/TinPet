import React from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import InputPost from "./InputPost";
import Post from "./Post";
import Pictures from "./Picture";
import AboutPet from "./AboutPet";
import { Main } from "../../styled-component/style";

const Profile = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Main>
        <ProfileWrapper>
          <ProfileHead />
          <InputPost />
          <Pictures />
          <AboutPet />
          {/* <Post /> */}
        </ProfileWrapper>
      </Main>      
    </>
  );
};

export default Profile;
