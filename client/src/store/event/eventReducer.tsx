import { EventsState } from "../../../types";
import {
  DELETE_EVENT_COMPLETE,
  DELETE_EVENT_START,
  EventActionType,
} from "./types";

const initialState: EventsState = {
  isDeleted: false,
};

export const eventReducer = (
  state = initialState,
  action: EventActionType
): EventsState => {
  switch (action.type) {
    case DELETE_EVENT_START:
      return {
        isDeleted: false,
      };

    case DELETE_EVENT_COMPLETE:
      return {
        isDeleted: true,
      };

    default:
      return state;
  }
};
