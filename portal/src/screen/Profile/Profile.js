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
import { useParams, useLocation, Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Gallery from "./Gallery";

const Profile = ({ userID }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = React.useState({});
  const [posts, setPosts] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  const location = useLocation();
  const [selectedUser, setSelectedUser] = React.useState(useParams().chosenUserID);

  let { path, url } = useRouteMatch();
  // console.log(path, url);

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
          // console.log(response);
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
    const getPhotos = async () => {
      await fetch(`http://localhost:8888/user/${selectedUser}/allImages`, {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(response => response.json())
      .then(data => setFiles(data.data))
      .catch(error => console.log(error));
    }
    selectedUser && getUser();
    selectedUser && getPhotos();
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
      const data = await PostServices.getPostByUserID(selectedUser, token);
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
    //   console.log(result);W
    // };
    // token && fetchList();
  }, [token, selectedUser]);

  const updatePostList = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };
  // console.log("user :::", user);
  // console.log(posts);

  return (
    <>
      <Main>
        <ProfileWrapper>
          <ProfileHead user={user} userID={userID} selectedUser={selectedUser} />
          <Switch>
            <Route exact path={`${path}/gallery`}>
              <Gallery images={files}/>
            </Route>
            <Route exact path={path}>
              <InputPost user={user} updatePostList={updatePostList} />
              <Feed userID={userID} user={user} posts={posts} />
              <Pictures images={files}/>
              <AboutPet user={user} />
            </Route>
            <Route path={`${path}/*`}>
              <Redirect to={path} />
            </Route>
          </Switch>
        </ProfileWrapper>
      </Main>
    </>
  );
};

export default Profile;
