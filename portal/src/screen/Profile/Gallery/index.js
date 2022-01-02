import React, { useState, useEffect} from 'react'
import {
    PhotosWrapper,
    ImgWrapper,
    Img
} from './style'
//data
import { PhotoGal } from "../dummyData";

export default function Gallery() {

    
    return (
        <div>  
            <PhotosWrapper>
                {PhotoGal?.map((p) => (
                    <ImgWrapper>
                        <Img src={p.photo}/>
                    </ImgWrapper>
                ))}
            </PhotosWrapper>
        </div>
    )
}
