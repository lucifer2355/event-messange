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

export interface LoginReturn {
  token: string;
  email: string;
}

export interface RegisterReturn {
  token: string;
  email: string;
}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_COMPLETE = "LOGIN_COMPLETE";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_COMPLETE = "REGISTER_COMPLETE";

interface LoginStartAction {
  type: typeof LOGIN_START;
}

interface LoginCompleteAction {
  type: typeof LOGIN_COMPLETE;
  payload: LoginReturn;
}

interface RegisterStartAction {
  type: typeof REGISTER_START;
}

interface RegisterCompleteAction {
  type: typeof REGISTER_COMPLETE;
  payload: RegisterReturn;
}

export type AuthActionType =
  | LoginStartAction
  | LoginCompleteAction
  | RegisterStartAction
  | RegisterCompleteAction;

export type AuthDispatch<ReturnType = void> = ThunkAction<
  ReturnType,
  AuthState,
  unknown,
  AuthActionType
>;
