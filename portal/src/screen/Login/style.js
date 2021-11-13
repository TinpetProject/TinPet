import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("https://s3-alpha-sig.figma.com/img/aeed/a67b/0bb6006a9fac60fc17bcff0cfee46fca?Expires=1636934400&Signature=Hev-jwXniz5cSzOU~WodlMkDn3NAG9Uo8pUSharbxo1dbW6yNHFxLilXXkCCMm82qAj7GRwXNnypLmHQ2YOaFUTVaAN6gBSLaigG5fIjMBqLquAf~V7TTEaRzYDoQX0RkyQfwAj6Mp5BN9KtZZvj1WAyUGgNBkOhpuaaDGJQfvrkHCwvdvvNdhsv1m1rKfaVbQloblSqknyLQ4gkhopfcscPtI5HMUGJ7Mm4UDUw2ie2M1eCcHgVnEIZPeVx3xH2nyp2WuFF9M3EX60FbyXw6vlhJhwjB2y3uY3yhlgNk2M3EooOjoO1TU5h0uzsDXvucasmOMu776LIB7y3bnR6mQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const WrapperApp = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
`;

export const LogoWrapper = styled.div``;

export const TextWrapper = styled.div`
    font-size: 64px;
    font-weight: 700;
    padding-left: 20px;
    &:hover {
        cursor: default;
    }
`;

export const ContentBox = styled.div`
    background-color: #fff;
    width: 600px;
    height: 730px;
    border-radius: 15px;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    padding: 50px 36px 120px 36px;
    color: #333;
`;

export const FormTitle = styled.div`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 18px;
`;
export const FormSubScript = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
`;
export const FormLink = styled.a`
    color: #a4a4a4;
    padding-left: 4px;
    cursor: pointer;
    &:hover {
        color: #333;
    }
`;
export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 16px;
`;

export const FormControlLabel = styled.label`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
`;
export const FormInput = styled.input`
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

export const FormControlCheckBox = styled.div`
    display: flex;
    align-item: center;
    justify-content: start;
    margin-top: 20px;
    margin-bottom: 24px;
`;
export const FormControlLabelCheckBox = styled.label`
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    padding-left: 4px;
`;
export const FormInputCheckBox = styled.input`
    cursor: pointer;
    width: 16px;
    height: 16px;
`;

export const ButtonRoot = styled.button`
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
