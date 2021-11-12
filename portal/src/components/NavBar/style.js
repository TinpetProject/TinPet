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

export const AppTitle = styled.div `
  margin: 8px;
  font-weight: 700;
`;


export const UserWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    margin-right: 2.6rem;
`;

export const UserNotiWrapper = styled.div `
  cursor: pointer;
`;

export const Menu = styled.div `
  min-height: 100px;
  width: 100px;
  background-color: #fff;
  position: absolute;
  top: 50px;
  right: 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  display: none;

  &::before {
    content: "";
    width: 50px;
    height: 20px;
    position: absolute;
    top: -18px;
    right: 0;
  }
`;

export const MenuItem = styled.div `
  font-size: 16px;
  padding: 8px 0 8px 10px;
  border-top: 1px solid #ccc;

  &:first-child {
    border-top: none;
  }

  &:hover {
    background-color: #ccc;
  }
`;

export const UserAvatarWrapper = styled.div `
  margin-left: 16px;
  cursor: pointer;
  position: relative;
  &:hover ${Menu} {
    display: block;
  }
`;