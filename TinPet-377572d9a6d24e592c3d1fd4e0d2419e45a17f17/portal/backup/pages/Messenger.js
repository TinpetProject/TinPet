import React, { useEffect } from "react";
import openSocket from "socket.io-client";
import { useRef } from "react";
import { useState } from "react";
import "./messenger.css";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import ChatBar from "../components/chat/ChatBar";

const Messenger = () => {
  const socket = useRef();
  const [conversation, setConversation] = useState([]);
  const [receiver, setReceiver] = useState("");
  const [name, setName] = useState("");
  const [chosenUserID, setChosenUserID] = useState("");

  useEffect(() => {
    // socket.current = openSocket("http://localhost:8888");
    // socket.current.on("message", (data) => {
    //   setConversation((prev) => [...prev, { ...data }]);
    // });
  }, []);

  const login = () => {
    return socket.current.emit("login", { socketID: socket.current.id, username: name });
  };

  const openConversation = (targetUserID) => {
    setChosenUserID(targetUserID);
  };

  const sendMessage = (message) => {
    const messageID = Math.random() * 1000000000000000;
    setConversation((prev) => [...prev, { userID: name, content: message, messageID }]);
    return socket.current.emit("message", { receiver, message, username: name, messageID });
  };

  return (
    <div className="messenger">
      <div>
        <label> Đăng nhập</label>
        <input value={name} onChange={(event) => setName(event.target.value)}></input>
        <button className="btn" onClick={login}></button>
        <label> Tên người muốn gọi</label>
        <input value={receiver} onChange={(event) => setReceiver(event.target.value)}></input>
      </div>
      <div className="messenger__chat-window">
        <ChatWindow conversation={conversation} name={name} chosenUserID={chosenUserID}/>
        <ChatInput sendMessageHandler={sendMessage} />
      </div>
      <div className="messenger__chat-bar">
        <ChatBar openConversation={openConversation} />
      </div>
    </div>
  );
};

export default Messenger;
