import ChatBarElement from "./ChatBarElement";
import React, { useState, useEffect } from "react";
import "./ChatBar.css";

const ChatBar = React.memo(({ openConversation }) => {
  const [conversationList, setConversationList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const result = await fetch("http://localhost:8888/chat");
      const listOfConversations = (await result.json()).data;
      console.log(listOfConversations);
      setConversationList(listOfConversations);
    };
    fetchList();
  }, []);

  return (
    <div className="messenger__chat-bar">
      <div className="chat-bar__navigation">
        <div className="chat-bar__navigation__section">Recent</div>
        <div className="chat-bar__navigation__section">Request</div>
      </div>
      <ul className="chat-bar__content">
        {conversationList
          ? conversationList.map((conversation) => {
              return <ChatBarElement key={conversation.userID} conversation={conversation} openConversation={openConversation} />;
            })
          : null}
      </ul>
    </div>
  );
});

export default ChatBar;
