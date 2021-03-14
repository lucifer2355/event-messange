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
    .label("Password")
    .required()
});

interface InitialValue {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const initialValue: InitialValue = { email: "", password: "" };

  const handleSubmit: any = async ({ email, password }: InitialValue) => {
    console.log("login submit");
    console.log("Email", email);
    console.log("Password", password);
  };

  return (
    <Form
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        label='Email'
        name='email'
        type='email'
        style={{ fontSize: "1.2rem" }}
      />
      <FormField
        label='Password'
        name='password'
        type='password'
        style={{ fontSize: "1.2rem" }}
      />

      <SubmitButton
        title='Login'
        // other={{ disabled: isValid }}
      />
    </Form>
  );
};

export default LoginForm;
