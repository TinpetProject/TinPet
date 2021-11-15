import React, { useRef, useState } from "react";
import openSocket from "socket.io-client";
import ChatWindow from "../components/chat/ChatWindow";
import ChatBar from "../components/chat/ChatBar";
import "./messenger.css";

const Messenger = React.memo(() => {
  const socket = useRef();
  socket.current = openSocket("http://localhost:8888");

  const [chosenUserID, setChosenUserID] = useState("");

  const openConversation = (targetUserID) => {
    setChosenUserID(targetUserID);
  };

  return (
    <div className="messenger">
      <ChatWindow chosenUserID={chosenUserID} socket={socket.current} />
      <ChatBar openConversation={openConversation} />
    </div>
  );
});

export default Messenger;
