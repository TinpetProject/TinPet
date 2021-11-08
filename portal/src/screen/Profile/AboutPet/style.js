import styled from "styled-components";

export const AboutWrapper = styled.div`
    position: absolute;
    width: 415px;
    height: 474px;
    left: 775px;
    top: 1130px;
    background: #FFFFFF;
    border-radius: 15px;
`;
export const Topic = styled.button`
    position: absolute;
    left: 25px;
    top: 25px;
    border: none;
    background: #ffffff;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    color: #373737;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;
export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    border-bottom: solid 2px;
    position: absolute;
    width: 355px;
    height: 250px;
    left: 30px;
    top: 80px;
`;
export const AboutInfo = styled.div`
    display: flex;
    padding: 0px;
    position: static;
    width: 355px;
    height: 40px;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
`;
export const Fav = styled.div`
    display: flex;
    padding: 0px;
    position: static;
    width: 355px;
    height: 80px;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: normal;
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
    position: absolute;
    width: 355px;
    height: 105px;
    left: 30px;
    top: 340px;
`;
export const FollowNumber = styled.text`
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    color: #373737;
`;
export const Digit = styled.text`
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #B9B9B9;
`;