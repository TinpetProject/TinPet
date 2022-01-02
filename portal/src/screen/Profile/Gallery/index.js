import React, { useState, useEffect} from 'react'
import {
    PhotosWrapper,
    ImgWrapper,
    Img
} from './style'
//data
import { PhotoGal } from "../dummyData";

export default function Gallery({ setSelectedImg }) {

    return (
        <div>  
            <PhotosWrapper>
                {PhotoGal?.map((p) => (
                    <ImgWrapper key={p.id} 
                        layout 
                        whileHover={{ opacity: 1 }}s 
                        onClick={() => setSelectedImg(p.photo)}
                    >
                        <Img src={p.photo} 
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
