import styled from "styled-components";

export const AboutWrapper = styled.div`
    position: absolute;
    width: 300px;
    left: 620px;
    top: 850px;
    background: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

export const Topic = styled.div`
    position: relative;
    margin: 20px 0px 5px 20px;
    background: #ffffff;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #373737;
`;

export const About = styled.div`
    position: relative;
    margin: 10px 0px 0px 20px;
    padding-bottom: 5px;
    width: 260px;
    align-items: flex-start;
    border-bottom: solid 2px lightgray;
    word-wrap: break-word;
`;
export const AboutInfo = styled.div`
    display: flex;
    width: 260px;
    margin-bottom: 5px;
    font-family: Source Sans Pro, sans-serif;
    font-size: 20px;
`;
export const Fav = styled.div`
    display: flex;
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
    position: relative;
    margin: 5px 0px 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
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