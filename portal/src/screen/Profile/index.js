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
      <ContentWrapper>
        <SideBar />
        <Content>
          <ProfileHead />
          <InputPost />
          <Post />
          <Pictures />
          <AboutPet />
        </Content>{" "}
      </ContentWrapper>{" "}
    </>
  );
};

export default Profile;
