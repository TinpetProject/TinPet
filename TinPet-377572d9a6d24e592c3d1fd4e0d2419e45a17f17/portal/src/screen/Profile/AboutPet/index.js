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

const pet = [
  {
    userID: 1,
    Breed: "Shiba",
    Age: 2,
    Location: "Hanoi",
    Gender: "Male",
    Favorite: "Sleeping, Walking, Eating, etc."
},
]
const follow = [
  {
    Username: "Corgi",
    Followers: 100000
  }
]

export default function AboutPet() {
  return (
    <>
      <AboutWrapper>
        <Topic>AboutPet</Topic>
        <About>
        {pet?.map((abt) =>(
          <>
            <AboutInfo><Info>Breed: </Info>{abt.Breed}</AboutInfo>
            <AboutInfo><Info>Age: </Info>{abt.Age}</AboutInfo>
            <AboutInfo><Info>Location: </Info>{abt.Location}</AboutInfo>
            <AboutInfo><Info>Gender: </Info>{abt.Gender}</AboutInfo>
            <Fav><Info>Favorite: </Info>{abt.Favorite}</Fav>
          </>
        ))}
        </About>
        <Followers>
        {follow?.map((abt) =>(
          <>
            <FollowNumber>{abt.Followers}</FollowNumber>
          </>
        ))}
          <Digit>followers</Digit>
        </Followers>
      </AboutWrapper>
    </>
  )
}
