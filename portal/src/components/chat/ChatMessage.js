import { Avatar } from "@mui/material";
import React from "react";
import "./ChatMessage.css";

const ChatMessage = React.memo(({ message, isSender, refference }) => {
  if (refference.current) refference.current.classList.add("hidden");

  return (
    <div className={isSender ? "chat-wrapper--sender" : "chat-wrapper--receiver"}>
      <div className="chat__avatar" ref={refference}>
        <Avatar alt="corgi" src="https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg" />
      </div>
      <p className="chat__message">{message}</p>
    </div>
  );
});

export default ChatMessage;
