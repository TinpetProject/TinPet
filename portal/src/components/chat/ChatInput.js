import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = React.memo(({ sendMessageHandler, onSeenMessage }) => {
  const [message, setMessage] = useState("");

  const onChangeHandler = (event) => {
    const value = event.target.value;
    return setMessage(value);
  };

  const onClickHandler = () => {
    if (!!onSeenMessage) onSeenMessage();
    sendMessageHandler(message);
    return setMessage("");
  };

  const onKeyPressHandler = (event) => {
    return event.key === "Enter" ? onClickHandler() : null;
  };

  // const onSeenMessage = ()

  return (
    <div className="chat-window__input-wrapper">
      <input value={message} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} placeholder="Type in here" ></input>
      <div className="icon-wrapper" onClick={onClickHandler}>
        <SendIcon />
      </div>
    </div>
  );
});

export default ChatInput;
