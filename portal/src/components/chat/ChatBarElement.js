import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./ChatBarElement.css";

const ChatBarElement = React.memo(({ conversation, openConversation, userID }) => {
  const { avatar, message, isSeen, name, userID: targetUserID, sender } = conversation;
  const fakeAvatar = "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg";
  const [isMessageSeen, setIsMessageSeen] = useState(isSeen);
  const [isMessageSentByMe, setIsMessageSentByMe] = useState(sender === userID);

  useEffect(() => {
    setIsMessageSeen(isSeen);
  }, [isSeen]);

  useEffect(() => {
    setIsMessageSentByMe(sender === userID);
  }, [sender]);

  const onClickHandler = () => {
    !isSeen && setIsMessageSeen(true);
    return openConversation({ userID: targetUserID, avatar, name });
  };

  const generateMessage = () => {
    return isMessageSentByMe ? "You: " + message : message;
  };

  const generateClassNameForMessage = () => {
    const className = "conversation__message";
    return isMessageSentByMe || isMessageSeen ? className : className + " not-seen";
  };

  return (
    <li className="conversation" onClick={onClickHandler}>
      <div className="conversation__avatar">
        <Avatar alt="user-avatar" src={fakeAvatar} />
      </div>
      <div className="conversation__content-wrapper">
        <p className="conversation__name">{name}</p>
        <p className={generateClassNameForMessage()}>{generateMessage()}</p>
      </div>
    </li>
  );
});

export default ChatBarElement;
