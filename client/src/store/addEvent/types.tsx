import { ThunkAction } from "redux-thunk";

import { EventState } from "../../../types";

export interface AddEventValues {
  title: string;
  message: string;
  dateTime: number;
  emailFrom?: string;
  emailTo?: string;
  phoneNoFrom?: number | null;
  phoneNoTo?: number | null;
  platforms?: { isWhatsApp: boolean; isMail: boolean }[];
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

export type EventDispatch<ReturnType = void> = ThunkAction<
  ReturnType,
  EventState,
  unknown,
  EventActionType
>;
