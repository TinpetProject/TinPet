import React from "react";
import "./Comment.css";
import { timeSince } from "../../../utils/datetime";
const Comment = (props) => {
  const anHour = 60 * 60 * 1000;
  const displayedTimeSince = `${timeSince(new Date(Date.now() - anHour))}  ago`;
  // console.log(props, "in comment");
  return (
    <div className="comment__wrapper">
      <img className="comment__user-avatar" src={props.avatar} alt="ava" />
      <div className="comment__content__wrapper">
        <div className="comment___comment-header">
          <p className="comment__user-name">{props.name}</p>
        </div>
        <p className="comment__content">{props.content}</p>
        <p className="comment__created-at">{displayedTimeSince}</p>
      </div>
    </div>
  );
};

export default Comment;
