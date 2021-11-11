import styled from "styled-components";

export const SideBarWrapper = styled.div`
    width: 200px;
    background-color: #fff;
    position: fixed;
    top: 60px;
    left: calc((100% - 1140px) / 2);
    bottom: 0;
    border-right: 2px solid #a7a7a7;
    z-index: 0;
`;

export const SideBarList = styled.ul`
    margin: 0;
    padding: 0 20px;
    margin-top: 60px;
`;

export const SideBarElement = styled.li`
    display: flex;
    margin: 5px 0;
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    color: #373737;
    line-height: 20px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #fb6d6c;
        color: #fff;
    }
`;

export const SideBarListTitle = styled.h3`
    color: #a7a7a7;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
`;

export const SideBarElementTitle = styled.div`
    padding-left: 12px;
    flex: 1;
`;

export const SideBarElementQuantity = styled.div`
    text-align: center;
`;
