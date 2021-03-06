import React from "react";
import axios from "axios";
import {
  ButtonRoot,
  ContentBox,
  Form,
  FormControl,
  FormControlLabel,
  FormInput,
  FormLink,
  FormSubScript,
  FormTitle,
  ForgetPassword,
  OptionContainer,
  TextWrapper,
  Wrapper,
  WrapperApp,
} from "./style";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { validate } from "../../utils/validation";
import "./Login.css";
import asyncLocalStorage from "../../utils/localStorageWrapper";
const Login = React.memo(({ logInHandler }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [rememberMe, setRememberMe] = React.useState("");
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      axios
        .post("/auth/sign-in", {
          email,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Login success!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
          return response.data.data;
        })
        .then((token) => {
          const userInfo = jwt_decode(token);
          localStorage.setItem("token", token);
          logInHandler({ userID: userInfo.userID, userAvatar: userInfo.avatar });
          history.push("/dashboard");
        })
        .catch((err) => {
          switch (err.response.status) {
            case 400:
            case 404:
              toast.error("Invalid email/password!", {
                position: toast.POSITION.TOP_RIGHT,
              });
              break;
            case 500:
              toast.error("Internal Server Error!", {
                position: toast.POSITION.TOP_RIGHT,
              });
              break;
            default:
              break;
          }
          setIsLoading(false);
        });
    }
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
              <FormControlLabel htmlFor="email"> Email </FormControlLabel>{" "}
              <FormInput
                type="text"
                id="email"
                placeholder="Enter your username"
                onChange={(e) => setEmail(e.target.value)}
                data-rules="isRequired/isEmail"
              ></FormInput>{" "}
              <div className="msg-container">
                <ul className="msg-list"></ul>
              </div>
            </FormControl>{" "}
            <FormControl>
              <FormControlLabel htmlFor="password"> Password </FormControlLabel>{" "}
              <FormInput
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                data-rules="isRequired"
              ></FormInput>{" "}
              <div className="msg-container">
                <ul className="msg-list"></ul>
              </div>
            </FormControl>{" "}
            <OptionContainer>
              {/* <FormControlCheckBox>
                <FormInputCheckBox type="checkbox" id="rememberMe" onChange={(e) => setRememberMe(e.currentTarget.checked)}></FormInputCheckBox>{" "}
                <FormControlLabelCheckBox htmlFor="rememberMe">Keep me logged in</FormControlLabelCheckBox>{" "}
              </FormControlCheckBox>{" "} */}
              <ForgetPassword onClick={() => history.push("/forgotpassword")}>
                Forgot Password?
              </ForgetPassword>
            </OptionContainer>
            <ButtonRoot> Sign in </ButtonRoot>{" "}
          </Form>{" "}
        </ContentBox>{" "}
        {isLoading && <Loading />}
      </Wrapper>{" "}
    </>
  );
});

export default Login;
