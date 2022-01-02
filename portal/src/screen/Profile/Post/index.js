import React from "react";
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
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const userAvatar = Users.filter((u) => u.userid === post?.userId)[0].profilePicture;
  const userName = Users.filter((u) => u.userid === post?.userId)[0].username;
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const commentHandler = () => {
    setIsCommenting((prev) => !prev);
  };
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
            <PostLikeCounter>{like} likes</PostLikeCounter>
            <PostCommentCounter>{post.comment} comments</PostCommentCounter>
          </PostBottomLeft>
          <PostBottomRight>
            <PostLike onClick={likeHandler}>
              <ThumbUpIcon sx={{ marginRight: 1 }} fontSize="small" />
              Like
            </PostLike>
            <PostComment onClick={commentHandler}>
              <CommentIcon sx={{ marginRight: 1 }} fontSize="small" />
              Comment
            </PostComment>
          </PostBottomRight>
        </PostBottom>
        {isCommenting && <CommentList postID={post.postID} />}
      </PostWrapper>
    </>
  );
}
