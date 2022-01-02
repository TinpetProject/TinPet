import React from "react";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import InputPost from "./InputPost";
import Pictures from "./Picture";
import AboutPet from "./AboutPet";
import { Main } from "../../styled-component/style";
import Feed from "./Feed";


const Profile = () => {
  
  return (
    <Main>
      <ProfileWrapper>
        <ProfileHead />
        <InputPost />
        <Feed />
        <Pictures />
        <AboutPet />
      </ProfileWrapper>
    </Main>
  );
};

export default Profile;