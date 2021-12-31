import React from "react";
import axios from "axios";
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
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
import { Icon } from "@iconify/react";

const Login = React.memo(({ logInHandler }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/sign-in", {
        email,
        password,
      })
      .then((response) => response.data.data)
      .then((token) => {
        const userInfo = jwt_decode(token);
        logInHandler(userInfo.userID);
        localStorage.setItem("token", token);
        history.push("/messenger");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Wrapper>
        <WrapperApp>
          <Icon className="signup__logo-icon" icon="icons8:cat-footprint" />
          <TextWrapper> Tinpet </TextWrapper>{" "}
        </WrapperApp>{" "}
        <ContentBox>
          <Form onSubmit={handleSubmit}>
            <FormTitle> Sign In </FormTitle>{" "}
            <FormSubScript>
              <span> Don 't have an account?</span>
              <FormLink onClick={() => history.push("/signup")}>Create an account</FormLink>{" "}
            </FormSubScript>{" "}
            <FormControl>
              <FormControlLabel htmlFor="username"> Username </FormControlLabel>{" "}
              <FormInput type="text" id="username" placeholder="Enter your username" onChange={(e) => setEmail(e.target.value)}></FormInput>{" "}
            </FormControl>{" "}
            <FormControl>
              <FormControlLabel htmlFor="password"> Password </FormControlLabel>{" "}
              <FormInput type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}></FormInput>{" "}
            </FormControl>{" "}
            <FormControlCheckBox>
              <FormInputCheckBox type="checkbox" id="rememberMe" onChange={(e) => setRememberMe(e.currentTarget.checked)}></FormInputCheckBox>{" "}
              <FormControlLabelCheckBox htmlFor="rememberMe">Keep me logged in</FormControlLabelCheckBox>{" "}
            </FormControlCheckBox>{" "}
            <ButtonRoot> Sign in </ButtonRoot>{" "}
          </Form>{" "}
        </ContentBox>{" "}
      </Wrapper>{" "}
    </>
  );
});

export default Login;
