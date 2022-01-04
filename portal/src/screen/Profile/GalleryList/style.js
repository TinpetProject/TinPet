import styled from "styled-components";

export const PhotosWrapper = styled.div `
    position: relative;
    width: 920px;
    height: auto;
    margin-top: 20px;
    padding: 20px 0px 0px 20px;
    background: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
    display: inline-block;
`;

export const ImgWrapper = styled.div `
    width: 280px;
    height: 220px;
    margin-right: 20px;
    margin-bottom: 20px;
    float: left;
    cursor: pointer;
    border-radius: 10px;
`;

export const Img = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: lightgray;
    border-radius: 10px;    
`;

export const Backdrop = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;  
`;

export const BackdropImg = styled.img `
    display: block;
    max-width: 60%;
    max-height: 80%;
    // margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    border: 3px solid white;
`;