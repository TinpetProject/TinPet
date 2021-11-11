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
import PetsIcon from "@mui/icons-material/Pets";
import { useHistory } from "react-router";

const Login = ({ getUserInfo }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/sign-in", {
        email: username,
        password,
      })
      .then((response) => response.data.data)
      .then((data) => getUserInfo(data))
      .catch((err) => console.log(err));
    // history.push("/dashboard");
  };

  return (
    <>
      <Wrapper>
        <WrapperApp>
          <LogoWrapper>
            <PetsIcon sx={{ fontSize: "100px" }} />{" "}
          </LogoWrapper>{" "}
          <TextWrapper> Tinpet </TextWrapper>{" "}
        </WrapperApp>{" "}
        <ContentBox>
          <Form onSubmit={handleSubmit}>
            <FormTitle> Sign In </FormTitle>{" "}
            <FormSubScript>
              <span> Don 't have an account?</span>{" "}
              <FormLink> Create an account </FormLink>{" "}
            </FormSubScript>{" "}
            <FormControl>
              <FormControlLabel htmlFor="username"> Username </FormControlLabel>{" "}
              <FormInput
                type="text"
                id="username"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              ></FormInput>{" "}
            </FormControl>{" "}
            <FormControl>
              <FormControlLabel htmlFor="password"> Password </FormControlLabel>{" "}
              <FormInput
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              ></FormInput>{" "}
            </FormControl>{" "}
            <FormControlCheckBox>
              <FormInputCheckBox
                type="checkbox"
                id="rememberMe"
                onChange={(e) => setRememberMe(e.currentTarget.checked)}
              ></FormInputCheckBox>{" "}
              <FormControlLabelCheckBox htmlFor="rememberMe">
                Keep me logged in
              </FormControlLabelCheckBox>{" "}
            </FormControlCheckBox>{" "}
            <ButtonRoot> Sign in </ButtonRoot>{" "}
          </Form>{" "}
        </ContentBox>{" "}
      </Wrapper>{" "}
    </>
  );
};

export default Login;
