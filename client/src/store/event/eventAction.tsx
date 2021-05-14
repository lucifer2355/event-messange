import axios from "../../api/axios";
import {
  AddEventValues,
  ADD_EVENT_COMPLETE,
  ADD_EVENT_START,
  DELETE_EVENT_START,
  DELETE_EVENT_COMPLETE,
  EventDispatch,
} from "./types";

const token = localStorage.getItem("token");

export const createEvent = (values: AddEventValues): EventDispatch => async (
  dispatch
) => {
  dispatch({ type: ADD_EVENT_START });

  try {
    const { data } = await axios.post(
      "/api/event",
      {
        title: values.title,
        message: values.message,
        dateTime: new Date(values.dateTime).getTime(),
        email: values.email,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("response", data);

    dispatch({ type: ADD_EVENT_COMPLETE, payload: data });
  } catch (error) {
    console.warn("Add Event Error", error);
  }
};

export const deleteEvent = (id: string): EventDispatch => async (dispatch) => {
  try {
    dispatch({ type: DELETE_EVENT_START });

    const { data } = await axios.post(
      "api/event",
      { id },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("delete event response", data);

    dispatch({ type: DELETE_EVENT_COMPLETE });
  } catch (error) {
    console.warn("Delete Event Error", error);
  }
};
