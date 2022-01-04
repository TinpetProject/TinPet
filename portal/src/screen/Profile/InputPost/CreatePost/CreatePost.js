import React from "react";
import "./CreatePost.css";
import { Icon } from "@iconify/react";
import ALertDialog from "../../../../components/Dialog/AlertDialog";
import axios from "axios";

export default function CreatePost({ closePostDetail, user , updatePostList}) {
  //upload or not
  const [isUpload, setIsUpload] = React.useState(false);
  // post
  const [postContent, setPostContent] = React.useState("");
  // uploaded files
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  // selected files for preview mode
  const [preview, setPreview] = React.useState("");
  const uploadInput = React.useRef(null);
  // go to preview mode
  const [isPreview, setIsPreview] = React.useState(false);

  // Open dialog
  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };


  // Toggle upload files
  const openHandleUploadFiles = () => {
    setIsUpload(true);
  }

  const closeHandleUploadFiles = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsUpload(false);
  }

  const onChangeFile = (e) => {
    if (e.target.files) {
      let temp = [];
      let maxSize = 10485760;
      for (let i = 0; i < e.target.files.length; i++) {
        if (e.target.files[i].size > maxSize) {
          openDialog(true)
          return;
        }
        temp.push({
          name: e.target.files[i].name,
          url: URL.createObjectURL(e.target.files[i]),
          type: e.target.files[i].type,
          file: e.target.files[i]
        });
      }
      if (temp.length > 0) {
        setSelectedFiles(prevFiles => prevFiles.concat(temp));
      }
    }
  }

  // Render files
  const renderFiles = (files) => {
    const previewFiles = (files && files.length > 3) ? files.slice(0, 3) : files;
    switch (files.length) {
      case 0:
        console.log("case 0");
        return (
          <div className="upload-input">
            <Icon icon="bi:x-square" color="#373737" width="18" height="18" className="upload-box-btn" onClick={closeHandleUploadFiles} id="btnCloseUpload" />
            <div className="upload-input-box">
              <div className="upload-input-icon">
                <Icon icon="ant-design:folder-add-outlined" color="#373737" width="24" height="24" />
              </div>
              <div className="upload-input-title">Upload files</div>
            </div>
          </div>
        )
      case 1:
        console.log("case 1");
        return (
          <div className="picture-box">
            <div className="picture-list-1">
              {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve" onClick={openPreviewFiles}>
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      case 2:
        console.log("case 2");
        return (
          <div className="picture-box">
            <div className="picture-list-2">
              {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve" onClick={openPreviewFiles}>
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      case 3:
        console.log("case 3");
        return (
          <div className="picture-box">
            <div className="picture-list-3" onClick={openPreviewFiles}>
              {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve">
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      default:
        console.log("case default");
        return (
          <div className="picture-box">
            <div className="picture-list">
              {previewFiles.map(file => {
                return (
                  <div className="picture-sleeve" onClick={openPreviewFiles}>
                    <img className="picture-item" src={file.url} alt={file.name} key={file} />
                  </div>
                )
              })}
            </div>
          </div>
        )
    }
  }

  const openPreviewFiles = (e) => {
    setIsPreview(true);
    let src;
    if (e.target.src) {
      src = e.target.src
    } else {
      src = e.target.firstChild.src;
    }
    setPreview(src);
  }

  const closePreviewFiles = () => {
    setIsPreview(false)
    setPreview("");
  }

  // Preview
  const renderPreviewFiles = (source) => {
    return (
      <>
        <img src={source} alt="" />
        <Icon icon="bi:x-square" color="#fff" width="32" height="32" className="cls" onClick={closePreviewFiles} />
      </>
    )
  }

  const handlePreviewPrev = () => {
    const currentTargetSrc = preview;
    const currentTargetIdx = selectedFiles.findIndex(file => file.url === currentTargetSrc);
    if (currentTargetIdx === 0) {
      setPreview(selectedFiles[selectedFiles.length - 1].url)
    } else {
      setPreview(selectedFiles[currentTargetIdx - 1].url)
    }
  }

  const handlePreviewNext = () => {
    const currentTargetSrc = preview;
    const currentTargetIdx = selectedFiles.findIndex(file => file.url === currentTargetSrc);
    if (currentTargetIdx === selectedFiles.length - 1) {
      setPreview(selectedFiles[0].url)
    } else {
      setPreview(selectedFiles[currentTargetIdx + 1].url)
    }
  }

  // Add files
  const handleUploadFiles = () => {
    if (selectedFiles.length === 0) {
      uploadInput.current.click();
    }
  }

  // Add more files
  const handleUploadMore = () => {
    if (selectedFiles.length > 0) {
      uploadInput.current.click();
    }
  }

  // Handle post
  const handlePostContent = (value) => {
    setPostContent(value);
  }

  // Submit
  const postSubmit = async () => {
    let photos = [];
    for (let file of selectedFiles) {
      try {
        let formData = new FormData();
        formData.append("file", file.file);
        formData.append("upload_preset", "iiyjshqb");
        console.log(file.file);
        let requestOptions = {
          method: "POST",
          body: formData,
          redirect: "follow",
        }
        await fetch("https://api.cloudinary.com/v1_1/thecodingpanda/upload", requestOptions)
          .then(res => res.json())
          .then(data => {
            // console.log(data.url);
            photos.push(String(data.url));
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log(error)
      }
    }
    // console.log(photos);
    console.log({ title: user.name, content: postContent, links: photos });
    const newPost = {
      comment: 0,
      content: postContent,
      date: new Date(),
      isLike: false,
      id: null,
      like: 0,
      photos: photos.map(photo => ({ url: photo })),
      tags: null,
      title: user.name,
      videos: null,
    }
    axios.post("/user/post", { title: user.name, content: postContent, links: photos })
      .then(response => {
        newPost.id = response.data.data.postID;
        updatePostList(newPost);
      })
      .catch(error => console.log(error));
    closePostDetail();
    // fetchPost();
  }

  return (
    <>
      <div className="container">
        <div className="container-layout" onClick={closePostDetail}></div>
        <div className="container-content-box">
          <div className="content-box-header">
            <div className="content-box-header-title">
              Post
            </div>
            <Icon icon="bi:x-square" color="#373737" width="24" height="24" className="content-box-header-btn" onClick={closePostDetail} />
          </div>
          <div className="content-box-body">
            <div className="content-box-body-top">
              <img src={user.avatar} className="user-avatar" alt="" />
              <div className="user">
                <div className="user-name">{user.name}</div>
                <div className="user-name-belong">{user.breed}</div>
              </div>
            </div>
            <div className="content-box-body-input" contentEditable={true} placeholder="What do you think..." onInput={(e) => handlePostContent(e.currentTarget.textContent)}></div>
            <div className="content-box-body-bottom">
              <div className="body-bottom-right"></div>
              <div className="body-bottom-left"></div>
            </div>
            {isUpload ? (
              <>
                <input type="file" multiple ref={uploadInput} id="uploadInput" onChange={onChangeFile} accept="image/*" />
                <div className="upload-box" onClick={handleUploadFiles}>
                  {selectedFiles && renderFiles(selectedFiles)}
                  {selectedFiles.length > 0 && (<div className="more-btn" onClick={handleUploadMore}>
                    <Icon icon="carbon:add-filled" color="#fb6b6c" width="32" height="32" />
                  </div>)}
                </div>
                <div className={`model ${isPreview ? "open" : ""}`}>
                  {selectedFiles && renderPreviewFiles(preview)}
                  {selectedFiles && selectedFiles.length > 1 && (
                    <>
                      <div className="prev" onClick={handlePreviewPrev}>
                        <Icon icon="grommet-icons:previous" color="white" width="32" height="32" />
                      </div>
                      <div className="next" onClick={handlePreviewNext}>
                        <Icon icon="grommet-icons:next" color="white" width="32" height="32" />
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : ""
            }
          </div>
          <div className="content-box-footer">
            <div className="content-box-footer-function">
              <div className="footer-function-title">Add to your post</div>
              <div className="footer-function-box">
                <div className="footer-function-right" onClick={openHandleUploadFiles}>
                  <Icon icon="ic:sharp-perm-media" color="#373737" width="24" height="24" />
                </div>
                <div className="footer-function-left">
                  <Icon icon="fa-solid:user-tag" color="#373737" width="24" height="24" />
                </div>
              </div>
            </div>
            <div className="content-box-footer-btn" onClick={postSubmit}>Post</div>
          </div>
        </div>
      </div>
      <ALertDialog msg="Files exceed the maximum size!!!" openDialog={openDialog} closeDialog={closeDialog} open={open} />
    </>
  );
}
