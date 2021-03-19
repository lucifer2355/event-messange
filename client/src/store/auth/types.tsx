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
  fistName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginValues {
  email: string;
  password: string;
}
