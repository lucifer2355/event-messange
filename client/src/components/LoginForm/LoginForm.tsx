import React from "react";
import { Form } from "formik";

import AppTextField from "../AppTextField/AppTextField";
import AppButton from "../AppButton/AppButton";

interface LoginFormProps {
  isValid: boolean;
  handleChange: void;
}

const LoginForm: React.FC<LoginFormProps> = ({ isValid, handleChange }) => {
  console.log("isValid", isValid);

  return (
    <Form className='login__form'>
      <AppTextField
        label='Email'
        type='email'
        style={{ fontSize: "1.2rem" }}
        other={{ name: "email", onChange: handleChange }}
      />
      <AppTextField
        label='Password'
        type='password'
        style={{ fontSize: "1.2rem" }}
        other={{ name: "password" }}
      />

      <AppButton title='Login' other={{ disabled: isValid }} />
    </Form>
  );
};

export default LoginForm;
