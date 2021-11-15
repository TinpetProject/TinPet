import React from "react";
import ChatBarElement from "./ChatBarElement";
import "./ChatBar.css";
const ChatBar = React.memo(({openConversation}) => {
  const conversationList = [
    {
      avatar: "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg",
      message: "Testing message",
      isSeen: true,
      name: "Testing user",
      receiveTime: "Testing Time",
      userID: 1,
    },
    {
      avatar: "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg",
      message: "Testing message 2",
      isSeen: false,
      name: "Testing user 2",
      receiveTime: "Testing Time",
      userID: 2,
    },
    {
      avatar: "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg",
      message: "Testing message 3",
      isSeen: true,
      name: "Testing user 3",
      receiveTime: "Testing Time",
      userID: 3,
    },
  ];

  return (
    <>
      <div className="chat-bar__navigation">
        <div className="chat-bar__navigation__section">Recent</div>
        <div className="chat-bar__navigation__section">Request</div>
      </div>
      <ul className="chat-bar__content">
        {conversationList.map((conversation) => {
          return <ChatBarElement key={conversation.userID} conversation={conversation} openConversation={openConversation} />;
        })}
      </ul>
    </>
  );
});

export default ChatBar;
