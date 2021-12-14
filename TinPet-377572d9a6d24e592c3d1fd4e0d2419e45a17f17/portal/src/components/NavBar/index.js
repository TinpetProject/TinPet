import React from "react";
import { Icon } from "@iconify/react";
import { LogoWrapper, AppTitle, NavBarWrapper, UserAvatarWrapper, UserWrapper, UserNotiWrapper, Menu, MenuItem } from "./style";
import Avatar from "@mui/material/Avatar";
import Search from "../Search";
import "./style.css";
import { useHistory } from "react-router";

const NavBar = () => {
    const history = useHistory();

    return (
        <NavBarWrapper>
            <LogoWrapper>
                <Icon className="nav__logo-icon" icon="icons8:cat-footprint" />
                <AppTitle>Tinpet</AppTitle>
            </LogoWrapper>{" "}
            <Search />
            <UserWrapper>
                <UserNotiWrapper>
                    <Icon className="nav__noti-icon" icon="bi:bell" />
                </UserNotiWrapper>{" "}
                <UserAvatarWrapper>
                    <Avatar
                        alt="corgi"
                        src="https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg"
                    />
                    <Menu>
                        <MenuItem> Setting </MenuItem> <MenuItem> Language </MenuItem>{" "}
                        <MenuItem onClick={() => history.push("/login")}> Log out </MenuItem>{" "}
                    </Menu>{" "}
                </UserAvatarWrapper>{" "}
            </UserWrapper>{" "}
        </NavBarWrapper>
    );
};

export default NavBar;
