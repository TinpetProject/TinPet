import React from 'react'
import {
    PhotosWrapper,
    ImgWrapper,
    Img
} from './style'
//data
import { PhotoGal } from "../dummyData";

export default function GalleryList({ userID, setSelectedImg, images }) {

    return (
        <div>
            <PhotosWrapper>
                {images?.map((image, index) => (
                    <ImgWrapper key={index}
                        layout
                        whileHover={{ opacity: 1 }} s
                        onClick={() => setSelectedImg(image.link)}
                    >
                        <Img src={image.link}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </ImgWrapper>
                ))}
            </PhotosWrapper>
        </div>
    )
}
