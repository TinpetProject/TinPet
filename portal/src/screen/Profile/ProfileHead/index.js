import React from "react";
import {
  HeadWrapper,
  Wallpaper,
  Avatar,
  Name,
  HeadBar,
  Button,
  ButtonPut
} from "./style";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import { Icon } from "@iconify/react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./profilehead.css"
import { toast } from "react-toastify"

export default function ProfileHead({ user, userID, selectedUser }) {
  const [isPreview, setIsPreview] = React.useState(false);
  const [preview, setPreview] = React.useState("");
  const history = useHistory();
  const [selectedAvatar, setSelectedAvatar] = React.useState("");
  const [selectedCover, setSelectedCover] = React.useState("");
  let { path, url } = useRouteMatch();
  const uploadInputAva = React.useState(null);
  const uploadInputCover = React.useState(null);
  const [isAvatar, setIsAvatar] = React.useState(false);
  const [openOption, setOpenOption] = React.useState(false);

  const headbar = [
    {
      link: `${selectedUser}`,
      button: "Profile",
      handler: () => {
        history.push(url);
      }
    },
    {
      link: `/profile/${selectedUser}/gallery`,
      button: "Photos",
      handler: () => {
        history.push(`${url}/gallery`);
      }
    }
  ]

  const handleOpen = (e) => {
    setIsPreview(true);
    setPreview(e.target.src)
    // console.log(e.target);
  }

  const handleClose = () => {
    setIsPreview(false);
  }

  const renderPreviewFile = (source) => {
    return (
      <>
        <img src={source} alt="" />
        <Icon icon="bi:x-square" color="#fff" width="32" height="32" className="cls" onClick={handleClose} />
      </>
    )
  }
  // console.log(user);

  const handleOpenOption = () => {
    setOpenOption(!openOption);
  }

  const handleChangeFile = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        let formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "iiyjshqb");
        let requestOptions = {
          method: "POST",
          body: formData,
          redirect: "follow",
        };

        fetch("https://api.cloudinary.com/v1_1/thecodingpanda/upload", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (isAvatar) {
              setSelectedAvatar(result.url);
            } else {
              setSelectedCover(result.url);
            }
          })
          .catch((error) => console.log(error));

        let configOptions = {
          method: "POST",
          redirect: "follow",
          body: JSON.stringify(isAvatar ? { ...user, avatar: selectedAvatar } : { ...user, backgroundImage: selectedCover }),
          headers: {
            "Content-Type": "application/json"
          },
        };
        fetch("http://localhost:8888/pet", configOptions)
          .then((response) => {
            if (response.status === 200) {
              toast.success(`Change ${isAvatar ? "avatar" : "cover"} success!`, {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
          })
      }
      console.log(file);
    }
  }


  const openChangeAva = () => {
    uploadInputAva.current.click();
  }
  const openChangeCover = () => {
    uploadInputCover.current.click();
  }

  return (
    <div>
      <HeadWrapper>
        <HeadBar>
          {headbar?.map((btn) => (
            <Button onClick={btn.handler} key={btn.button}>{btn.button}</Button>
          ))}
          {userID !== selectedUser ? (
            <>
              <ButtonPut><AddCircleOutlineIcon /></ButtonPut>
              <ButtonPut><FavoriteBorderIcon /></ButtonPut>
              <ButtonPut><ChatIcon /></ButtonPut>
            </>
          ) : ("")}
        </HeadBar>
        <div className="profile-head" key={user.userID}>
          {userID === selectedUser ? (
            <>
              <input type="file" ref={uploadInputCover} onChange={handleChangeFile} accept="image/*" className="uploadInput" />
              <input type="file" ref={uploadInputAva} onChange={handleChangeFile} accept="image/*" className="uploadInput" />
              <div className="btn-change-img" onClick={handleOpenOption}>
                <Icon icon="bx:bxs-edit" color="white" width="32" height="32" className="btn-change-icon" />
                {
                  openOption && (
                    <div className="option-box">
                      <div className="option option-change-avatar" onClick={() => {
                        setIsAvatar(true);
                        setOpenOption(false);
                        openChangeAva();
                      }}>
                        <Icon icon="carbon:user-avatar" className="option-icon" />
                        Change avatar
                      </div>
                      <div className="option option-change-cover" onClick={() => {
                        setIsAvatar(false);
                        setOpenOption(false);
                        openChangeCover();
                      }}>
                        <Icon icon="bx:bx-edit" className="option-icon" />
                        Change cover
                      </div>
                    </div>
                  )
                }
              </div>
            </>
          ) : ""}
          <Wallpaper src={selectedCover || user.backgroundImage} onClick={handleOpen} />
          <Avatar src={selectedAvatar || user.avatar} onClick={handleOpen} />
          <Name>{user.name}</Name>
        </div>
      </HeadWrapper>
      <div className={`model ${isPreview ? "open" : ""}`}>
        {renderPreviewFile(preview)}
      </div>
    </div>
  );
};

