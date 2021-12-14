import React from "react";
import { Avatar } from "@mui/material";
import "./ChatBarElement.css";
const ChatBarElement = React.memo(({ conversation, openConversation }) => {
  const { avatar, message, isSeen, name, receiveTime, userID } = conversation;

  return (
    <li className="chat-bar__content__element" onClick={() => openConversation(userID)}>
      <div className="content__element__avatar">
        <Avatar alt="user-avatar" src={avatar} />
      </div>
      <p className={`content__element__message ${isSeen ? null : "not-seen"}`}>{message}</p>
    </li>
  );
});

export default ChatBarElement;
