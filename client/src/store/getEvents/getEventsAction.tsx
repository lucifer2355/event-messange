import axios from "../../api/axios";
import {
  GetEventDispatch,
  GET_EVENTS_COMPLETE,
  GET_EVENTS_START,
} from "./types";

const token = localStorage.getItem("token");

export const getEvents = (): GetEventDispatch => async (dispatch) => {
  dispatch({ type: GET_EVENTS_START });

  const { data } = await axios.get("/api/event", {
    headers: { Authorization: token },
  });

  dispatch({ type: GET_EVENTS_COMPLETE, payload: data.events });
};
