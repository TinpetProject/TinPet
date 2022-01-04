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
import axios from "axios";

const StyledButton = styled(Button)`
  text-decoration: none;
  text-transform: none !important;
  color: inherit !important;
  border-bottom: #dfdfdf solid 1px !important;
`;

const NavBar = React.memo(({ userID, socket, showSetting, logOutHandler }) => {
  const history = useHistory();
  const location = useLocation();
  const [notifications, setNotifications] = useState([]);
  const [openNotification, setOpenNotification] = useState(false);
  const [user, setUser] = React.useState({});

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
  useEffect(() => {
    const getUser = async () => {
      axios
        .get(`/user/${userID}/profile`)
        .then((response) => {
          console.log(response);
          setUser({
            ...response.data.data,
            backgroundImage:
              "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/s600x600/266220855_1555547244801156_1721467570560311439_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=KZX_ckYYgoAAX9rQ2Mf&_nc_ht=scontent.fhan5-2.fna&oh=00_AT_PT-eDMv1zBDyOnOebOfN9V-4j36SY5wkJZ0wGCcodTQ&oe=61D7E84E",
          });
        })
        .catch((error) => console.log(error));
    };

    userID && getUser();
  }, [userID]);

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
            // console.log(location.pathname);
            // console.log(`messenger/${userID}`);
            const isOnRightPath = location.pathname?.includes(
              `messenger/${userID}`
            );
            // console.log(isOnRightPath);
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
      <LogoWrapper onClick={() => history.push("/")}>
        <Icon className="nav__logo-icon" icon="icons8:cat-footprint" />
        <AppTitle>Tinpet</AppTitle>
      </LogoWrapper>{" "}
      <Search />
      <UserWrapper>
        <UserNotiWrapper onClick={() => {if(notifications?.length > 0) setOpenNotification(!openNotification)}}>
          <Icon
            className="nav__noti-icon"
            icon="bi:chat-dots"
          />
          {notifications?.length > 0 && (
            <div className="nav__counter">{notifications.length}</div>
          )}
        </UserNotiWrapper>{" "}
        <UserAvatarWrapper>
          <Link to={`/profile/${userID}`}>
            <Avatar
              alt="corgi"
              src={user.avatar || "https://res.cloudinary.com/thecodingpanda/image/upload/v1641272668/zoyndaseei9wnbrybwxr.png?fbclid=IwAR2YOBaBi-4FdUEFD_XjI9vgrwHAcfpupP8vnGS7p26Lrq8v3XGzFvD3pxk"}
            />
          </Link>
          <Menu>
            <MenuItem onClick={showSetting}> Setting </MenuItem> 
            <MenuItem> Language </MenuItem>{" "}
            <MenuItem onClick={logOutHandler}> Log out </MenuItem>{" "}
          </Menu>{" "}
        </UserAvatarWrapper>{" "}
      </UserWrapper>{" "}
      {openNotification && notifications?.length > 0 && (
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
