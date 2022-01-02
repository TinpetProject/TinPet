import React, { useState } from "react";
import "./CommentList.css";
import Comment from "../Comment/Comment";

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);
  return (
    <div className="post__comment-list">
      {/* {commentList.map((comment) => {
          return <Comment/>
        })} */}
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentList;
