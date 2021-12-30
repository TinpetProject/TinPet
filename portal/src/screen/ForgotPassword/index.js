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
import Loading from "../../components/Loading"

const ForgotPassword = React.memo(() => {
    const [email, setEmail] = React.useState("");
    const history = useHistory();
    const [isLoading, setIsLoading] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
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
    };

    return (
        <>
            <Wrapper>
                <WrapperApp>
                    <Icon className="signup__logo-icon" icon="icons8:cat-footprint" />
                    <TextWrapper> Tinpet </TextWrapper>{" "}
                </WrapperApp>{" "}
                <ContentBox style={{ height: "350px" }}>
                    <Form onSubmit={handleSubmit}>
                        <FormTitle>
                            <Icon icon="akar-icons:arrow-back-thick-fill" className="back-icon" onClick={() => history.push("./login")} />
                            Forgot Password
                        </FormTitle>{" "}
                        <FormControl>
                            <FormControlLabel htmlFor="email"> Email </FormControlLabel>{" "}
                            <FormInput type="text" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}></FormInput>{" "}
                        </FormControl>{" "}
                        <ButtonRoot style={{ marginTop: "10px" }}> Send </ButtonRoot>{" "}
                    </Form>{" "}
                </ContentBox>{" "}
                { isLoading && <Loading/>}
            </Wrapper>{" "}
        </>
    );
});

export default ForgotPassword;