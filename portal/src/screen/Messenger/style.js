import styled from "styled-components";

// Messenger Screen
export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
`;

// Chat window screen
export const ChatWindowWrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  height: 100%;
  width: 1200px;
  position: relative;
`;

// Chat bar - list chat
export const ChatBar = styled.div`
  margin-left: 30px;
  border-radius: 15px;
  background-color: #fff;
  height: 100%;
  width: 320px;
`;

// Input Bar
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

// Messages sended window
export const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  align-items: flex-end;
  position: absolute;
  bottom: 76px;
  right: 20px;
`;

// Messages from one user at a time
export const ChatMessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

// Messages container
export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// Message
export const ChatMessage = styled.div`
  background-color: #e5e5e5;
  max-width: 600px;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 12px;
  border-radius: 8px;
  margin-top: 10px;
`;

// Chat User
export const ChatUser = styled.div`
  padding: 0 8px;
  margin-left: 8px;
`;
