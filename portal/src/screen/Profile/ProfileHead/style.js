import styled from "styled-components";

export const HeadWrapper = styled.div `
  position: relative;
  width: 920px;
  height: 448px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

export const Wallpaper = styled.img `
  border-radius: 15px 15px 0px 0px;
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
`;

export const Avatar = styled.img `
  position: absolute;
  width: 150px;
  height: 150px;
  left: 40px;
  top: 290px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ffffff;
  cursor: pointer;
`;

export const Name = styled.div `
  position: absolute;
  left: 210px;
  top: 320px;
  font-family: Source Sans Pro, sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
`;

export const HeadBar = styled.div `
  position: absolute;
  top: 400px;
  border-radius: 15px;
  height: 48px;
  padding-left: 220px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
`;

export const Button = styled.div `
  // background-color: #F9F9F9;
  border: none;
  color: black; 
  padding: 10px;
  text-decoration: none;
  font-family: Source Sans Pro, sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    border-bottom: solid 3px;
    opacity: 0.5;
  }
`;

export const IconInput = styled.div `
    transform: scale(1);
    margin-left: 10px;
`;
export const ButtonInput = styled.div `
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 750;
    padding: 0px 10px 0px 8px;
`;


export const ButtonPut = styled.button `
  position: relative;
  background-color: #C0C0C0;
  padding: 5px;
  left: 350px;
  width: 50px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
      background-color: #fb6d6c;
      color: #fff;
  }
  transition: 0.5s;
`;