import React from 'react';
import { Backdrop, BackdropImg } from './style';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    setSelectedImg(null);
  }

  return (
    <Backdrop onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BackdropImg src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </Backdrop>
  )
}

export default Modal;