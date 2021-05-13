import { ThunkAction } from "redux-thunk";

import { EventState } from "../../../types";

export interface AddEventValues {
  title: string;
  message: string;
  dateTime: number;
  email: string;
}

export const ADD_EVENT_START = "ADD_EVENT_START";
export const ADD_EVENT_COMPLETE = "ADD_EVENT_COMPLETE";
export const DELETE_EVENT_START = "DELETE_EVENT_START";
export const DELETE_EVENT_COMPLETE = "DELETE_EVENT_COMPLETE";

interface AddEventStartAction {
  type: typeof ADD_EVENT_START;
}

interface AddEventCompleteAction {
  type: typeof ADD_EVENT_COMPLETE;
  payload: object[];
}

interface DeleteEventStartAction {
  type: typeof DELETE_EVENT_START;
}

interface DeleteEventCompleteAction {
  type: typeof DELETE_EVENT_COMPLETE;
}

export type EventActionType =
  | AddEventStartAction
  | AddEventCompleteAction
  | DeleteEventStartAction
  | DeleteEventCompleteAction;

export type EventDispatch<ReturnType = void> = ThunkAction<
  ReturnType,
  EventState,
  unknown,
  EventActionType
>;
