import React from "react";
import {
  ButtonRoot,
  ContentBox,
  Form,
  FormControl,
  FormControlCheckBox,
  FormControlLabel,
  FormControlLabelCheckBox,
  FormInput,
  FormInputCheckBox,
  FormLink,
  FormSubScript,
  FormTitle,
  LogoWrapper,
  TextWrapper,
  Wrapper,
  WrapperApp,
} from "./style";
import PetsIcon from "@mui/icons-material/Pets";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrapper>
        <WrapperApp>
          <LogoWrapper>
            <PetsIcon sx={{ fontSize: "100px" }} />
          </LogoWrapper>
          <TextWrapper>Tinpet</TextWrapper>
        </WrapperApp>
        <ContentBox>
          <Form onSubmit={handleSubmit}>
            <FormTitle>Sign In</FormTitle>
            <FormSubScript>
              <span>Don't have an account?</span>
              <FormLink>Create an account</FormLink>
            </FormSubScript>
            <FormControl>
              <FormControlLabel htmlFor="username">Username</FormControlLabel>
              <FormInput
                type="text"
                id="username"
                placeholder="Enter your username"
              ></FormInput>
            </FormControl>
            <FormControl>
              <FormControlLabel htmlFor="password">Password</FormControlLabel>
              <FormInput
                type="password"
                id="password"
                placeholder="Enter your password"
              ></FormInput>
            </FormControl>
            <FormControlCheckBox>
              <FormInputCheckBox
                type="checkbox"
                id="rememberMe"
              ></FormInputCheckBox>
              <FormControlLabelCheckBox htmlFor="rememberMe">
                Keep me logged in
              </FormControlLabelCheckBox>
            </FormControlCheckBox>
            <ButtonRoot>Sign in</ButtonRoot>
          </Form>
        </ContentBox>
      </Wrapper>
    </>
  );
};

export default Login;
