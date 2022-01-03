import React,{useState} from "react";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import { Main } from "../../styled-component/style";
import GalleryList from "./GalleryList";
import Modal from "./GalleryList/Modal";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  
  return (
    <Main>
      <ProfileWrapper>
        <ProfileHead />
        <GalleryList setSelectedImg={setSelectedImg}/>
        { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </ProfileWrapper>
    </Main>
  );
};

export default Gallery;
