import React, { useRef, useState } from "react";
import ChatWindow from "../components/chat/ChatWindow";
import ChatBar from "../components/chat/ChatBar";
import "./messenger.css";

const Messenger = React.memo(({ userID ,socket}) => {

  const [chosenUserID, setChosenUserID] = useState("");

  const openConversation = (targetUserID) => {
    setChosenUserID(targetUserID);
  };

  return (
    <div className="messenger">
      <ChatWindow chosenUserID={chosenUserID} socket={socket} userID={userID} />
      <ChatBar openConversation={openConversation} userID={userID} />
    </div>
  );
});

export default Messenger;
