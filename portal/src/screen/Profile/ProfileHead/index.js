import React from "react";
import {
  HeadWrapper,
  Wallpaper,
  Avatar,
  Name,
  HeadBar,
  Button
} from "./style";
import { Users } from "../dummyData"

const headbar = [
  {
    button: "Profile",
  },
  {
    button: "Followers",
  },
  {
    button: "Detail info",
  },
  {
    button: "Photos",
  },
  {
    button: "Video",
  }
]

export default function ProfileHead() {
  return (
    <div>
      <HeadWrapper>
        <HeadBar> 
          {headbar?.map((btn) =>(
            <Button>{btn.button}</Button>
            ))}
        </HeadBar>
        {Users.map((u) => (
          <>
            <Wallpaper src={u.wallPaper}/>
            <Avatar src={u.profilePicture}/>
            <Name>{u.username}</Name>
          </>
        ))}
      </HeadWrapper>
    </div>
  );
};

