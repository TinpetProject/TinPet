import React, { useEffect } from "react";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import InputPost from "./InputPost";
import Pictures from "./Picture";
import AboutPet from "./AboutPet";
import { Main } from "../../styled-component/style";
import Feed from "./Feed";
import axios from "axios";
import { PostServices } from "../../services";
import { useParams, useLocation } from "react-router-dom";

const Profile = ({ userID }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = React.useState({});
  const [posts, setPosts] = React.useState([]);
  const location = useLocation();
  const [selectedUser, setSelectedUser] = React.useState(useParams().chosenUserID);
  useEffect(() => {
    if (location && location.pathname) {
      const id = location.pathname.split("/")[2];
      setSelectedUser(id);
    }
  }, [location]);
  useEffect(() => {
    const getUser = async () => {
      axios
        .get(`/user/${selectedUser}/profile`)
        .then((response) => {
          console.log(response);
          setUser({
            ...response.data.data,
            avatar:
              response.data.data.avatar ||
              "https://res.cloudinary.com/thecodingpanda/image/upload/v1641272668/zoyndaseei9wnbrybwxr.png?fbclid=IwAR2YOBaBi-4FdUEFD_XjI9vgrwHAcfpupP8vnGS7p26Lrq8v3XGzFvD3pxk",
            backgroundImage:
              "https://res.cloudinary.com/thecodingpanda/image/upload/v1641272668/zoyndaseei9wnbrybwxr.png?fbclid=IwAR2YOBaBi-4FdUEFD_XjI9vgrwHAcfpupP8vnGS7p26Lrq8v3XGzFvD3pxk",
          });
        })
        .catch((error) => console.log(error));
    };

    selectedUser && getUser();
  }, [selectedUser]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(`http://localhost:8888/post/${userID}`, {
        method: "GET",
        headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
      });
      if (!!data && data.status === 200) {
        const retval = await data.json();
        return { code: data.status, data: retval.data };
      } else {
        // alert("Error! " + data.message);
        return { code: data.status, data: undefined };
      }
    }
    
    const getPost = async () => {
      // const data = await PostServices.getPostByUserID(selectedUser, token);
      const data = await fetchPosts();
      // console.log(data);
      if (!!data && data.code === 200) {
        setPosts(
          data.data.map((post) => {
            if (post.photos) {
              const photos = post.photos.split(",");
              // console.log(photos);
              return {
                ...post,
                photos: photos.map((photo) => JSON.parse(photo.replaceAll("'", '"'))),
              };
            } else return post;
          })
        );
      }
    };
    !!token && getPost();
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
  }, [token, selectedUser]);

  const updatePostList = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };
  console.log("user :::", user);
  return (
    <>
      <Main>
        <ProfileWrapper>
          <ProfileHead user={user} userID={userID} selectedUser={selectedUser} />
          <InputPost user={user} updatePostList={updatePostList} />
          <Feed userID={selectedUser} user={user} posts={posts} />
          <Pictures />
          <AboutPet user={user} />
        </ProfileWrapper>
      </Main>
    </>
  );
};

export default Profile;
