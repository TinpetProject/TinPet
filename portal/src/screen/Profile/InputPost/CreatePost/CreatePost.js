import React from "react";
import "./CreatePost.css"
import { Icon } from "@iconify/react"

export default function CreatePost({ close }) {
  const [isUpload, setIsUpload] = React.useState(false);
  const handleUploadFiles = (e) => {
    // document.getElementById("uploadBox").style.display = "block";
    setIsUpload(true);
  }

  const closeHandleUploadFiles = () => {
    setIsUpload(false);
  }

  return (
    <>
      <div className="container">
        <div className="container-layout" onClick={close}></div>
        <div className="container-content-box">
          <div className="content-box-header">
            <div className="content-box-header-title">
              Post
            </div>
            <Icon icon="bi:x-square" color="#373737" width="24" height="24" className="content-box-header-btn" onClick={close} />
          </div>
          <div className="content-box-body">
            <div className="content-box-body-top">
              <img src={"https://scontent.fhan5-4.fna.fbcdn.net/v/t39.30808-6/270772893_1567946906894523_1047998408474512960_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UDouyg3f9X4AX-pmsZd&tn=i1yGCvqKaMsUYmLN&_nc_ht=scontent.fhan5-4.fna&oh=00_AT8z-4gaLISuR7xppz5vpNfe01um66ajORsM6f-vM7pKKg&oe=61D5CA10"} className="user-avatar" alt=""/>
              <div className="user">
                <div className="user-name">Minh Tâm</div>
                <div className="user-name-belong">vợ Minh Trí</div>
              </div>
            </div>
            <div className="content-box-body-input" contentEditable={true}></div>
            <div className="content-box-body-bottom">
              <div className="body-bottom-right"></div>
              <div className="body-bottom-left"></div>
            </div>
            {isUpload ? (
              <div id="uploadBox" className="upload-box">
              <div className="upload-input">
                <Icon icon="bi:x-square" color="#373737" width="18" height="18" className="upload-box-btn" onClick={closeHandleUploadFiles} id="btnCloseUpload" />
                <div className="upload-input-box">
                  <div className="upload-input-icon">
                    <Icon icon="ant-design:folder-add-outlined" color="#373737" width="24" height="24" />
                  </div>
                  <div className="upload-input-title">Upload files</div>
                </div>
              </div>
            </div>
            ) : ""}
          </div>
          <div className="content-box-footer">
            <div className="content-box-footer-function">
              <div className="footer-function-title">Add to your post</div>
              <div className="footer-function-box">
                <div className="footer-function-right" onClick={handleUploadFiles}>
                  <Icon icon="ic:sharp-perm-media" color="#373737" width="24" height="24" />
                </div>
                <div className="footer-function-left">
                  <Icon icon="fa-solid:user-tag" color="#373737" width="24" height="24" />
                </div>
              </div>
            </div>
            <div className="content-box-footer-btn">Post</div>
          </div>
        </div>
      </div>
    </>
  );
}
