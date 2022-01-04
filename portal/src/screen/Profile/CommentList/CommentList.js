import React, { useState, useEffect } from "react";
import "./CommentList.css";
import Comment from "../Comment/Comment";
import { PostServices } from "../../../services";
// import { Input } from "antd";
import { Input } from "@mui/material";
const NewComment = (props) => {
  const [comment, setComment] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // console.log('do validate');
      props.onComment(e.target.value);
      setComment("");
      props.updateCountComment();
    }
  };
  return (
    <div className="comment__wrapper">
      <img className="comment__user-avatar" src={props.avatar} alt="ava" />
      <div className="comment__content__wrapper">
        <Input
          placeholder="Write a comment"
          onKeyDown={handleKeyDown}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {/* <p className="comment__content">{props.content}</p>
      <p className="comment__created-at">{displayedTimeSince}</p> */}
      </div>
    </div>
  );
};

const CommentList = React.memo(({ postID, userID, updateCountComment }) => {
  const token = localStorage.getItem("token");
  const [commentList, setCommentList] = useState([]);
  const fetchComment = async () => {
    const data = await PostServices.getPostComment(postID, token);
    // console.log(data);
    if (!!data && data.code === 200) {
      // console.log("commentList");
      setCommentList(data.data);
    }
  };
  useEffect(() => {
    !!token && fetchComment();
    // PostServices.getPostComment(postID, token)
    //   .then((data) => {
    //     console.log(data);
    //     if (!!data && data.status === 200) {
    //       setCommentList(data.data);
    //     }
    //   })
    //   .catch(console.log())
    //   .finally(() => {});;
  }, [postID, token]);

  const onComment = (content) => {
    console.log(token);
    PostServices.newComment(userID, postID, content, token)
      .then((data) => {
        // console.log(data);
        if (data.code == 200) {
          fetchComment();
        }
      })
      .catch(() => console.log())
      .finally(() => {});
  };
  // console.log(commentList);
  return (
    <div className="post__comment-list">
      {/* <Comment
        // key={comment.commentID}
        name={""}
        content={"Write a new comment"}
        // avatarUrl={comment.avatar}
      /> */}
      <NewComment onComment={onComment} updateCountComment={updateCountComment} />
      {commentList?.length > 0 &&
        commentList.map((comment) => {
          return (
            <Comment
              key={comment.commentID}
              name={comment.name}
              content={comment.content}
              avatarUrl={comment.avatar}
            />
          );
        })}
      {/* <Comment />
      <Comment />
      <Comment /> */}
    </div>
  );
});

export default CommentList;
