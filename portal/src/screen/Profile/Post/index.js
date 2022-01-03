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
import { PostServices } from "../../../services";
import CommentList from "../CommentList/CommentList";
import "./post.css";
import { timeSince } from "../../../utils/datetime";
const defaultPostID = "1116301c-477f-2a8f-555f-1885b89fc8fc";


export default function Post({ post, user }) {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const userAvatar = user.avatar;
  const userName = user.name;
  const displayTime = !!post.date && `${timeSince(Date.parse(post.date))} ago`;

  const likeHandler = () => {
    setLike(like => isLiked ? like - 1 : like + 1);
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
          <div className="user-info">
            <Username>{userName}</Username>
            <Time>{displayTime}</Time>
          </div>
          <Setting>
            <MoreHorizIcon fontSize="large" />
          </Setting>
        </PostTop>
        <PostCenter>
          <Text>{post?.content}</Text>
          <Img src={"https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/245527774_3029881763934187_5955578281008105357_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=2Na_e0OtLywAX8vZxab&_nc_ht=scontent.fhan5-10.fna&oh=00_AT8acS3EFMhcQseP-0XOvO0V3BuKXKKhhF4UWmSdnjl1Aw&oe=61D843EC"} />
          <div className="picture-box">
            <div className="picture-list">
              {/* {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve" onClick={openPreviewFiles}>
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })} */}
            </div>
          </div>
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <PostLikeCounter>
              {/* <Icon icon="ei:like" /> */}
              <div className="postLikeCounterTitle">{post.like} likes</div>
            </PostLikeCounter>
            <PostCommentCounter>
              {/* <Icon icon="fa-regular:comment-alt" /> */}
              <div className="postCommentCounterTitle">{post.comment} comments</div>
            </PostCommentCounter>
          </PostBottomLeft>
          <PostBottomRight>
            <PostLike
              onClick={likeHandler}
              style={isLiked ? { color: "#0019f8" } : { color: "#333" }}
            >
              <ThumbUpIcon sx={{ marginRight: 1 }} fontSize="small" />
              <div className="postLikeTitle">{isLiked ? "Liked" : "Like"}</div>
            </PostLike>
            <PostComment onClick={commentHandler}>
              <CommentIcon sx={{ marginRight: 1 }} fontSize="small" />
              <div className="postCommentTitle">Comment</div>
            </PostComment>
          </PostBottomRight>
        </PostBottom>
        {isCommenting && <CommentList postID={defaultPostID} />}
      </PostWrapper>
    </>
  );
}
