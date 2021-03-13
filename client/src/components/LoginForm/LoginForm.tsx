import React from "react";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton
} from "../forms";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .label("Email")
    .required(),
  password: Yup.string()
    .min(4, "Too Short")
    .max(15, "Too long!")
    .label("Password")
    .required()
});

interface LoginFormProps {
  isValid: boolean;
  handleChange: () => void;
  errors: object;
}

const LoginForm: React.FC<LoginFormProps> = ({
  isValid,
  handleChange,
  errors
}) => {
  const handleSubmit = async (email: any, password: any) => {
    console.log("login submit");
  };

  return (
    <Form
      initialValues={{ email: "", password: "" }}
      onSubmit={() => handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        name='Email'
        type='email'
        style={{ fontSize: "1.2rem" }}
        other={{ name: "email", onChange: handleChange }}
      />
      <FormField
        name='Password'
        type='password'
        style={{ fontSize: "1.2rem" }}
        other={{ name: "password" }}
      />

      <SubmitButton
        title='Login'
        onClick={() => console.log("hello")}
        // other={{ disabled: isValid }}
      />
    </Form>
  );
};

export default LoginForm;
