import React, { useState, useEffect, useCallback } from "react";
import ChatWindow from "../../components/Chat/ChatWindow";
import ChatBar from "../../components/Chat/ChatBar";
import "./Messenger.css";

const Messenger = React.memo(({ userID, socket }) => {
  const [chosenUserInfo, setChosenUserInfo] = useState("");
  const [conversationList, setConversationList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchList = async () => {
      const result = await fetch(`http://localhost:8888/chat`, {
        method: "GET",
        headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
      });
      const listOfConversations = (await result.json()).data;
      setConversationList(listOfConversations);

      const firstConversation = listOfConversations[0];
      setChosenUserInfo({ avatar: firstConversation.avatar, name: firstConversation.name, userID: firstConversation.userID });
    };

    token && fetchList();
  }, []);

  const updateConversationList = useCallback((updatedData) => {
    setConversationList((prevList) => {
      let updatedConversation;
      const newConversationList = prevList.filter((conversation) => {
        if (conversation.userID === updatedData.userID) {
          updatedConversation = { ...conversation, message: updatedData.content, isSeen: !!updatedData.isSeen };
        }
        return conversation.userID !== updatedData.userID;
      });
      newConversationList.unshift(updatedConversation);
      return newConversationList;
    });
  }, []);

  const openConversation = (targetUserID) => {
    setChosenUserInfo(targetUserID);
  };

  const seenMessage = (messageID) => {};

  return (
    <div className="messenger">
      <ChatWindow chosenUserInfo={chosenUserInfo} socket={socket} userID={userID} newMessageReceivedHandler={updateConversationList} />
      <ChatBar openConversation={openConversation} seenMessage={seenMessage} conversationList={conversationList} />
    </div>
  );
});

export default Messenger;
