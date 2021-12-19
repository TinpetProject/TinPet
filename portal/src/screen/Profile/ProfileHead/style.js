import styled from "styled-components";

export const HeadWrapper = styled.div`
  position: relative;
  width: 920px;
  height: 448px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

export const Wallpaper = styled.img`
  border-radius: 15px 15px 0px 0px;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  left: 40px;
  top: 290px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ffffff;
`;

export const Name = styled.text`
  position: absolute;
  left: 210px;
  top: 320px;
  font-family: Source Sans Pro, sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #FFFFFF;
`;

export const HeadBar = styled.div`
  position: absolute;
  top: 400px;
  border-radius: 15px;
  height: 48px;
  padding-left: 220px;
  background: #FFFFFF;
`;

export const Button = styled.button`
  background-color: #F9F9F9;
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