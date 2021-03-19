import axios from "../../api/axios";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";

export const signUp = (
  fistName: string,
  lastName: string,
  email: string,
  password: string
) => async (dispatch) => {
  console.log("fistName", fistName);
  console.log("lastName", lastName);
  console.log("email", email);
  console.log("password", password);
};
