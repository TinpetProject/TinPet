import React from "react";
import {
  Form,
  FormTitle,
  FormSubScript,
  FormControl,
  FormInput,
  FormLink,
  FormControlLabel,
  FormControlCheckBox,
  FormInputCheckBox,
  FormControlLabelCheckBox,
  ButtonRoot,
} from "../style";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("log in");
  };
  return (
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
        <FormInputCheckBox type="checkbox" id="rememberMe"></FormInputCheckBox>
        <FormControlLabelCheckBox htmlFor="rememberMe">
          Keep me logged in
        </FormControlLabelCheckBox>
      </FormControlCheckBox>
      <ButtonRoot>Sign in</ButtonRoot>
    </Form>
  );
};
