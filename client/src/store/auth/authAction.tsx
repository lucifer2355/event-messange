import axios from "../../api/axios";
import { RouteComponentProps } from "react-router-dom";

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
    const { data } = await axios.post("api/users/signup", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    });

    localStorage.setItem("token", data.token);

    dispatch({ type: REGISTER_COMPLETE, token: data.token });
  } catch (error) {
    console.warn("Register Error", error);
  }
};

export const login = (
  values: LoginValues,
  history: any
): AuthDispatch => async (dispatch) => {
  dispatch({ type: LOGIN_START });
  try {
    const { data } = await axios.post("/api/users/login", {
      email: values.email,
      password: values.password,
    });

    localStorage.setItem("token", data.token);

    dispatch({ type: LOGIN_COMPLETE, token: data.token });
    // history.push("/");
  } catch (error) {
    console.warn("Login Error", error);
  }
};
