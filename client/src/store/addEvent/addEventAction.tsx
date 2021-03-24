import {
  AddEventValues,
  ADD_EVENT_COMPLETE,
  ADD_EVENT_START,
  EventDispatch,
} from "./types";

export const createEvent = (
  values: AddEventValues,
  platforms: object[]
): EventDispatch => async (dispatch) => {
  dispatch({ type: ADD_EVENT_START });

  console.log("add evnent values", values, platforms);

  //   dispatch({ type: ADD_EVENT_COMPLETE });
  try {
  } catch (error) {
    console.warn("Add Event Error", error);
  }
};
