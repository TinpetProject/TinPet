import React from "react";
import {
  LogoWrapper,
  AppTitle,
  NavBarWrapper,
  UserAvatarWrapper,
  UserWrapper,
  UserNotiWrapper,
} from "./style";
import PetsIcon from "@mui/icons-material/Pets";
import Avatar from "@mui/material/Avatar";
import Search from "../Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <LogoWrapper>
        <PetsIcon fontSize="large"></PetsIcon>
        <AppTitle>Tinpet</AppTitle>
      </LogoWrapper>
      <Search />
      <UserWrapper>
        <UserNotiWrapper>
          <NotificationsNoneIcon fontSize="large"></NotificationsNoneIcon>
        </UserNotiWrapper>
        <UserAvatarWrapper>
          <Avatar
            alt="corgi"
            src="https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg"
          />
        </UserAvatarWrapper>
      </UserWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
