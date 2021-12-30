import { Avatar } from "@mui/material";
import React from "react";
import "./ChatBarElement.css";

const ChatBarElement = React.memo(({ conversation, openConversation, seenMessage }) => {
  const { avatar, message, isSeen, name, userID } = conversation;
  const fakeAvatar = "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg";

  const onClickHandler = () => {
    !isSeen && seenMessage();
    return openConversation(userID);
  };

  return (
    <li className="conversation" onClick={onClickHandler}>
      <div className="conversation__avatar">
        <Avatar alt="user-avatar" src={fakeAvatar} />
      </div>
      <div className="conversation__content-wrapper">
        <p className="conversation__name">{name}</p>
        <p className={`conversation__message ${isSeen ? "" : "not-seen"}`}>{message}</p>
      </div>
    </li>
  );
});

export default ChatBarElement;
