import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import "./ChatWindowHeader.css";

const ChatWindowHeader = ({ chosenUserAvatar, chosenUserName }) => {
  const fakeAvatar = "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg";
  const [isOnline, isOffline] = useState(false);
  return (
    <div className="chat-window__header">
      <div className="header__avatar">
        <Avatar alt="user-avatar" src={fakeAvatar} />
      </div>
      <div className="name-status-wrapper">
        <p className="header__name">{chosenUserName}</p>
        <p className={`header__status ${isOnline ? "online" : ""}`}>{isOnline ? "Đang hoạt động" : "Không hoạt động"}</p>
      </div>
    </div>
  );
};

export default ChatWindowHeader;
