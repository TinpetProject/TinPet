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
              "https://scontent.fhan5-4.fna.fbcdn.net/v/t39.30808-6/270772893_1567946906894523_1047998408474512960_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UDouyg3f9X4AX-pmsZd&tn=i1yGCvqKaMsUYmLN&_nc_ht=scontent.fhan5-4.fna&oh=00_AT8z-4gaLISuR7xppz5vpNfe01um66ajORsM6f-vM7pKKg&oe=61D5CA10",
            backgroundImage:
              "https://scontent.fhan5-4.fna.fbcdn.net/v/t39.30808-6/270772893_1567946906894523_1047998408474512960_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UDouyg3f9X4AX-pmsZd&tn=i1yGCvqKaMsUYmLN&_nc_ht=scontent.fhan5-4.fna&oh=00_AT8z-4gaLISuR7xppz5vpNfe01um66ajORsM6f-vM7pKKg&oe=61D5CA10",
            name: "Minh Tâm",
          });
        })
        .catch((error) => console.log(error));
    };

    selectedUser && getUser();
  }, [selectedUser]);

  useEffect(() => {
    const getPost = async () => {
      const data = await PostServices.getPostByUserID(selectedUser, token);
      console.log(data);
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

  console.log(posts);

  return (
    <>
      <Main>
        <ProfileWrapper>
          <ProfileHead user={user} userID={userID} selectedUser={selectedUser} />
          <InputPost user={user} />
          <Feed userID={userID} user={user} posts={posts} />
          <Pictures />
          <AboutPet user={user} />
        </ProfileWrapper>
      </Main>
    </>
  );
};

export default Profile;
