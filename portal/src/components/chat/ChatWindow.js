import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useRef, useCallback } from "react";
import ChatInput from "./ChatInput";
import "./ChatWindow.css";

const ChatWindow = React.memo(({ userID, chosenUserID, socket, newMessageReceivedHandler }) => {
  const [conversation, setConversation] = useState([]);
  const [messageOffset, setMessageOffset] = useState(null);
  const [hasMoreMessage, setHasMoreMessage] = useState(true);
  const [clicker, setClicker] = useState(0);
  const additionalOffset = useRef(0);
  let isLatestSenderMessage = true;
  let isLatestReceiverMessage = true;
  const token = localStorage.getItem("token");

  useEffect(() => {
    socket?.on("message", (data) => {
      newMessageReceivedHandler(data);
      if (data.userID === chosenUserID) setConversation((prev) => [{ ...data }, ...prev]);
    });
  }, [socket, chosenUserID]);

  useEffect(() => {
    const fetchConversation = async () => {
      const rawData = await fetch(`http://localhost:8888/chat/${chosenUserID}/${messageOffset}`, {
        method: "GET",
        headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
      });
      if (!rawData.ok) return;

      const newConversation = (await rawData.json()).data;
      if (newConversation.length === 0) return setHasMoreMessage(false);

      setConversation((prevConversation) => [...prevConversation, ...newConversation]);
    };
    if (chosenUserID && hasMoreMessage) {
      fetchConversation();
    }
  }, [messageOffset, clicker]);

  useEffect(() => {
    if (chosenUserID) {
      setHasMoreMessage(true);
      setMessageOffset(0);
      setConversation([]);
      setClicker((prev) => (prev += 1));
      additionalOffset.current = 0;
    }
  }, [chosenUserID]);

  const observer = useRef();
  const lastMessageRef = useCallback(
    (lastMessageElement) => {
      observer.current?.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        return entries[0].isIntersecting && hasMoreMessage ? setMessageOffset((prev) => prev + 20 + additionalOffset.current) : null;
      });
      return lastMessageElement ? observer.current.observe(lastMessageElement) : null;
    },
    [hasMoreMessage]
  );

  const sendMessage = async (message) => {
    const rawData = await fetch(`http://localhost:8888/chat`, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
      body: JSON.stringify({ targetUserID: chosenUserID, content: message }),
    });
    const data = (await rawData.json()).data;

    const newMessage = { userID, content: message, messageID: data.messageID };
    setConversation((prev) => [newMessage, ...prev]);

    const newMessageForChatBar = { userID: chosenUserID, content: message, isSeen: true };
    newMessageReceivedHandler(newMessageForChatBar);

    additionalOffset.current = additionalOffset.current + 1;
  };

  const shouldAvarShow = (isSender) => {
    let isAvarShow = false;
    if (isSender && isLatestSenderMessage) {
      isAvarShow = true;
      isLatestSenderMessage = false;
    }
    if (!isSender && isLatestReceiverMessage) {
      isAvarShow = true;
      isLatestReceiverMessage = false;
    }
    return isAvarShow;
  };

  return (
    <div className="messenger__chat-window">
      <div className="chat-window__headers">đây là chỗ cho phần head</div>
      <div className="chat-window__messages-wrapper">
        {conversation?.map((message, index) => {
          const isSender = message.userID === userID;
          const isLastMessage = index === conversation.length - 1;
          const isAvarShow = shouldAvarShow(isSender);
          return (
            <ChatMessage
              lastMessageRef={isLastMessage ? lastMessageRef : null}
              key={message.messageID}
              message={message.content}
              isSender={isSender}
              isAvarShow={isAvarShow}
            />
          );
        })}
      </div>
      <ChatInput sendMessageHandler={sendMessage} />
    </div>
  );
});

export default ChatWindow;
