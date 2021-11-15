import ChatMessage from "./ChatMessage";
import React from "react";
import { useRef } from "react";

const ChatWindow = React.memo(({ conversation, name, chosenUserID }) => {
  const senderRef = useRef();
  const receiverRef = useRef();
  // const conversation = fetch();
  // const name = fetch();
  return (
    <div className="chat-window__messages-wrapper">
      {conversation.map((message) => {
        const isSender = message.userID === name;
        return <ChatMessage key={message.messageID} isSender={isSender} message={message.content} refference={isSender ? senderRef : receiverRef} />;
      })}
    </div>
  );
});

export default ChatWindow;
