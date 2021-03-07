import React from "react";
import { Form } from "formik";

import AppTextField from "../AppTextField/AppTextField";
import AppButton from "../AppButton/AppButton";

interface LoginFormProps {
  isValid: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ isValid }) => {
  return (
    <Form className='login__form'>
      <AppTextField label='Email' type='email' style={{ fontSize: "1.2rem" }} />
      <AppTextField
        label='Password'
        type='password'
        style={{ fontSize: "1.2rem" }}
      />

      <AppButton title='Login' other={{ disabled: { isValid } }} />
    </Form>
  );
};

export default LoginForm;
