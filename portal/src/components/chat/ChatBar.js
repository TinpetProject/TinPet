import ChatBarElement from "./ChatBarElement";
import React from "react";
import "./ChatBar.css";

const ChatBar = React.memo(({ conversationList, userID }) => {
  console.log(conversationList);
  return (
    <div className="messenger__chat-bar">
      {/* <div className="chat-bar__navigation">
        <div className="chat-bar__navigation__section">Recent</div>
        <div className="chat-bar__navigation__section">Request</div>
      </div> */}
      <ul className="chat-bar__content">
        {conversationList?.map((conversation) => (
          <ChatBarElement key={conversation.userID} conversation={conversation} userID={userID} />
        ))}
      </ul>
    </div>
  );
});

export default ChatBar;
