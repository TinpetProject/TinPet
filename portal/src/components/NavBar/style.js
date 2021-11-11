import styled from "styled-components";

export const NavBarWrapper = styled.nav`
    width: 100vw;
    height: 60px;
    background-color: #fff;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

export const LogoWrapper = styled.div`
    color: #373737;
    width: 250px;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
        color: #fb6d6c;
    }
`;

export const AppTitle = styled.div`
    margin: 8px;
    font-weight: 700;
`;

export const UserWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    margin-right: 2.2rem;
`;

export const UserAvatarWrapper = styled.div`
    margin-left: 16px;
    cursor: pointer;
`;
export const UserNotiWrapper = styled.div`
    cursor: pointer;
`;
