import { ThunkAction } from "redux-thunk";

export interface EventState {
  isLoading: boolean;
  events: object[];
}

export interface AddEventValues {
  title: string;
  message: string;
  emailFrom?: string;
  emailTo: string;
  phoneNoFrom?: number | null;
  phoneNoTo?: number | null;
  platforms: object[];
  //   media: string;
}

export const ADD_EVENT_START = "ADD_EVENT_START";
export const ADD_EVENT_COMPLETE = "ADD_EVENT_COMPLETE";

interface AddEventStartAction {
  type: typeof ADD_EVENT_START;
}

interface AddEventCompleteAction {
  type: typeof ADD_EVENT_COMPLETE;
  payload: object[];
}

export type EventActionType = AddEventStartAction | AddEventCompleteAction;

export type AuthDispatch<ReturnType = void> = ThunkAction<
  ReturnType,
  EventState,
  unknown,
  EventActionType
>;
