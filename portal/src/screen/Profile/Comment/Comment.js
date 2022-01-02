import React, { useState } from "react";
import "./Comment.css";
const Comment = () => {
  return (
    <div className="comment__wrapper">
      <img className="comment__user-avatar"></img>
      <div className="comment__content__wrapper">
        <p className="comment__user-name">Testing user name</p>
        <p className="comment__content">Testing message</p>
      </div>
    </div>
  );
};

export default Comment;
