import React from 'react'
import {
  PictureWrapper,
  Topic,
  View,
  PictureListWrapper
} from "./style"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  }  
];
