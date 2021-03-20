import axios from "../../api/axios";

import { AuthDispatch, SignUpValues } from "./types";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_COMPLETE = "REGISTER_COMPLETE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_COMPLETE = "LOGIN_COMPLETE";

export const signUp = (values: SignUpValues): AuthDispatch => async (
  dispatch
) => {
  // dispatch({ type: REGISTER_START });
  try {
    console.log("firstName", values.firstName);
    console.log("lastName", values.lastName);
    console.log("email", values.email);
    console.log("password", values.password);

    // dispatch({ type: REGISTER_COMPLETE });
  } catch (error) {
    console.warn("Register Error", error);
  }
};
