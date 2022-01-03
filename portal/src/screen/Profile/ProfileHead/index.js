import React, { useEffect } from "react";
import {
  HeadWrapper,
  Wallpaper,
  Avatar,
  Name,
  HeadBar,
  Button,
  ButtonPut
} from "./style";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import { Icon } from "@iconify/react";

const headbar = [
  {
    button: "Profile",
  },
  {
    button: "Photos",
  }
]

export default function ProfileHead({ user, userID, selectedUser }) {
  const [isPreview, setIsPreview] = React.useState(false);
  const [preview, setPreview] = React.useState("")


  const handleOpen = (e) => {
    setIsPreview(true);
    setPreview(e.target.src)
    console.log(e.target);
  }

  const handleClose = () => {
    setIsPreview(false);
  }

  const renderPreviewFile = (source) => {
    return (
      <>
        <img src={source} alt="" />
        <Icon icon="bi:x-square" color="#fff" width="32" height="32" className="cls" onClick={handleClose} />
      </>
    )
  }

  return (
    <div>
      <HeadWrapper>
        <HeadBar>
          {headbar?.map((btn) => (
            <Button key={btn.button}>{btn.button}</Button>
          ))}
          {userID !== selectedUser ? (
            <>
              <ButtonPut><AddCircleOutlineIcon /></ButtonPut>
              <ButtonPut><FavoriteBorderIcon /></ButtonPut>
              <ButtonPut><ChatIcon /></ButtonPut>
            </>
          ) : ("")}
        </HeadBar>
        <div key={user.userID}>
          <Wallpaper src={user.backgroundImage} onClick={handleOpen} />
          <Avatar src={user.avatar} onClick={handleOpen} />
          <Name>{user.name}</Name>
        </div>
      </HeadWrapper>
      <div className={`model ${isPreview ? "open" : ""}`}>
        {renderPreviewFile(preview)}
      </div>
    </div>
  );
};

