import React from 'react'
import {
    PostWrapper, 
      PostTop, Avatar, Username, Time, Setting,
      PostCenter, Text, Img,
      PostBottom,
        PostBottomLeft, PostLikeCounter,PostCommentCounter,
        PostBottomRight, PostLike, PostComment
} from './style';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";
//data
import { Users } from "../dummyData";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <>  
      <PostWrapper>  
        <PostTop>
          <Avatar src={Users.filter((u) => u.userid === post?.userId)[0].profilePicture}/>
          <Username>{Users.filter((u) => u.userid === post?.userId)[0].username}</Username>
          <Time>{post.date}</Time>
          <Setting><MoreHorizIcon fontSize="large"/></Setting>
        </PostTop>
        <PostCenter>
          <Text>{post?.text}</Text>
          <Img src={post.photo}/>
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <PostLikeCounter>{like} likes</PostLikeCounter>
            <PostCommentCounter>{post.comment} comments</PostCommentCounter>
          </PostBottomLeft>
          <PostBottomRight >
            <PostLike onClick={likeHandler}><ThumbUpIcon sx={{marginRight:1}} fontSize="small" />Like</PostLike>
            <PostComment><CommentIcon sx={{marginRight:1}} fontSize="small"/>Comment</PostComment>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </>
  )
}
