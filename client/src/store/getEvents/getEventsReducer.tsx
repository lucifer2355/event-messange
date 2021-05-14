import { GetEventState } from "../../../types";
import {
  GetEventActionType,
  GET_EVENTS_COMPLETE,
  GET_EVENTS_START,
} from "./types";

const initialState: GetEventState = {
  isLoading: false,
  events: [],
};

export const getEventsReducer = (
  state = initialState,
  action: GetEventActionType
): GetEventState => {
  switch (action.type) {
    case GET_EVENTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_EVENTS_COMPLETE:
      return {
        isLoading: false,
        events: action.payload,
      };

    default:
      return state;
  }
};
