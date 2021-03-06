import React from "react";
import axios from "axios";
import {
    ButtonRoot,
    ContentBox,
    Form,
    FormControl,
    FormControlLabel,
    FormInput,
    FormTitle,
    TextWrapper,
    Wrapper,
    WrapperApp,
} from "../Login/style";
import { useHistory } from "react-router";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify"
import "../Login/Login.css"
import "./forgotpassword.css"
import Loading from "../../components/Loading"
import { validate } from "../../utils/validation";

const ForgotPassword = React.memo(() => {
    const [email, setEmail] = React.useState("");
    const history = useHistory();
    const [isSent, setIsSent] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSent) {
            setIsLoading(true)
            axios
                .post("/auth/reset-password", {
                    email,
                })
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        toast.info("Please check your mail !", {
                            position: toast.POSITION.TOP_RiGHT
                        });
                        setIsLoading(false);
                    }
                })
                .catch((err) => {
                    switch (err.response.status) {
                        case 400:
                        case 404:
                            toast.error("Invalid email!", {
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
                })
        } else {
            if (validate()) {
                setIsSent(true);
                setIsLoading(true)
                axios
                    .post("/auth/reset-password", {
                        email,
                    })
                    .then((response) => {
                        console.log(response);
                        if (response.status === 200) {
                            toast.info("Please check your mail !", {
                                position: toast.POSITION.TOP_RiGHT
                            });
                            setIsLoading(false);
                        }
                    })
                    .catch((err) => {
                        switch (err.response.status) {
                            case 400:
                            case 404:
                                toast.error("Invalid email!", {
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
                    })
            }
        }
    };

    return (
        <>
            <Wrapper>
                <WrapperApp>
                    <Icon className="signup__logo-icon" icon="icons8:cat-footprint" />
                    <TextWrapper> Tinpet </TextWrapper>{" "}
                </WrapperApp>{" "}
                <ContentBox style={{ height: "350px" }}>
                    {!isSent ? (
                        <Form onSubmit={handleSubmit}>
                            <FormTitle>
                                <Icon icon="akar-icons:arrow-back-thick-fill" className="back-icon" onClick={() => history.push("./login")} />
                                Forgot Password
                            </FormTitle>{" "}
                            <FormControl>
                                <FormControlLabel htmlFor="email"> Email </FormControlLabel>{" "}
                                <FormInput type="text" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}
                                    data-rules="isRequired/isEmail"></FormInput>{" "}
                                <div className="msg-container">
                                    <ul className="msg-list"></ul>
                                </div>
                            </FormControl>{" "}
                            <ButtonRoot style={{ marginTop: "10px" }}> Send </ButtonRoot>{" "}
                        </Form>
                    ) : (
                        <>
                            <div className="title-resend">Please check your email</div>
                            <div className="content-resent">You're almost there! We sent an email to <span>{email}</span></div>
                            <div className="instruction">Just click on the link in that email to reset your password. If you don't see it, you may need to <span>check your spam</span> folder.</div>
                            <div className="resend-box">
                                <div className="resend-box-title">Still can't find the email?</div>
                                <div className="resend-box-button" onClick={handleSubmit}>Resend</div>
                            </div>
                        </>
                    )}
                </ContentBox>{" "}
                {isLoading && <Loading />}
            </Wrapper>{" "}
        </>
    );
});

export default ForgotPassword;