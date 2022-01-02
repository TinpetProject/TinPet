import React, { useEffect } from "react";
import { Posts } from "../dummyData";
import Post from "../Post";
import { FeedWrapper } from "./style";

export default function Feed({ userID }) {
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchList = async () => {
      const result = await fetch(`http://localhost:8888/${userID}/posts/1`, {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
    };
    token && fetchList();
  }, []);
  return (
    <div>
      <FeedWrapper>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </FeedWrapper>
    </div>
  );
}
