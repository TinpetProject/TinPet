import styled from "styled-components";

export const FilterList = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 36px;
  left: 0;
  width: 250;
  width: 250px;
  height: 500px;
  background-color: #fff;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 10;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  display: none;
`;

export const FilterItem = styled.li`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 25px;
    left: 0;
    width: 100%;
    height: 20px;
  }
  &:hover ${FilterList} {
    display: block;
  }
`;

export const IconWrapper2 = styled.div`
  position: absolute;
  right: 6px;
  top: 3px;
`;
export const FilterTitle = styled.div`
  line-height: 28px;
  font-size: 16px;
  padding-left: 16px;
  color: #555;
`;
