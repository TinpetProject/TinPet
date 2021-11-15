import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useRef } from "react";
import ChatInput from "./ChatInput";

const ChatWindow = React.memo(({ chosenUserID, socket }) => {
  const senderRef = useRef();
  const receiverRef = useRef();
  const [conversation, setConversation] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setConversation((prev) => [...prev, { ...data }]);
    });
  }, [socket]);

  useEffect(() => {
    const fetchConversation = async () => {
      const result = await fetch(`http://localhost:8888/chat/${chosenUserID}/1`);
      const conversation = (await result.json()).data;
      console.log("in chat window", `http://localhost:8888/chat/${chosenUserID}/1`, conversation);
      setConversation(conversation);
    };
    fetchConversation();
  }, [chosenUserID]);

  const login = () => {
    return socket.emit("login", { socketID: socket.id, username: name });
  };

  const sendMessage = (message) => {
    const messageID = Math.random() * 1000000000000000;
    setConversation((prev) => [...prev, { userID: name, content: message, messageID }]);
    return socket.emit("message", { receiver: chosenUserID, message, username: name, messageID });
  };

  return (
    <div className="messenger__chat-window">
      <div>
        <label> Đăng nhập</label>
        <input value={name} onChange={(event) => setName(event.target.value)}></input>
        <button className="btn" onClick={login}></button>
      </div>
      <div className="chat-window__messages-wrapper">
        {conversation
          ? conversation.map((message) => {
              const isSender = message.userID === name;
              return (
                <ChatMessage key={message.messageID} isSender={isSender} message={message.content} refference={isSender ? senderRef : receiverRef} />
              );
            })
          : null}
      </div>
      <ChatInput sendMessageHandler={sendMessage} />
    </div>
  );
});

export default ChatWindow;
