import React,{useState} from "react";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import InputPost from "./InputPost";
import Pictures from "./Picture";
import AboutPet from "./AboutPet";
import { Main } from "../../styled-component/style";
import Feed from "./Feed";
import Gallery from "./Gallery";
import Modal from "./Gallery/Modal";

const Profile = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  
  return (
    <Main>
      <ProfileWrapper>
        <ProfileHead />
        {/* <InputPost />
        <Feed />
        <Pictures />
        <AboutPet /> */}
        <Gallery setSelectedImg={setSelectedImg}/>
        { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </ProfileWrapper>
    </Main>
  );
};

export default Profile;
