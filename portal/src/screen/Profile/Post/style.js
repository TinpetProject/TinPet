import styled from "styled-components";

// Post Layout
export const PostWrapper = styled.div`
    position: relative;
    width: 100%;
    background: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
    padding: 25px;
    margin-bottom: 20px;
`;

// Avatar, Username, Time
export const PostTop = styled.div`
    display: flex;
    align-items: center;
`;
export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`;
export const Username = styled.text`
    margin: 0px 10px;
    font-family: Source Sans Pro, sans-serif;
    font-weight: bold;
    font-size: 24px;
`;
export const Time = styled.text`
    font-family: Source Sans Pro, sans-serif;
    font-size: 16px;
    opacity: 0.5;
`;

// Edit post
export const Setting = styled.button`
    position: absolute;
    left: 540px;
    background-color: #ffffff;
    border: none;
    &:hover {
        background-color: lightgray;
        border-radius: 50%;
      }
`;

// Content
export const PostCenter = styled.div`
    margin: 10px 0;
`;
export const Text = styled.div`
    font-family: sans-serif;
    font-size: 16px;
    line-height: 21px;
    color: #373737;
`;
export const Img = styled.img`
    position: relative;
    margin: 10px 0px 5px 0px;
    width: 100%;
`;

// Like and Comment
export const PostBottom = styled.div`
    display: flex;
    width: 100%;
    flex-direction: right;
`;

export const PostBottomLeft = styled.div`
    position: relative;
    width: 350px;
    display: inline-block;
    display: flex;
`;
export const PostLikeCounter = styled.div`
    align-items: center;
    font-family: sans-serif;
    font-size: 16px;
    color: #373737;
    margin-right: 10px;
`;
export const PostCommentCounter = styled.div`
    align-items: center;
    font-family: sans-serif;
    font-size: 16px;
    color: #373737;
`;

export const PostBottomRight = styled.div`
    display: flex;
    align-items: center;
`;

export const PostLike = styled.button`
    border: none;
    margin-right: 20px;
    background-color: #ffffff;
    font-size: 16px;
    font-family: sans-serif;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
        color: #0019f8;
      }
`;
export const PostComment = styled.button`
    border: none;
    background-color: #ffffff;
    font-size: 16px;
    font-family: sans-serif;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
      }
`;
