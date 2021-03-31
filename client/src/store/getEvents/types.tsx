import { ThunkAction } from "redux-thunk";

import { EventState } from "../../../types";

export const GET_EVENTS_START = "GET_EVENTS_START";
export const GET_EVENTS_COMPLETE = "GET_EVENT_COMPLETE";

interface GetEventsStartAction {
  type: typeof GET_EVENTS_START;
}

interface GetEventsCompleteAction {
  type: typeof GET_EVENTS_COMPLETE;
  payload: object[];
}

export type GetEventActionType = GetEventsStartAction | GetEventsCompleteAction;

export type GetEventDispatch<ReturnType = void> = ThunkAction<
  ReturnType,
  EventState,
  unknown,
  GetEventActionType
>;
