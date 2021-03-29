import {
  LOGIN_COMPLETE,
  LOGIN_START,
  REGISTER_COMPLETE,
  REGISTER_START,
} from "./authAction";
import { AuthActionType, AuthState } from "./types";

const initialState: AuthState = {
  isLoading: false,
  isSignIn: false,
  registerError: null,
  loginError: null,
  token: null,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: false,
        loginError: null,
      };

    case LOGIN_COMPLETE:
      return {
        ...state,
        isLoading: false,
        isSignIn: true,
        token: action.payload.token,
      };

    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        registerError: null,
      };

    case REGISTER_COMPLETE:
      return {
        ...state,
        isLoading: false,
        isSignIn: true,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
