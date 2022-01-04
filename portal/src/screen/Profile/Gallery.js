import React, { useState } from "react";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import { Main } from "../../styled-component/style";
import GalleryList from "./GalleryList";
import Modal from "./GalleryList/Modal";

const Gallery = ({ userID, images }) => {
  const [selectedImg, setSelectedImg] = useState();
  
  return (
    <>
      <GalleryList userID={userID} setSelectedImg={setSelectedImg} images={images} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>

  );
};

export default Gallery;
