import React from 'react'
import {
    PostWrapper, 
    PostTop, 
    Setting,
    PostCenter,
    PostBottom,
    PostBottomLeft,
    PostBottomRight
} from './style';

export default function Post() {
    return (
    <Post>
      <PostWrapper>  
        <PostTop>
            {/* avatar */}
            <img className="postProfileImg" src="" alt=""/>
            {/* username */}
            <span className="postUsername">
              
            </span>
            {/* post date */}
            <span className="postDate"></span>

          <Setting></Setting>
        </PostTop>

        <PostCenter>
          <span className="postText"></span>
          <img className="postImg" src="" alt="" />
        </PostCenter>

        <PostBottom>
          <PostBottomLeft>
            <img className="likeIcon" src="" onClick alt="" />
            <img className="likeIcon" src="" onClick alt="" />
            <span className="postLikeCounter"> people like it</span>
          </PostBottomLeft>
          <PostBottomRight>
            <span className="postCommentText">comments</span>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </Post>
  );
}
