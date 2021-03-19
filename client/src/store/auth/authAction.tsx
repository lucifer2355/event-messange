import axios from "../../api/axios";

import { AuthDispatch, SignUpValues } from "./types";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";

export const signUp = (values: SignUpValues): AuthDispatch => async (
  dispatch
) => {
  console.log("fistName", values.fistName);
  console.log("lastName", values.lastName);
  console.log("email", values.email);
  console.log("password", values.password);
};
