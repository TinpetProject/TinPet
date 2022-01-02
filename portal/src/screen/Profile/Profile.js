import React from "react";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import InputPost from "./InputPost";
import Pictures from "./Picture";
import AboutPet from "./AboutPet";
import { Main } from "../../styled-component/style";
import Feed from "./Feed";


const Profile = ({userID}) => {

  return (
    <>
      <Main>
        <ProfileWrapper>
          <ProfileHead />
          <InputPost />
          <Feed userID={userID} />
          <Pictures />
          <AboutPet />
        </ProfileWrapper>
      </Main>
    </>
  );
};

export default Profile;
