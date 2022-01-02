import React from 'react'
import {
  PostWrapper,
  PostTop, Avatar, Username, Time, Setting,
  PostCenter, Text, Img,
  PostBottom,
  PostBottomLeft, PostLikeCounter, PostCommentCounter,
  PostBottomRight, PostLike, PostComment
} from './style';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";
//data
import { Users } from "../dummyData";
import "./post.css"
import { Icon } from "@iconify/react"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const likeHandler = () => {
    setLike(like => isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <>
      <PostWrapper>
        <PostTop>
          <Avatar src={Users.filter((u) => u.userid === post?.userId)[0].profilePicture} />
          <Username>{Users.filter((u) => u.userid === post?.userId)[0].username}</Username>
          <Time>{post.date}</Time>
          <Setting><MoreHorizIcon fontSize="large" /></Setting>
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
          <PostBottomRight >
            <PostLike onClick={likeHandler} style={isLiked ? { color: "#0019f8" } : { color: "#333" }}>
              <ThumbUpIcon sx={{ marginRight: 1 }} fontSize="small" st />
              <div className="postLikeTitle">{isLiked ? "Liked" : "Like"}</div>
            </PostLike>
            <PostComment><CommentIcon sx={{ marginRight: 1 }} fontSize="small" />Comment</PostComment>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </>
  )
}
