import React from "react";
import {
  ChatWrapper,
  ChatWindowWrapper,
  ChatBar,
  ChatInputWrapper,
  ChatInput,
  IconWrapper,
  ChatMessageWrapper,
  ChatMessage,
  ChatUser,
  ChatBox,
  ChatWindow,
  ChatBarStatus,
  ChatBarStatusTitle,
  ChatBarList,
  ChatBarItem,
  ChatBarItemAvatar,
  ChatBarItemContent,
} from "./style";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";

const Messenger = () => {
  return (
    <ChatWrapper>
      <ChatWindowWrapper>
        <ChatWindow>
          <ChatMessageWrapper
            style={{
              alignSelf: "flex-start",
              flexDirection: "row-reverse",
            }}
          >
            <ChatBox
              style={{
                alignItems: "flex-start",
              }}
            >
              <ChatMessage>Hello Tri</ChatMessage>
              <ChatMessage>T la Phuong</ChatMessage>
              <ChatMessage>T la thang ngu</ChatMessage>
            </ChatBox>
            <ChatUser style={{ marginLeft: 0, marginRight: 12 }}>
              <Avatar
                alt="corgi"
                src="https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg"
              />
            </ChatUser>
          </ChatMessageWrapper>
          <ChatMessageWrapper>
            <ChatBox>
              <ChatMessage>Hello Phương</ChatMessage>
              <ChatMessage>Bố mày là Trí</ChatMessage>
              <ChatMessage>Mày là thằng ngu Phương, hahahaha</ChatMessage>
            </ChatBox>
            <ChatUser>
              <Avatar
                alt="corgi"
                src="https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg"
              />
            </ChatUser>
          </ChatMessageWrapper>
        </ChatWindow>
        <ChatInputWrapper>
          <ChatInput placeholder="Type things"></ChatInput>
          <IconWrapper>
            <SendIcon></SendIcon>
          </IconWrapper>
        </ChatInputWrapper>
      </ChatWindowWrapper>
      <ChatBar>
        <ChatBarStatus>
          <ChatBarStatusTitle>Recent</ChatBarStatusTitle>
          <ChatBarStatusTitle>Request</ChatBarStatusTitle>
        </ChatBarStatus>
        <ChatBarList>
          <ChatBarItem>
            <ChatBarItemAvatar>
              <Avatar />
            </ChatBarItemAvatar>
            <ChatBarItemContent></ChatBarItemContent>
          </ChatBarItem>
        </ChatBarList>
      </ChatBar>
    </ChatWrapper>
  );
};

export default Messenger;
