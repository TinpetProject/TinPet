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
import { useHistory, useParams } from "react-router";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import "../Login/Login.css";
import Loading from "../../components/Loading";

const ResetPassword = () => {
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    const history = useHistory();
    const [resetToken, setResetToken] = React.useState(useParams().resetToken);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios
            .post(`/auth/reset-password/${resetToken}`, {
                password,
            })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    toast.success("Reset password success!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setIsLoading(false);
                    history.replace("/login");
                }
                return response.data.data;
            })
            .catch((err) => {
                switch (err.response.status) {
                    case 400:
                    case 404:
                        toast.error("Invalid password!", {
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
    };

    return (
        <>
            <Wrapper>
                <WrapperApp>
                    <Icon className="signup__logo-icon" icon="icons8:cat-footprint" />
                    <TextWrapper> Tinpet </TextWrapper>{" "}
                </WrapperApp>{" "}
                <ContentBox style={{ height: "430px" }}>
                    <Form onSubmit={handleSubmit}>
                        <FormTitle>
                            <Icon icon="akar-icons:arrow-back-thick-fill" className="back-icon" onClick={() => history.replace("/login")} />
                            Reset your password
                        </FormTitle>{" "}
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
                            <FormControlLabel htmlFor="passwordConfirm"> Confirm password </FormControlLabel>{" "}
                            <FormInput
                                type="password"
                                id="passwordConfirm"
                                placeholder="Confirm your password"
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            ></FormInput>{" "}
                        </FormControl>{" "}
                        <ButtonRoot style={{ marginTop: "10px" }}> Reset Password </ButtonRoot>{" "}
                    </Form>{" "}
                </ContentBox>{" "}
                {isLoading && <Loading/>}
            </Wrapper>{" "}
        </>
    );
};

export default ResetPassword;
