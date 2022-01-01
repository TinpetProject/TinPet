import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { LogoWrapper, AppTitle, NavBarWrapper, UserAvatarWrapper, UserWrapper, UserNotiWrapper, Menu, MenuItem } from "./style";
import Avatar from "@mui/material/Avatar";
import Search from "../Search";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = React.memo(({ userID, socket, logOutHandler }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on("getNotification", (data) => {
        // console.log("getNotification");
        // console.log(data);
        // if(data.)
        if(data[0]?.targetUserID === userID) {
          setNotifications((prev) => [...prev, ...data]);
        }
      });
    }
  }, [socket, userID]);
  console.log(notifications);

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
          {notifications.length > 0 && <div className="nav__counter">{notifications.length}</div>}
        </UserNotiWrapper>{" "}
        <UserAvatarWrapper>
          <Link to="/profile">
            <Avatar
              alt="corgi"
              src="https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg"
            />
          </Link>
          <Menu>
            <MenuItem> Setting </MenuItem> <MenuItem> Language </MenuItem> <MenuItem onClick={logOutHandler}> Log out </MenuItem>{" "}
          </Menu>{" "}
        </UserAvatarWrapper>{" "}
      </UserWrapper>{" "}
    </NavBarWrapper>
  );
});

export default NavBar;
