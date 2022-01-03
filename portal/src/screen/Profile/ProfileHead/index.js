import React from "react";
import {
  HeadWrapper,
  Wallpaper,
  Avatar,
  Name,
  HeadBar,
  Button,
  ButtonPut
} from "./style";
import { Users } from "../dummyData"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";
const headbar = [
  {
    link: "/profile",
    button: "Profile",
  },
  {
    link: "/profile/gallery",
    button: "Photos",
  }
]

export default function ProfileHead() {
  return (
    <div>
      <HeadWrapper>
        <HeadBar> 
          {headbar?.map((btn) =>(
            <Link to={btn.link} key={btn.button} style={{textDecoration: 'none'}}>
              <Button>{btn.button}</Button>
            </Link>
            ))}
          <ButtonPut><AddCircleOutlineIcon/></ButtonPut>
          <ButtonPut><FavoriteBorderIcon/></ButtonPut>
          <ButtonPut><ChatIcon/></ButtonPut>
        </HeadBar>
        {Users.map((u) => (
          <div key={u.userid}>
            <Wallpaper src={u.wallPaper}/>
            <Avatar src={u.profilePicture}/>
            <Name>{u.username}</Name>
          </div>
        ))}
      </HeadWrapper>
    </div>
  );
};

