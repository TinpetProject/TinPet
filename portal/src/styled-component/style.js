import styled from "styled-components";
import Grid from "@mui/material/Grid";
// Folder style-component dùng tạm thời để test các component
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

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

export const ContentWrapper = styled(Box)`
  background-color: #e5e5e5;
  position: absolute;
  top: 70px;
  left: 250px;
  right: 0;
  bottom: 0;
`;

export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
`;

export const ChatWindowWrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  height: 100%;
  width: 1200px;
  position: relative;
`;

export const ChatBar = styled.div`
  margin-left: 30px;
  border-radius: 15px;
  background-color: #fff;
  height: 100%;
  width: 320px;
`;

export const ChatInputWrapper = styled.div`
  background-color: #f7f7f7;
  width: calc(100% - 40px);
  height: 40px;
  border-radius: 8px;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
`;

export const ChatInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: inherit;
  line-height: 40px;
  min-height: 40px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 400;
`;

export const IconWrapper = styled.div`
  padding: 0 10px;
`;

//
export const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  align-items: flex-end;
  position: absolute;
  bottom: 76px;
  right: 20px;
`;

export const ChatMessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ChatMessage = styled.div`
  background-color: #e5e5e5;
  max-width: 600px;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 12px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const ChatUser = styled.div`
  padding: 0 8px;
  margin-left: 8px;
`;
