import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export interface AuthState {
  isLoading: boolean;
  isSignIn: boolean;
  registerError: string | null;
  loginError: string | null;
  token: string | null;
  error: string | null;
}

export interface SignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

export type AuthDispatch<ReturnType = void> = ThunkAction<
  ReturnType,
  AuthState,
  unknown,
  Action<string>
>;
