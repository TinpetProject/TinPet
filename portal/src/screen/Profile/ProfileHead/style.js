import styled from "styled-components";

export const HeadWrapper = styled.div`
  position: absolute;
  width: 1170px;
  height: 585px;
  left: 20px;
  top: 20px;
  border-radius: 15px;
  background-color: #ffffff;

`;

export const Wallpaper = styled.img`
  border-radius: 15px 15px 0px 0px;
  position: absolute;
  width: 1170px;
  height: 516px;
  left: 0px;
  top: 0px;
  object-fit: cover;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 180px;
  height: 180px;
  left: 36px;
  top: 386px;
  object-fit: cover;
  border-radius: 100px;
  border: 5px solid #ffffff;
`;

export const Name = styled.image`
  position: absolute;
  width: 98px;
  height: 39px;
  left: 250px;
  top: 450px;

  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
  display: flex;
  align-items: center;

  color: #FFFFFF;
`;

export const HeadBar = styled.image`
  border-radius: 0px 0px 15px 0px;
  position: absolute;
  width: 921px;
  height: 69px;
  left: 249px;
  top: 516px;

  background: #FFFFFF;
`;

export const Button = styled.button`
  background-color: #F9F9F9;
  border: none;
  color: black; 
  padding: 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: Source Sans Pro, sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0px 1px;
  cursor: pointer;
  &:hover {
    border-bottom: solid 3px;
  }
`;