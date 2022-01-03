import React, { useEffect, useState } from "react";
import { Posts } from "../dummyData";
import Post from "../Post";
import { FeedWrapper } from "./style";
import { PostServices } from "../../../services";

export default function Feed({ userID }) {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const data = await PostServices.getPostByUserID(userID, token);
      console.log(data);
      if (!!data && data.code === 200) {
        // console.log("commentList");
        setPosts(data.data);
      }
    };
    !!token && fetchPost();
    // const fetchList = async () => {
    //   const result = await fetch(`http://localhost:8888/post/${userID}/posts/1`, {
    //     method: "GET",
    //     headers: {
    //       accept: "application/json",
    //       "Content-Type": "application/json",
    //       authorization: `Bearer ${token}`,
    //     },
    //   });
    //   console.log(result);
    // };
    // token && fetchList();
  }, [token, userID]);
  console.log(posts);
  return (
    <div>
      <FeedWrapper>
        {!!posts.length > 0 && posts.map((p) => <Post key={p.postID} post={p} userID={userID} />)}
      </FeedWrapper>
    </div>
  );
}
