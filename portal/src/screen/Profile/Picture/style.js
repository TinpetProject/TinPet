import styled from "styled-components";

export const PictureWrapper = styled.div`
    position: absolute;
    width: 300px;
    height: 340px;
    left: 620px;
    top: 488px;
    background: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;
export const Topic = styled.div`
    position: absolute;
    margin: 20px;
    background: #ffffff;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #373737;
`;
export const View = styled.button`
    position: absolute;
    border: none;
    margin: 28px 0px 0px 220px;
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
    margin-left: 20px;
    margin-top: 60px;
`;

