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
import { Users } from "../dummyData";

export default function AboutPet() {
  return (
    <>
      <AboutWrapper>
        <Topic>About Pet</Topic>
        <About>
        {Users?.map((abt) =>(
          <div key={abt.userid}>
            <AboutInfo><Info>Breed: </Info>{abt.Breed}</AboutInfo>
            <AboutInfo><Info>Age: </Info>{abt.Age}</AboutInfo>
            <AboutInfo><Info>Location: </Info>{abt.Location}</AboutInfo>
            <AboutInfo><Info>Gender: </Info>{abt.Gender}</AboutInfo>
            <Fav><Info>Favorite: </Info>{abt.Favorite}</Fav>
          </div>
        ))}
        </About>
        <Followers>
        {Users?.map((abt) =>(
          <div key={abt.userid}>
            <FollowNumber>{abt.Followers}</FollowNumber>
          </div>
        ))}
          <Digit>followers</Digit>
        </Followers>
      </AboutWrapper>
    </>
  )
}
