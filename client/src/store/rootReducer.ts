import { combineReducers } from "redux";

import { authReducer } from "./auth/authReducer";
import { getEventsReducer } from "./getEvents/getEventsReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  getEvents: getEventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
