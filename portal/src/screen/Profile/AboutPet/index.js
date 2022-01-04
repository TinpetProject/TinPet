import React from 'react'
import {
  AboutWrapper,
  Topic,
  Followers,
  About,
  AboutInfo,
  Info,
  Fav,
  FollowNumber,
  Digit
} from "./style"

export default function AboutPet({ user }) {
  return (
    <>
      <AboutWrapper>
        <Topic>About Pet</Topic>
        <About>
          <div key={user.userID}>
            <AboutInfo><Info>Breed: </Info>{user.breed}</AboutInfo>
            <AboutInfo><Info>Age: </Info>{user.age}</AboutInfo>
            <AboutInfo><Info>Location: </Info>{user.location}</AboutInfo>
            <AboutInfo><Info>Gender: </Info>{user.gender}</AboutInfo>
            <Fav><Info>Favorite: </Info>{user.favourite || ""}</Fav>
          </div>
        
        </About>
        <Followers>
          <div>
            <FollowNumber>{user.followers}</FollowNumber>
          </div>
          <Digit>followers</Digit>
        </Followers>
      </AboutWrapper>
    </>
  )
}
