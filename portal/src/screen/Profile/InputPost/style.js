import styled from "styled-components";

export const InputPostWrapper = styled.div`
    position: relative;
    width: 600px;
    height: 203px;
    top: 40px;
    background: #FFFFFF;
    border-radius: 15px;
`;

export const InputPostContent = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 550px;
    height: 80px;
    left: 25px;
    top: 25px;
    padding-bottom: 15px;
    border-bottom: solid 2px gray;
`;

export const Avatar = styled.img`
    position: relative;
    width: 80px;
    height: 80px;
    background: url(.jpg);
    border-radius: 10000px;
    margin-right: 10px;
    object-fit: cover;
`;
// Field Text
export const InputFieldText = styled.input`
    position: static;
    width: 450px;
    height: 60px;
    border: none;
    outline: none;
    padding: 10px;
    margin-left: 10px;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: black;
    background-color: #efefef;
    border-radius: 8px;
    &::placeholder {
        color: #888888;
        font-size: 18px;
        font-weight: 400;
      }
    overflow-wrap: break-word; 
`;

// Posting adder
export const InputPostAdd = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    height: 60px;
    left: 25px;
    top: 40px;
`;

export const InputAdd = styled.button`
    border: none;
    border-radius: 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
        color: #b648ff;
    }
    transition: 0.5s;
`;
export const IconInput = styled.div`
    transform: scale(1.3);
    margin-left: 15px;
    
`;
export const ButtonInput = styled.div`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 750;
    padding: 0px 10px 0px 15px;
`;

export const InputPostButton = styled.button`
    position: relative;
    background-color: #C0C0C0;
    height: 60px;
    width: 105px;
    left: 470px;
    top: -20px;
    border: none;
    border-radius: 10px;
    color: black; 
    cursor: pointer;
    text-align: center;
    font-family: Source Sans Pro, sans-serif;
    font-size: 30px;
    font-weight: 700;
    &:hover {
        background-color: #fb6d6c;
        color: #fff;
    }
    transition: 0.5s;
`;

