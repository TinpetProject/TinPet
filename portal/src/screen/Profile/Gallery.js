import React, { useState } from "react";
import { ProfileWrapper } from "./style";
import ProfileHead from "./ProfileHead";
import { Main } from "../../styled-component/style";
import GalleryList from "./GalleryList";
import Modal from "./GalleryList/Modal";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const Gallery = ({ userID }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const token = localStorage.getItem("token");
  const [user, setUser] = React.useState({});
  const location = useLocation();
  const [selectedUser, setSelectedUser] = React.useState(useParams().chosenUserID);
  React.useEffect(() => {
    if (location && location.pathname) {
      const id = location.pathname.split("/")[2];
      setSelectedUser(id);
    }
  }, [location]);

  React.useEffect(() => {
    const getUser = async () => {
      axios
        .get(`/user/${selectedUser}/profile`)
        .then((response) => {
          // console.log(response);
          setUser({
            ...response.data.data,
            avatar: response.data.data.avatar || "https://res.cloudinary.com/thecodingpanda/image/upload/v1641272668/zoyndaseei9wnbrybwxr.png?fbclid=IwAR2YOBaBi-4FdUEFD_XjI9vgrwHAcfpupP8vnGS7p26Lrq8v3XGzFvD3pxk",
            backgroundImage:
              "https://res.cloudinary.com/thecodingpanda/image/upload/v1641272668/zoyndaseei9wnbrybwxr.png?fbclid=IwAR2YOBaBi-4FdUEFD_XjI9vgrwHAcfpupP8vnGS7p26Lrq8v3XGzFvD3pxk",
          });
        })
        .catch((error) => console.log(error));
    };

    selectedUser && getUser();
  }, [selectedUser]);

  React.useEffect(() => {
    const fetchImgs = async () => {
      await fetch(`http://localhost:8888/user/${selectedUser}/allImgs`, {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(response => console.log(response))
        .catch(error => console.log(error))
    };
    !!token && fetchImgs();
  }, [token, selectedUser])

  return (
    <>
      <GalleryList userID={userID} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>

  );
};

export default Gallery;
