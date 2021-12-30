import ChatBarElement from "./ChatBarElement";
import React from "react";
import "./ChatBar.css";

const ChatBar = React.memo(({ openConversation, conversationList, seenMessage }) => {
  return (
    <div className="messenger__chat-bar">
      <div className="chat-bar__navigation">
        <div className="chat-bar__navigation__section">Recent</div>
        <div className="chat-bar__navigation__section">Request</div>
      </div>
      <ul className="chat-bar__content">
        {conversationList?.map((conversation) => (
          <ChatBarElement key={conversation.userID} conversation={conversation} seenMessage={seenMessage} openConversation={openConversation} />
        ))}
      </ul>
    </div>
  );
});

export default ChatBar;
