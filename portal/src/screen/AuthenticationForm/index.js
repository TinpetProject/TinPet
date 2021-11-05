import React from "react";
import {
  ContentBox,
  LogoWrapper,
  TextWrapper,
  Wrapper,
  WrapperApp,
} from "./style";
import PetsIcon from "@mui/icons-material/Pets";
import Login from "./Login";
import Signup from "./Signup";

const AuthenticationForm = () => {
  const [toLogin, setToLogin] = React.useState();

  return (
    <>
      <Wrapper>
        <WrapperApp>
          <LogoWrapper>
            <PetsIcon sx={{ fontSize: "100px" }} />
          </LogoWrapper>
          <TextWrapper>Tinpet</TextWrapper>
        </WrapperApp>
        <ContentBox>{toLogin ? <Login /> : <Signup />}</ContentBox>
      </Wrapper>
    </>
  );
};

export default AuthenticationForm;
