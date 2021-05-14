import axios from "axios";

const instance = axios.create({
  baseURL: "https://event-messanger.herokuapp.com",
});

export default instance;
