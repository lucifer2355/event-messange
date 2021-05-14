import { combineReducers } from "redux";

import { authReducer } from "./auth/authReducer";
import { eventReducer } from "./event/eventReducer";
import { getEventsReducer } from "./getEvents/getEventsReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  getEvents: getEventsReducer,
  event: eventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
