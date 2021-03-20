import axios from "../../api/axios";

import { AuthDispatch, LoginValues, SignUpValues } from "./types";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_COMPLETE = "REGISTER_COMPLETE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_COMPLETE = "LOGIN_COMPLETE";

export const signUp = (values: SignUpValues): AuthDispatch => async (
  dispatch
) => {
  dispatch({ type: REGISTER_START });
  try {
    const response = await axios.post("api/users/signup", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    });

    console.log(response.data);

    dispatch({ type: REGISTER_COMPLETE });
  } catch (error) {
    console.warn("Register Error", error);
  }
};

export const login = (values: LoginValues): AuthDispatch => async (
  dispatch
) => {
  try {
    console.log("email", values.email);
    console.log("password", values.password);
  } catch (error) {
    console.warn("Login Error", error);
  }
};
