import React from 'react'
import {
  PictureWrapper,
  Topic,
  View,
  PictureListWrapper
} from "./style"
import "./picture.css"
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';

export default function Pictures({ selectedUser, images }) {
  const history = useHistory();
  // uploaded files
  // const [selectedFiles, setSelectedFiles] = React.useState([]);
  // selected files for preview mode
  const [preview, setPreview] = React.useState("");
  // go to preview mode
  const [isPreview, setIsPreview] = React.useState(false);

  const renderFiles = (files) => {
    const previewFiles = (files && files.length > 4) ? files.slice(0, 4) : files;
    console.log(files.length)
    switch (files.length) {
      case 0:
        console.log("case 0");
        return (
          <div className="picture-not-found">
            <Icon icon="bi:folder-x" color="#373737" width="32" height="32" className="picture-not-found-icon" />
            <div className="picture-not-found-title">There's nothing to see</div>
          </div>
        )
      case 1:
        console.log("case 1");
        return (
          <div className="picture-list-for-1">
            {previewFiles.map(file => {
              return (
                <div className="picture-sleeve" onClick={openPreviewFiles} key={file}>
                  <img className="picture-item" src={file.link} alt={file.name} />
                </div>
              )
            })}
          </div>
        )
      case 2:
        console.log("case 2");
        return (
          <div className="picture-list-for-2">
            {previewFiles.map(file => {
              return (
                <div className="picture-sleeve" onClick={openPreviewFiles} key={file}>
                  <img className="picture-item" src={file.link} alt={file.name} />
                </div>
              )
            })}
          </div>
        )
      case 3:
        console.log("case 3");
        return (
          <div className="picture-list-for-3" onClick={openPreviewFiles}>
            {previewFiles.map(file => {
              return (
                <div className="picture-sleeve" key={file}>
                  <img className="picture-item" src={file.link} alt={file.name} />
                </div>
              )
            })}
          </div>
        )
      default:
        console.log("case default");
        return (
          <div className="picture-list-default">
            {previewFiles.map(file => {
              return (
                <div className="picture-sleeve" onClick={openPreviewFiles}>
                  <img className="picture-item" src={file.link} alt={file.name} key={file} />
                </div>
              )
            })}
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
    const currentTargetIdx = images.findIndex(file => file.link === currentTargetSrc);
    if (currentTargetIdx === 0) {
      setPreview(images[images.length - 1].link)
    } else {
      setPreview(images[currentTargetIdx - 1].link)
    }
  }

  const handlePreviewNext = () => {
    const currentTargetSrc = preview;
    const currentTargetIdx = images.findIndex(file => file.link === currentTargetSrc);
    if (currentTargetIdx === images.length - 1) {
      setPreview(images[0].link)
    } else {
      setPreview(images[currentTargetIdx + 1].link)
    }
  }

  return (
    <>
      <PictureWrapper>
        <Topic>Pictures</Topic>
        <View onClick={() => history.push(`/profile/${selectedUser}/gallery`)}>View all</View>
        <PictureListWrapper>
          <div className="picture-container">
            {images && renderFiles(images)}
            <div className={`model ${isPreview ? "open" : ""}`}>
              {images && renderPreviewFiles(preview)}
              {images && images.length > 1 && (
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
          </div>
        </PictureListWrapper>
      </PictureWrapper>
    </>
  )
}

