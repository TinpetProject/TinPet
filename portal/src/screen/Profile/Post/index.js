import React, {useEffect} from "react";
import {
  PostWrapper,
  PostTop,
  Avatar,
  Username,
  Time,
  Setting,
  PostCenter,
  Text,
  Img,
  PostBottom,
  PostBottomLeft,
  PostLikeCounter,
  PostCommentCounter,
  PostBottomRight,
  PostLike,
  PostComment,
} from "./style";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
//data
import { Users } from "../dummyData";
import CommentList from "../CommentList/CommentList";
import "./post.css"
const defaultPostID = "1116301c-477f-2a8f-555f-1885b89fc8fc";
export default function Post({ post }) {
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchList = async () => {
      const result = await fetch(`http://localhost:8888/${defaultPostID}/comment`, {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      console.log(await result.json());
      // if (!result.ok) return;
    };
    token && fetchList();
  }, []);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const userAvatar = Users.filter((u) => u.userid === post?.userId)[0].profilePicture;
  const userName = Users.filter((u) => u.userid === post?.userId)[0].username;
  const likeHandler = () => {
    setLike(like => isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const commentHandler = () => {
    setIsCommenting((prev) => !prev);
  };

  console.log(post);
  return (
    <>
      <PostWrapper>
        <PostTop>
          <Avatar src={userAvatar} />
          <Username>{userName}</Username>
          <Time>{post.date}</Time>
          <Setting>
            <MoreHorizIcon fontSize="large" />
          </Setting>
        </PostTop>
        <PostCenter>
          <Text>{post?.text}</Text>
          <Img src={post.photo} />
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <PostLikeCounter>
              {/* <Icon icon="ei:like" /> */}
              <div className="postLikeCounterTitle">{like} likes</div>
            </PostLikeCounter>
            <PostCommentCounter>
              {/* <Icon icon="fa-regular:comment-alt" /> */}
              <div className="postCommentCounterTitle">{post.comment} comments</div>
            </PostCommentCounter>
          </PostBottomLeft>
          <PostBottomRight>
            <PostLike onClick={likeHandler} style={isLiked ? { color: "#0019f8" } : { color: "#333" }}>
              <ThumbUpIcon sx={{ marginRight: 1 }} fontSize="small" />
              <div className="postLikeTitle">{isLiked ? "Liked" : "Like"}</div>
            </PostLike>
            <PostComment onClick={commentHandler}>
              <CommentIcon sx={{ marginRight: 1 }} fontSize="small" />
              <div className="postCommentTitle">Comment</div>
            </PostComment>
          </PostBottomRight>
        </PostBottom>
        {isCommenting && <CommentList postID={post.postID} />}
      </PostWrapper>
    </>
  );
}
