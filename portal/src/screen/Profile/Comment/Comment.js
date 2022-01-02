import React, { useState } from "react";
import "./Comment.css";
import { timeSince } from "../../../utils/datetime";
const Comment = (props) => {
  const anHour = 60*60*1000;
  const displayedTimeSince = `${timeSince(new Date(Date.now()- anHour))}  ago`;
  return (
    <div className="comment__wrapper">
      <img className="comment__user-avatar"></img>
      <div className="comment__content__wrapper">
        <div className="comment___comment-header">
          <p className="comment__user-name">Testing user name</p>
        </div>
        <p className="comment__content">Testing message</p>
        <p className="comment__created-at">{displayedTimeSince}</p>
      </div>
    </div>
  );
};

export default Comment;
