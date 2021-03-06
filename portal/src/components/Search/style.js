import styled from "styled-components";

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 675px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid #ccc;
    margin: auto;
    position: relative;
    background-color: #efefef;
    transform: translateX(-7%);
`;

export const IconWrapper1 = styled.div`
    padding: 0 8px;
    position: absolute;
    top: 9px;
    cursor: pointer;
`;

export const InputSearch = styled.input`
    border: none;
    outline: none;
    width: 100%;
    background-color: #efefef;
    margin-left: 40px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    &::placeholder {
        color: #555;
        font-size: 16px;
    }
`;
