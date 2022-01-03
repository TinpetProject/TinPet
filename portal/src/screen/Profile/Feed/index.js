import React, { useEffect, useState } from "react";
import Post from "../Post";
import { FeedWrapper } from "./style";

export default function Feed({ userID, user, posts }) {
  
  return (
    <div>
      <FeedWrapper>
        {posts && posts.length > 0 && posts.map((p) => <Post key={p.postID} post={p} user={user} userID={userID} />)}
      </FeedWrapper>
    </div>
  );
}
