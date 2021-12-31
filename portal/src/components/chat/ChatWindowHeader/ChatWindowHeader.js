import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import "./ChatWindowHeader.css";

const ChatWindowHeader = ({ chosenUserInfo, socket }) => {
  const { userID: chosenUserID, avatar: chosenUserAvatar, name: chosenUserName } = chosenUserInfo;
  const fakeAvatar = "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg";
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const subscribeToSocket = () => {
      socket?.on("status", (data) => {
        if (data.userID === chosenUserID) setIsOnline(data.isOnline);
      });
    };
    subscribeToSocket();

    //clean up socket
    return () => {
      socket?.off("status");
    };
  }, [chosenUserID]);

  return (
    <div className="chat-window__header">
      <div className="header__avatar">
        <Avatar alt="user-avatar" src={fakeAvatar} />
        <div className={`header__status--icon ${isOnline ? "online" : ""}`}></div>
      </div>
      <div className="name-status-wrapper">
        <p className="header__name">{chosenUserName}</p>
        <p className="header__status--text">{isOnline ? "Đang hoạt động" : "Không hoạt động"}</p>
      </div>
    </div>
  );
};

export default ChatWindowHeader;
