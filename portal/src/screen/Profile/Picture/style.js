import styled from "styled-components";

export const PictureWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 340px;
    left: 620px;
    top: -163px;
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
export const View = styled.button`
    position: relative;
    border: none;
    top: 20px;
    left: 110px;
    background: #ffffff;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #888888;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
        text-decoration: underline;
    }
`;
export const PictureListWrapper = styled.div`
    position: relative;
    left: 19px;
    top: 30px;
`;

