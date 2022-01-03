import React, { useEffect } from "react";
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
// import "../InputPost/CreatePost/CreatePost.css";
import { Icon } from "@iconify/react"

// const defaultPostID = "1116301c-477f-2a8f-555f-1885b89fc8fc";


export default function Post({ post, userID, user }) {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const userAvatar = user.avatar;
  const userName = user.name;
  const displayTime = !!post.date && `${timeSince(Date.parse(post.date))} ago`;
  const [preview, setPreview] = React.useState("");
  const [isPreview, setIsPreview] = React.useState(false);

  const likeHandler = () => {
    setLike(like => isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const commentHandler = () => {
    setIsCommenting((prev) => !prev);
  };

  const openPreviewFiles = (e) => {
    setIsPreview(true);
    let src;
    if (e.target.src) {
      src = e.target.src
    } else {
      src = e.target.firstChild.src;
    }
    setPreview(src);
  }

  const closePreviewFiles = () => {
    setIsPreview(false)
    setPreview("");
  }

  const renderFiles = (files) => {
    const previewFiles = (files && files.length > 3) ? files.slice(0, 3) : files;
    switch (files.length) {
      case 0:
        break;
      case 1:
        return (
          <div className="picture-box">
            <div className="picture-list-1">
              {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve" onClick={openPreviewFiles}>
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="picture-box">
            <div className="picture-list-2">
              {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve" onClick={openPreviewFiles}>
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="picture-box">
            <div className="picture-list-3" onClick={openPreviewFiles}>
              {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve">
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      default:
        console.log("case default");
        return (
          <div className="picture-box">
            <div className="picture-list">
              {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve" onClick={openPreviewFiles}>
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })}
            </div>
          </div>
        )
    }
  }

  const renderPreviewFiles = (source) => {
    return (
      <>
        <img src={source} alt="" />
        <Icon icon="bi:x-square" color="#fff" width="32" height="32" className="cls" onClick={closePreviewFiles} />
      </>
    )
  }

  const handlePreviewPrev = () => {
    const currentTargetSrc = preview;
    const currentTargetIdx = post.photos.findIndex(file => file.url === currentTargetSrc);
    if (currentTargetIdx === 0) {
      setPreview(post.photos[post.photos.length - 1].url)
    } else {
      setPreview(post.photos[currentTargetIdx - 1].url)
    }
  }

  const handlePreviewNext = () => {
    const currentTargetSrc = preview;
    const currentTargetIdx = post.photos.findIndex(file => file.url === currentTargetSrc);
    if (currentTargetIdx === post.photos.length - 1) {
      setPreview(post.photos[0].url)
    } else {
      setPreview(post.photos[currentTargetIdx + 1].url)
    }
  }

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
          <div className="img-container">
            {post.photos && post.photos.length > 0 && renderFiles(post.photos)}
          </div>
          <div className={`model ${isPreview ? "open" : ""}`}>
            {post.photos && renderPreviewFiles(preview)}
            {post.photos && post.photos.length > 0 && (
              <>
                <div className="prev" onClick={handlePreviewPrev}>
                  <Icon icon="grommet-icons:previous" color="white" width="32" height="32" />
                </div>
                <div className="next" onClick={handlePreviewNext}>
                  <Icon icon="grommet-icons:next" color="white" width="32" height="32" />
                </div>
              </>
            )}
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
              <div className="postCommentCounterTitle">
                {post.comment} comments
              </div>
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
        {isCommenting && !!post && <CommentList postID={post.id} userID={userID} />}
      </PostWrapper>
    </>
  );
}
