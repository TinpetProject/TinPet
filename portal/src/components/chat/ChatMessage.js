import { Avatar } from "@mui/material";
import React from "react";
import "./ChatMessage.css";

const ChatMessage = React.memo(({ message, isSender, isAvarShow, lastMessageRef = null, chosenUserAvatar,userAvatar }) => {

  return (
    <div className={isSender ? "chat-wrapper--sender" : "chat-wrapper--receiver"} ref={lastMessageRef}>
      <div className={`chat__avatar ${isAvarShow ? "" : "hidden"}`}>
        <Avatar alt="corgi" src={isSender? userAvatar:chosenUserAvatar} />
      </div>
      <p className="chat__message">{message}</p>
    </div>
  );
});

export default ChatMessage;
