import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 250px;
  background-color: #fff;
  position: absolute;
  top: 70px;
  left: 0;
  bottom: 0;
`;

export const SideBarList = styled.ul`
  margin: 0;
  padding: 0 20px;
`;

export const SideBarElement = styled.li`
  display: flex;
  margin: 6px 0;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
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
  line-height: 20px;
`;

export const SideBarElementTitle = styled.div`
  padding-left: 16px;
  flex: 1;
`;

export const SideBarElementQuantity = styled.div`
  text-align: center;
  padding: 0 10px;
`;
