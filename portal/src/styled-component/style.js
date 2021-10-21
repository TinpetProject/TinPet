import styled from "styled-components";
// Folder style-component dùng tạm thời để test các component

// Button
export const ButtonRoot = styled.button`
  width: 485px;
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
  background-color: #000;
  margin-bottom: 10px;
`;

export const ButtonGoogle = styled(ButtonRoot)`
  background-color: #e5e5e5;
  color: black;
`;

export const ButtonFacebook = styled(ButtonRoot)`
  background-color: #3b5998;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

// Home page wrapper
export const HomePage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
`;
