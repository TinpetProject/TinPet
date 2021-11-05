import styled from "styled-components";
import Grid from "@mui/material/Grid";
// Folder style-component dùng tạm thời để test các component
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

// Button
export const ButtonRoot = styled.button`
    width: 485px;
    height: 40px;
    padding: 10px 16px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #fff;
    background-color: #000;
    margin-bottom: 10px;
`;

export const ButtonGoogle = styled(ButtonRoot)`
    background-color: #efefef;
    color: black;
`;

export const ButtonFacebook = styled(ButtonRoot)`
    background-color: #3b5998;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

// Home page wrapper
export const HomePage = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #efefef;
`;

export const ContentWrapper = styled(Box)`
    background-color: #efefef;
    width: 1440px;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translate(-50%);
    right: 260px;
    bottom: 0;
`;

export const Content = styled(Box)`
    background-color: #efefef;
    position: absolute;
    top: 0px;
    left: 240px;
    right: 0;
    bottom: 0;
`;
