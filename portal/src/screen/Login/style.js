import styled from "styled-components";

export const Wrapper = styled.div `
    width: 100%;
    height: 100%;
    background-image: url("/assets/img/Theme.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &::before {
        content: "";
        height: 100vh;
        width: 100vw;
        background-color: black;
        opacity: 50%;
        position: absolute;
        z-index: 0;
    }
`;

export const WrapperApp = styled.div `
    display: flex;
    align-items: center;
    color: #fff;
    transform: translateY(-3rem);
`;

export const LogoWrapper = styled.div ``;

export const TextWrapper = styled.div `
    font-size: 64px;
    font-weight: 700;
    padding-left: 20px;
    &:hover {
        cursor: default;
    }
`;

export const ContentBox = styled.div `
    background-color: #fff;
    width: 600px;
    height: 730px;
    border-radius: 15px;
    z-index: 1;
`;

export const Form = styled.form `
    width: 100%;
    height: 100%;
    padding: 50px 36px 120px 36px;
    color: #333;
`;

export const FormTitle = styled.div `
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 18px;
`;
export const FormSubScript = styled.div `
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
`;
export const FormLink = styled.a `
    color: #a4a4a4;
    padding-left: 4px;
    cursor: pointer;
    &:hover {
        color: #333;
    }
`;
export const FormControl = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 16px;
    position: relative;
`;

export const FormControlLabel = styled.label `
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
`;
export const FormInput = styled.input `
    width: 100%;
    height: 47px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #eaeaea;
    &::placeholder {
        color: #a4a4a4;
        font-size: 14px;
        font-weight: 400;
    }
`;

export const FormControlCheckBox = styled.div `
    display: flex;
    align-item: center;
    justify-content: start;
    margin-top: 20px;
    margin-bottom: 24px;
`;
export const FormControlLabelCheckBox = styled.label `
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    padding-left: 4px;
`;
export const FormInputCheckBox = styled.input `
    cursor: pointer;
    width: 16px;
    height: 16px;
`;

export const ButtonRoot = styled.button `
    width: 100%;
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
    background-color: #333;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const OptionContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 0 20px;
`;

export const ForgetPassword = styled.div `
    font-size: 16px;
    font-weight: 400;
    color: #1964d5;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;