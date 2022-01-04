import React, { useState, useEffect, useRef, useCallback } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import "./ChatWindow.css";
import ChatWindowHeader from "./ChatWindowHeader/ChatWindowHeader";

const ChatWindow = React.memo(({ userID, chosenUserID, socket, newMessageReceivedHandler, onSeenMessage,userAvatar ,chosenUserInfo = null,setChosenUserInfo}) => {
  const [conversation, setConversation] = useState([]);
  const [messageOffset, setMessageOffset] = useState(null);
  const [hasMoreMessage, setHasMoreMessage] = useState(true);
  const [clicker, setClicker] = useState(0);
  const additionalOffset = useRef(0);
  const token = localStorage.getItem("token");
  let isLatestSenderMessage = true;
  let isLatestReceiverMessage = true;

  useEffect(() => {
    const resetComponentState = () => {
      setHasMoreMessage(true);
      setMessageOffset(0);
      setConversation([]);
      setClicker((prev) => (prev += 1));
      additionalOffset.current = 0;
    };
    chosenUserID && resetComponentState();
  }, [chosenUserID]);

  useEffect(() => {
    const subscribeToSocket = () => {
      socket?.on("message", (data) => {
        // console.log("receive msg");
        newMessageReceivedHandler(data);
        if (data.userID === chosenUserID) setConversation((prev) => [{ ...data }, ...prev]);
      });
    };
    subscribeToSocket();

    //cleans up subscribe
    return () => {
      socket?.off("message");
    };
  }, [socket, chosenUserID]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("seenMessage", (data) => {
  //       console.log("seenMessage");
  //       // socket.removeNotification(userID, messageID);
  //       // newMessageReceivedHandler(data);
  //       // if (data.userID === chosenUserID)
  //       //   setConversation((prev) => [{ ...data }, ...prev]);
  //     });
  //   }
  // }, [socket]);

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
    chosenUserID && socket && hasMoreMessage && fetchConversation();
  }, [messageOffset, clicker, socket]);
  // }, [messageOffset, chosenUserID, socket]);

  //handle infinite scrolling
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

  const sendMessage = useCallback(
    async (message) => {
      const rawData = await fetch(`http://localhost:8888/chat`, {
        method: "POST",
        headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
        body: JSON.stringify({ targetUserID: chosenUserID, content: message }),
      });
      const data = (await rawData.json()).data;

      const newMessage = { userID, content: message, messageID: data.messageID };
      setConversation((prev) => [newMessage, ...prev]);

      const newMessageForChatBar = { userID: chosenUserID, content: message, isSeen: true, sender: userID };
      newMessageReceivedHandler(newMessageForChatBar);

      additionalOffset.current = additionalOffset.current + 1;
    },
    [token, chosenUserID]
  );

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

  // if (!chosenUserInfo) {
  if (!chosenUserID) {
    return (
      <div className="messenger__chat-window">
        <div className="chat-window__skeleton">
          <p>It looks like you don't have any message</p>
        </div>
      </div>
    );
  }

  return (
    <div className="messenger__chat-window">
      <ChatWindowHeader chosenUserID={chosenUserID} socket={socket} updateChosenUserInfo={setChosenUserInfo} />
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
              chosenUserAvatar={chosenUserInfo.avatar}
              userAvatar={userAvatar}
            />
          );
        })}
      </div>
      <ChatInput
        sendMessageHandler={sendMessage}
        onSeenMessage={onSeenMessage(conversation[conversation.length - 1]?.messageID)}
      />
    </div>
  );
});

export default ChatWindow;
