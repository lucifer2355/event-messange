import React from "react";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton
} from "../forms";

interface InitialValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

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
  confirmPassword: Yup.string()
    .label("Confirm Password")
    .required()
});

const RegistrationForm: React.FC = () => {
  const initialValue: InitialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const handleSubmit: any = ({
    firstName,
    lastName,
    email,
    password
  }: InitialValue) => {
    console.log("Regisartion Data", firstName);
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
      <FormField
        label='Confirm Password'
        name='ConfirmPassword'
        type='password'
        style={{ fontSize: "1.2rem" }}
      />

      <SubmitButton title='Create Account' />
    </Form>
  );
};

export default RegistrationForm;
