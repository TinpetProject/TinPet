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
    TextWrapper,
    Wrapper,
    WrapperApp,
} from "../Login/style";
import { useHistory } from "react-router";
import { Icon } from "@iconify/react";
import "./Signup.css";
import { toast } from "react-toastify"
import Loading from "../../components/Loading";
import { validate } from "../../utils/validation";

const Signup = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    // const [rememberMe, setRememberMe] = React.useState("");
    const [name, setName] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true);
            axios
                .post("/auth/sign-up", {
                    email,
                    password,
                    name,
                })
                .then((response) => {
                    if (response.status === 200) {
                        toast.success("Sign up success!", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                    setIsLoading(false);
                    history.push("/complete-profile");
                })
                .catch((err) => {
                    switch (err.response.status) {
                        case 400:
                            if(err.response.data.message === "SIGN_UP_INVALID_SCHEMA") {
                                toast.error("Invalid Schema!", {
                                    position: toast.POSITION.TOP_RIGHT
                                });
                            } else if(err.response.data.message === "SIGN_UP_FAIL_DUPPLICATE_EMAIL") {
                                toast.error("Duplicate Email!", {
                                    position: toast.POSITION.TOP_RIGHT
                                });
                            }
                            break;
                        case 404:
                            toast.error("Not found!", {
                                position: toast.POSITION.TOP_RIGHT
                            });
                            break;
                        case 500:
                            toast.error("Internal Server Error!", {
                                position: toast.POSITION.TOP_RIGHT
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
                        <FormTitle> Sign up </FormTitle>{" "}
                        <FormSubScript>
                            <span> Already have an account ? </span> <FormLink onClick={() => history.push("/login")}> Go to login </FormLink>{" "}
                        </FormSubScript>{" "}
                        <FormControl>
                            <FormControlLabel htmlFor="email"> Email <span className="required">*</span> </FormControlLabel>{" "}
                            <FormInput type="text" id="email" placeholder="Enter your username" onChange={(e) => setEmail(e.target.value)} data-rules="isRequired/isEmail"></FormInput>{" "}
                            <div className="msg-container">
                                <ul className="msg-list"></ul>
                            </div>
                        </FormControl>{" "}
                        <FormControl>
                            <FormControlLabel htmlFor="username"> Your name <span className="required">*</span> </FormControlLabel>{" "}
                            <FormInput type="text" id="username" placeholder="Enter your username" onChange={(e) => setName(e.target.value)} data-rules="isRequired"></FormInput>{" "}
                            <div className="msg-container">
                                <ul className="msg-list"></ul>
                            </div>
                        </FormControl>{" "}
                        <FormControl>
                            <FormControlLabel htmlFor="password"> Password <span className="required">*</span></FormControlLabel>{" "}
                            <FormInput type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}
                                data-rules="isRequired"></FormInput>{" "}
                            <div className="msg-container">
                                <ul className="msg-list"></ul>
                            </div>
                        </FormControl>{" "}
                        <FormControl>
                            <FormControlLabel htmlFor="passwordConfirm"> Confirm password </FormControlLabel>{" "}
                            <FormInput
                                type="password"
                                id="passwordConfirm"
                                placeholder="Enter your password"
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                data-rules="confirmPassword"
                            ></FormInput>{" "}
                            <div className="msg-container">
                                <ul className="msg-list"></ul>
                            </div>
                        </FormControl>{" "}
                        {/* <FormControlCheckBox>
                            <FormInputCheckBox type="checkbox" id="rememberMe" onChange={(e) => setRememberMe(e.currentTarget.checked)}></FormInputCheckBox>{" "}
                            <FormControlLabelCheckBox htmlFor="rememberMe">Keep me logged in</FormControlLabelCheckBox>{" "}
                        </FormControlCheckBox>{" "} */}
                        <ButtonRoot style={{ marginTop: "20px" }}> Sign up </ButtonRoot>{" "}
                    </Form>{" "}
                </ContentBox>{" "}
                {isLoading && <Loading />}
            </Wrapper>{" "}
        </>
    );
};

export default Signup;
