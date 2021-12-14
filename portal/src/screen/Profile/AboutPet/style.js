import styled from "styled-components";

export const AboutWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    left: 620px;
    top: -140px;
    background: #FFFFFF;
    border-radius: 15px;
`;
export const Topic = styled.text`
    position: relative;
    top: 20px;
    left: 20px;
    background: #ffffff;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #373737;
`;
export const About = styled.div`
    display: relative;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: solid 2px;
    position: relative;
    width: 260px;
    height: 220px;
    left: 20px;
    top: 30px;
`;
export const AboutInfo = styled.div`
    display: flex;
    position: static;
    width: 260px;
    height: 30px;
    font-family: Source Sans Pro, sans-serif;
    font-size: 20px;
`;
export const Fav = styled.div`
    display: flex;
    position: static;
    width: 260px;
    font-family: Source Sans Pro, sans-serif;
    line-height: 30px;
    font-size: 20px;
`;
export const Info = styled.div`
    font-weight: bold;
    margin-right: 10px;
`;
//followers
export const Followers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 260px;
    height: 85px;
    top: 40px;
    left: 20px;
`;
export const FollowNumber = styled.text`
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    color: #373737;
`;
export const Digit = styled.text`
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #B9B9B9;
`;