import React from "react";
import { Form } from "formik";

import AppTextField from "../AppTextField/AppTextField";
import AppButton from "../AppButton/AppButton";

interface LoginFormProps {
  isValid: boolean;
  handleChange: React.ChangeEvent<HTMLInputElement>;
  errors: object;
}

const LoginForm: React.FC<LoginFormProps> = ({
  isValid,
  handleChange,
  errors
}) => {
  console.log("isValid", isValid);
  console.log("errors", errors);

  return (
    <Form className='login__form'>
      <AppTextField
        // error={errors.email}
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
