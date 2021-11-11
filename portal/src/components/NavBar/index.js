import React from "react";
import { LogoWrapper, AppTitle, NavBarWrapper, UserAvatarWrapper, UserWrapper, UserNotiWrapper } from "./style";
import PetsIcon from "@mui/icons-material/Pets";
import Avatar from "@mui/material/Avatar";
import Search from "../Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Icon } from "@iconify/react";
import "./style.css";

const NavBar = () => {
    return (
        <NavBarWrapper>
            <LogoWrapper>
                <Icon className="nav__logo-icon" icon="icons8:cat-footprint" />
                <AppTitle>Tinpet</AppTitle>
            </LogoWrapper>
            <Search />
            <UserWrapper>
                <UserNotiWrapper>
                    <Icon className="nav__noti-icon" icon="bi:bell" />
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
