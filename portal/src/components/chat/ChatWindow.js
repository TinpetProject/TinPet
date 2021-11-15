import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useRef } from "react";
import ChatInput from "./ChatInput";

const ChatWindow = React.memo(({ userID, chosenUserID, socket }) => {
  const senderRef = useRef();
  const receiverRef = useRef();
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    socket.on("message", (data) => {
      if (data.userID === chosenUserID) {
        setConversation((prev) => [...prev, { ...data }]);
      }
    });
  }, [socket, chosenUserID]);

  useEffect(() => {
    const token = localStorage.getItem(userID);
    const fetchConversation = async () => {
      chosenUserID = chosenUserID ? chosenUserID : userID;
      const result = await fetch(`http://localhost:8888/chat/${chosenUserID}/1`, {
        method: "GET",
        headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
      });
      const conversation = (await result.json()).data;
      setConversation(conversation);
    };
    fetchConversation();
  }, [chosenUserID]);

  const sendMessage = async (message) => {
    const messageID = Math.random() * 1000000000000000;
    setConversation((prev) => [...prev, { userID, content: message, messageID }]);
    const token = localStorage.getItem(userID);
    const result = await fetch(`http://localhost:8888/chat`, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
      body: JSON.stringify({ targetUserID: chosenUserID, content: message }),
    });
    // return socket.emit("message", { receiver: chosenUserID, message, username: userID, messageID });
  };

  return (
    <div className="messenger__chat-window">
      <div className="chat-window__messages-wrapper">
        {conversation
          ? conversation.map((message) => {
              const isSender = message.userID === userID;
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
