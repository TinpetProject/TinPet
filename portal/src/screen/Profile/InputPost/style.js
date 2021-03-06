import styled from "styled-components";

export const InputPostWrapper = styled.div `
    position: relative;
    width: 600px;
    height: 170px;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

export const InputPostContent = styled.div `
    display: flex;
    align-items: center;
    position: relative;
    width: 560px;
    height: 80px;
    left: 20px;
    top: 20px;
`;

export const Avatar = styled.img `
    position: relative;
    width: 40px;
    height: 40px;
    background: url(.jpg);
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;
// Field Text
export const InputFieldText = styled.div `
    position: static;
    width: 470px;
    height: 50px;
    border: none;
    outline-color: lightgray;
    padding: 10px;
    margin-left: 5px;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.5;
    resize: vertical;
    display: flex;
    align-items: center;
    background-color: #efefef;
    border-radius: 8px;
    cursor: text;
    font-weight: 400;
    overflow-wrap: break-word; 
`;

// Posting adder
export const InputPostAdd = styled.div `
    display: flex;
    flex-direction: row;
    position: relative;
    height: 40px;
    left: 20px;
    top: 30px;
`;

export const InputAdd = styled.button `
    border: none;
    border-radius: 10px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
        color: #b648ff;
    }
    transition: 0.5s;
`;
export const IconInput = styled.div `
    transform: scale(1);
    margin-left: 10px;
`;
export const ButtonInput = styled.div `
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 750;
    padding: 0px 10px 0px 8px;
`;

export const InputPostButton = styled.button `
    position: relative;
    background-color: #C0C0C0;
    height: 40px;
    width: 100px;
    left: 480px;
    top: -10px;
    border: none;
    border-radius: 10px;
    color: black; 
    cursor: pointer;
    font-family: Source Sans Pro, sans-serif;
    font-size: 20px;
    font-weight: 600;
    &:hover {
        background-color: #fb6d6c;
        color: #fff;
    }
    transition: 0.5s;
`;