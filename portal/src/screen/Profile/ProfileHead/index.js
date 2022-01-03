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

const headbar = [
  {
    button: "Profile",
  },
  {
    button: "Photos",
  }
]

export default function ProfileHead({ user }) {

  return (
    <div>
      <HeadWrapper>
        <HeadBar>
          {headbar?.map((btn) => (
            <Button key={btn.button}>{btn.button}</Button>
          ))}
          <ButtonPut><AddCircleOutlineIcon /></ButtonPut>
          <ButtonPut><FavoriteBorderIcon /></ButtonPut>
          <ButtonPut><ChatIcon /></ButtonPut>
        </HeadBar>
        <div key={user.userID}>
          <Wallpaper src={user.backgroundImage} />
          <Avatar src={user.avatar} />
          <Name>{user.name}</Name>
        </div>
      </HeadWrapper>
    </div>
  );
};

