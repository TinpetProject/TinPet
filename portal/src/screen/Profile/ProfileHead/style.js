import styled from "styled-components";

export const HeadWrapper = styled.div`
  position: relative;
  width: 920px;
  height: 452px;
  top: 20px;
  border-radius: 15px;
  background-color: #ffffff;
`;

export const Wallpaper = styled.img`
  border-radius: 15px 15px 0px 0px;
  position: relative;
  width: 920px;
  height: 400px;
  object-fit: cover;
`;

export const Avatar = styled.img`
  position: relative;
  width: 150px;
  height: 150px;
  left: 40px;
  top: -200px;
  object-fit: cover;
  border-radius: 10000px;
  border: 4px solid #ffffff;
`;

export const Name = styled.text`
  position: relative;
  width: 100px;
  height: 39px;
  left: 220px;
  top: -100px;

  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  color: #FFFFFF;
`;

export const HeadBar = styled.div`
  border-radius: 15px;
  position: relative;
  height: 48px;
  padding-left: 220px;
  background: #FFFFFF;
`;

export const Button = styled.button`
  background-color: #F9F9F9;
  border: none;
  color: black; 
  padding: 10px;
  text-align: center;
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