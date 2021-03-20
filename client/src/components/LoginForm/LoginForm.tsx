import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, RouteComponentProps } from "react-router-dom";
import * as Yup from "yup";

import * as authActions from "../../store/auth/authAction";
import { LoginValues } from "../../store/auth/types";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../forms";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .label("Email")
    .required(),
  password: Yup.string()
    .label("Password")
    .required(),
});

const LoginForm: React.FC = () => {
  const initialValue: LoginValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit: any = async (
    values: LoginValues,
    history: RouteComponentProps
  ) => {
    await dispatch(authActions.login(values, history));
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
