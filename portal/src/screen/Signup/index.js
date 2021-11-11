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
} from "../Login/style";
import PetsIcon from "@mui/icons-material/Pets";
import { useHistory } from "react-router";

const Signup = ({ getUserInfo }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState("");
  const [name, setName] = React.useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/sign-up", {
        email,
        password,
        name,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
            <FormTitle> Sign up </FormTitle>{" "}
            <FormSubScript>
              <span> Already have an account ? </span>{" "}
              <FormLink onClick={() => history.push("/login")}>
                {" "}
                Go to login{" "}
              </FormLink>{" "}
            </FormSubScript>{" "}
            <FormControl>
              <FormControlLabel htmlFor="Email"> Email </FormControlLabel>{" "}
              <FormInput
                type="text"
                id="username"
                placeholder="Enter your username"
                onChange={(e) => setEmail(e.target.value)}
              ></FormInput>{" "}
            </FormControl>{" "}
            <FormControl>
              <FormControlLabel htmlFor="Email"> Your name </FormControlLabel>{" "}
              <FormInput
                type="text"
                id="username"
                placeholder="Enter your username"
                onChange={(e) => setName(e.target.value)}
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
            <FormControl>
              <FormControlLabel htmlFor="passwordConfirm">
                {" "}
                Confirm password{" "}
              </FormControlLabel>{" "}
              <FormInput
                type="password"
                id="passwordConfirm"
                placeholder="Enter your password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
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
            <ButtonRoot> Sign up </ButtonRoot>{" "}
          </Form>{" "}
        </ContentBox>{" "}
      </Wrapper>{" "}
    </>
  );
};

export default Signup;
