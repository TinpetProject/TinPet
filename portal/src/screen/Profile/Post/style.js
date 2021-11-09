import styled from "styled-components";

// Post Layout
export const PostWrapper = styled.div`
    position: absolute;
    width: 730px;
    top: 860px;
    left: 20px;
    background: #FFFFFF;
    border-radius: 15px;
    overflow: ;
    padding: 25px;
`;

// Avatar, Username, Time
export const PostTop = styled.div`
    align-items: center;
    padding: 0px;
    display:
    position: relative;
    width: 680px;
    height: 80px;
    margin-bottom: 20px;
`;
export const Avatar = styled.img`
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 10000px;
    margin: 0px 10px 0px 0px;
    object-fit: cover;
`;
export const Username = styled.text`
    position: relative;
    left: 100px;
    top: 10px;
    font-family: Source Sans Pro, sans-serif;
    font-weight: bold;
    font-size: 24px;
`;
export const Time = styled.text`
    position: relative;
    left: 35px;
    top: 35px;
    font-family: Source Sans Pro, sans-serif;
    font-size: 16px;
    color: #888888;
`;

// Edit post
export const Setting = styled.button`
    position: relative;
    align-items: center;
    left: 425px;
    top: 28px;
    background-color: #ffffff;
    border: none;
`;

// Content
export const PostCenter = styled.div`
    position: relative;
    align-items: center;
`;
export const Text = styled.div`
    font-family: sans-serif;
    font-size: 16px;
    line-height: 22px;
    color: #373737;
    margin-bottom: 10px;
`;
export const Img = styled.img`
    position: relative;
    margin: 10px 0px 10px 0px;
    width: 680px;
    height: 680px;    
    object-fit: cover;
    background: url(.jpg);
`;

// Like and Comment
export const PostBottom = styled.div`
    position: relative;
    border-top: solid 1px;
    padding-top: 10px;
    width: 680px;
    height: 61px;
    float: left
`;

export const PostBottomLeft = styled.div`
    position: static;
    float: left;
    width: 340px;
    height: 40px;
    padding-top: 10px;
    margin: auto;
    display: inline-block;
`;
export const PostLikeCounter = styled.text`
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #373737;
`;

export const PostBottomRight = styled.div`
    position: static;
    width: 340px;
    height: 40px;
    left: 450px;
    display: inline-block;
`;
export const PostLike = styled.button`
    border: none;
    float: right;
    margin: auto;
    margin-right: 40px;
    height: 40px;
    background-color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    font-family: sans-serif;
    align-items: center;
    cursor: pointer;
`;
export const PostComment = styled.button`
    border: none;
    float: right;
    height: 40px;
    margin: auto;
    background-color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    font-family: sans-serif;
    align-items: center;
    cursor: pointer;
`;
