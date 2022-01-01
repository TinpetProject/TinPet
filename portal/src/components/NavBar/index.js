import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  LogoWrapper,
  AppTitle,
  NavBarWrapper,
  UserAvatarWrapper,
  UserWrapper,
  UserNotiWrapper,
  Menu,
  MenuItem,
} from "./style";
import Avatar from "@mui/material/Avatar";
import Search from "../Search";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledButton = styled(Button)`
  text-decoration: none;
  text-transform: none !important;
  color: inherit !important;
  border-bottom: #dfdfdf solid 1px !important;
`;

const NavBar = React.memo(({ userID, socket, logOutHandler }) => {
  const history = useHistory();
  const location = useLocation();
  const [notifications, setNotifications] = useState([]);
  const [openNotification, setOpenNotification] = useState(false);
  // console.log(location.pathname);
  useEffect(() => {
    if (socket) {
      socket.on("getNotification", (data) => {
        // console.log("getNotification");
        setNotifications(data);
      });
    }
  }, [socket, userID]);

  useEffect(() => {
    if (notifications?.length > 0) {
        // let isOnRightPath = false;
        const rightNoti = notifications.find((noti) => 
          location.pathname.includes(`messenger/${noti.userID}`)
        );
        // console.log(rightNoti);
        if (!!rightNoti) {
          socket?.emit("seenNotification", {
            chosenUserID: rightNoti.targetUserID,
            userID: rightNoti.userID,
          });
        }
    }
  }, [location, notifications, socket])

  // console.log(notifications);

  const readOneNoti = (messageID) => {};

  const handleRead = () => {
    setNotifications([]);
    setOpenNotification(false);
  };

  const displayNotification = (message, onReadNoti) => {
    let action;
    const { senderName, type, userID, targetUserID } = message;
    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    // console.log(message);
    return (
      <StyledButton>
        <div
          className="nav__notification"
          onClick={() => {
            console.log(location.pathname);
            console.log(`messenger/${userID}`);
            const isOnRightPath = location.pathname?.includes(
              `messenger/${userID}`
            );
            console.log(isOnRightPath);
            if (!isOnRightPath) {
              history.push(`messenger/${userID}`);
            }
            socket?.emit("seenNotification", {
              chosenUserID: targetUserID,
              userID: userID,
            });
            setOpenNotification(false);
          }}
        >
          <span style={{ color: "blue" }}>{`${senderName}`}</span>{" "}
          {`has just messaged  you`}
        </div>
      </StyledButton>
    );
  };

  return (
    <NavBarWrapper>
      <LogoWrapper>
        <Icon className="nav__logo-icon" icon="icons8:cat-footprint" />
        <AppTitle>Tinpet</AppTitle>
      </LogoWrapper>{" "}
      <Search />
      <UserWrapper>
        <UserNotiWrapper onClick={() => setOpenNotification(!openNotification)}>
          <Icon className="nav__noti-icon" icon="bi:bell" />
          {notifications?.length > 0 && (
            <div className="nav__counter">{notifications.length}</div>
          )}
        </UserNotiWrapper>{" "}
        <UserAvatarWrapper>
          <Link to="/profile">
            <Avatar
              alt="corgi"
              src="https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg"
            />
          </Link>
          <Menu>
            <MenuItem> Setting </MenuItem> <MenuItem> Language </MenuItem>{" "}
            <MenuItem onClick={logOutHandler}> Log out </MenuItem>{" "}
          </Menu>{" "}
        </UserAvatarWrapper>{" "}
      </UserWrapper>{" "}
      {openNotification && (
        <div className="nav__notifications">
          {notifications?.map((n) => displayNotification(n))}
          <button className="nav__nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </NavBarWrapper>
  );
});

export default NavBar;
