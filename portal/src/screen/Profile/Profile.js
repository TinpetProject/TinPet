import React,{useState} from "react";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import InputPost from "./InputPost";
import Pictures from "./Picture";
import AboutPet from "./AboutPet";
import { Main } from "../../styled-component/style";
import Feed from "./Feed";

import GalleryList from "./GalleryList";
import Modal from "./GalleryList/Modal";

const Profile = ({userID}) => {
  const [choosePath, setChoosePath] = useState(false);

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
