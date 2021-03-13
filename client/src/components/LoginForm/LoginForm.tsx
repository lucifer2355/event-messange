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

interface InitialValue {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  isValid,
  handleChange,
  errors
}) => {
  const initialValue: InitialValue = { email: "", password: "" };
  const handleSubmit = async (email: string, password: string) => {
    console.log("login submit");
  };

  return (
    <Form
      initialValues={initialValue}
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
        // other={{ disabled: isValid }}
      />
    </Form>
  );
};

export default LoginForm;
