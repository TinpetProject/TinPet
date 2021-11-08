import styled from "styled-components";

export const InputPostWrapper = styled.div`
    display: flex;
    position: absolute;
    width: 730px;
    height: 203px;
    left: 20px;
    top: 630px;
    background: #FFFFFF;
    border-radius: 15px;
`;

export const InputPostContent = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    width: 680px;
    height: 80px;
    left: 25px;
    top: 25px;
    padding-bottom: 15px;
    border-bottom: solid 2px gray;
`;

export const Img = styled.img`
    position: static;
    width: 80px;
    height: 80px;
    background: url(.jpg);
    border-radius: 10000px;
    margin: 10px;
    object-fit: cover;
`;
// Field Text
export const InputFieldText = styled.input`
    position: static;
    width: 600px;
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
    align-items: center;
    position: absolute;
    width: 450px;
    height: 62px;
    left: 28px;
    top: 118px;
`;

export const InputAdd = styled.button`
    border: none;
    border-radius: 10px;
    height: 62px;
    margin-right: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
    
`;
export const IconInput = styled.div`
    transform: scale(1.3);
    padding: 10px 0px 10px 12px;
`;
export const ButtonInput = styled.div`
    font-size: 20px;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 750;
    padding: 0px 10px 0px 15px;
`;

export const InputPostButton = styled.button`
    position: absolute;
    background-color: #C0C0C0;
    height: 62px;
    width: 105px;
    left: 600px;
    top: 118px;
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
    transition: 0.1s;
`;

