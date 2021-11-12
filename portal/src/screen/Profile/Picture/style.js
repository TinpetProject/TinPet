import styled from "styled-components";

export const PictureWrapper = styled.div`
    position: absolute;
    width: 415px;
    height: 474px;
    left: 775px;
    top: 630px;
    background: #FFFFFF;
    border-radius: 15px;
`;
export const Topic = styled.button`
    position: absolute;
    left: 28px;
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
export const View = styled.button`
    position: absolute;
    left: 320px;
    top: 42px;
    border: none;
    background: #ffffff;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #888888;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
        text-decoration: underline;
    }
`;
export const PictureListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 360px;
    height: 361px;
    left: 28px;
    top: 90px;

`;

