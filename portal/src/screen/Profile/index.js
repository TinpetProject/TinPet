import React from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import InputPost from "./InputPost";
import Pictures from "./Picture";
import AboutPet from "./AboutPet";
import Feed from "./Feed";
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
          <Feed />
        </ProfileWrapper>
      </Main>      
    </>
  );
};

export default Profile;
