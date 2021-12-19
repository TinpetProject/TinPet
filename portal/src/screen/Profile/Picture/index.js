import React from 'react'
import {
  PictureWrapper,
  Topic,
  View,
  PictureListWrapper
} from "./style"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {itemData} from "../dummyData"

export default function Pictures() {
  return (
    <>
      <PictureWrapper>
        <Topic>Pictures</Topic>
        <View>View all</View>
        <PictureListWrapper>
          <ImageList sx={{ width: 260, height: 260 , borderRadius: 2}} cols={2} rowHeight={80}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </PictureListWrapper>
      </PictureWrapper>
    </>
  )
}

