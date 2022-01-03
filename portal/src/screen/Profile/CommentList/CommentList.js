import React, { useState, useEffect } from "react";
import "./CommentList.css";
import Comment from "../Comment/Comment";
import { PostServices } from "../../../services";
const CommentList = React.memo(({ postID }) => {
  const token = localStorage.getItem("token");
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    const fetchComment = async() => {
      const data = await PostServices.getPostComment(postID, token);
      // console.log(data);
      if (!!data && data.code === 200) {
        // console.log("commentList");
        setCommentList(data.data);
      }
    }
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
  console.log(commentList);
  return (
    <div className="post__comment-list">
      {commentList?.length > 0 && commentList.map((comment) => {
          return <Comment key={comment.commentID} name={comment.name} content={comment.content} avatarUrl={comment.avatar}/>;
        })}
      {/* <Comment />
      <Comment />
      <Comment /> */}
    </div>
  );
});

export default CommentList;
