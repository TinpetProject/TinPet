import React, { useState, useEffect } from "react";
import ChatWindow from "../components/chat/ChatWindow";
import ChatBar from "../components/chat/ChatBar";
import "./messenger.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Messenger = React.memo(({ userID, socket }) => {
  const [chosenUserID, setChosenUserID] = useState("");
  const [conversationList, setConversationList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const token = localStorage.getItem(userID);
      const result = await fetch(`http://localhost:8888/chat`, {
        method: "GET",
        headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
      });
      const listOfConversations = (await result.json()).data;
      setConversationList(listOfConversations);
      setChosenUserID(listOfConversations[0].userID);
    };
    fetchList();
  }, []);

  const getUserInfoByID = async (userID) => {};

  const updateConversationList = (updatedData) => {
    setConversationList((prevList) => {
      let updatedConversation;
      const newConversationList = prevList.filter((conversation) => {
        if (conversation.userID === updatedData.userID) {
          // isNewConversation = false;
          updatedConversation = { ...conversation, message: updatedData.content, isSeen: !!updatedData.isSeen };
        }
        return conversation.userID !== updatedData.userID;
      });
      // if (isNewConversation) {
      //   console.log("in here");
      //   const user = await getUserInfoByID(updatedData.userID);
      //   const newConversation = { avatar: user.avartar, message: updatedData.content, isSeen: false, name: user.name, userID: updatedData.userID };
      //   newConversationList.unshift(newConversation);
      //   return newConversationList;
      // }
      newConversationList.unshift(updatedConversation);
      return newConversationList;
    });
  };

  const openConversation = (targetUserID) => {
    setChosenUserID(targetUserID);
  };

  const seenMessage = (messageID) => {};

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="messenger">
        <ChatWindow chosenUserID={chosenUserID} socket={socket} userID={userID} newMessageReceivedHandler={updateConversationList} />
        <ChatBar openConversation={openConversation} seenMessage={seenMessage} conversationList={conversationList} />
      </div>
    </>
  );
});

export default Messenger;
