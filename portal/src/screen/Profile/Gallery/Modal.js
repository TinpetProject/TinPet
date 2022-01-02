import React from 'react';
import { Backdrop, BackdropImg } from './style';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
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

// const Modal = () => {

//     return (
//       <Backdrop>
//         <BackdropImg src="" alt="enlarged pic"/>
//       </Backdrop>
//     )
//   }
export default Modal;