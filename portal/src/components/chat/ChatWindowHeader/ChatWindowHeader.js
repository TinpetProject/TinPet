import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import "./ChatWindowHeader.css";

const ChatWindowHeader = ({ chosenUserID, socket ,updateChosenUserInfo }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [chosenUserInfo, setChosenUserInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const subscribeToSocket = () => {
      socket?.on("status", (data) => {
        console.log("hearing");
        if (data.userID === chosenUserID) setIsOnline(data.isOnline);
      });
    };
    const getChosenUserInfo = async () => {
      const rawData = await fetch(`http://localhost:8888/user/brief/${chosenUserID}`, {
        method: "GET",
        headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
      });
      if (!rawData.ok) return;

      const userInfo = (await rawData.json()).data;
      setChosenUserInfo(userInfo);
      updateChosenUserInfo(userInfo);
    };
    chosenUserID!=="chats" && subscribeToSocket();
    chosenUserID!=="chats" && getChosenUserInfo();

    //clean up socket
    return () => {
      socket?.off("status");
    };
  }, [chosenUserID]);

  return (
    <div className="chat-window__header">
      <div className="header__avatar">
        <Avatar alt="user-avatar" src={chosenUserInfo.avatar} />
        <div className={`header__status--icon ${isOnline ? "online" : ""}`}></div>
      </div>
      <div className="name-status-wrapper">
        <p className="header__name">{chosenUserInfo.name}</p>
        <p className="header__status--text">{isOnline ? "Đang hoạt động" : "Không hoạt động"}</p>
      </div>
    </div>
  );
};

export default ChatWindowHeader;
