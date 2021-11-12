import styled from "styled-components";
import Box from "@mui/material/Box";

export const ContentWrapper = styled(Box)
`
  background-color: #efefef;
  width: 1440px;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translate(-50%);
  right: 260px;
  bottom: 0;
`;

export const Content = styled(Box)
`
  background-color: #efefef;
  position: absolute;
  top: 0px;
  left: 240px;
  right: 0;
  bottom: 0;
`;