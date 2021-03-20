import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import * as authActions from "../../store/auth/authAction";
import { SignUpValues } from "../../store/auth/types";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../forms";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .label("First Name")
    .required(),
  lastName: Yup.string()
    .label("Last Name")
    .required(),
  email: Yup.string()
    .email()
    .label("Email")
    .required(),
  password: Yup.string()
    .min(4, "Too Short")
    .max(15, "Too long!")
    .label("Password")
    .required(),
});

const RegistrationForm: React.FC = () => {
  const initialValue: SignUpValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit: any = async (values: SignUpValues) => {
    await dispatch(authActions.signUp(values, history));
  };

  return (
    <Form
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormField
        label='First Name'
        name='firstName'
        type='text'
        style={{ fontSize: "1.2rem" }}
      />
      <FormField
        label='Last Name'
        name='lastName'
        type='text'
        style={{ fontSize: "1.2rem" }}
      />
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
      {/* <FormField
        label='Confirm Password'
        name='ConfirmPassword'
        type='password'
        style={{ fontSize: "1.2rem" }} */}
      {/* /> */}
      <SubmitButton title='Create Account' />
    </Form>
  );
};

export default RegistrationForm;
