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
  ForgetPassword,
  OptionContainer,
  TextWrapper,
  Wrapper,
  WrapperApp,
} from "./style";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify"
import Loading from "../../components/Loading";

const Login = React.memo(({ logInHandler }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState("");
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
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
          setIsLoading(false);
        }
        return response.data.data;
      })
      .then((token) => {
        const userInfo = jwt_decode(token);
        logInHandler(userInfo.userID);
        localStorage.setItem("token", token);
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
      })
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
            <OptionContainer>
              <FormControlCheckBox>
                <FormInputCheckBox type="checkbox" id="rememberMe" onChange={(e) => setRememberMe(e.currentTarget.checked)}></FormInputCheckBox>{" "}
                <FormControlLabelCheckBox htmlFor="rememberMe">Keep me logged in</FormControlLabelCheckBox>{" "}
              </FormControlCheckBox>{" "}
              <ForgetPassword onClick={() => history.push("/forgotpassword")}>Forgot Password?</ForgetPassword>
            </OptionContainer>
            <ButtonRoot> Sign in </ButtonRoot>{" "}
          </Form>{" "}
        </ContentBox>{" "}
        {isLoading && <Loading/>}
      </Wrapper>{" "}
    </>
  );
});

export default Login;
